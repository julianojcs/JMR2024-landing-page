import { useState } from 'react';
import { useRegistration } from '../../../contexts/RegistrationContext';
import styles from './SummaryStep.module.css';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../lib/firebase';
import AsaasClient from '../../../lib/AsaasClient';

// Função auxiliar para converter valores monetários para números
const currencyToNumber = (currencyString) => {
  if (!currencyString) return 0;

  // Remover qualquer símbolo de moeda e espaços
  // Remover todos os pontos (separadores de milhar)
  // Substituir vírgula por ponto decimal
  return parseFloat(
    currencyString
      .replace(/[R$\s]/g, '')
      .replace(/\./g, '')
      .replace(',', '.')
  );
};

const SummaryStep = () => {
  const {
    formData,
    setCurrentStep,
    setPaymentResponse,
    year,
    setReceiptDownloadUrl,
    paymentConfig
  } = useRegistration();

  const { personalInfo, category, selectedItems } = formData;
  const [uploadError, setUploadError] = useState(null);
  const [error, setError] = useState(null);
  const [previewAttempted, setPreviewAttempted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { dueDays, billingType, url } = paymentConfig;

  const handleFilePreview = () => {
    if (!formData.receipt) return;

    try {
      const fileUrl = URL.createObjectURL(formData.receipt);
      window.open(fileUrl, '_blank');
      setTimeout(() => {
        URL.revokeObjectURL(fileUrl);
      }, 100);
    } catch (error) {
      console.error("Erro ao abrir arquivo:", error);
      setPreviewAttempted(true);
      setTimeout(() => setPreviewAttempted(false), 3000);
    }
  };

  const calculateTotal = () => {
    let total = 0;

    if (selectedItems.journey) {
      const journeyPrice = selectedItems.journey.getCurrentPrice();
      total += currencyToNumber(journeyPrice.value);
    }

    selectedItems.workshops?.forEach(workshop => {
      const workshopPrice = workshop.getCurrentPrice();
      total += currencyToNumber(workshopPrice.value);
    });

    selectedItems.courses?.forEach(course => {
      const coursePrice = course.getCurrentPrice();
      total += currencyToNumber(coursePrice.value);
    });

    if (selectedItems.dayUse) {
      const dayUsePrice = selectedItems.dayUse.getCurrentPrice();
      total += currencyToNumber(dayUsePrice.value);
    }

    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(total);
  };

  const handlePrevious = () => {
    setCurrentStep(3);
  };

  const handleNext = async () => {
    setError(null);
    setUploadError(null);
    setIsLoading(true);

    try {
      const { personalInfo, category, selectedItems, receipt } = formData;

      let description = `Inscrição ${category.title}`;

      if (selectedItems.journey) description += ` - ${selectedItems.journey.title}`;
      if (selectedItems.workshops?.length)
        description += ` - Workshops: ${selectedItems.workshops.map(w => w.title).join(', ')}`;
      if (selectedItems.courses?.length)
        description += ` - Cursos: ${selectedItems.courses.map(c => c.title).join(', ')}`;
      if (selectedItems.dayUse) description += ` - ${selectedItems.dayUse.title}`;

      description += ` - ${personalInfo.fullName}`;

      const total = calculateTotal();
      const numericPrice = currencyToNumber(total).toFixed(2);

      const baseUrl = process.env.NODE_ENV === 'development'
        ? url
        : window.location.origin;

      // Melhorar o logging antes da chamada API
      console.log('Enviando requisição para o Asaas:', {
        billingType,
        customerId: personalInfo.userId,
        name: personalInfo.fullName,
        value: numericPrice,
        dueDate: new Date(Date.now() + dueDays * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        description
      });

      const asaas = new AsaasClient();
      const response = await asaas.payments.create({
        billingType: billingType,
        customer: personalInfo.userId,
        name: personalInfo.fullName,
        value: numericPrice,
        dueDate: new Date(Date.now() + dueDays * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        description: description,
        externalReference: null,
        callback: {
          successUrl: `${baseUrl}/payment/confirmation`
        }
      });

      // Validar explicitamente a resposta do Asaas
      if (!response || !response.id || !response.invoiceNumber) {
        console.error('Resposta inválida do Asaas:', response);
        throw new Error('Não foi possível criar o pagamento. Resposta inválida do provedor de pagamentos.');
      }

      console.log('Pagamento criado com sucesso no Asaas:', {
        id: response.id,
        invoiceNumber: response.invoiceNumber,
        status: response.status,
        value: response.value
      });

      setPaymentResponse(response);

      if (response.id && receipt) {
        try {
          const normalizeFileName = (name) => {
            return name
              .normalize('NFD')
              .replace(/[^\w\s]/gi, '')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/\s+/g, '-')
              .toLowerCase();
          };

          const fileExtension = receipt.name.split('.').pop();
          const fileName = `${normalizeFileName(personalInfo.fullName)}_${personalInfo.cpf.replace(/\D/g, '')}_${response.invoiceNumber}_${response.id}.${fileExtension}`;

          const storageRef = ref(storage, `JMR${year}/Comprovantes/${fileName}`);
          const uploadTask = uploadBytesResumable(storageRef, receipt);

          await new Promise((resolve, reject) => {
            uploadTask.on(
              'state_changed',
              (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload progress: ' + progress + '%');
              },
              (error) => {
                console.error('Upload error:', error);
                setUploadError(error);
                reject(error);
              },
              async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                setReceiptDownloadUrl(downloadURL);
                console.log('File available at', downloadURL);
                resolve(downloadURL);
              }
            );
          });
        } catch (error) {
          console.error('Error uploading file:', error);
          setUploadError(error);
        }
      }
    } catch (error) {
      console.error('Erro detalhado ao processar pagamento:', error);

      // Verificar se é um erro específico do Asaas
      if (error.response && error.response.data) {
        console.error('Erro do Asaas:', error.response.data);
        setError(`Erro no processamento do pagamento: ${error.response.data.message || 'Verifique os dados e tente novamente'}`);
      } else {
        setError(`Ocorreu um erro ao processar o pagamento: ${error.message || 'Tente novamente ou contate o suporte'}`);
      }

      // Impedir a navegação para o próximo passo em caso de erro
      return;
    } finally {
      setIsLoading(false);
    }

    // Navegar para o próximo passo apenas se não houver erro
    setCurrentStep(5);
  };

  return (
    <div className={styles.stepContent}>
      <h2 className={styles.title}>Resumo do Pedido</h2>

      {error && <div className={styles.errorMessage}>{error}</div>}
      {uploadError && (
        <div className={styles.errorMessage}>
          Erro ao enviar comprovante: {uploadError.message || 'Falha no upload'}
        </div>
      )}

      <div className={styles.summaryCard}>
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Dados Pessoais</h3>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.label}>Nome:</span>
              <span className={styles.value}>{personalInfo.fullName}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>CPF:</span>
              <span className={styles.value}>{personalInfo.cpf}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Email:</span>
              <span className={styles.value}>{personalInfo.email}</span>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Categoria</h3>
          <div className={styles.categoryInfo}>
            <span className={styles.value}>{category.title}</span>
            {category.member && <span className={styles.memberBadge}>Membro</span>}

            {formData.receipt && (
              <div
                className={`${styles.attachmentInfo} ${styles.clickable} ${previewAttempted ? styles.attempted : ''}`}
                onClick={handleFilePreview}
                title={`${formData.receipt.name || "Clique para visualizar o arquivo"}`}
              >
                <span className={styles.attachmentIcon}>📎</span>
                <span className={styles.attachmentName}>
                  {typeof formData.receipt === 'string'
                    ? formData.receipt
                    : formData.receipt.name || 'Comprovante anexado'}
                </span>
                {previewAttempted && (
                  <span className={styles.previewError}>Não foi possível abrir este arquivo</span>
                )}
              </div>
            )}
          </div>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Produtos Selecionados</h3>

          {selectedItems.journey && (
            <div className={styles.productItem}>
              <span className={styles.productName}>
                {selectedItems.journey.title}
              </span>
              <span className={styles.productPrice}>
                {selectedItems.journey.getCurrentPrice().value}
              </span>
            </div>
          )}

          {selectedItems.workshops?.map((workshop, index) => (
            <div key={index} className={styles.productItem}>
              <span className={styles.productName}>{workshop.title}</span>
              <span className={styles.productPrice}>
                {workshop.getCurrentPrice().value}
              </span>
            </div>
          ))}

          {selectedItems.courses?.map((course, index) => (
            <div key={index} className={styles.productItem}>
              <span className={styles.productName}>{course.title}</span>
              <span className={styles.productPrice}>
                {course.getCurrentPrice().value}
              </span>
            </div>
          ))}

          {selectedItems.dayUse && (
            <div className={styles.productItem}>
              <span className={styles.productName}>
                {selectedItems.dayUse.title}
              </span>
              <span className={styles.productPrice}>
                {selectedItems.dayUse.getCurrentPrice().value}
              </span>
            </div>
          )}
        </section>

        <div className={styles.totalSection}>
          <span className={styles.totalLabel}>Total:</span>
          <span className={styles.totalValue}>{calculateTotal()}</span>
        </div>
      </div>

      <div className={styles.buttonGroup}>
        <button
          type="button"
          onClick={handlePrevious}
          className={styles.backButton}
          disabled={isLoading}
        >
          Voltar
        </button>
        <button
          type="button"
          onClick={handleNext}
          className={`${styles.nextButton} ${isLoading ? styles.loading : ''}`}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className={styles.spinnerContainer}>
              <div className={styles.spinner}></div>
              <span>Processando...</span>
            </div>
          ) : (
            "Confirmar e Pagar"
          )}
        </button>
      </div>

      {isLoading && (
        <div className={styles.loadingOverlay}>
          <div className={styles.loadingContent}>
            <div className={styles.spinner}></div>
            <p>Processando seu pagamento...</p>
            <p className={styles.loadingSubtext}>Por favor, aguarde.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SummaryStep;
import { useRegistration } from '../../../contexts/RegistrationContext';
import styles from './SummaryStep.module.css';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../lib/firebase';
import AsaasClient from '../../../lib/AsaasClient';
import { useState } from 'react';

const SummaryStep = () => {
  const { formData, setCurrentStep, setPaymentResponse, setUploadError, setError, year, setReceiptDownloadUrl } = useRegistration();
  const { personalInfo, category, selectedItems } = formData;
  // Estado para controlar feedback visual quando o usuário clica no anexo
  const [previewAttempted, setPreviewAttempted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Função para exibir/abrir o arquivo local quando clicado
  const handleFilePreview = () => {
    if (!formData.receipt) return;

    try {
      // Criar URL temporária para o arquivo
      const fileUrl = URL.createObjectURL(formData.receipt);

      // Abrir em nova aba
      window.open(fileUrl, '_blank');

      // Revogue a URL após abrir para liberar memória
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
      total += parseFloat(journeyPrice.value.replace(/[^\d,]/g, '').replace(',', '.'));
    }

    selectedItems.workshops?.forEach(workshop => {
      const workshopPrice = workshop.getCurrentPrice();
      total += parseFloat(workshopPrice.value.replace(/[^\d,]/g, '').replace(',', '.'));
    });

    selectedItems.courses?.forEach(course => {
      const coursePrice = course.getCurrentPrice();
      total += parseFloat(coursePrice.value.replace(/[^\d,]/g, '').replace(',', '.'));
    });

    if (selectedItems.dayUse) {
      const dayUsePrice = selectedItems.dayUse.getCurrentPrice();
      total += parseFloat(dayUsePrice.value.replace(/[^\d,]/g, '').replace(',', '.'));
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
    // Ativar o loading
    setIsLoading(true);

    try {
      const { personalInfo, category, selectedItems, receipt } = formData;

      // 1. Preparar dados para o Asaas
      let description = `Inscrição ${category.title}`;

      // Adiciona produtos na descrição
      if (selectedItems.journey) description += ` - ${selectedItems.journey.title}`;
      if (selectedItems.workshops?.length)
        description += ` - Workshops: ${selectedItems.workshops.map(w => w.title).join(', ')}`;
      if (selectedItems.courses?.length)
        description += ` - Cursos: ${selectedItems.courses.map(c => c.title).join(', ')}`;
      if (selectedItems.dayUse) description += ` - ${selectedItems.dayUse.title}`;

      description += ` - ${personalInfo.fullName}`;

      // Calcular valor total
      const total = calculateTotal();
      const numericPrice = parseFloat(total.replace(/[^\d,.-]/g, '').replace(',', '.')).toFixed(2);

      // Determinar a URL base com base no ambiente
      const baseUrl = process.env.NODE_ENV === 'development'
        ? "https://jornada.srmg.org.br"
        : window.location.origin;

      // 2. Criar pagamento no Asaas
      const asaas = new AsaasClient();
      const response = await asaas.payments.create({
        billingType: 'UNDEFINED',
        customer: personalInfo.userId,
        name: personalInfo.fullName,
        value: numericPrice,
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        description: description,
        externalReference: null,
        callback: {
          successUrl: `${baseUrl}/api/asaas/payments/success`
        }
      });

      setPaymentResponse(response);

      // 3. Upload do recibo (se existir)
      if (response.id && receipt) {
        try {
          // Função para normalizar nome
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

          // Criar referência no storage
          const storageRef = ref(storage, `JMR${year}/Comprovantes/${fileName}`);
          const uploadTask = uploadBytesResumable(storageRef, receipt);

          // Fazer upload
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

      // 4. Ir para passo final
      setCurrentStep(5);
    } catch (error) {
      console.error('Error processing payment:', error);
      setError('Ocorreu um erro ao processar o pagamento. Tente novamente.');
    } finally {
      // Desativar o loading em qualquer caso
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.stepContent}>
      <h2 className={styles.title}>Resumo do Pedido</h2>

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

            {/* Tornar o nome do arquivo clicável */}
            {formData.receipt && (
              <div
                className={`${styles.attachmentInfo} ${styles.clickable} ${previewAttempted ? styles.attempted : ''}`}
                onClick={handleFilePreview}
                title="Clique para visualizar o arquivo"
              >
                <span className={styles.attachmentIcon}>📎</span>
                <span className={styles.attachmentName}>
                  {typeof formData.receipt === 'string'
                    ? formData.receipt
                    : formData.receipt.name || 'Comprovante anexado'}
                </span>
                <span className={styles.previewHint}>Visualizar</span>
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

      {/* Overlay de loading para toda a tela */}
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
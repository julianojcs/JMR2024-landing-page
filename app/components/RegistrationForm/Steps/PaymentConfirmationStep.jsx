import { useRegistration } from '../../../contexts/RegistrationContext';
import styles from './PaymentConfirmationStep.module.css';
import { useState } from 'react';

const PaymentConfirmationStep = () => {
  const { formData, paymentResponse, uploadError, year, closeModal, receiptDownloadUrl } = useRegistration();
  const { personalInfo, category, selectedItems } = formData;

  // Estado para feedback visual ao tentar baixar o anexo
  const [downloadAttempted, setDownloadAttempted] = useState(false);

  // Função para fechar o modal
  const handleModalClose = () => {
    if (typeof closeModal === 'function') {
      closeModal();
    } else {
      window.location.href = `/${year}`;
    }
  };

  // Função para abrir link de pagamento
  const handlePayment = () => {
    if (paymentResponse?.invoiceUrl) {
      window.open(paymentResponse.invoiceUrl, '_blank');
    }
  };

  // Função para baixar boleto/fatura
  const handleDownloadBoleto = () => {
    if (paymentResponse?.bankSlipUrl) {
      window.open(paymentResponse.bankSlipUrl, '_blank');
    }
  };

  // Função para tentar baixar o comprovante
  const handleDownloadReceipt = () => {
    // Se temos a URL de download (armazenada após upload)
    if (receiptDownloadUrl) {
      window.open(receiptDownloadUrl, '_blank');
    } else {
      // Caso não tenha URL disponível (pode acontecer se o arquivo foi apenas anexado)
      setDownloadAttempted(true);
      setTimeout(() => setDownloadAttempted(false), 3000);
    }
  };

  // Helper para determinar o status do pagamento com ícones
  const getPaymentStatus = () => {
    if (!paymentResponse) return { text: 'Pendente', className: 'pending', icon: '⌛' };

    switch (paymentResponse.status) {
      case 'PENDING': return { text: 'Aguardando Pagamento', className: 'pending', icon: '⌛' };
      case 'CONFIRMED': return { text: 'Confirmado', className: 'confirmed', icon: '✅' };
      case 'RECEIVED': return { text: 'Recebido', className: 'confirmed', icon: '✔️' };
      case 'OVERDUE': return { text: 'Vencido', className: 'overdue', icon: '⏰' };
      default: return { text: 'Aguardando Pagamento', className: 'pending', icon: '⚠️' };
    }
  };

  const paymentStatus = getPaymentStatus();

  // Formatador de data
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR').format(date);
  };

  return (
    <div className={styles.stepContent}>
      <h2 className={styles.title}>Confirmação de Inscrição</h2>

      <div className={styles.summaryCard}>
        <div className={styles.header}>
          <div className={styles.icon}>
            ✓
          </div>
          <h3 className={styles.confirmationTitle}>
            Inscrição Realizada com Sucesso!
          </h3>
        </div>

        {/* Informações do pagamento */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Dados do Pagamento</h3>

          <div className={styles.infoItem}>
            <span className={styles.label}>Número da Inscrição:</span>
            <span className={styles.value}>{paymentResponse?.invoiceNumber || 'N/A'}</span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.label}>Status:</span>
            <span className={`${styles.status} ${styles[paymentStatus.className]}`}>
              {paymentStatus.icon} {paymentStatus.text}
            </span>
          </div>

          {paymentResponse?.dueDate && (
            <div className={styles.infoItem}>
              <span className={styles.label}>Vencimento:</span>
              <span className={styles.value}>{formatDate(paymentResponse.dueDate)}</span>
            </div>
          )}

          {paymentResponse?.value && (
            <div className={styles.infoItem}>
              <span className={styles.label}>Valor:</span>
              <span className={styles.totalValue}>
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(paymentResponse.value)}
              </span>
            </div>
          )}
        </section>

        {/* Dados pessoais */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Dados Pessoais</h3>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.label}>Nome:</span>
              <span className={styles.value}>{personalInfo.fullName}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Email:</span>
              <span className={styles.value}>{personalInfo.email}</span>
            </div>
            {personalInfo.cpf && (
              <div className={styles.infoItem}>
                <span className={styles.label}>CPF:</span>
                <span className={styles.value}>{personalInfo.cpf}</span>
              </div>
            )}
          </div>
        </section>

        {/* Categoria e produtos */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Detalhes da Inscrição</h3>
          <div className={styles.infoItem}>
            <span className={styles.label}>Categoria:</span>
            <span className={styles.value}>{category.title}</span>
          </div>

          <div className={styles.products}>
            <h4 className={styles.productsTitle}>Produtos Selecionados:</h4>
            <ul className={styles.productsList}>
              {selectedItems.journey && (
                <li className={styles.productItem}>
                  {selectedItems.journey.title}
                </li>
              )}

              {selectedItems.workshops?.length > 0 && (
                <>
                  {selectedItems.workshops.map((workshop, index) => (
                    <li key={`workshop-${index}`} className={styles.productItem}>
                      {workshop.title}
                    </li>
                  ))}
                </>
              )}

              {selectedItems.courses?.length > 0 && (
                <>
                  {selectedItems.courses.map((course, index) => (
                    <li key={`course-${index}`} className={styles.productItem}>
                      {course.title}
                    </li>
                  ))}
                </>
              )}

              {selectedItems.dayUse && (
                <li className={styles.productItem}>
                  {selectedItems.dayUse.title}
                </li>
              )}
            </ul>
          </div>

          {/* Comprovante clicável */}
          {formData.receipt && (
            <div
              className={`${styles.attachmentInfo} ${receiptDownloadUrl ? styles.clickable : ''} ${downloadAttempted ? styles.attempted : ''}`} 
              onClick={handleDownloadReceipt}
              title={receiptDownloadUrl ? "Clique para baixar o comprovante" : "Comprovante anexado, mas download não disponível"}
            >
              <span className={styles.attachmentIcon}>📎</span>
              <span className={styles.attachmentName}>
                {typeof formData.receipt === 'string'
                  ? formData.receipt
                  : formData.receipt.name || 'Comprovante anexado'}
              </span>
              {receiptDownloadUrl && <span className={styles.downloadHint}>Clique para baixar</span>}
              {downloadAttempted && !receiptDownloadUrl && (
                <span className={styles.downloadError}>Download não disponível</span>
              )}
            </div>
          )}
        </section>

        {/* Links de pagamento */}
        <div className={styles.paymentLinks}>
          {paymentResponse?.invoiceUrl && (
            <button
              onClick={handlePayment}
              className={styles.paymentButton}
            >
              Acessar Fatura
            </button>
          )}

          {paymentResponse?.bankSlipUrl && (
            <button
              onClick={handleDownloadBoleto}
              className={styles.downloadButton}
            >
              Baixar PDF da Fatura
            </button>
          )}
        </div>

        {/* Mensagem de erro */}
        {uploadError && (
          <div className={styles.errorSection}>
            <p className={styles.errorMsg}>
              Não foi possível fazer o upload do comprovante.
              Por favor, envie o comprovante para{' '}
              <a href="mailto:congressosrmg@gmail.com">
                congressosrmg@gmail.com
              </a>
              {' '}com o ID do pagamento: {paymentResponse?.id}
            </p>
          </div>
        )}

        {/* Botão para voltar */}
        <div className={styles.navigationSection}>
          <button onClick={handleModalClose} className={styles.returnButton} >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmationStep;
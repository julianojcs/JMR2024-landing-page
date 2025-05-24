import { useRegistration } from '../../../contexts/RegistrationContext';
import styles from './PaymentConfirmationStep.module.css';
import { useState, useEffect, useRef } from 'react';

// Adicionar esta variável fora do componente para persistir entre renderizações
const emailAlreadySent = new Set();

// Função para formatar o preço adequadamente, movida para fora do componente
const formatPrice = (priceObject) => {
  // Se priceObject for um objeto com propriedade value
  if (priceObject && typeof priceObject === 'object' && priceObject.value) {
    return priceObject.value;
  }
  // Se for um número
  else if (typeof priceObject === 'number') {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(priceObject);
  }
  // Se for uma string já formatada
  else if (typeof priceObject === 'string') {
    return priceObject;
  }
  // Caso não consiga determinar o preço
  return 'Preço não disponível';
};

const PaymentConfirmationStep = () => {
  const { formData, eventData, paymentResponse, uploadError, year, closeModal, receiptDownloadUrl } = useRegistration();
  const { personalInfo, category, selectedItems } = formData;

  // Estado para feedback visual ao tentar baixar o anexo
  const [downloadAttempted, setDownloadAttempted] = useState(false);
  // Estado para controlar o envio do email
  const [emailSent, setEmailSent] = useState(false);
  const [emailSending, setEmailSending] = useState(false);
  const [emailError, setEmailError] = useState(null);
  // Ref para garantir que o email seja enviado apenas uma vez
  const emailSentRef = useRef(false);

  // Função para enviar email de confirmação
  const sendConfirmationEmail = async () => {
    // Se já enviou ou está enviando, não faça nada
    if (emailSentRef.current || emailSending) return;

    try {
      setEmailSending(true);

      // Verificar se temos um email válido
      if (!personalInfo?.email) {
        throw new Error('Email do destinatário não disponível');
      }

      // Preparar lista de itens selecionados com valores
      const selectedItemsList = [];
      console.log('Itens selecionados:', selectedItems);

      if (selectedItems.journey) {
        const price = selectedItems.journey.getCurrentPrice();
        selectedItemsList.push(`${selectedItems.journey.title} - ${formatPrice(price)}`);
      }

      if (selectedItems.workshops?.length > 0) {
        selectedItems.workshops.forEach(workshop => {
          const price = workshop.getCurrentPrice();
          selectedItemsList.push(`Workshop: ${workshop.title} - ${formatPrice(price)}`);
        });
      }

      if (selectedItems.courses?.length > 0) {
        selectedItems.courses.forEach(course => {
          const price = course.getCurrentPrice();
          selectedItemsList.push(`${course.title} - ${formatPrice(price)}`);
        });
      }

      if (selectedItems.dayUse) {
        const price = selectedItems.dayUse.getCurrentPrice();
        selectedItemsList.push(`Day Use: ${selectedItems.dayUse.title} - ${formatPrice(price)}`);
      }

      console.log('Lista de itens selecionados:', selectedItemsList);

      // Resto do código permanece igual...
      const emailData = {
        name: personalInfo.fullName,
        email: personalInfo.email,
        bcc: eventData?.event?.bcc || 'jmr@srmg.org.br',
        phone: eventData?.event?.phone || '(27)98133-0708',
        eventName: eventData?.event?.shortName || `JMR & CIM ${year}`,
        subscription: {
          event: {
            date: eventData?.event?.date || '27 a 28 de Junho de 2025'
          },
          status: 'PENDING', // Sempre pendente no momento inicial
          id: paymentResponse?.id || '',
          invoiceNumber: paymentResponse?.invoiceNumber || '',
          value: paymentResponse?.value || 0,
          dueDate: paymentResponse?.dueDate,
          invoiceUrl: paymentResponse?.invoiceUrl,
          bankSlipUrl: paymentResponse?.bankSlipUrl
        },
        selectedItems: selectedItemsList,
        category: category,
        receiptDownloadUrl: receiptDownloadUrl
      };
      console.log('Dados do email de confirmação:', emailData);

      console.log('Enviando email de confirmação de inscrição');

      // Usar a API com o template de confirmação de inscrição
      const response = await fetch('/api/emails/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          template: 'subscription-confirmation',
          data: emailData
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setEmailSent(true);
        emailSentRef.current = true;
        setEmailError(null);
      } else {
        throw new Error(result.error || 'Erro ao enviar email');
      }
    } catch (error) {
      console.error('Erro ao enviar email de confirmação:', error);
      setEmailError(error.message || 'Falha ao enviar email de confirmação');
    } finally {
      setEmailSending(false);
    }
  };

  // Enviar email quando o componente montar
  useEffect(() => {
    // Verificar se já enviamos um email para este ID de pagamento específico
    const paymentId = paymentResponse?.id;

    // Só enviar o email se:
    // 1. Temos os dados necessários
    // 2. Não enviamos o email nesta instância do componente (emailSentRef)
    // 3. Não enviamos um email para este ID de pagamento em nenhuma instância anterior (emailAlreadySent)
    if (
      personalInfo?.email &&
      paymentId &&
      !emailSentRef.current &&
      !emailAlreadySent.has(paymentId)
    ) {
      // Registrar que estamos enviando um email para este ID
      emailAlreadySent.add(paymentId);
      sendConfirmationEmail();
    }

    // Cleanup function para remover o ID quando o componente for desmontado
    // Isso é opcional e pode ser necessário apenas em certos cenários
    return () => {
      // Se quiser permitir reenvio quando o componente for montado novamente, descomente:
      // if (paymentId) emailAlreadySent.delete(paymentId);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    if (receiptDownloadUrl) {
      window.open(receiptDownloadUrl, '_blank');
    } else {
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

        {/* Status de envio do email */}
        {(emailSent || emailSending || emailError) && (
          <div className={`${styles.emailStatus} ${emailError ? styles.emailError : ''}`}>
            {emailSending && <span>Enviando comprovante por email...</span>}
            {emailSent && !emailError && (
              <span className={styles.emailSuccess}>
                Um email com todos os detalhes foi enviado para {personalInfo.email}
              </span>
            )}
            {emailError && (
              <span className={styles.emailErrorText}>
                Não foi possível enviar o email de confirmação. Por favor, salve estas informações.
              </span>
            )}
          </div>
        )}

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
                  <span className={styles.productName}>{selectedItems.journey.title}</span>
                  <span className={styles.productPrice}>
                    {formatPrice(selectedItems.journey.getCurrentPrice())}
                  </span>
                </li>
              )}

              {selectedItems.workshops?.length > 0 && (
                <>
                  {selectedItems.workshops.map((workshop, index) => (
                    <li key={`workshop-${index}`} className={styles.productItem}>
                      <span className={styles.productName}>Workshop: {workshop.title}</span>
                      <span className={styles.productPrice}>
                        {formatPrice(workshop.getCurrentPrice())}
                      </span>
                    </li>
                  ))}
                </>
              )}

              {selectedItems.courses?.length > 0 && (
                <>
                  {selectedItems.courses.map((course, index) => (
                    <li key={`course-${index}`} className={styles.productItem}>
                      <span className={styles.productName}>{course.title}</span>
                      <span className={styles.productPrice}>
                        {formatPrice(course.getCurrentPrice())}
                      </span>
                    </li>
                  ))}
                </>
              )}

              {selectedItems.dayUse && (
                <li className={styles.productItem}>
                  <span className={styles.productName}>Day Use: {selectedItems.dayUse.title}</span>
                  <span className={styles.productPrice}>
                    {formatPrice(selectedItems.dayUse.getCurrentPrice())}
                  </span>
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
              Efetuar Pagamento
            </button>
          )}

          {paymentResponse?.bankSlipUrl && (
            <button
              onClick={handleDownloadBoleto}
              className={styles.downloadButton}
            >
              Baixar Boleto em PDF
            </button>
          )}
        </div>

        {/* Mensagem de erro */}
        {uploadError && (
          <div className={styles.errorSection}>
            <p className={styles.errorMsg}>
              Não foi possível fazer o upload do comprovante.
              Por favor, envie o comprovante para{' '}
              <a href={`${eventData?.event?.bcc || "mailto:jmr@srmg.org.br"}`}>${eventData?.event?.bcc || "jmr@srmg.org.br"}</a>
              {' '}com o :seu número de inscrição {paymentResponse?.invoiceNumber} no assunto.
            </p>
          </div>
        )}

        {/* Botão para enviar email novamente */}
        {emailError && (
          <button
            onClick={sendConfirmationEmail}
            className={styles.resendEmailButton}
            disabled={emailSending}
          >
            {emailSending ? 'Enviando...' : 'Reenviar Email'}
          </button>
        )}

        {/* Botão para fechar */}
        <div className={styles.navigationSection}>
          <button onClick={handleModalClose} className={styles.returnButton}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmationStep;
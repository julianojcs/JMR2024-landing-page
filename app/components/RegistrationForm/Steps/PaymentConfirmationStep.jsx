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

  // Helper para verificar se há cupom aplicado e calcular desconto
  const getCouponInfo = () => {
    // Se é billing type COUPON, então há desconto
    if (paymentResponse?.billingType === 'COUPON') {
      return {
        isUsed: true,
        totalDiscount: paymentResponse?.value === 0 ? '100%' : 'Desconto aplicado'
      };
    }
    return null;
  };

  // Helper para calcular desconto individual por produto (aproximação)
  const getProductDiscount = () => {
    const couponInfo = getCouponInfo();
    if (!couponInfo || !couponInfo.isUsed) return 0;

    // Para cupom de 100%, o desconto é o valor total do produto
    if (couponInfo.totalDiscount === '100%') {
      return 'full'; // Desconto total
    }

    // Para outros descontos, verificar se há diferença entre valor original e pago
    if (paymentResponse?.value !== undefined && paymentResponse.value >= 0) {
      // Se houve desconto mas não é 100%, consideramos desconto parcial
      return 'partial'; // Desconto parcial
    }

    return 0;
  };

  // Helper para renderizar preço com desconto
  const renderProductPrice = (item) => {
    const discount = getProductDiscount();
    const currentPrice = item.getCurrentPrice();

    if (discount === 'full') {
      // Desconto de 100%
      return (
        <div className={styles.priceWithDiscount}>
          <span className={styles.originalPrice}>{currentPrice.value}</span>/
          <span className={styles.discountedPrice}>R$ 0,00</span>
        </div>
      );
    } else if (discount === 'partial') {
      // Desconto parcial - para descontos parciais reais, seria necessário
      // ter mais informações sobre o valor do desconto por produto
      // Por enquanto, apenas mostramos uma indicação visual de que há desconto
      return (
        <div className={styles.priceWithDiscount}>
          <span className={styles.originalPrice}>{currentPrice.value}</span>/
          <span className={styles.discountedPrice}>Desconto aplicado</span>
        </div>
      );
    } else {
      // Sem desconto
      return <span className={styles.singlePrice}>{currentPrice.value}</span>;
    }
  };

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

      // Preparar lista de itens selecionados com valores (incluindo desconto se aplicável)
      const selectedItemsList = [];
      const discount = getProductDiscount();
      console.log('🔍 PaymentConfirmationStep - Itens selecionados:', selectedItems);
      console.log('🔍 PaymentConfirmationStep - Tipo de desconto:', discount);
      console.log('🔍 PaymentConfirmationStep - PaymentResponse:', paymentResponse);

      if (selectedItems.journey) {
        let priceInfo;
        if (discount === 'full') {
          priceInfo = `~~${selectedItems.journey.getCurrentPrice().value}~~ R$ 0,00`;
          console.log('🔍 PaymentConfirmationStep - Journey com desconto total:', priceInfo);
        } else if (discount === 'partial') {
          priceInfo = `~~${selectedItems.journey.getCurrentPrice().value}~~ Desconto aplicado`;
          console.log('🔍 PaymentConfirmationStep - Journey com desconto parcial:', priceInfo);
        } else {
          priceInfo = formatPrice(selectedItems.journey.getCurrentPrice());
          console.log('🔍 PaymentConfirmationStep - Journey sem desconto:', priceInfo);
        }
        selectedItemsList.push(`${selectedItems.journey.title} - ${priceInfo}`);
      }

      if (selectedItems.workshops?.length > 0) {
        selectedItems.workshops.forEach(workshop => {
          let priceInfo;
          if (discount === 'full') {
            priceInfo = `~~${workshop.getCurrentPrice().value}~~ R$ 0,00`;
          } else if (discount === 'partial') {
            priceInfo = `~~${workshop.getCurrentPrice().value}~~ Desconto aplicado`;
          } else {
            priceInfo = formatPrice(workshop.getCurrentPrice());
          }
          selectedItemsList.push(`Workshop: ${workshop.title} - ${priceInfo}`);
        });
      }

      if (selectedItems.courses?.length > 0) {
        selectedItems.courses.forEach(course => {
          let priceInfo;
          if (discount === 'full') {
            priceInfo = `~~${course.getCurrentPrice().value}~~ R$ 0,00`;
          } else if (discount === 'partial') {
            priceInfo = `~~${course.getCurrentPrice().value}~~ Desconto aplicado`;
          } else {
            priceInfo = formatPrice(course.getCurrentPrice());
          }
          selectedItemsList.push(`${course.title} - ${priceInfo}`);
        });
      }

      if (selectedItems.dayUse) {
        let priceInfo;
        if (discount === 'full') {
          priceInfo = `~~${selectedItems.dayUse.getCurrentPrice().value}~~ R$ 0,00`;
        } else if (discount === 'partial') {
          priceInfo = `~~${selectedItems.dayUse.getCurrentPrice().value}~~ Desconto aplicado`;
        } else {
          priceInfo = formatPrice(selectedItems.dayUse.getCurrentPrice());
        }
        selectedItemsList.push(`Day Use: ${selectedItems.dayUse.title} - ${priceInfo}`);
      }

      console.log('🔍 PaymentConfirmationStep - Lista final de itens selecionados:', selectedItemsList);

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
          status: paymentResponse?.status || 'PENDING', // Usar o status real do payment response
          id: paymentResponse?.id || '',
          invoiceNumber: paymentResponse?.invoiceNumber || '',
          value: paymentResponse?.value || 0,
          dueDate: paymentResponse?.dueDate,
          invoiceUrl: paymentResponse?.invoiceUrl,
          bankSlipUrl: paymentResponse?.bankSlipUrl,
          billingType: paymentResponse?.billingType // Adicionar billing type para detectar cupons
        },
        selectedItems: selectedItemsList,
        category: category,
        receiptDownloadUrl: receiptDownloadUrl,
        // Melhorar informações do cupom para incluir todos os tipos de desconto
        couponInfo: (() => {
          const couponInfo = getCouponInfo();
          if (couponInfo) {
            return {
              isUsed: true,
              totalDiscount: couponInfo.totalDiscount,
              hasDiscount: true
            };
          }
          return null;
        })()
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

    // Para pagamentos gratuitos (cupom 100%)
    if (paymentResponse.billingType === 'COUPON' && paymentResponse.value === 0) {
      return { text: 'Inscrição Gratuita (Cupom)', className: 'confirmed', icon: '🎟️' };
    }

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
            {paymentResponse?.id ? '✓' : '⚠️'}
          </div>
          <h3 className={styles.confirmationTitle}>
            {paymentResponse?.id
              ? 'Inscrição Realizada com Sucesso!'
              : 'Falha no processamento da inscrição'}
          </h3>
        </div>

        {/* Adicionar mensagem de erro quando não há ID de pagamento */}
        {!paymentResponse?.id && (
          <div className={styles.errorSection}>
            <p className={styles.errorMsg}>
              Não foi possível concluir sua inscrição no sistema de pagamentos.
              Por favor, tente novamente ou entre em contato com nosso suporte em{' '}
              <a href={`${eventData?.event?.bcc || "mailto:jmr@srmg.org.br"}`}>
                {eventData?.event?.bcc || "jmr@srmg.org.br"}
              </a>.
            </p>
            <button
              onClick={() => setCurrentStep(4)}
              className={styles.retryButton}
            >
              Tentar novamente
            </button>
          </div>
        )}

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

          {/* Só mostrar o valor se não for inscrição gratuita (cupom 100%) */}
          {paymentResponse?.value !== undefined && !(paymentResponse?.billingType === 'COUPON' && paymentResponse?.value === 0) && (
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
                    {renderProductPrice(selectedItems.journey)}
                  </span>
                </li>
              )}

              {selectedItems.workshops?.length > 0 && (
                <>
                  {selectedItems.workshops.map((workshop, index) => (
                    <li key={`workshop-${index}`} className={styles.productItem}>
                      <span className={styles.productName}>Workshop: {workshop.title}</span>
                      <span className={styles.productPrice}>
                        {renderProductPrice(workshop)}
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
                        {renderProductPrice(course)}
                      </span>
                    </li>
                  ))}
                </>
              )}

              {selectedItems.dayUse && (
                <li className={styles.productItem}>
                  <span className={styles.productName}>Day Use: {selectedItems.dayUse.title}</span>
                  <span className={styles.productPrice}>
                    {renderProductPrice(selectedItems.dayUse)}
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

        {/* Links de pagamento - só mostrar se não for pagamento gratuito */}
        {paymentResponse?.billingType !== 'COUPON' && paymentResponse?.value !== 0 && (
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
        )}

        {/* Mensagem especial para inscrições gratuitas */}
        {paymentResponse?.billingType === 'COUPON' && paymentResponse?.value === 0 && (
          <div className={styles.freeRegistrationMessage}>
            <p className={styles.freeMessage}>
              🎉 Sua inscrição foi confirmada gratuitamente através do uso de cupom de desconto!
              Não é necessário efetuar nenhum pagamento.
            </p>
          </div>
        )}

        {/* Disclaimer de política de descontos */}
        {getCouponInfo()?.isUsed && (
          <div className={styles.disclaimerSection}>
            <div className={styles.disclaimer}>
              <strong>⚠️ POLÍTICA DE DESCONTOS:</strong>
              <p>
                Descontos aplicados através de cupons promocionais não são reembolsáveis e não podem ser convertidos em créditos para outros eventos.
                O desconto concedido é válido exclusivamente para esta inscrição e não possui valor monetário transferível.
              </p>
            </div>
          </div>
        )}

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
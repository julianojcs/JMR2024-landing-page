import { useRegistration } from '../../../contexts/RegistrationContext';
import styles from './PaymentConfirmationStep.module.css';
import { useState, useEffect, useRef } from 'react';
import { useCoupon } from '../../../hooks/useCoupon';

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
  const { personalInfo, category, selectedItems, appliedCoupon } = formData;

  // Estado para feedback visual ao tentar baixar o anexo
  const [downloadAttempted, setDownloadAttempted] = useState(false);
  // Estado para controlar o envio do email
  const [emailSent, setEmailSent] = useState(false);
  const [emailSending, setEmailSending] = useState(false);
  const [emailError, setEmailError] = useState(null);
  // Ref para garantir que o email seja enviado apenas uma vez
  const emailSentRef = useRef(false);

  // Usar o hook do cupom para ter acesso às funções
  const { getItemDiscount, calculateProductDiscount, isProductEligibleForCoupon } = useCoupon();

  // Função para salvar inscrição no MongoDB
  const saveSubscriptionToMongoDB = async () => {
    try {
      console.log('💾 Salvando inscrição no MongoDB...');

      const couponInfo = getCouponInfo();

      // Calcular valores financeiros
      let originalValue = 0;
      let discountValue = 0;

      // Calcular valor original de todos os produtos
      if (selectedItems.journey) {
        const price = selectedItems.journey.getCurrentPrice();
        originalValue += parseFloat(price.value.replace(/[^\d,.]/g, '').replace(',', '.'));
      }
      if (selectedItems.workshops?.length > 0) {
        selectedItems.workshops.forEach(workshop => {
          const price = workshop.getCurrentPrice();
          originalValue += parseFloat(price.value.replace(/[^\d,.]/g, '').replace(',', '.'));
        });
      }
      if (selectedItems.courses?.length > 0) {
        selectedItems.courses.forEach(course => {
          const price = course.getCurrentPrice();
          originalValue += parseFloat(price.value.replace(/[^\d,.]/g, '').replace(',', '.'));
        });
      }
      if (selectedItems.dayUse) {
        const price = selectedItems.dayUse.getCurrentPrice();
        originalValue += parseFloat(price.value.replace(/[^\d,.]/g, '').replace(',', '.'));
      }

      // Calcular desconto total se há cupom
      if (couponInfo?.isUsed) {
        discountValue = couponInfo.totalDiscountAmount || 0;
      }

      const finalValue = originalValue - discountValue;

      // Dados da inscrição para MongoDB
      const subscriptionData = {
        asaasPaymentId: paymentResponse?.id || null,
        eventYear: year,
        eventName: eventData?.event?.shortName || `JMR & CIM ${year}`,
        personalInfo: {
          fullName: personalInfo.fullName,
          email: personalInfo.email,
          cpf: personalInfo.cpf?.replace(/\D/g, '') || '',
          phone: personalInfo.phone || '',
          crm: personalInfo.crm || '',
          stateCrm: personalInfo.stateCrm || '',
          address: {
            zipCode: personalInfo.zipCode || '',
            address: personalInfo.address || '',
            number: personalInfo.number || '',
            complement: personalInfo.complement || '',
            neighborhood: personalInfo.neighborhood || '',
            city: personalInfo.city || '',
            state: personalInfo.state || ''
          }
        },
        category: {
          id: category.id,
          title: category.title,
          description: category.description || []
        },
        selectedItems: {
          journey: selectedItems.journey ? {
            title: selectedItems.journey.title,
            price: selectedItems.journey.getCurrentPrice()
          } : null,
          workshops: selectedItems.workshops?.map(workshop => ({
            title: workshop.title,
            price: workshop.getCurrentPrice()
          })) || [],
          courses: selectedItems.courses?.map(course => ({
            title: course.title,
            price: course.getCurrentPrice()
          })) || [],
          dayUse: selectedItems.dayUse ? {
            title: selectedItems.dayUse.title,
            price: selectedItems.dayUse.getCurrentPrice()
          } : null
        },
        financial: {
          originalValue: originalValue,
          discountValue: discountValue,
          finalValue: finalValue,
          currency: 'BRL'
        },
        coupon: couponInfo?.isUsed ? {
          applied: true,
          code: couponInfo.coupon?.code || '',
          name: couponInfo.coupon?.name || '',
          discountType: couponInfo.coupon?.discount?.type || '',
          discountValue: couponInfo.coupon?.discount?.value || 0,
          totalDiscount: discountValue
        } : {
          applied: false,
          code: '',
          name: '',
          discountType: '',
          discountValue: 0,
          totalDiscount: 0
        },
        status: {
          registration: 'COMPLETED',
          payment: finalValue === 0 ? 'FREE' : paymentResponse?.status || 'PENDING',
          lastUpdated: new Date()
        },
        payment: {
          method: finalValue === 0 ? 'FREE' : paymentResponse?.billingType || '',
          dueDate: paymentResponse?.dueDate ? new Date(paymentResponse.dueDate) : null,
          paidDate: paymentResponse?.paymentDate ? new Date(paymentResponse.paymentDate) : null,
          invoiceNumber: paymentResponse?.invoiceNumber || '',
          invoiceUrl: paymentResponse?.invoiceUrl || '',
          bankSlipUrl: paymentResponse?.bankSlipUrl || '',
          transactionReceiptUrl: paymentResponse?.transactionReceiptUrl || ''
        },
        attachments: {
          receipt: {
            filename: receiptDownloadUrl ? receiptDownloadUrl.split('/').pop() : '',
            originalName: typeof formData.receipt === 'object' ? formData?.receipt?.name || '' : '',
            downloadUrl: receiptDownloadUrl || ''
          }
        },
        metadata: {
          createdAt: new Date(),
          updatedAt: new Date(),
          createdBy: 'system',
          source: 'web_form',
          ipAddress: '', // Pode ser preenchido se necessário
          userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : ''
        }
      };

      console.log('💾 Dados da inscrição a serem salvos:', {
        cpf: subscriptionData.personalInfo.cpf,
        email: subscriptionData.personalInfo.email,
        finalValue: subscriptionData.financial.finalValue,
        isFree: finalValue === 0
      });

      // Salvar no MongoDB com timeout
      const response = await Promise.race([
        fetch('/api/subscriptions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(subscriptionData)
        }),
        // Timeout de 25 segundos no frontend
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Timeout ao salvar inscrição')), 25000)
        )
      ]);

      // Verificar se a resposta tem conteúdo JSON
      const contentType = response.headers.get('content-type');

      if (!contentType || !contentType.includes('application/json')) {
        throw new Error(`Resposta não é JSON válido. Status: ${response.status}, Content-Type: ${contentType}`);
      }

      const result = await response.json();

      if (response.ok && result.success) {
        console.log('✅ Inscrição salva no MongoDB:', result.subscriptionId);
        return result;
      } else {
        console.error('❌ Erro ao salvar inscrição no MongoDB:', result.message || 'Erro desconhecido');
        throw new Error(result.message || 'Erro ao salvar no MongoDB');
      }

    } catch (error) {
      console.error('❌ Erro ao salvar inscrição no MongoDB:', error);

      // Tratamento específico para timeouts
      if (error.message.includes('Timeout')) {
        console.warn('⚠️ Timeout ao salvar no MongoDB - inscrição pode ter sido salva mesmo assim');
        // Não impedir o fluxo em caso de timeout, pois a inscrição pode ter sido salva
        return null;
      }

      // Para outros erros, também não impedir o fluxo
      console.warn('⚠️ Erro ao salvar no MongoDB, mas continuando o fluxo');
    }
  };

  // Helper para verificar se há cupom aplicado
  const getCouponInfo = () => {
    // Debug: verificar todos os possíveis locais onde o cupom pode estar
    console.log('🔍 PaymentConfirmationStep - Debug getCouponInfo:', {
      appliedCoupon,
      paymentResponseCoupon: paymentResponse?.coupon,
      paymentResponseBillingType: paymentResponse?.billingType,
      formDataAppliedCoupon: formData?.appliedCoupon
    });

    // Verificar se há cupom aplicado no formData (do contexto) ou no paymentResponse
    const coupon = appliedCoupon ||
                   formData?.appliedCoupon ||
                   (paymentResponse?.billingType === 'COUPON' ? paymentResponse?.coupon : null) ||
                   paymentResponse?.coupon;

    console.log('🔍 PaymentConfirmationStep - Cupom encontrado:', coupon);

    if (coupon) {
      // Calcular o desconto total aplicado
      let totalDiscountAmount = 0;

      // Calcular desconto para cada produto selecionado
      if (selectedItems.journey) {
        totalDiscountAmount += getItemDiscount(selectedItems.journey, 'journey', 0, coupon);
      }
      if (selectedItems.workshops?.length > 0) {
        selectedItems.workshops.forEach(workshop => {
          totalDiscountAmount += getItemDiscount(workshop, 'workshop', 0, coupon);
        });
      }
      if (selectedItems.courses?.length > 0) {
        selectedItems.courses.forEach(course => {
          totalDiscountAmount += getItemDiscount(course, 'course', 0, coupon);
        });
      }
      if (selectedItems.dayUse) {
        totalDiscountAmount += getItemDiscount(selectedItems.dayUse, 'dayUse', 0, coupon);
      }

      const formattedDiscount = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(totalDiscountAmount);

      return {
        isUsed: true,
        coupon: coupon,
        totalDiscount: formattedDiscount,
        totalDiscountAmount: totalDiscountAmount
      };
    }
    return null;
  };

  // Helper para renderizar preço com desconto usando a lógica correta do sistema
  const renderProductPrice = (item, itemType) => {
    const couponInfo = getCouponInfo();
    if (!couponInfo) {
      // Sem cupom aplicado
      return <span className={styles.singlePrice}>{item.getCurrentPrice().value}</span>;
    }

    const currentPrice = item.getCurrentPrice();
    const productValue = parseFloat(currentPrice.value.replace(/[^\d,.]/g, '').replace(',', '.'));

    // Usar a função correta do sistema de cupons para calcular desconto
    const discount = getItemDiscount(item, itemType, 0, couponInfo.coupon);

    if (discount === productValue) {
      // Desconto de 100%
      return (
        <div className={styles.priceWithDiscount}>
          <span className={styles.originalPrice}>{currentPrice.value}</span>
          <span className={styles.discountedPrice}>R$ 0,00</span>
        </div>
      );
    } else if (discount > 0) {
      // Desconto parcial
      const finalPrice = productValue - discount;
      const discountedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(finalPrice);

      return (
        <div className={styles.priceWithDiscount}>
          <span className={styles.originalPrice}>{currentPrice.value}</span>
          <span className={styles.discountedPrice}>{discountedPrice}</span>
        </div>
      );
    } else {
      // Sem desconto para este produto
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

      // Preparar lista de itens selecionados com valores corretos incluindo desconto
      const selectedItemsList = [];
      const couponInfo = getCouponInfo();

      console.log('🔍 PaymentConfirmationStep - Itens selecionados:', selectedItems);
      console.log('🔍 PaymentConfirmationStep - Cupom aplicado:', couponInfo);
      console.log('🔍 PaymentConfirmationStep - PaymentResponse:', paymentResponse);

      if (selectedItems.journey) {
        const discount = couponInfo ? getItemDiscount(selectedItems.journey, 'journey', 0, couponInfo.coupon) : 0;
        const currentPrice = selectedItems.journey.getCurrentPrice();
        const productValue = parseFloat(currentPrice.value.replace(/[^\d,.]/g, '').replace(',', '.'));

        let priceInfo;
        if (discount === productValue) {
          priceInfo = `~~${currentPrice.value}~~ R$ 0,00`;
          console.log('🔍 PaymentConfirmationStep - Journey com desconto total:', priceInfo);
        } else if (discount > 0) {
          const finalPrice = productValue - discount;
          const discountedPrice = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(finalPrice);
          priceInfo = `~~${currentPrice.value}~~ ${discountedPrice}`;
          console.log('🔍 PaymentConfirmationStep - Journey com desconto parcial:', priceInfo);
        } else {
          priceInfo = formatPrice(selectedItems.journey.getCurrentPrice());
          console.log('🔍 PaymentConfirmationStep - Journey sem desconto:', priceInfo);
        }
        selectedItemsList.push(`${selectedItems.journey.title} - ${priceInfo}`);
      }

      if (selectedItems.workshops?.length > 0) {
        selectedItems.workshops.forEach(workshop => {
          const discount = couponInfo ? getItemDiscount(workshop, 'workshop', 0, couponInfo.coupon) : 0;
          const currentPrice = workshop.getCurrentPrice();
          const productValue = parseFloat(currentPrice.value.replace(/[^\d,.]/g, '').replace(',', '.'));

          let priceInfo;
          if (discount === productValue) {
            priceInfo = `~~${currentPrice.value}~~ R$ 0,00`;
          } else if (discount > 0) {
            const finalPrice = productValue - discount;
            const discountedPrice = new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(finalPrice);
            priceInfo = `~~${currentPrice.value}~~ ${discountedPrice}`;
          } else {
            priceInfo = formatPrice(workshop.getCurrentPrice());
          }
          selectedItemsList.push(`Workshop: ${workshop.title} - ${priceInfo}`);
        });
      }

      if (selectedItems.courses?.length > 0) {
        selectedItems.courses.forEach(course => {
          const discount = couponInfo ? getItemDiscount(course, 'course', 0, couponInfo.coupon) : 0;
          const currentPrice = course.getCurrentPrice();
          const productValue = parseFloat(currentPrice.value.replace(/[^\d,.]/g, '').replace(',', '.'));

          let priceInfo;
          if (discount === productValue) {
            priceInfo = `~~${currentPrice.value}~~ R$ 0,00`;
          } else if (discount > 0) {
            const finalPrice = productValue - discount;
            const discountedPrice = new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(finalPrice);
            priceInfo = `~~${currentPrice.value}~~ ${discountedPrice}`;
          } else {
            priceInfo = formatPrice(course.getCurrentPrice());
          }
          selectedItemsList.push(`${course.title} - ${priceInfo}`);
        });
      }

      if (selectedItems.dayUse) {
        const discount = couponInfo ? getItemDiscount(selectedItems.dayUse, 'dayUse', 0, couponInfo.coupon) : 0;
        const currentPrice = selectedItems.dayUse.getCurrentPrice();
        const productValue = parseFloat(currentPrice.value.replace(/[^\d,.]/g, '').replace(',', '.'));

        let priceInfo;
        if (discount === productValue) {
          priceInfo = `~~${currentPrice.value}~~ R$ 0,00`;
        } else if (discount > 0) {
          const finalPrice = productValue - discount;
          const discountedPrice = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(finalPrice);
          priceInfo = `~~${currentPrice.value}~~ ${discountedPrice}`;
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
          billingType: paymentResponse?.billingType // Adicionar billing type para detectar coupons
        },
        selectedItems: selectedItemsList,
        category: category,
        receiptDownloadUrl: receiptDownloadUrl,
        // Melhorar informações do cupom para incluir todos os tipos de desconto
        couponInfo: (() => {
          const couponInfo = getCouponInfo();
          if (couponInfo && couponInfo.isUsed) {
            return {
              isUsed: true,
              code: couponInfo.coupon?.code || '',
              name: couponInfo.coupon?.name || '',
              discountType: couponInfo.coupon?.discount?.type || '',
              discountValue: couponInfo.coupon?.discount?.value || 0,
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
      saveSubscriptionToMongoDB();
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
      return { text: 'Inscrição Gratuita (Coupon)', className: 'confirmed', icon: '🎟️' };
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
                <li className={styles.productItem} data-testid="journey-item">
                  <span className={styles.productName}>{selectedItems.journey.title}</span>
                  <span className={styles.productPrice} data-testid="journey-price">
                    {renderProductPrice(selectedItems.journey, 'journey')}
                  </span>
                </li>
              )}

              {selectedItems.workshops?.length > 0 && (
                <>
                  {selectedItems.workshops.map((workshop, index) => (
                    <li key={`workshop-${index}`} className={styles.productItem} data-testid={`workshop-item-${index}`}>
                      <span className={styles.productName}>Workshop: {workshop.title}</span>
                      <span className={styles.productPrice} data-testid={`workshop-price-${index}`}>
                        {renderProductPrice(workshop, 'workshop')}
                      </span>
                    </li>
                  ))}
                </>
              )}

              {selectedItems.courses?.length > 0 && (
                <>
                  {selectedItems.courses.map((course, index) => (
                    <li key={`course-${index}`} className={styles.productItem} data-testid={`course-item-${index}`}>
                      <span className={styles.productName}>{course.title}</span>
                      <span className={styles.productPrice} data-testid={`course-price-${index}`}>
                        {renderProductPrice(course, 'course')}
                      </span>
                    </li>
                  ))}
                </>
              )}

              {selectedItems.dayUse && (
                <li className={styles.productItem} data-testid="dayuse-item">
                  <span className={styles.productName}>Day Use: {selectedItems.dayUse.title}</span>
                  <span className={styles.productPrice} data-testid="dayuse-price">
                    {renderProductPrice(selectedItems.dayUse, 'dayUse')}
                  </span>
                </li>
              )}
            </ul>
          </div>

          {/* Informações do cupom aplicado - movido para após produtos */}
          {getCouponInfo()?.isUsed && (
            <div className={styles.couponInfoSection} data-testid="applied-coupon-info">
              <h4 className={styles.couponTitle}>🎟️ Cupom Aplicado</h4>
              <div className={styles.couponDetails}>
                <div className={styles.couponDetailRow}>
                  <span className={styles.couponLabel}>Código:</span>
                  <span className={styles.couponValue}>{getCouponInfo().coupon?.code}</span>
                </div>
                <div className={styles.couponDetailRow}>
                  <span className={styles.couponLabel}>Nome:</span>
                  <span className={styles.couponValue}>{getCouponInfo().coupon?.name}</span>
                </div>
                <div className={styles.couponDetailRow}>
                  <span className={styles.couponLabel}>Desconto:</span>
                  <span className={styles.couponDiscountValue}>
                    {getCouponInfo().coupon?.discount?.type === 'PERCENTAGE'
                      ? `${getCouponInfo().coupon.discount.value}%`
                      : new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(getCouponInfo().coupon?.discount?.value || 0)
                    }
                  </span>
                </div>
                <div className={styles.couponDetailRow}>
                  <span className={styles.couponLabel}>Valor do desconto:</span>
                  <span className={styles.couponDiscountValue}>{getCouponInfo().totalDiscount}</span>
                </div>
              </div>
            </div>
          )}

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
          <div className={styles.freeRegistrationMessage} data-testid="free-registration-message">
            <p className={styles.freeMessage}>
              🎉 Sua inscrição foi confirmada gratuitamente através do uso de cupom de desconto!
              Não é necessário efetuar nenhum pagamento.
            </p>
          </div>
        )}

        {/* Disclaimer de política de descontos */}
        {getCouponInfo()?.isUsed && (
          <div className={styles.disclaimerSection} data-testid="coupon-disclaimer">
            <div className={styles.disclaimer}>
              <strong>⚠️ POLÍTICA DE DESCONTOS:</strong>
              <p>
                Descontos aplicados através de coupons promocionais não são reembolsáveis e não podem ser convertidos em créditos para outros eventos.
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
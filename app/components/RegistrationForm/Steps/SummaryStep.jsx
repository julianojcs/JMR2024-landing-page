import { useState } from 'react';
import { useRegistration } from '../../../contexts/RegistrationContext';
import { useCoupon } from '../../../hooks/useCoupon';
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
    updateFormData,
    year,
    setReceiptDownloadUrl,
    paymentConfig
  } = useRegistration();

  const { personalInfo, category, selectedItems } = formData;
  const [uploadError, setUploadError] = useState(null);
  const [error, setError] = useState(null);
  const [previewAttempted, setPreviewAttempted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Estados para o cupom
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(formData.appliedCoupon || null);
  const [couponError, setCouponError] = useState('');
  const [isCouponLoading, setIsCouponLoading] = useState(false);

  // Hook para gerenciar cupons
  const {
    calculateTotalDiscountByProducts,
    getItemDiscount,
    isProductEligibleForCoupon
  } = useCoupon();

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

  // Função para validar e aplicar cupom
  const validateCoupon = async (code) => {
    if (!code || code.trim() === '') {
      setCouponError('');
      return;
    }

    setIsCouponLoading(true);
    setCouponError('');

    try {
      const requestData = {
        code: code.trim().toUpperCase(),
        year: year,
        category: category.id, // Usar ID numérico da categoria
        products: getSelectedProductCodes(),
        orderValue: calculateSubtotal()
      };

      console.log('🔧 Validando cupom - Request data:', requestData);

      const response = await fetch(`/api/coupons/validate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
      });

      const data = await response.json();
      console.log('🔧 Resposta da validação:', data);

      if (!response.ok) {
        throw new Error(data.message || 'Erro ao validar cupom');
      }

      if (data.valid) {
        setAppliedCoupon(data.coupon);
        updateFormData('appliedCoupon', data.coupon); // Salvar no contexto
        setCouponError('');
        console.log('🔧 Cupom aplicado com sucesso:', data.coupon);
      } else {
        setAppliedCoupon(null);
        setCouponError(data.message || 'Coupon inválido');
        console.log('🔧 Cupom inválido:', data.message);
      }
    } catch (error) {
      console.error('🔧 Erro ao validar cupom:', error);
      setAppliedCoupon(null);
      setCouponError(error.message || 'Erro ao validar cupom. Tente novamente.');
    } finally {
      setIsCouponLoading(false);
    }
  };

  // Função para obter códigos dos produtos selecionados
  const getSelectedProductCodes = () => {
    const products = [];

    if (selectedItems.journey) {
      products.push('CONGRESS');
    }

    if (selectedItems.workshops?.length > 0) {
      products.push('WORKSHOP');
    }

    if (selectedItems.courses?.length > 0) {
      products.push('COURSE');
    }

    if (selectedItems.dayUse) {
      products.push('DAY_USE');
    }

    return products;
  };

  // Função para calcular subtotal (sem desconto)
  const calculateSubtotal = () => {
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

    return total;
  };

  // Função para aplicar desconto do cupom usando a nova lógica por produto
  const calculateTotalDiscount = () => {
    if (!appliedCoupon) return 0;

    const { totalDiscount } = calculateTotalDiscountByProducts(selectedItems, appliedCoupon);
    return totalDiscount;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discount = calculateTotalDiscount();
    const total = subtotal - discount;

    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(total);
  };

  // Helper para renderizar preço com desconto quando há cupom aplicado
  const renderProductPrice = (item, itemType, itemIndex = 0) => {
    console.log('🎯 renderProductPrice chamado:', {
      itemType,
      itemTitle: item.title,
      cupomAplicado: !!appliedCoupon,
      cupomCode: appliedCoupon?.code
    });

    if (!appliedCoupon) {
      return <span className={styles.singlePrice}>{item.getCurrentPrice().value}</span>;
    }

    const currentPrice = item.getCurrentPrice();
    const productValue = currencyToNumber(currentPrice.value);
    const discount = getItemDiscount(item, itemType, itemIndex, appliedCoupon);

    console.log('🎯 Cálculo do desconto:', {
      itemType,
      itemTitle: item.title,
      productValue,
      discount,
      cupom: appliedCoupon.code,
      currentPriceValue: currentPrice.value
    });

    if (discount === productValue) {
      // Desconto de 100%
      console.log('🎯 Aplicando desconto de 100%');
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

      console.log('🎯 Aplicando desconto parcial:', { finalPrice, discountedPrice });
      return (
        <div className={styles.priceWithDiscount}>
          <span className={styles.originalPrice}>{currentPrice.value}</span>
          <span className={styles.discountedPrice}>{discountedPrice}</span>
        </div>
      );
    } else {
      // Sem desconto para este produto
      console.log('🎯 Sem desconto para este produto');
      return <span className={styles.singlePrice}>{currentPrice.value}</span>;
    }
  };

  // Função para aplicar cupom
  const handleApplyCoupon = async () => {
    await validateCoupon(couponCode);
  };

  // Função para remover cupom
  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    updateFormData('appliedCoupon', null); // Remover do contexto
    setCouponCode('');
    setCouponError('');
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

      // Incluir informações do cupom na descrição se houver
      if (appliedCoupon) {
        description += ` - Coupon: ${appliedCoupon.code}`;
      }

      const total = calculateTotal();
      const numericPrice = currencyToNumber(total).toFixed(2);

      let response;

      // Se o valor total for 0 (cupom de 100% desconto), criar resposta simulada
      if (parseFloat(numericPrice) === 0) {
        // Gerar ID e número de fatura aleatórios
        const randomId = `free_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        const randomInvoiceNumber = Math.floor(10000000 + Math.random() * 90000000).toString();

        response = {
          object: "payment",
          id: randomId,
          dateCreated: new Date().toISOString().split('T')[0],
          customer: personalInfo.userId,
          paymentLink: null,
          value: 0,
          netValue: 0,
          originalValue: null,
          interestValue: null,
          description: description,
          billingType: "COUPON",
          pixTransaction: null,
          status: "CONFIRMED",
          dueDate: null,
          originalDueDate: null,
          paymentDate: new Date().toISOString().split('T')[0],
          clientPaymentDate: null,
          installmentNumber: null,
          invoiceUrl: null,
          invoiceNumber: randomInvoiceNumber,
          externalReference: null,
          deleted: false,
          anticipated: false,
          anticipable: false,
          creditDate: null,
          estimatedCreditDate: null,
          transactionReceiptUrl: null,
          nossoNumero: null,
          bankSlipUrl: null,
          lastInvoiceViewedDate: null,
          lastBankSlipViewedDate: null,
          discount: {
            value: 0.00,
            limitDate: null,
            dueDateLimitDays: 0,
            type: "FIXED"
          },
          fine: {
            value: 0.00,
            type: "FIXED"
          },
          interest: {
            value: 0.00,
            type: "PERCENTAGE"
          },
          postalService: false,
          custody: null,
          escrow: null,
          refunds: null
        };

        console.log('Inscrição gratuita criada (cupom 100%):', {
          id: response.id,
          invoiceNumber: response.invoiceNumber,
          status: response.status,
          value: response.value
        });
      } else {
        // Valor maior que 0, usar Asaas normalmente
        const baseUrl = process.env.NODE_ENV === 'development'
          ? url
          : window.location.origin;

        const asaas = new AsaasClient();
        response = await asaas.payments.create({
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
      }

      setPaymentResponse(response);

      // Se há cupom aplicado, registrar o uso com CPF e valor do desconto
      if (appliedCoupon) {
        try {
          const discountAmount = calculateTotalDiscount();

          const couponResponse = await fetch('/api/coupons/use', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              couponId: appliedCoupon._id,
              cpf: personalInfo.cpf,
              discountAmount: discountAmount
            })
          });

          if (couponResponse.ok) {
            const couponResult = await couponResponse.json();
            console.log('Coupon utilizado com sucesso:', {
              cupom: appliedCoupon.code,
              cpf: personalInfo.cpf,
              desconto: discountAmount,
              usageCount: couponResult.usageCount
            });
          } else {
            const errorData = await couponResponse.json();
            console.warn('Falha ao registrar uso do cupom:', errorData.message);
          }
        } catch (couponError) {
          console.warn('Erro ao registrar uso do cupom:', couponError);
          // Não interromper o fluxo se houver erro no cupom
        }
      }

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
              <span data-testid="journey-price">
                {renderProductPrice(selectedItems.journey, 'journey')}
              </span>
            </div>
          )}

          {selectedItems.workshops?.map((workshop, index) => (
            <div key={index} className={styles.productItem}>
              <span className={styles.productName}>{workshop.title}</span>
              {renderProductPrice(workshop, 'workshop', index)}
            </div>
          ))}

          {selectedItems.courses?.map((course, index) => (
            <div key={index} className={styles.productItem}>
              <span className={styles.productName}>{course.title}</span>
              <span data-testid="course-price">
                {renderProductPrice(course, 'course', index)}
              </span>
            </div>
          ))}

          {selectedItems.dayUse && (
            <div className={styles.productItem}>
              <span className={styles.productName}>
                {selectedItems.dayUse.title}
              </span>
              {renderProductPrice(selectedItems.dayUse, 'dayUse')}
            </div>
          )}
        </section>

        {/* Seção do cupom */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Coupon de Desconto</h3>

          {!appliedCoupon ? (
            <div className={styles.couponInputSection}>
              <div className={styles.couponInputGroup}>
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                  onBlur={() => handleApplyCoupon()}
                  placeholder="Digite o código do cupom"
                  className={styles.couponInput}
                  disabled={isCouponLoading}
                />
                <button
                  type="button"
                  onClick={handleApplyCoupon}
                  disabled={!couponCode.trim() || isCouponLoading}
                  className={`${styles.applyCouponButton} ${isCouponLoading ? styles.loading : ''}`}
                >
                  {isCouponLoading ? (
                    <div className={styles.buttonSpinner}></div>
                  ) : (
                    'Aplicar'
                  )}
                </button>
              </div>

              {couponError && (              <div className={styles.couponError} data-testid="coupon-error">
                {couponError}
              </div>
              )}
            </div>
          ) : (
            <div className={styles.appliedCouponSection} data-testid="applied-coupon">
              <div className={styles.appliedCouponInfo}>
                <div className={styles.appliedCouponHeader}>
                  <span className={styles.couponIcon}>🎟️</span>
                  <div className={styles.couponDetails}>
                    <span className={styles.couponName}>{appliedCoupon.name}</span>
                    <span className={styles.couponCode}>Código: {appliedCoupon.code}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleRemoveCoupon}
                    className={styles.removeCouponButton}
                    title="Remover cupom"
                  >
                    ✕
                  </button>
                </div>

                {appliedCoupon.description && (
                  <div className={styles.couponDescription}>
                    {appliedCoupon.description}
                  </div>
                )}

                <div className={styles.discountInfo}>
                  <span className={styles.discountLabel}>Desconto:</span>
                  <span className={styles.discountValue}>
                    {appliedCoupon.discount.type === 'PERCENTAGE'
                      ? `${appliedCoupon.discount.value}%`
                      : new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL'
                        }).format(appliedCoupon.discount.value)
                    }
                  </span>
                </div>
              </div>
            </div>
          )}
        </section>

        <div className={styles.totalSection}>
          {appliedCoupon && (
            <>
              <div className={styles.subtotalRow}>
                <span className={styles.subtotalLabel}>Subtotal:</span>
                <span className={styles.subtotalValue} data-testid="subtotal-value">
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(calculateSubtotal())}
                </span>
              </div>

              <div className={styles.discountRow}>
                <span className={styles.discountLabel}>Desconto ({appliedCoupon.code}):</span>
                <span className={styles.discountValue} data-testid="discount-value">
                  -{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(calculateTotalDiscount())}
                </span>
              </div>
            </>
          )}

          <div className={styles.totalRow}>
            <span className={styles.totalLabel}>Total:</span>
            <span className={styles.totalValue} data-testid="total-value">{calculateTotal()}</span>
          </div>
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
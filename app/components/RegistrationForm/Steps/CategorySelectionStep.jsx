import { useState, useEffect } from 'react';
import { useRegistration } from '../../../contexts/RegistrationContext';
import { Category } from '../../../models';
import Receipt from './Receipt';
import styles from './CategorySelectionStep.module.css';

const CategorySelectionStep = () => {
  const { formData, updateFormData, setCurrentStep } = useRegistration();
  const [error, setError] = useState({});
  const [showReceiptModal, setShowReceiptModal] = useState(false);

  // Função para destacar visualmente o botão "Próximo"
  const highlightNextButton = () => {
    setTimeout(() => {
      const nextButton = document.querySelector(`.${styles.nextButton}`);

      if (nextButton) {
        // Primeiro, role até o botão para garantir que está visível
        nextButton.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Aguarde o scroll terminar antes de iniciar os efeitos visuais
        setTimeout(() => {
          // Simular um clique visual no botão
          nextButton.classList.add(styles.buttonPressing);

          // Remover o efeito de "pressionado" após um curto período
          setTimeout(() => {
            nextButton.classList.remove(styles.buttonPressing);

            // Adicionar o efeito de destaque com o novo contorno suave
            nextButton.classList.add(styles.highlightButton);
            nextButton.classList.add(styles.smoothOutline);

            // Colocar foco no botão para melhorar acessibilidade
            nextButton.focus();

            // Remover os efeitos após 5 segundos
            setTimeout(() => {
              nextButton.classList.remove(styles.highlightButton);
              nextButton.classList.remove(styles.smoothOutline);
            }, 5000); // Aumentado para 5 segundos
          }, 200); // Reduzido para tornar a sequência mais responsiva
        }, 500); // Tempo suficiente para o scroll terminar
      }
    }, 200);
  };

  // Função para verificar se a categoria requer comprovante
  const isCategoryRequiringReceipt = (category) => {
    if (!category) return false;

    // Verificar se a categoria tem recibo habilitado explicitamente
    if (category.receipt?.enabled === true) return true;

    // Verificar se é categoria de membro
    if (category.member?.length > 0) {
      const societies = formData.personalInfo.societies || [];

  // Se não tiver sociedades ou não for membro das sociedades necessárias
      if (societies.length === 0) return true;
      if (!category.member.some(m => societies.includes(m))) return true;
    }

    return false;
  };

  const handleCategorySelect = (category) => {
    const selectedCategory = Category.fromEventData(category);
    const needsReceipt = isCategoryRequiringReceipt(selectedCategory);
    const changingCategory = formData.category?.id !== category.id;

    // Primeiro, atualize apenas a categoria para garantir que ela seja selecionada visualmente
    updateFormData('category', selectedCategory);

    // Se estiver mudando de categoria, reset produtos e recibo separadamente
    if (changingCategory) {
      updateFormData('selectedItems', {
        journey: null,
        workshops: [],
        courses: [],
        dayUse: null
      });
      updateFormData('receipt', null);
    }

    // Limpar erros relacionados à categoria
    setError(prev => ({ ...prev, category: '', receipt: '' }));

    // Mostrar modal apenas se necessário E não tiver recibo (ou estiver trocando categoria)
    if (needsReceipt && (!formData.receipt || changingCategory)) {
      // Usar setTimeout para garantir que as atualizações de estado tenham efeito
      setTimeout(() => {
        setShowReceiptModal(true);
      }, 50);
    } else {
      // Se não precisar mostrar o modal, destacar o botão "Próximo"
      highlightNextButton();
    }
  };

  const handleFileChange = (file, error = '') => {
    if (error) {
      setError(prev => ({ ...prev, receipt: error }));
      return;
    }

    updateFormData('receipt', file);
    setError(prev => ({ ...prev, receipt: '' }));
    setShowReceiptModal(false);

    // Após fechar o modal e atualizar o estado, destacar o botão "Próximo"
    setTimeout(() => {
      highlightNextButton();

      // Também colocar o foco no botão após a rolagem
      const nextButton = document.querySelector(`.${styles.nextButton}`);
      if (nextButton) {
        setTimeout(() => {
          nextButton.focus();
        }, 700); // Tempo suficiente para a rolagem terminar
      }
    }, 100);
  };

  const handlePrevious = () => {
    setCurrentStep(1);
  };

  const handleNext = () => {
    const newErrors = {};

    if (!formData?.category || !(formData?.category?.id)) {
      newErrors.category = 'Por favor, selecione uma categoria';
    } else {
      // Só verificar necessidade de recibo se uma categoria foi selecionada
      const needsReceipt = isCategoryRequiringReceipt(formData.category);

      if (needsReceipt && !formData.receipt) {
        newErrors.receipt = 'Por favor, envie o comprovante solicitado';
        setShowReceiptModal(true);
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    setCurrentStep(3);
  };

  // Verificar estado inicial ao montar o componente
  useEffect(() => {
    if (formData.category) {
      const needsReceipt = isCategoryRequiringReceipt(formData.category);

      if (needsReceipt && !formData.receipt) {
        // Usar setTimeout para garantir que o componente esteja montado
        setTimeout(() => {
          setShowReceiptModal(true);
        }, 100);
      }
    }
  }, []);

  // Determinar se deve mostrar o recibo na página
  const shouldShowReceiptInPage = () => {
    return formData.category &&
      isCategoryRequiringReceipt(formData.category) &&
      formData.receipt;
  };

  const categories = formData?.eventData?.categories.filter(category => {
    if (!category.member) return true;
    if (!formData.personalInfo.societies?.length) return true;
    return category.member.some(society =>
      formData.personalInfo.societies.includes(society)
    );
  }) || [];

  return (
    <div className={styles.stepContent}>
      <h2 className={styles.title}>Selecione a sua Categoria</h2>

      {error.category && <div className={styles.error}>{error.category}</div>}

      <div className={styles.categoriesGrid}>
        {categories.map((category) => (
          <div
            key={category.id}
            className={`${styles.categoryCard} ${
              formData.category?.id === category.id ? styles.selected : ''
            }`}
            onClick={() => handleCategorySelect(category)}
          >
            {category.image && (
              <div className={styles.imageContainer}>
                <img src={category.image} alt={category.title} />
              </div>
            )}
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            {category.description && (
              <div className={styles.descriptionList}>
                {Array.isArray(category.description) ? (
                  category.description.map((item, index) => {
                    let itemClass = '';
                    let displayText = item;

                    if (item.startsWith('✓')) {
                      itemClass = styles.positive;
                      displayText = item.substring(1).trim();
                    } else if (item.startsWith('✕')) {
                      itemClass = styles.negative;
                      displayText = item.substring(1).trim();
                    } else {
                      itemClass = styles.neutral;
                    }

                    return (
                      <p key={index} className={`${styles.descriptionItem} ${itemClass}`}>
                        {displayText}
                      </p>
                    );
                  })
                ) : (
                  <p className={`${styles.descriptionItem} ${styles.neutral}`}>
                    {category.description}
                  </p>
                )}
              </div>
            )}
            {category?.member?.length > 0 && (
              <span className={styles.memberBadge}>
                Exclusivo para {category.member.join('/')}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Modal do Receipt - com controle melhorado */}
      {showReceiptModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h3>Comprovante Necessário</h3>
              <button
                className={styles.closeButton}
                onClick={() => setShowReceiptModal(false)}
              >
                ×
              </button>
            </div>
            <div className={styles.modalBody}>
              <p>Esta categoria requer o envio de um comprovante para continuar.</p>
              <Receipt
                receipt={formData.receipt}
                onFileChange={handleFileChange}
                onFileRemove={() => handleFileChange(null)}
                error={error.receipt}
                isModal={true}
              />
            </div>
          </div>
        </div>
      )}

      {/* Mostrar o recibo na página apenas se já tiver um arquivo e for necessário */}
      {shouldShowReceiptInPage() && (
        <Receipt
          receipt={formData.receipt}
          onFileChange={handleFileChange}
          onFileRemove={() => handleFileChange(null)}
          error={error.receipt}
        />
      )}

      <div className={styles.buttonGroup}>
        <button
          type="button"
          onClick={handlePrevious}
          className={styles.backButton}
        >
          Voltar
        </button>
        <button
          type="button"
          onClick={handleNext}
          className={styles.nextButton}
        >
          Próximo
        </button>
      </div>
    </div>
  );
};

export default CategorySelectionStep;
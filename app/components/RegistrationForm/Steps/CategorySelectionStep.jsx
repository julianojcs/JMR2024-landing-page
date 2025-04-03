import { useState } from 'react';
import { useRegistration } from '../../../contexts/RegistrationContext';
import { Category } from '../../../models';
import Receipt from './Receipt';
import styles from './CategorySelectionStep.module.css';

const CategorySelectionStep = () => {
  const { formData, updateFormData, setCurrentStep } = useRegistration();
  const [error, setError] = useState({});

  const categories = formData?.eventData?.categories.filter(category => {
    if (!category.member) return true;
    if (!formData.personalInfo.societies?.length) return true;
    return category.member.some(society =>
      formData.personalInfo.societies.includes(society)
    );
  }) || [];

  // if (formData?.eventData?.openToPublic) {
  //   const openToPublicCategory = formData.eventData.openToPublic;
  //   // Add the "Open to Public" category if it exists in the event data
  //   categories.push({
  //     id: 0,
  //     title: openToPublicCategory.title,
  //     description: openToPublicCategory.description,
  //     image: openToPublicCategory.image,
  //     receipt: openToPublicCategory.receipt,
  //     member: openToPublicCategory.member
  //   });
  // }

  const shouldShowReceipt = () => {
    const category = formData.category;
    const societies = formData.personalInfo.societies || [];

    if (!category) return false;

    // Category has a receipt and the user needs to provide it
    if (category?.receipt?.enabled === true) return true;

    // Category has members and the user is not a member of any of them
    if (category?.member?.length > 0) {
      if (societies.length === 0) return true;
      if (!category.member.some(m => societies.includes(m))) return true;
    }

    return false;
  };

  const handleCategorySelect = (category) => {
    const selectedCategory = Category.fromEventData(category);
    updateFormData('category', selectedCategory);
    setError(prev => ({ ...prev, category: '' }));
  };

  const handleFileChange = (file, error = '') => {
    if (error) {
      setError(prev => ({ ...prev, receipt: error }));
      return;
    }

    updateFormData('receipt', file);
    setError(prev => ({ ...prev, receipt: '' }));
  };

  const handlePrevious = () => {
    setCurrentStep(1);
  };

  const handleNext = () => {
    const newErrors = {};

    if (!formData.category) {
      newErrors.category = 'Por favor, selecione uma categoria';
    }

    if (shouldShowReceipt() && !formData.receipt) {
      newErrors.receipt = 'Por favor, envie o comprovante solicitado';
    }

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    setCurrentStep(3);
  };

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
              <p className={styles.description}>{category.description}</p>
            )}
            {category?.member?.length > 0 && (
              <span className={styles.memberBadge}>
                Exclusivo para {category.member.join('/')}
              </span>
            )}
          </div>
        ))}
      </div>

      {shouldShowReceipt() && (
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
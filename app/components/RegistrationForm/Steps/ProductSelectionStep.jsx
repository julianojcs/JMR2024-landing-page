import { useState } from 'react';
import { useRegistration } from '../../../contexts/RegistrationContext';
import styles from './ProductSelectionStep.module.css';

const ProductSelectionStep = () => {
  const { formData, updateFormData, setCurrentStep } = useRegistration();
  const [error, setError] = useState('');
  const { category } = formData;

  const handleJourneySelect = () => {
    updateFormData('selectedItems', {
      ...formData.selectedItems,
      // Se já estiver selecionado, define como null, senão seleciona
      journey: formData.selectedItems.journey ? null : category.journey
    });
  };

  const handleWorkshopSelect = (workshop) => {
    const updatedWorkshops = formData.selectedItems.workshops.includes(workshop)
      ? formData.selectedItems.workshops.filter(w => w !== workshop)
      : [...formData.selectedItems.workshops, workshop];

    updateFormData('selectedItems', {
      ...formData.selectedItems,
      workshops: updatedWorkshops
    });
  };

  const handleCourseSelect = (course) => {
    const updatedCourses = formData.selectedItems.courses.includes(course)
      ? formData.selectedItems.courses.filter(c => c !== course)
      : [...formData.selectedItems.courses, course];

    updateFormData('selectedItems', {
      ...formData.selectedItems,
      courses: updatedCourses
    });
  };

  const handleDayUseSelect = () => {
    updateFormData('selectedItems', {
      ...formData.selectedItems,
      // Se já estiver selecionado, define como null, senão seleciona
      dayUse: formData.selectedItems.dayUse ? null : category.dayUse
    });
  };

  const handlePrevious = () => {
    setCurrentStep(2);
  };

  const handleNext = () => {
    const hasSelection = formData.selectedItems.journey ||
      formData.selectedItems.workshops.length > 0 ||
      formData.selectedItems.courses.length > 0 ||
      formData.selectedItems.dayUse;

    if (!hasSelection) {
      setError('Por favor, selecione pelo menos um produto');
      return;
    }
    setCurrentStep(4);
  };

  return (
    <div className={styles.stepContent}>
      <h2 className={styles.title}>Selecione os Produtos</h2>

      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.productsWrapper}>
        {category?.journey && (
          <section className={styles.productSection}>
            <h3 className={styles.sectionTitle}>Jornada</h3>
            <div className={styles.productGrid}>
              <div
                className={`${styles.productCard} ${formData.selectedItems.journey ? styles.selected : ''
                  }`}
                onClick={handleJourneySelect}
              >
                <h4>{category.journey.title}</h4>
                <p className={styles.price}>
                  {category.journey.getCurrentPrice()?.value}
                </p>
              </div>
            </div>
          </section>
        )}

        {category?.workshops && (
          <section className={styles.productSection}>
            <h3 className={styles.sectionTitle}>Workshops</h3>
            <div className={styles.productGrid}>
              {category.workshops.map((workshop, index) => (
                <div
                  key={index}
                  className={`${styles.productCard} ${formData.selectedItems.workshops.includes(workshop) ? styles.selected : ''
                    }`}
                  onClick={() => handleWorkshopSelect(workshop)}
                >
                  <h4>{workshop.title}</h4>
                  <p className={styles.description}>{workshop.description}</p>
                  <p className={styles.price}>{workshop.getCurrentPrice()?.value}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {category?.courses?.length > 0 && (
          <section className={styles.productSection}>
            <h3 className={styles.sectionTitle}>Cursos</h3>
            <div className={styles.productGrid}>
              {category.courses.map((course, index) => (
                <div
                  key={index}
                  className={`${styles.productCard} ${formData.selectedItems.courses.includes(course) ? styles.selected : ''
                    }`}
                  onClick={() => handleCourseSelect(course)}
                >
                  <h4>{course.title}</h4>
                  <p className={styles.description}>{course.description}</p>
                  <p className={styles.price}>{course.getCurrentPrice()?.value}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {category?.dayUse && (
          <section className={styles.productSection}>
            <h3 className={styles.sectionTitle}>Day Use</h3>
            <div className={styles.productGrid}>
              <div
                className={`${styles.productCard} ${formData.selectedItems.dayUse ? styles.selected : ''
                  }`}
                onClick={handleDayUseSelect}
              >
                <h4>{category.dayUse.title}</h4>
                <p className={styles.description}>{category.dayUse.description}</p>
                <p className={styles.price}>{category.dayUse.getCurrentPrice()?.value}</p>
              </div>
            </div>
          </section>
        )}
      </div>
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

export default ProductSelectionStep;
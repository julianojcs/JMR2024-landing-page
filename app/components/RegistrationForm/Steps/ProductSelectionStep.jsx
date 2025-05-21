import { useState } from 'react';
import { useRegistration } from '../../../contexts/RegistrationContext';
import styles from './ProductSelectionStep.module.css';

const ProductSelectionStep = () => {
  const { formData, updateFormData, setCurrentStep } = useRegistration();
  const [error, setError] = useState('');
  const { category } = formData;

  const handleJourneySelect = () => {
    // Se journey já está selecionado, apenas desmarca
    if (formData.selectedItems.journey) {
      updateFormData('selectedItems', {
        ...formData.selectedItems,
        journey: null
      });
    }
    // Se journey não está selecionado, marca-o e desmarca dayUse
    else {
      updateFormData('selectedItems', {
        ...formData.selectedItems,
        journey: category.journey,
        dayUse: null // Desmarca dayUse quando journey é selecionado
      });
    }
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
    // Se dayUse já está selecionado, apenas desmarca
    if (formData.selectedItems.dayUse) {
      updateFormData('selectedItems', {
        ...formData.selectedItems,
        dayUse: null
      });
    }
    // Se dayUse não está selecionado, marca-o e desmarca journey
    else {
      updateFormData('selectedItems', {
        ...formData.selectedItems,
        dayUse: category.dayUse,
        journey: null // Desmarca journey quando dayUse é selecionado
      });
    }
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

      {category && (
        <div className={styles.selectedCategory}>
          <span className={styles.categoryLabel}>Categoria selecionada:</span> {category.title}
        </div>
      )}
      <div className={styles.productsWrapper}>

        {/* Coluna 1 */}
        <h3 className={`${styles.CellGridLayout} ${styles.journeyDayuse} ${styles.sectionTitle}`}>Jornada</h3>
        {category?.journey ? (
          <>
            <div className={`${styles.CellGridLayout} ${styles.productCard} ${styles.journeyDayuse} ${formData.selectedItems.journey ? styles.selected : ''}`}
                onClick={handleJourneySelect}
              >
              {category.journey?.image && (
                <div className={styles.imageContainer}>
                  <img src={category.journey.image} alt={category.journey?.title} />
                </div>
              )}
              <h4>{category.journey?.title}</h4>
              {category.journey?.description && (
                <p className={styles.description}>{category.journey?.description}</p>
              )}
              <p className={styles.price}>
                {category.journey.getCurrentPrice()?.value}
              </p>
            </div>

            {category?.dayUse && (
              <div className={`${styles.CellGridLayout} ${styles.productCard} ${styles.journeyDayuse} ${formData.selectedItems.dayUse ? styles.selected : ''}`}
                onClick={handleDayUseSelect}
              >
                {category.dayUse?.image && (
                  <div className={styles.imageContainer}>
                    <img src={category.dayUse?.image} alt={category.dayUse?.title} />
                  </div>
                )}
                <h4>{category.dayUse?.title}</h4>
                {category.dayUse?.description && (
                  <p className={styles.description}>{category.dayUse?.description}</p>
                )}
                <p className={styles.price}>{category.dayUse?.getCurrentPrice()?.value}</p>
              </div>
            )}
          </>
        ) : (
          <p className={styles.noJourneyDayuse}>Nenhum produto de Jornada ou Day Use disponível nesta categoria.</p>
        )}

        {/* Coluna 2 */}
        <h3 className={`${styles.CellGridLayout} ${styles.workshops} ${styles.sectionTitle}`}>Workshops</h3>
        {category?.workshops.length > 0 ? (
          category.workshops.map((workshop, index) => (
            <div
              key={index}
              className={`${styles.CellGridLayout} ${styles.productCard} ${styles.workshops} ${formData.selectedItems.workshops.includes(workshop) ? styles.selected : ''}`}
              onClick={() => handleWorkshopSelect(workshop)}
            >
              {workshop?.image && (
                <div className={styles.imageContainer}>
                  <img src={workshop.image} alt={workshop?.title} />
                </div>
              )}
              <h4>{workshop?.title}</h4>
              {workshop?.description && (
                <p className={styles.description}>{workshop?.description}</p>
              )}
              <p className={styles.price}>{workshop?.getCurrentPrice()?.value}</p>
            </div>
          ))
        ) : (
          <p className={styles.noWorkshops}>Nenhum Workshop disponível nesta categoria.</p>
        )}

        {/* Coluna 3 */}
        <h3 className={`${styles.CellGridLayout} ${styles.courses} ${styles.sectionTitle}`}>Cursos</h3>
        {category?.courses?.length > 0 ? (
          category.courses.map((course, index) => (
            <div
              key={index}
              className={`${styles.CellGridLayout} ${styles.productCard} ${styles.courses} ${formData.selectedItems.courses.includes(course) ? styles.selected : ''}`}
              onClick={() => handleCourseSelect(course)}
            >
              {course?.image && (
                <div className={styles.imageContainer}>
                  <img src={course.image} alt={course.title} />
                </div>
              )}
              <h4>{course?.title}</h4>
              {course?.description && (
                <p className={styles.description}>{course.description}</p>
              )}
              <p className={styles.price}>{course?.getCurrentPrice()?.value}</p>
            </div>
          ))
        ) : (
          <p className={styles.noCourses}>Nenhum Curso disponível nesta categoria.</p>
        )}
      </div>

      {error && <div className={styles.error}>{error}</div>}

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
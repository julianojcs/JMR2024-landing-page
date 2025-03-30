'use client'

import { useState } from 'react'
import styles from './Steps.module.css'

const Summary = ({ dataStorage, onPrevious, onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await onSubmit()
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`${styles.summaryContainer} ${styles.step}`}>
      <h3>Confirme seus dados</h3>
      <div className={styles.wrapper}>
        <div className={styles.summarySection}>
          <h3 className={styles.subtitle}>Dados Pessoais</h3>
          <div className={styles.summaryGrid}>
            <div className={styles.summaryItem}>
              <label>Nome:</label>
              <span>{dataStorage.value.formData.personalInfo.fullName}</span>
            </div>
            <div className={styles.summaryItem}>
              <label>CPF:</label>
              <span>{dataStorage.value.formData.personalInfo.cpf}</span>
            </div>
            <div className={styles.summaryItem}>
              <label>Email:</label>
              <span>{dataStorage.value.formData.personalInfo.email}</span>
            </div>
            <div className={styles.summaryItem}>
              <label>Telefone:</label>
              <span>{dataStorage.value.formData.personalInfo.phone}</span>
            </div>
          </div>
        </div>

        <div className={styles.summarySection}>
          <h3 className={styles.subtitle}>Endereço</h3>
          <div className={styles.summaryGridAddress}>
            <div className={styles.summaryItem}>
              <span>{dataStorage.value.formData.personalInfo.address}</span>
              <span>{dataStorage.value.formData.personalInfo.number}, </span>
              <span>{dataStorage.value.formData.personalInfo.complement}, </span>
              <span>{dataStorage.value.formData.personalInfo.neighborhood}</span>
            </div>
            <div className={styles.summaryItem}>
              <span>{dataStorage.value.formData.personalInfo.city}</span>/
              <span>{dataStorage.value.formData.personalInfo.state}</span>
            </div>
            <div className={styles.summaryItem}>
              <span>CEP: {dataStorage.value.formData.personalInfo.zipCode}</span>
            </div>
          </div>
        </div>

        <div className={styles.summarySection}>
          <h3 className={styles.subtitle}>Inscrição</h3>
          <div className={styles.summaryGridAddress}>
            <div className={styles.summaryItem}>
              <label>Categoria:</label>
              <span>{dataStorage.value.formData.category.title}</span>
            </div>
            {dataStorage.value.formData.selectedDays?.length > 0 && (
              <div className={styles.summaryItem}>
                <label>Dia selecionado:</label>
                <span>{dataStorage.value.formData.selectedDay}</span>
              </div>
            )}
            {dataStorage.value.formData.selectedCourse && (
              <div className={styles.summaryItem}>
                <label>Curso:</label>
                <span>{dataStorage.value.formData.selectedCourse}</span>
              </div>
            )}
          </div>
        </div>
        <div className={styles.summarySection}>
          <h3 className={styles.subtitle}>Valor:</h3>
          <div className={styles.summaryItem}>
            <span
              className={styles.price}
              data-cents={dataStorage.value.formData.price.split(',')[1]}
            >
              {`${dataStorage.value.formData.price.split(',')[0]}`}
            </span>
          </div>
        </div>

        {/* <div className={styles.disclaimerSection}>
          <p>
            Ao clicar em "Finalizar Inscrição", você será redirecionado para a
            página de pagamento, onde poderá escolher a forma de pagamento
            de sua preferência.
          </p>
        </div> */}
      </div>
      <div className={styles.buttonGroup}>
        <button
          type="button"
          onClick={onPrevious}
          className={`${styles.secondaryButton} ${isSubmitting ? styles.disabled : ''}`}
          disabled={isSubmitting}
        >
          Anterior
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className={`${styles.finishButton} ${isSubmitting ? styles.disabled : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Processando...' : 'Finalizar Inscrição'}
        </button>
      </div>
    </div>
  )
}

export default Summary
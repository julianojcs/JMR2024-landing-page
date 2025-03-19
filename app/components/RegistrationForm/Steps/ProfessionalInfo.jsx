'use client'

import { useState } from 'react'
import styles from './Steps.module.css'

const ProfessionalInfo = ({ initialData, onPrevious, onNext }) => {
  const [category, setCategory] = useState(initialData?.category || '')
  const [isFormValid, setIsFormValid] = useState(!!initialData?.category)

  const handleCategoryChange = (e) => {
    const value = e.target.value
    setCategory(value)
    setIsFormValid(!!value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isFormValid) {
      onNext({ category })
    }
  }

  return (
    <div className={styles.step}>
      <h2>Informações Profissionais</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="category">
            Categoria Profissional<span className={styles.required}>*</span>
          </label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            className={`${styles.select} ${!category ? styles.error : ''}`}
          >
            <option value="">Selecione sua categoria</option>
            <option value="doctor">Médico</option>
            <option value="student">Acadêmico de Medicina</option>
            <option value="technician">Tecnólogo/Técnico</option>
          </select>
          <span className={styles.errorMessage}>
            {!category ? 'Selecione uma categoria profissional' : '\u00A0'}
          </span>
        </div>

        <div className={styles.buttonGroup}>
          <button
            type="button"
            onClick={onPrevious}
            className={styles.secondaryButton}
          >
            Anterior
          </button>
          <button
            type="submit"
            className={styles.primaryButton}
            disabled={!isFormValid}
          >
            Próximo
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProfessionalInfo
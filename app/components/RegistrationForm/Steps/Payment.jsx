'use client'

import { useState, useEffect } from 'react'
import styles from './Steps.module.css'

const Payment = ({ initialData, onPrevious, onNext }) => {
  const [formData, setFormData] = useState({
    paymentMethod: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  })

  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setFormData(initialData)
    }
  }, [initialData])

  const validateForm = () => {
    const newErrors = {}

    if (!formData.paymentMethod) {
      newErrors.paymentMethod = 'Selecione um método de pagamento'
    }

    if (formData.paymentMethod === 'card') {
      if (!formData.cardNumber?.trim()) {
        newErrors.cardNumber = 'Número do cartão é obrigatório'
      }
      if (!formData.cardName?.trim()) {
        newErrors.cardName = 'Nome no cartão é obrigatório'
      }
      if (!formData.expiryDate?.trim()) {
        newErrors.expiryDate = 'Data de validade é obrigatória'
      }
      if (!formData.cvv?.trim()) {
        newErrors.cvv = 'CVV é obrigatório'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      onNext(formData)
    }
  }

  return (
    <div className={styles.step}>
      <h2>Informações de Pagamento</h2>
      <form onSubmit={handleSubmit}>
        {/* ...your form fields... */}
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
            // disabled={!isFormValid}
          >
            Finalizar
          </button>
        </div>
      </form>
    </div>
  )
}

export default Payment
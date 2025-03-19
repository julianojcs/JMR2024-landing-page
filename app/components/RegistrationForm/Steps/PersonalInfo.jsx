'use client'

import { useState, useEffect } from 'react'
import { formatCPF, validateCPF, formatPhone } from '@/utils'
import styles from './Steps.module.css'

const PersonalInfo = ({ initialData, societies, onPrevious, onNext }) => {
  const [formData, setFormData] = useState({
    fullName: initialData?.fullName || '',
    cpf: initialData?.cpf || '',
    email: initialData?.email || '',
    phone: initialData?.phone || ''
  })

  const [validation, setValidation] = useState({
    cpf: {
      isValid: false,
      isMember: false,
      message: '',
      society: []
    }
  })

  const [errors, setErrors] = useState({})
  const [isFormValid, setIsFormValid] = useState(false)

  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    cpf: false,
    phone: false
  })


  useEffect(() => {
    const validateForm = () => {
      const newErrors = {}

      if (!formData.fullName?.trim()) {
        newErrors.fullName = 'Nome completo é obrigatório'
      }

      if (!formData.cpf) {
        newErrors.cpf = 'CPF é obrigatório'
      } else if (!validation.cpf.isValid) {
        newErrors.cpf = 'CPF inválido'
      } else if (initialData?.course?.validar && !validation.cpf.isMember) {
        newErrors.cpf = 'É necessário ser sócio para esta categoria'
      }

      if (!formData.email?.trim()) {
        newErrors.email = 'Email é obrigatório'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Email inválido'
      }

      setErrors(newErrors)
      setIsFormValid(Object.keys(newErrors).length === 0)
    }

    validateForm()
  }, [formData, validation.cpf, initialData?.course?.validar])

  const handleCPFChange = (e) => {
    const formattedCPF = formatCPF(e.target.value)
    setFormData(prev => ({ ...prev, cpf: formattedCPF }))

    if (formattedCPF.length === 14) {
      validateCPFMembership(formattedCPF)
    } else {
      setValidation(prev => ({
        ...prev,
        cpf: { isValid: false, isMember: false, message: '', society: '' }
      }))
    }
  }

  const validateCPFMembership = (cpf) => {
    const cleanCPF = cpf.replace(/\D/g, '')
    const isValidCPF = validateCPF(cleanCPF)

    if (!isValidCPF) {
      setValidation(prev => ({
        ...prev,
        cpf: {
          isValid: false,
          isMember: false,
          message: 'CPF inválido',
          society: ''
        }
      }))
      return
    }

    let isMember = false
    let memberSociety = ''

    for (const society of societies) {
      const found = society.affiliated?.member.some(
        member => member.cpf === cleanCPF
      )
      if (found) {
        isMember = true
        memberSociety = society.shortName
        break
      }
    }

    setValidation(prev => ({
      ...prev,
      cpf: {
        isValid: true,
        isMember,
        message: isMember 
          ? `✓ Sócio ${memberSociety} validado`
          : 'Não é sócio ou está inadimplente',
        society: memberSociety
      }
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isFormValid) {
      onNext(formData)
    }
  }

  // Initialize form with initial data if available
  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setFormData(initialData)

      // Validate CPF if it exists in initialData
      if (initialData.cpf) {
        validateCPFMembership(initialData.cpf)
      }
    }
  }, [initialData, societies]) // Add societies as dependency

  return (
    <div className={styles.step}>
      <h2>Informações Pessoais</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Nome Completo<span className={styles.required}>*</span></label>
          <input
            type="text"
            value={formData.fullName}
            placeholder='Nome Completo'
            onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
            onBlur={() => setTouched(prev => ({ ...prev, fullName: true }))}
            className={`${styles.input} ${touched.fullName ? styles.touched : ''} ${
              errors.fullName ? styles.error : ''
            }`}
          />
          <span className={styles.errorMessage}>
            {errors.fullName || '\u00A0'}
          </span>
        </div>

        <div className={styles.formGroup}>
          <label>Email<span className={styles.required}>*</span></label>
          <input
            type="email"
            placeholder='E-mail'
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className={errors.email ? styles.error : ''}
          />
          <span className={styles.errorMessage}>
            {errors.email || '\u00A0'}
          </span>
        </div>

        <div className={styles.formGroup}>
          <label>Telefone</label>
          <input
            type="tel"
            placeholder='(xx)xxxxx-xxxx'
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: formatPhone(e.target.value) }))}
          />
          <span className={styles.errorMessage}>
            {errors.phone || '\u00A0'}
          </span>
        </div>

        <div className={styles.formGroup}>
          <label>CPF<span className={styles.required}>*</span></label>
          <div className={styles.inputWithValidation}>
            <input
              type="text"
              value={formData.cpf}
              defaultValue={'03102546633'}
              onChange={handleCPFChange}
              maxLength={14}
              placeholder='000.000.000-00'
              pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
              className={`${styles.input} ${
                validation.cpf.message ?
                  validation.cpf.isMember ? styles.valid : styles.invalid
                  : ''
              }`}
            />
            {validation.cpf.message && (
              <span className={`${styles.validationIcon} ${
                validation.cpf.isMember ? styles.valid : styles.invalid
              }`}>
                {validation.cpf.isMember ? '✓' : '✕'}
              </span>
            )}
          </div>
          <span className={`${styles.validationMessage} ${errors.cpf ? styles.errorMessage : ''}`}>
            {errors.cpf || validation.cpf.message || '\u00A0'}
          </span>
        </div>
        <div className={styles.buttonGroup}>
          <button type="button" onClick={onPrevious} className={styles.secondaryButton}>
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

export default PersonalInfo
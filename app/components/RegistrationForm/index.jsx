'use client'

import { useState, useEffect } from 'react'
import { eventData } from '../../data/constants'
import SelectCourse from './Steps/SelectCourse'
import PersonalInfo from './Steps/PersonalInfo'
import ProfessionalInfo from './Steps/ProfessionalInfo'
import Payment from './Steps/Payment'
import styles from './RegistrationForm.module.css'

const RegistrationForm = ({ table, year }) => {
  const [step, setStep] = useState(1)
  const [societies, setSocieties] = useState([])
  const [formData, setFormData] = useState(() => {
    // Try to get saved form data from localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('registrationForm')
      return saved ? JSON.parse(saved) : {
        course: null,
        personal: {},
        professional: null,
        payment: null
      }
    }
    return {
      course: null,
      personal: {},
      professional: null,
      payment: null
    }
  })

  // Load societies data when component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const societiesData = eventData[year]?.societies || []
      setSocieties(societiesData)
    }
  }, [year])

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('registrationForm', JSON.stringify(formData))
    }
  }, [formData])

  const handlePrevious = () => {
    if (step > 1) {
      setStep(prev => prev - 1)
    }
  }

  const handleNext = (stepData, stepName) => {
    setFormData(prev => ({
      ...prev,
      [stepName]: stepData
    }))
    setStep(prev => prev + 1)
  }

  // Cleanup localStorage when component unmounts
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('registrationForm')
      }
    }
  }, [])

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <SelectCourse
            tableSection={table}
            initialData={formData.course}
            onNext={(data) => handleNext(data, 'course')}
          />
        )
      case 2:
        return (
          <PersonalInfo
            initialData={formData.personal}
            societies={societies}
            onPrevious={handlePrevious}
            onNext={(data) => handleNext(data, 'personal')}
          />
        )
      case 3:
        return (
          <ProfessionalInfo
            initialData={formData.professional}
            year={year}
            onPrevious={handlePrevious}
            onNext={(data) => handleNext(data, 'professional')}
          />
        )
      case 4:
        return (
          <Payment
            initialData={formData.payment}
            onPrevious={handlePrevious}
            onNext={(data) => handleNext(data, 'payment')}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Formulário de Inscrição</h1>
      <div className={styles.stepIndicator}>
        Passo {step} de 4
      </div>
      {renderStep()}
    </div>
  )
}

export default RegistrationForm
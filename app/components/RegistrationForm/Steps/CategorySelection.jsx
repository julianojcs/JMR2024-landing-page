'use client'

import { useState, useRef } from 'react'
import styles from './Steps.module.css'
import CategoryCard from './CategoryCard'
import Receipt from './Receipt'
import DayUse from './DayUse'
import Course from './Course'

const formatPrice = (value) => {
  if (!value) return 'R$ 0,00'
  const number = parseFloat(value.replace(/[^\d,]/g, '').replace(',', '.'))
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(number)
}

const getCurrentPrice = (category) => {
  if (!category?.prices) return null

  const now = new Date()
  const currentPrice = category.prices.find(price => {
    const [day, month, year] = price.bestBefore.split('/')
    const deadline = new Date(year, month - 1, day)
    return now <= deadline
  }) || category.prices[category.prices.length - 1]

  return {
    ...currentPrice,
    value: formatPrice(currentPrice.value)
  }
}

const CategorySelection = ({ dataStorage, initialData, onPrevious, onNext }) => {
  const [errors, setErrors] = useState({})
  const formRef = useRef(null)

  const handleCategorySelect = (category) => {
    dataStorage.value = {
      ...dataStorage.value,
      formData: {
        ...dataStorage.value.formData,
        category: category,
        receipt: null,
        selectedDay: null,
        selectedCourse: null,
        price: getCurrentPrice(category)?.value || '0,00'
      }
    }
    setErrors({})
  }

  const handleFileChange = (file, error = '') => {
    if (error) {
      setErrors(prev => ({ ...prev, receipt: error }))
      return
    }

    dataStorage.value = {
      ...dataStorage.value,
      formData: {
        ...dataStorage.value.formData,
        receipt: file
      }
    }
    setErrors(prev => ({ ...prev, receipt: '' }))
  }

  const handleDaySelect = (day) => {
    dataStorage.value = {
      ...dataStorage.value,
      formData: {
        ...dataStorage.value.formData,
        selectedDay: day
      }
    }
    setErrors(prev => ({ ...prev, day: '' }))
  }

  const handleCourseSelect = (course) => {
    dataStorage.value = {
      ...dataStorage.value,
      formData: {
        ...dataStorage.value.formData,
        selectedCourse: course
      }
    }
    setErrors(prev => ({ ...prev, course: '' }))
  }

  const scrollToError = (errors) => {
    const errorFields = Object.keys(errors)
    if (errorFields.length > 0) {
      const firstErrorField = errorFields[0]
      const errorElement = document.querySelector(`[data-error="${firstErrorField}"]`)
      if (errorElement) {
        errorElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
      }
    }
  }

  const validateForm = () => {
    const errors = {}
    const category = dataStorage.value.formData.category

    if (!category) {
      errors.category = 'Por favor, selecione uma categoria para continuar'
      return errors
    }

    // Check if receipt is required and not provided
    if (shouldShowReceipt() && !dataStorage.value.formData.receipt) {
      errors.receipt = 'Por favor, envie o comprovante solicitado'
    }

    if (category.dayUse && !dataStorage.value.formData.selectedDay) {
      errors.days = 'Por favor, selecione um dia'
    }

    if (category.curses && !dataStorage.value.formData.selectedCourse) {
      errors.course = 'Por favor, selecione um curso'
    }

    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formErrors = validateForm()

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      scrollToError(formErrors)
      return
    }

    // Format category data before passing to next step
    const currentPrice = getCurrentPrice(dataStorage.value.formData.category)
    const formattedCategory = {
      category: dataStorage.value.formData.category.title,
      price: currentPrice?.value || '0,00',
      ...(dataStorage.value.formData.receipt && { receipt: dataStorage.value.formData.receipt }),
      ...(dataStorage.value.formData.selectedDay && { selectedDay: dataStorage.value.formData.selectedDay }),
      ...(dataStorage.value.formData.selectedCourse && { selectedCourse: dataStorage.value.formData.selectedCourse })
    }

    onNext(formattedCategory)
  }

  const shouldShowReceipt = () => {
    const category = dataStorage.value.formData.category
    const membership = dataStorage.value.formData.membership || []

    if (!category) return false

    // Show receipt if category explicitly requires it
    if (category.receipt === true) return true

    // Show receipt if category has member requirements
    if (category.member?.length > 0) {
      // Show if user has no memberships
      if (membership.length === 0) return true

      // Show if user's memberships don't match category requirements
      if (!category.member.some(m => membership.includes(m))) return true
    }

    return false
  }

  // Filter categories based on membership
  const filteredCategories = dataStorage.value.formData.membership?.length > 0
    ? dataStorage.value.categories.filter(category =>
      category.member?.some(m => dataStorage.value.formData.membership.includes(m))
    )
    : dataStorage.value.categories

  return (
    <div className={`${styles.summaryContainer} ${styles.step}`}>
      <h3>Seleção da Categoria</h3>
      <div>
        {errors.category && (
          <span className={styles.errorMessageModal}>{errors.category}</span>
        )}
      </div>
      <div className={styles.wrapper}>
        <div className={styles.categoriesGrid} >
          {filteredCategories.map((category, index) => (
            <CategoryCard
              key={index}
              category={category}
              isSelected={dataStorage.value.formData.category?.title === category.title}
              getCurrentPrice={getCurrentPrice}
              onSelect={handleCategorySelect}
            />
          ))}
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
          {dataStorage.value.formData.category?.dayUse && (
            <div data-error="days">
              <DayUse
                selectedDay={dataStorage.value.formData.selectedDay}
                availableDays={dataStorage.value.formData.category.dayUse}
                onDaySelect={handleDaySelect}
                error={errors.days}
              />
            </div>
          )}

          {dataStorage.value.formData.category?.curses && (
            <div data-error="course">
              <Course
                selectedCourse={dataStorage.value.formData.selectedCourse}
                availableCourses={dataStorage.value.formData.category.curses}
                onCourseSelect={handleCourseSelect}
                error={errors.course}
              />
            </div>
          )}

          {shouldShowReceipt() && (
            <div data-error="receipt">
              <Receipt
                receipt={dataStorage.value.formData.receipt}
                onFileChange={handleFileChange}
                onFileRemove={() => handleFileChange(null)}
                error={errors.receipt}
              />
            </div>
          )}
        </form>
      </div>
      <div className={styles.buttonGroup}>
        <button
          type="button" onClick={onPrevious} className={styles.secondaryButton} >
          Anterior
        </button>
        <button
          type="button"
          onClick={() => formRef.current?.requestSubmit()}
          className={`${styles.primaryButton}`} >
          Próximo
        </button>
      </div>
    </div>
  )
}

export default CategorySelection
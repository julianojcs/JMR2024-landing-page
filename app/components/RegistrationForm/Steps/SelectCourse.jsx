'use client'

import { useState, useEffect } from 'react'
import styles from './Steps.module.css'

const SelectCourse = ({ tableSection, initialData, onNext }) => {
  const [selectedCourse, setSelectedCourse] = useState('')
  const [coursePrice, setCoursePrice] = useState('')
  const [requiresDocument, setRequiresDocument] = useState(false)
  const [document, setDocument] = useState(null)

  useEffect(() => {
    if (initialData) {
      setSelectedCourse(initialData.course || '')
      setCoursePrice(initialData.price || '')
      setDocument(initialData.document || null)

      if (initialData.course) {
        const courseRow = tableSection.table.rows.find(row => row.cells[0] === initialData.course)
        const validationObj = courseRow.cells.find(cell =>
          typeof cell === 'object' && 'comprovante' in cell
        )
        setRequiresDocument(validationObj?.comprovante || false)
      }
    }
  }, [initialData, tableSection])

  const getCurrentPriceIndex = () => {
    const today = new Date()
    const dates = tableSection.bestBefore.date

    for (let i = 0; i < dates.length; i++) {
      const dateLimit = new Date(
        dates[i].slice(0, 4),
        dates[i].slice(4, 6) - 1,
        dates[i].slice(6, 8)
      )
      if (today <= dateLimit) {
        return i + tableSection.bestBefore.rowStart
      }
    }
    return dates.length + tableSection.bestBefore.rowStart - 1
  }

  const handleCourseChange = (e) => {
    const courseName = e.target.value
    setSelectedCourse(courseName)

    if (!courseName) {
      setCoursePrice('')
      setRequiresDocument(false)
      return
    }

    const courseRow = tableSection.table.rows.find(row => row.cells[0] === courseName)
    const validationObj = courseRow.cells.find(cell =>
      typeof cell === 'object' && 'comprovante' in cell
    )

    const priceIndex = getCurrentPriceIndex()
    setCoursePrice(formatPrice(courseRow.cells[priceIndex]))
    setRequiresDocument(validationObj?.comprovante || false)
  }

  const formatPrice = (price) => {
    const value = parseFloat(price.replace('R$', '').replace(',', '.').trim())
    const [reais, centavos] = value.toFixed(2).split('.')
    return (
      <span className={styles.priceValue}>
        R$ {reais}<sup className={styles.cents}>,{centavos}</sup>
      </span>
    )
  }

  const handleFileChange = (e) => {
    setDocument(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!selectedCourse) return

    const data = {
      course: selectedCourse,
      price: coursePrice,
      document: requiresDocument ? document : null
    }

    onNext(data)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.step}>
      <div className={styles.formGroup}>
        <label>Selecione o Curso<span className={styles.required}>*</span></label>
        <select
          className={styles.select}
          value={selectedCourse}
          onChange={handleCourseChange}
          required
        >
          <option value="">Selecione um curso</option>
          {tableSection.table.rows.map((row, index) => (
            <option key={index} value={row.cells[0]}>
              {row.cells[0]}
            </option>
          ))}
        </select>
      </div>

      {selectedCourse && (
        <div className={styles.formGroup}>
          <div className={styles.monetaryLabel}>Valor:</div>
          <div className={styles.price}>
            {coursePrice}
          </div>
        </div>
      )}

      {requiresDocument && (
        <div className={styles.formGroup}>
          <p className={styles.warning}>
            {tableSection.subtitle.text[0]}
          </p>
          <div className={styles.fileLabel}>
            Upload do Comprovante
            <input
              type="file"
              onChange={handleFileChange}
              className={styles.fileInput}
              required
            />
          </div>
        </div>
      )}

      <div className={styles.buttonGroup}>
        <button
          type="submit"
          className={styles.primaryButton}
          disabled={!selectedCourse || (requiresDocument && !document)}
        >
          Próximo
        </button>
      </div>
    </form>
  )
}

export default SelectCourse
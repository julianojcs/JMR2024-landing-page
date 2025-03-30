'use client'

import styles from './DayUse.module.css'

const DayUse = ({
  selectedDay,
  availableDays,
  onDaySelect,
  error
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>Selecione o dia<span className={styles.required}>*</span></label>
      <div className={styles.daysGrid}>
        {availableDays.map(day => (
          <button
            key={day}
            type="button"
            className={`${styles.dayButton} ${
              selectedDay === day ? styles.selected : ''
            }`}
            onClick={() => onDaySelect(day)}
          >
            Dia {day}
          </button>
        ))}
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}

export default DayUse
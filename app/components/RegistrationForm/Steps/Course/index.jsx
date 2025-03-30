'use client'

import styles from './Course.module.css'

const Course = ({
  selectedCourse,
  availableCourses,
  onCourseSelect,
  error
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>Selecione o curso<span className={styles.required}>*</span></label>
      <div className={styles.coursesGrid}>
        {availableCourses.map(course => (
          <button
            key={course}
            type="button"
            className={`${styles.courseButton} ${
              selectedCourse === course ? styles.selected : ''
            }`}
            onClick={() => onCourseSelect(course)}
          >
            {course}
          </button>
        ))}
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}

export default Course
'use client'

import { useRef } from 'react'
import styles from './Receipt.module.css'

const Receipt = ({
  receipt,
  onFileChange,
  onFileRemove,
  error
}) => {
  const fileInputRef = useRef(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        onFileChange(null, 'O arquivo deve ter no máximo 5MB')
        return
      }
      onFileChange(file)
    }
  }

  return (
    <div className={styles.container}>
      <label>Comprovante<span className={styles.required}>*</span></label>
      {error && <span className={styles.error}>{error}</span>}
      <div
        className={styles.dropZone}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".pdf,.jpg,.jpeg,.png"
          className={styles.fileInput}
        />
        {receipt ? (
          <div className={styles.fileInfo}>
            <span>{receipt.name}</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                onFileRemove()
              }}
              className={styles.removeButton}
            >
              ✕
            </button>
          </div>
        ) : (
          <div className={styles.content}>
            <p>Clique para adicionar o comprovante</p>
            <small>PDF, JPG ou PNG até 5MB</small>
          </div>
        )}
      </div>
    </div>
  )
}

export default Receipt
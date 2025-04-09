'use client'

import { useRef } from 'react'
import styles from './Receipt.module.css'

// Componente de ícone de lixeira como SVG inline
const TrashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="13"
    fill="currentColor"
    viewBox="0 0 16 16"
    aria-hidden="true"
    className={styles.trashIcon}
  >
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
  </svg>
)
// Componente de ícone de documento como SVG inline
const FileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="16"
    fill="currentColor"
    viewBox="0 0 384 512"
    className={styles.fileIcon}
  >
    <path d="M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"
    />
  </svg>
);

const Receipt = ({
  receipt,
  onFileChange,
  onFileRemove,
  error,
  isModal = false
}) => {
  const fileInputRef = useRef(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (file.size > 3 * 1024 * 1024) {
        onFileChange(null, 'O arquivo deve ter no máximo 3MB')
        return
      }
      onFileChange(file)
    }
  }

  return (
    <div className={`${isModal ? styles.modalReceiptContainer : ''}`}>
      <div className={styles.title}>
        <label>Comprovante<span className={styles.required}>*</span></label>
        {error && <span className={styles.error}>{error}</span>}
      </div>
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
        {receipt && receipt?.name ? (
          <div className={styles.fileInfo}>
            <div className={styles.fileName}>
              <FileIcon />
              <span>{receipt.name}</span>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                onFileRemove()
              }}
              className={styles.removeButton}
              aria-label="Remover arquivo"
              title="Remover arquivo"
            >
              <div className={styles.removeControl}>
                <TrashIcon /><span>Excluir</span>
              </div>
            </button>
          </div>
        ) : (
          <div className={styles.content}>
            <p>Clique para adicionar o comprovante</p>
              <small>PDF, JPG ou PNG até 3MB</small>
          </div>
        )}
      </div>
    </div>
  )
}

export default Receipt
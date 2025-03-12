'use client'
import { useEffect } from 'react'
import styles from './ModalPhotoPreview.module.css'
import AvatarCard from '@/app/components/AvatarCard'

const ModalPhotoPreview = ({
  isOpen,
  onClose,
  onConfirm,
  photoPreview,
  speakerName
}) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>×</button>

        <div className={styles.content}>
          <h2 className={styles.title}>Prévia da Foto</h2>

          <p className={styles.previewText}>
            Esta é a forma como sua foto será exibida na Landing Page da JMR. 
            Por favor, verifique se a foto está adequada.
          </p>

          <div className={styles.avatarPreview}>
            <AvatarCard
              photo={photoPreview}
              full_name={speakerName || 'Seu Nome'}
              width={150}
              height={150}
            />
          </div>

          <div className={styles.buttonGroup}>
            <button
              onClick={onConfirm}
              className={styles.confirmButton}
            >
              Confirmar Foto
            </button>
            <button
              onClick={onClose}
              className={styles.cancelButton}
            >
              Escolher Outra Foto
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalPhotoPreview
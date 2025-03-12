'use client'

import { useEffect } from 'react'
import styles from './NotificationBanner.module.css'

const BANNER_TYPES = {
  error: {
    bgColor: 'var(--error-bg)',
    textColor: 'var(--error-text)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"/>
      </svg>
    )
  },
  success: {
    bgColor: 'var(--success-bg)',
    textColor: 'var(--success-text)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
      </svg>
    )
  },
  info: {
    bgColor: 'var(--info-bg)',
    textColor: 'var(--info-text)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
      </svg>
    )
  },
  warning: {
    bgColor: 'var(--warning-bg)',
    textColor: 'var(--warning-text)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
      </svg>
    )
  }
}

export default function NotificationBanner({
  message,
  type = 'info',
  position = 'top',
  onClose,
  autoClose = null
}) {
  useEffect(() => {
    if (autoClose && onClose) {
      const timer = setTimeout(() => {
        onClose()
      }, autoClose)
      return () => clearTimeout(timer)
    }
  }, [autoClose, onClose])

  const bannerType = BANNER_TYPES[type] || BANNER_TYPES.info

  return (
    <div className={`${styles.banner} ${styles[position]}`} style={{ backgroundColor: bannerType.bgColor }}>
      <div className={styles.bannerContent} style={{ color: bannerType.textColor }}>
        <span className={styles.icon}>{bannerType.icon}</span>
        <span className={styles.message}>{message}</span>
        {onClose && (
          <button
            onClick={onClose}
            className={styles.closeButton}
            aria-label="Fechar notificação"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}
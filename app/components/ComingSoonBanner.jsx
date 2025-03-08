"use client"

import { useEffect, useState } from 'react'
import styles from './ComingSoonBanner.module.css'

const ComingSoonBanner = ({ sessionItem, scale=1 }) => {
  const [isVisible, setIsVisible] = useState(false)

  const scaleStyle = {
    transform: typeof scale === 'number' ? `scale(${scale})` : 'scale(1)'
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={styles.wrapper} style={scaleStyle}>
      <div
        className={`${styles.banner} ${isVisible ? styles.visible : ''}`}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 1s ease, transform 1s ease'
        }}
      >
        <h2>Programação...</h2>
        <p>{sessionItem} do evento será divulgada em breve.</p>
      </div>
    </div>
  )
}

export default ComingSoonBanner
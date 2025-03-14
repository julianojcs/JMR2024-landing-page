'use client'

import Image from 'next/image'
import styles from './Introduction.module.css'

export default function Introduction({ introduction }) {
  return (
    <section className={styles.container}>
      <div className={styles.textContent}>
        {introduction.text.map((paragraph, index) => (
          <p key={index} className={index === 0 ? styles.greeting : styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </div>

      <div className={styles.hosts}>
        {introduction.host.map((host, index) => (
          <div key={index} className={styles.hostCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={host.imagePath}
                alt={host.name}
                width={180}
                height={180}
                className={styles.hostImage}
              />
            </div>
            <div className={styles.hostInfo}>
              <h3 className={styles.hostName}>{host.name}</h3>
              <p className={styles.hostTitle}>{host.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
'use client'

import Link from 'next/link'
import styles from '../not-found.module.css'

export default function YearNotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Evento não encontrado</h2>
        <p className={styles.description}>
          O evento que você está procurando não está disponível em nosso sistema.
        </p>
        <Link href="/" className={styles.button}>
          Voltar para Home
        </Link>
      </div>
    </div>
  )
}
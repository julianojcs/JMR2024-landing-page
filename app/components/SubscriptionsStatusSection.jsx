'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './SubscriptionsStatusSection.module.css'
import Modal from './Modal'
import SubscriptionStatus from './SubscriptionsStatus'

export default function SubscriptionsStatusSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <section className={styles.container} id='subscriptions-status'>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Acompanhe sua Inscrição</h2>
          <p className={styles.description}>
            Já se inscreveu para a JMR/CIM 2025? Verifique o status da sua inscrição,
            acesse sua fatura e confira todos os detalhes de seu registro.
          </p>
          <button
            className={styles.checkButton}
            onClick={openModal}
          >
            Verificar Status da Inscrição
          </button>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/images/subscription-status-illustration.svg"
            alt="Verificação de status da inscrição"
            width={300}
            height={250}
            // fill
            className={styles.illustration}
          />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <SubscriptionStatus />
      </Modal>
    </section>
  )
}
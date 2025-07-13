'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import styles from './confirmation.module.css'
import SubscriptionsStatusSection from '/app/components/SubscriptionsStatusSection'
import { FaCheckCircle, FaExclamationTriangle, FaSpinner } from 'react-icons/fa'

export default function PaymentConfirmationPage() {
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [statusInfo, setStatusInfo] = useState({
    title: 'Processando...',
    message: 'Estamos verificando o status do seu pagamento.',
    icon: <FaSpinner className={styles.spinnerIcon} />,
    type: 'processing'
  })

  useEffect(() => {
    // Simulação de carregamento para dar feedback ao usuário
    const timer = setTimeout(() => {
      // Determinar o tipo de mensagem com base no parâmetro da URL (se houver)
      // Na verdade, não estamos recebendo parâmetros, mas podemos usar isso no futuro
      const status = searchParams.get('status') || 'success'

      if (status === 'success' || status === 'pending') {
        setStatusInfo({
          title: 'Recebemos sua inscrição!',
          message: 'Seu processo de inscrição foi concluído com sucesso.',
          icon: <FaCheckCircle className={styles.successIcon} />,
          type: 'success'
        })
      } else {
        setStatusInfo({
          title: 'Atenção!',
          message: 'É necessário verificar o status do seu pagamento.',
          icon: <FaExclamationTriangle className={styles.warningIcon} />,
          type: 'warning'
        })
      }

      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [searchParams])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.statusCard}>
          <div className={styles.iconContainer}>
            {statusInfo.icon}
          </div>

          <h1 className={styles.title}>{statusInfo.title}</h1>
          <p className={styles.message}>{statusInfo.message}</p>

          {!loading && (
            <div className={styles.actions}>
              <Link href="/" className={styles.homeButton}>
                Voltar para a página inicial
              </Link>
            </div>
          )}
        </div>

        {!loading && (
          <>
            <div className={styles.separator}></div>
            <div className={styles.statusSection}>
              <SubscriptionsStatusSection />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
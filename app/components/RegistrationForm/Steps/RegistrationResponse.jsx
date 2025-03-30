'use client'

import Link from 'next/link'
import styles from './RegistrationResponse.module.css'

const RegistrationResponse = ({
  paymentResponse,
  uploadError,
  categoryTitle,
  personalInfo,
  price,
  selectedDay,
  selectedCourse
}) => {
  return (
    <div className={`${styles.summaryContainer} ${styles.step}`}>
      <h3 className={styles.summaryTitle}>Confirmação de Inscrição</h3>
      <div className={styles.summarySection}>
        <h3 className={styles.subtitle}>Resumo da Inscrição</h3>
        <div className={styles.summaryItem}>
          <label>Nome:</label>
          <span>{personalInfo.fullName}</span>
        </div>
        <div className={styles.summaryItem}>
          <label>Categoria:</label>
          <span>{categoryTitle}</span>
        </div>
        {selectedDay && (
          <div className={styles.summaryItem}>
            <label>Dia:</label>
            <span>{selectedDay}</span>
          </div>
        )}
        {selectedCourse && (
          <div className={styles.summaryItem}>
            <label>Curso:</label>
            <span>{selectedCourse}</span>
          </div>
        )}
        <div className={styles.summaryItem}>
          <span
              className={styles.price}
              data-cents={price.split(',')[1]}
            >
              {`${price.split(',')[0]}`}
            </span>
        </div>
      </div>

      {/* Payment Links */}
      <div className={styles.paymentLinks}>
        {paymentResponse?.invoiceUrl && (
          <a
            href={paymentResponse.invoiceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.paymentButton}
          >
            Acessar Fatura
          </a>
        )}

        {paymentResponse?.bankSlipUrl && (
          <a
            href={paymentResponse.bankSlipUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadButton}
          >
            Baixar PDF da Fatura
          </a>
        )}
      </div>

      {/* Error Messages */}
      {uploadError && (
        <div className={styles.errorSection}>
          <p className={styles.errorMsg}>
            Não foi possível fazer o upload do comprovante.
            Por favor, envie o comprovante para{' '}
            <a href="mailto:apfjuliano@gmail.com">
              apfjuliano@gmail.com
            </a>
            {' '}com o ID do pagamento: {paymentResponse?.id}
          </p>
        </div>
      )}

      {/* Return Link */}
      <div className={styles.navigationSection}>
        <Link href="/" className={styles.returnButton}>
          Voltar para Página Principal
        </Link>
      </div>
    </div>
  )
}

export default RegistrationResponse
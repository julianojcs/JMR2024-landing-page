import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './SubscriptionsList.module.css';

const SubscriptionsList = ({ subscriptions }) => {
  // Estado para controlar quais cards estão expandidos
  const [expandedCards, setExpandedCards] = useState({});

  // Status styling map
  const statusMap = {
    'CONFIRMED': { label: 'Confirmado', className: styles.confirmed },
    'PENDING': { label: 'Pendente', className: styles.pending },
    'OVERDUE': { label: 'Vencido', className: styles.overdue },
    'RECEIVED': { label: 'Confirmado', className: styles.confirmed },
    'REFUNDED': { label: 'Reembolsado', className: styles.refunded },
    'CANCELED': { label: 'Cancelado', className: styles.canceled }
  };

  // Função para extrair apenas a categoria da descrição
  const extractCategory = (description) => {
    if (!description) return 'Inscrição';

    // Remove "Inscrição " do início
    const withoutPrefix = description.replace(/^Inscrição\s+/, '');

    // Extrai a primeira parte (categoria) até o primeiro hífen
    const firstHyphenIndex = withoutPrefix.indexOf(' - ');

    if (firstHyphenIndex !== -1) {
      return withoutPrefix.substring(0, firstHyphenIndex);
    }

    // Se não houver hífen, retorna o texto completo
    return withoutPrefix;
  };

  // Função para alternar a expansão de um card, fechando os demais
  const toggleCardExpansion = (index) => {
    setExpandedCards(prev => {
      // Se o card clicado já está expandido, apenas o fecha
      if (prev[index]) {
        return { ...prev, [index]: false };
      }

      // Caso contrário, fecha todos e abre apenas o clicado
      const newState = {};
      Object.keys(prev).forEach(key => {
        newState[key] = false;
      });

      return { ...newState, [index]: true };
    });
  };

  // Inicializa os cards como retraídos
  useEffect(() => {
    const initialExpandState = {};
    subscriptions.forEach((sub, index) => {
      initialExpandState[index] = false;
    });
    setExpandedCards(initialExpandState);
  }, [subscriptions]);

  // Versão alternativa que simplesmente manipula a string
  const formatDate = (dateString) => {
    if (!dateString) return '—';

    // Se a entrada é uma data ISO (YYYY-MM-DD)
    if (dateString.includes('-')) {
      const parts = dateString.split('T')[0].split('-');
      if (parts.length === 3) {
        return `${parts[2]}/${parts[1]}/${parts[0]}`; // DD/MM/YYYY
      }
    }

    // Fallback para o método padrão
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };

  // Função para determinar o texto do método de pagamento
  const getBillingTypeText = (billingType) => {
    const types = {
      'BOLETO': 'Boleto',
      'CREDIT_CARD': 'Cartão de Crédito',
      'PIX': 'Pix',
      'UNDEFINED': 'Não Definido',
    };
    return types[billingType] || billingType;
  };

  // Ícone de expansão/retração
  const ExpandIcon = ({ expanded }) => (
    <svg
      className={`${styles.expandIcon} ${expanded ? styles.expanded : ''}`}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={expanded ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <>
      {subscriptions.length === 0 ? (
        <p className={styles.noSubscriptions}>
          Você ainda não possui inscrições.
        </p>
      ) : (
        <div className={styles.list}>
          {subscriptions.map((sub, index) => {
            const isExpanded = expandedCards[index] || false;
            const categoryTitle = extractCategory(sub.description);
            const statusInfo = statusMap[sub.status] || { label: sub.status, className: '' };

            return (
              <div
                key={index}
                className={`${styles.card} ${styles.collapsible} ${isExpanded ? styles.expanded : ''}`}
                data-status={statusInfo.label}
                data-status-type={sub.status}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.headerContent}>
                    <h4 className={styles.cardTitle}>{categoryTitle}</h4>
                    <span className={styles.inscriptionDate}>
                      Inscrição: {formatDate(sub.dateCreated)}
                    </span>
                  </div>

                  <button
                    type="button"
                    className={styles.expandButton}
                    onClick={() => toggleCardExpansion(index)}
                    aria-label={isExpanded ? "Retrair" : "Expandir"}
                    title={isExpanded ? "Retrair detalhes" : "Ver detalhes"}
                  >
                    <ExpandIcon expanded={isExpanded} />
                  </button>
                </div>

                {/* Conteúdo colapsável */}
                <div className={`${styles.cardContent} ${isExpanded ? styles.visible : ''}`}>
                  <div className={styles.details}>
                    <div className={styles.detailRow}>
                      <span className={styles.fullDescription}>{sub.description}</span>
                    </div>
                    <div className={styles.detailRow}>
                      <span className={styles.detailLabel}>Valor:</span>
                      <span>R$ {sub.value.toFixed(2).replace('.', ',')}</span>
                    </div>
                    <div className={styles.detailRow}>
                      <span className={styles.detailLabel}>Data de Vencimento:</span>
                      <span>{formatDate(sub.dueDate)}</span>
                    </div>
                    <div className={styles.detailRow}>
                      <span className={styles.detailLabel}>Data de Pagamento:</span>
                      <span>{formatDate(sub.clientPaymentDate)}</span>
                    </div>
                    <div className={styles.detailRow}>
                      <span className={styles.detailLabel}>Método de Pagamento:</span>
                      <span>{getBillingTypeText(sub.billingType)}</span>
                    </div>
                  </div>

                  <div className={styles.actions}>
                    {sub.invoiceUrl && (
                      <Link href={sub.invoiceUrl} target="_blank" rel="noopener noreferrer"
                            className={styles.actionButton}>
                        <span className={styles.invoiceIcon}></span>
                        Fatura
                      </Link>
                    )}

                    {sub.bankSlipUrl && sub.status !== 'CONFIRMED' && (
                      <Link href={sub.bankSlipUrl} target="_blank" rel="noopener noreferrer"
                            className={styles.actionButton}>
                        <span className={styles.bankSlipIcon}></span>
                        Boleto
                      </Link>
                    )}

                    {sub.transactionReceiptUrl && (
                      <Link href={sub.transactionReceiptUrl} target="_blank" rel="noopener noreferrer"
                            className={styles.actionButton}>
                        <span className={styles.receiptIcon}></span>
                        Recibo
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SubscriptionsList;
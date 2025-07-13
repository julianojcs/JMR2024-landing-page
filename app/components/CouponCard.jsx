// Componente para exibir um card de cupom
import { useState } from 'react';
import styles from './CouponCard.module.css';
import { FiEdit2, FiTrash2, FiCalendar, FiDollarSign, FiUsers, FiTag, FiPackage, FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function CouponCard({ cupom, onEdit, onDelete, categories = [], products = [] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Estados possíveis dos cupons com suas respectivas configurações
  const couponStates = {
    active: {
      label: 'Ativo',
      className: styles.active,
      color: '#10b981',
      bgColor: '#ecfdf5',
      priority: 1
    },
    expired: {
      label: 'Expirado',
      className: styles.expired,
      color: '#f59e0b',
      bgColor: '#fffbeb',
      priority: 2
    },
    redeemed: {
      label: 'Esgotado',
      className: styles.redeemed,
      color: '#ef4444',
      bgColor: '#fef2f2',
      priority: 3
    },
    sold_out: {
      label: 'Vendas Encerradas',
      className: styles.soldOut,
      color: '#8b5cf6',
      bgColor: '#faf5ff',
      priority: 4
    },
    inactive: {
      label: 'Inativo',
      className: styles.inactive,
      color: '#6b7280',
      bgColor: '#f9fafb',
      priority: 5
    },
    pending: {
      label: 'Pendente',
      className: styles.pending,
      color: '#06b6d4',
      bgColor: '#f0f9ff',
      priority: 6
    }
  }

  // Função para traduzir códigos de categoria em nomes
  const getCategoryNames = (categoryCodes) => {
    if (!categoryCodes || !Array.isArray(categoryCodes)) return 'Nenhuma categoria';

    if (categoryCodes.includes(0)) {
      return 'Todas as categorias';
    }

    if (!categories.length) return 'Carregando...';

    const names = categoryCodes.map(code => {
      const category = categories.find(cat => cat.value === code);
      return category ? category.label : code;
    });

    if (names.length > 3) {
      return `${names.slice(0, 3).join(', ')} +${names.length - 3} mais`;
    }

    return names.join(', ');
  };  // Função para traduzir códigos de produto em nomes
  const getProductNames = (productCodes) => {
    if (!productCodes || !Array.isArray(productCodes)) return 'Nenhum produto';

    if (productCodes.includes('ALL')) {
      return 'Todos os produtos';
    }

    if (!products.length) return 'Carregando...';

    const names = productCodes.map(code => {
      const product = products.find(prod => prod.value === code);
      return product ? product.label : code;
    });

    if (names.length > 3) {
      return `${names.slice(0, 3).join(', ')} +${names.length - 3} mais`;
    }

    return names.join(', ');
  };

  // Função para determinar status do cupom com lógica aprimorada
  const getCouponStatus = () => {
    const now = new Date();
    const validUntil = new Date(cupom.validity.until);
    const validFrom = new Date(cupom.validity.from);

    // Verifica se o cupom está inativo
    if (!cupom.active) {
      return 'inactive';
    }

    // Verifica se o cupom ainda não iniciou
    if (validFrom > now) {
      return 'pending';
    }

    // Verifica se o cupom expirou
    if (validUntil < now) {
      return 'expired';
    }

    // Verifica se o cupom foi completamente utilizado (esgotado)
    if (cupom.usage.limit && cupom.usage.used >= cupom.usage.limit) {
      return 'redeemed';
    }

    // Verifica se está próximo do esgotamento (mais de 90% usado)
    if (cupom.usage.limit && (cupom.usage.used / cupom.usage.limit) >= 0.9) {
      return 'sold_out';
    }

    // Se passou por todas as verificações, está ativo
    return 'active';
  };

  // Função para calcular porcentagem de uso
  const getUsagePercentage = () => {
    if (!cupom.usage.limit) return 0;
    return Math.round((cupom.usage.used / cupom.usage.limit) * 100);
  };

  // Função para determinar classe da barra de progresso baseada no estado e percentual
  const getProgressFillClass = () => {
    const percentage = getUsagePercentage();

    if (status === 'redeemed') return `${styles.progressFill} ${styles.danger}`;
    if (status === 'soldOut') return `${styles.progressFill} ${styles.soldOut}`;
    if (percentage >= 90) return `${styles.progressFill} ${styles.danger}`;
    if (percentage >= 70) return `${styles.progressFill} ${styles.warning}`;

    return `${styles.progressFill} ${styles.active}`;
  };

  // Função para formatar data
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('pt-BR');
  };

  // Função para formatar valor monetário
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  // Função para obter tooltip do status
  const getStatusTooltip = () => {
    const now = new Date();
    const validUntil = new Date(cupom.validity.until);
    const validFrom = new Date(cupom.validity.from);
    const daysUntilExpiry = Math.ceil((validUntil - now) / (1000 * 60 * 60 * 24));
    const daysUntilStart = Math.ceil((validFrom - now) / (1000 * 60 * 60 * 24));

    switch (status) {
      case 'active':
        return `Cupom ativo. Expira em ${daysUntilExpiry} dias (${formatDate(cupom.validity.until)})`;
      case 'expired':
        return `Cupom expirado em ${formatDate(cupom.validity.until)}`;
      case 'redeemed':
        return `Cupom esgotado. Todas as ${cupom.usage.limit} utilizações foram consumidas`;
      case 'sold_out':
        return `Cupom quase esgotado. ${cupom.usage.limit - cupom.usage.used} utilizações restantes`;
      case 'inactive':
        return 'Cupom desativado manualmente';
      case 'pending':
        return `Cupom será ativado em ${daysUntilStart} dias (${formatDate(cupom.validity.from)})`;
      default:
        return 'Status do cupom';
    }
  };

  const status = getCouponStatus();
  const statusConfig = couponStates[status];
  const usagePercentage = getUsagePercentage();

  return (
    <div className={`${styles.cupomCard} ${statusConfig.className}`}>
      <div className={styles.header}>
        <div className={styles.mainInfo}>
          <h3 className={styles.code}>{cupom.code}</h3>
          <p className={styles.name}>{cupom.name}</p>
          <div className={styles.metaInfo}>
            <span className={styles.year}>Ano {cupom.year}</span>
            {status === 'pending' && (
              <span className={styles.badge}>
                🕐 Inicia em {formatDate(cupom.validity.from)}
              </span>
            )}
            {status === 'redeemed' && (
              <span className={`${styles.badge} ${styles.badgeDanger}`}>
                🚫 Esgotado
              </span>
            )}
            {status === 'soldOut' && (
              <span className={`${styles.badge} ${styles.badgeWarning}`}>
                🔥 Quase esgotado
              </span>
            )}
          </div>
        </div>

        <div className={styles.actions}>
          <span
            className={`${styles.status} ${statusConfig.className}`}
            style={{
              backgroundColor: statusConfig.bgColor,
              color: statusConfig.color
            }}
            title={getStatusTooltip()}
          >
            {statusConfig.label}
          </span>
          <div className={styles.buttons}>
            {onEdit && (
              <button
                className={styles.actionButton}
                onClick={() => onEdit(cupom)}
                title="Editar cupom"
              >
                <FiEdit2 />
              </button>
            )}
            {onDelete && (
              <button
                className={`${styles.actionButton} ${styles.deleteBtn}`}
                onClick={() => onDelete(cupom)}
                title="Excluir cupom"
              >
                <FiTrash2 />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className={styles.discount}>
        <div className={styles.discountValue}>
          {cupom.discount.type === 'PERCENTAGE'
            ? `${cupom.discount.value}% OFF`
            : formatCurrency(cupom.discount.value)
          }
        </div>
        {cupom.discount.type === 'PERCENTAGE' && cupom.discount.maxAmount && (
          <span className={styles.maxDiscount}>
            Máx. {formatCurrency(cupom.discount.maxAmount)}
          </span>
        )}
      </div>

      {/* Botão para expandir/colapsar detalhes */}
      <button
        className={styles.expandButton}
        onClick={() => setIsExpanded(!isExpanded)}
        type="button"
      >
        <span>{isExpanded ? 'Ocultar detalhes' : 'Ver detalhes'}</span>
        {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
      </button>

      {/* Detalhes expandidos */}
      {isExpanded && (
        <div className={styles.details}>
          {/* Resumo básico */}
          <div className={styles.detailItem}>
            <FiCalendar className={styles.icon} />
            <div className={styles.detailContent}>
              <span className={styles.label}>Válido até</span>
              <span className={styles.value}>{formatDate(cupom.validity.until)}</span>
            </div>
          </div>

          <div className={styles.detailItem}>
            <FiUsers className={styles.icon} />
            <div className={styles.detailContent}>
              <span className={styles.label}>Usos</span>
              <span className={styles.value}>{cupom.usage.used} / {cupom.usage.limit || '∞'}</span>
            </div>
          </div>

          <div className={styles.detailItem}>
            <FiCalendar className={styles.icon} />
            <div className={styles.detailContent}>
              <span className={styles.label}>Período de Validade</span>
              <span className={styles.value}>
                {formatDate(cupom.validity.from)} - {formatDate(cupom.validity.until)}
              </span>
            </div>
          </div>

          <div className={styles.detailItem}>
            <FiDollarSign className={styles.icon} />
            <div className={styles.detailContent}>
              <span className={styles.label}>Valor Mínimo</span>
              <span className={styles.value}>
                {formatCurrency(cupom.restrictions.minOrderValue)}
              </span>
            </div>
          </div>

          <div className={styles.detailItem}>
            <FiUsers className={styles.icon} />
            <div className={styles.detailContent}>
              <span className={styles.label}>Limite por Usuário</span>
              <span className={styles.value}>
                {cupom.usage.limitPerUser || '∞'} usos
              </span>
            </div>
          </div>

          <div className={styles.detailItem}>
            <FiTag className={styles.icon} />
            <div className={styles.detailContent}>
              <span className={styles.label}>Categorias</span>
              <span className={styles.value}>
                {getCategoryNames(cupom.restrictions.applicableCategories)}
              </span>
            </div>
          </div>

          <div className={styles.detailItem}>
            <FiPackage className={styles.icon} />
            <div className={styles.detailContent}>
              <span className={styles.label}>Produtos</span>
              <span className={styles.value}>
                {getProductNames(cupom.restrictions.applicableProducts)}
              </span>
            </div>
          </div>

          {/* Barra de progresso de utilização */}
          {cupom.usage.limit && (
            <div className={styles.progress}>
              <div className={styles.progressInfo}>
                <span>Utilização</span>
                <span className={status === 'redeemed' ? styles.textDanger : ''}>
                  {usagePercentage}%
                </span>
              </div>
              <div className={styles.progressBar}>
                <div
                  className={getProgressFillClass()}
                  style={{
                    width: `${usagePercentage}%`
                  }}
                />
              </div>
              {status === 'redeemed' && (
                <div className={styles.progressWarning}>
                  ⚠️ Cupom esgotado - todas as utilizações foram consumidas
                </div>
              )}
              {status === 'soldOut' && (
                <div className={styles.progressAlert}>
                  🔥 Quase esgotado - poucas utilizações restantes
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

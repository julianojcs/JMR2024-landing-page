// Componente para exibir um card de cupom
import { useState } from 'react';
import styles from './CupomCard.module.css';
import { FiEdit2, FiTrash2, FiCalendar, FiDollarSign, FiUsers, FiTag, FiPackage, FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function CupomCard({ cupom, onEdit, onDelete, categories = [], products = [] }) {
  const [isExpanded, setIsExpanded] = useState(false);

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

  // Função para determinar status do cupom
  const getCupomStatus = () => {
    if (!cupom.active) return 'inactive';
    if (new Date(cupom.validity.until) < new Date()) return 'expired';
    return 'active';
  };

  // Função para calcular porcentagem de uso
  const getUsagePercentage = () => {
    if (!cupom.usage.limit) return 0;
    return Math.round((cupom.usage.used / cupom.usage.limit) * 100);
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

  const status = getCupomStatus();
  const usagePercentage = getUsagePercentage();

  return (
    <div className={`${styles.cupomCard} ${styles[status]}`}>
      <div className={styles.header}>
        <div className={styles.mainInfo}>
          <h3 className={styles.code}>{cupom.code}</h3>
          <p className={styles.name}>{cupom.name}</p>
          <span className={styles.year}>Ano {cupom.year}</span>
        </div>

        <div className={styles.actions}>
          <span className={`${styles.status} ${styles[status]}`}>
            {status === 'active' ? 'Ativo' : status === 'inactive' ? 'Inativo' : 'Expirado'}
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
                <span>{usagePercentage}%</span>
              </div>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{
                    width: `${usagePercentage}%`,
                    backgroundColor: usagePercentage >= 90 ? '#ef4444' :
                                   usagePercentage >= 70 ? '#f59e0b' : '#10b981'
                  }}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

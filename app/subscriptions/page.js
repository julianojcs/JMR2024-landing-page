"use client";

import { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import AuthGuard from '../components/AuthGuard';
import styles from './subscriptions-list.module.css';

export default function SubscriptionsListPage() {
  // Aplicar estilo global para 100% da largura
  useEffect(() => {
    // Aplicar estilos globais ao body
    const originalBodyStyle = {
      margin: document.body.style.margin,
      padding: document.body.style.padding,
      width: document.body.style.width,
      maxWidth: document.body.style.maxWidth
    };

    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.width = '100vw';
    document.body.style.maxWidth = 'none';

    // Cleanup ao desmontar o componente
    return () => {
      document.body.style.margin = originalBodyStyle.margin;
      document.body.style.padding = originalBodyStyle.padding;
      document.body.style.width = originalBodyStyle.width;
      document.body.style.maxWidth = originalBodyStyle.maxWidth;
    };
  }, []);

  // Estados para dados e filtros
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState(null);
  const [availableCoupons, setAvailableCoupons] = useState([]);
  const [availableDiscounts, setAvailableDiscounts] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]);
  const [availableProducts, setAvailableProducts] = useState([]);
  const [visibleCoupons, setVisibleCoupons] = useState(new Set());

  // Estados de filtros
  const [filters, setFilters] = useState({
    type: 'all', // all, coupons, imported
    discountValue: 'all',
    couponCode: 'all',
    category: 'all',
    product: 'all',
    search: '',
    startDate: '',
    endDate: ''
  });

  // Estados de paginação
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 25,
    total: 0,
    totalPages: 0
  });

  // Buscar todos os dados disponíveis no sistema (cupons, categorias, produtos)
  const fetchAllMetadata = async () => {
    try {
      // Buscar todas as inscrições para extrair metadados
      const response = await fetch('/api/subscriptions?limit=10000'); // Buscar TODOS os registros
      const data = await response.json();

      if (data.success) {
        const allSubscriptions = data.data || [];

        // Extrair códigos únicos de cupom
        const uniqueCouponCodes = [...new Set(
          allSubscriptions
            .filter(sub => sub.appliedCoupon?.code)
            .map(sub => sub.appliedCoupon.code)
        )].sort();

        setAvailableCoupons(uniqueCouponCodes);

        // Extrair valores únicos de desconto
        const uniqueDiscounts = [...new Set(
          allSubscriptions
            .filter(sub => sub.appliedCoupon)
            .map(sub => {
              const coupon = sub.appliedCoupon;
              if (coupon.discountType === 'PERCENTAGE') {
                return `${coupon.discountValue}%`;
              } else if (coupon.discountType === 'FIXED') {
                return `R$${coupon.discountValue.toFixed(2)}`;
              }
              return null;
            })
            .filter(Boolean)
        )].sort((a, b) => {
          // Ordenar: primeiro percentuais (do maior para o menor), depois valores fixos
          const aIsPercentage = a.includes('%');
          const bIsPercentage = b.includes('%');

          if (aIsPercentage && bIsPercentage) {
            return parseFloat(b) - parseFloat(a); // Maior para menor
          } else if (aIsPercentage && !bIsPercentage) {
            return -1;
          } else if (!aIsPercentage && bIsPercentage) {
            return 1;
          } else {
            return parseFloat(a.replace('R$', '')) - parseFloat(b.replace('R$', ''));
          }
        });

        setAvailableDiscounts(uniqueDiscounts);

        // Extrair categorias únicas
        const uniqueCategories = [...new Set(
          allSubscriptions
            .filter(sub => sub.category?.title)
            .map(sub => sub.category.title)
        )].sort();

        setAvailableCategories(uniqueCategories);

        // Extrair produtos únicos
        const uniqueProducts = [...new Set(
          allSubscriptions
            .map(sub => {
              const items = sub.selectedItems || {};
              const products = [];

              if (items.journey?.title) products.push(items.journey.title);
              if (items.workshops) items.workshops.forEach(w => products.push(w.title));
              if (items.courses) items.courses.forEach(c => products.push(c.title));
              if (items.dayUse?.title) products.push(items.dayUse.title);

              return products;
            })
            .flat()
            .filter(Boolean)
        )].sort();

        setAvailableProducts(uniqueProducts);
      }
    } catch (error) {
      console.error('Erro ao buscar metadados:', error);
    }
  };

  // Buscar dados das inscrições
  const fetchSubscriptions = async (newFilters = filters, page = 1) => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: pagination.limit.toString()
      });

      // Aplicar filtros baseados no tipo selecionado
      if (newFilters.type === 'coupons') {
        params.append('onlyCoupons', 'true');
      } else if (newFilters.type === 'imported') {
        params.append('onlyImported', 'true');
      }
      // Para 'all', não adiciona filtros específicos

      // Adicionar outros filtros
      Object.keys(newFilters).forEach(key => {
        if (key !== 'type' && newFilters[key] && newFilters[key] !== 'all' && newFilters[key] !== '') {
          params.append(key, newFilters[key]);
        }
      });

      const response = await fetch(`/api/subscriptions?${params}`);
      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || 'Erro ao carregar dados');
      }

      setSubscriptions(data.data || []);
      setStats(data.stats);

      if (data.pagination) {
        setPagination(prev => ({
          ...prev,
          page: data.pagination.page,
          total: data.pagination.total,
          totalPages: data.pagination.totalPages
        }));
      }

    } catch (err) {
      console.error('Erro ao buscar inscrições:', err);
      setError(err.message);
      setSubscriptions([]);
      setStats(null);
    } finally {
      setLoading(false);
    }
  };

  // Carregar dados na inicialização
  useEffect(() => {
    fetchAllMetadata(); // Buscar todos os metadados primeiro
    fetchSubscriptions();
  }, []);

  // Handler para mudanças nos selects (aplica automaticamente)
  const handleSelectChange = (field, value) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);
    setPagination(prev => ({ ...prev, page: 1 }));
    fetchSubscriptions(newFilters, 1);
  };

  // Handler para mudanças no campo de texto (apenas atualiza o estado)
  const handleTextChange = (field, value) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);
  };

  // Handler para aplicar filtros (apenas para campos de texto)
  const handleApplyFilters = () => {
    setPagination(prev => ({ ...prev, page: 1 }));
    fetchSubscriptions(filters, 1);
  };

  // Handler para limpar filtros
  const handleClearFilters = () => {
    const clearedFilters = {
      type: 'all',
      discountValue: 'all',
      couponCode: 'all',
      category: 'all',
      product: 'all',
      search: '',
      startDate: '',
      endDate: ''
    };
    setFilters(clearedFilters);
    setPagination(prev => ({ ...prev, page: 1 }));
    fetchSubscriptions(clearedFilters, 1);
  };

  // Verificar se há filtros aplicados (para desabilitar botão "Limpar Filtros")
  const hasActiveFilters = () => {
    return (
      filters.type !== 'all' ||
      filters.discountValue !== 'all' ||
      filters.couponCode !== 'all' ||
      filters.category !== 'all' ||
      filters.product !== 'all' ||
      filters.search !== '' ||
      filters.startDate !== '' ||
      filters.endDate !== ''
    );
  };

  // Handler para mudança de página
  const handlePageChange = (newPage) => {
    setPagination(prev => ({ ...prev, page: newPage }));
    fetchSubscriptions(filters, newPage);
  };

  // Verificar se há filtros aplicados
  const hasFiltersApplied = () => {
    return (
      filters.type !== 'all' ||
      filters.discountValue !== 'all' ||
      filters.couponCode !== 'all' ||
      filters.category !== 'all' ||
      filters.product !== 'all' ||
      filters.search !== '' ||
      filters.startDate !== '' ||
      filters.endDate !== ''
    );
  };

  // Determinar tipo do cupom
  const getCouponType = (subscription) => {
    if (!subscription.appliedCoupon || !subscription.appliedCoupon.code) {
      return 'none';
    }

    const discount = subscription.appliedCoupon.discountValue || 0;
    return discount >= 100 ? 'full' : 'partial';
  };

  // Formatar valor de desconto
  const formatDiscountValue = (subscription) => {
    if (!subscription.appliedCoupon) {
      return 'Sem desconto';
    }

    const coupon = subscription.appliedCoupon;
    if (coupon.discountType === 'PERCENTAGE') {
      return `${coupon.discountValue}%`;
    } else if (coupon.discountType === 'FIXED') {
      return `R$${coupon.discountValue.toFixed(2)}`;
    }
    return 'N/A';
  };

  // Formatar valor original/pago
  const formatOriginalPaidValue = (subscription) => {
    const originalValue = subscription.value || 0;
    const finalValue = subscription.finalValue || 0;

    return `${formatCurrency(originalValue)} / ${formatCurrency(finalValue)}`;
  };

  // Formatar valores de forma inteligente (mostra dois valores apenas se diferentes)
  const formatValueDisplay = (subscription) => {
    const originalValue = subscription.value || 0;
    const finalValue = subscription.finalValue || 0;

    // Se os valores são iguais ou não há desconto, mostra apenas o valor pago
    if (originalValue === finalValue || !subscription.appliedCoupon) {
      return formatCurrency(finalValue);
    }

    // Se há desconto, mostra valor original taxado e valor final
    return (
      <>
        <span style={{ textDecoration: 'line-through', color: '#9ca3af' }}>
          {formatCurrency(originalValue)}
        </span>
        {' → '}
        <span style={{ fontWeight: '600', color: '#059669' }}>
          {formatCurrency(finalValue)}
        </span>
      </>
    );
  };

  // Formatar CPF com pontos e traço
  const formatCPF = (cpf) => {
    if (!cpf) return 'N/A';

    // Remove tudo que não é número
    const cleanCPF = cpf.replace(/\D/g, '');

    // Verifica se tem 11 dígitos
    if (cleanCPF.length !== 11) return cpf;

    // Aplica a formatação: 123.456.789-01
    return cleanCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  };

  // Determinar tipo da inscrição (com cupom, importada do Asaas, nova)
  const getSubscriptionType = (subscription) => {
    // Verifica se tem dados de importação do Asaas
    if (subscription._importData?.importScript || subscription.asaasPaymentId) {
      return 'imported';
    }

    // Verifica se tem cupom aplicado
    if (subscription.appliedCoupon?.code) {
      return 'coupon';
    }

    // Inscrição nova normal
    return 'new';
  };

  // Obter fonte dos dados
  const getDataSource = (subscription) => {
    if (subscription._importData?.importScript) {
      return 'Importado do Asaas';
    }

    if (subscription.appliedCoupon?.code) {
      return 'Inscrição com Cupom';
    }

    return 'Inscrição Nova';
  };

  // Renderizar badge do tipo de inscrição
  const renderTypeBadge = (subscription) => {
    const type = getSubscriptionType(subscription);

    const badgeConfig = {
      imported: { text: 'Importado', className: styles.typeBadgeImported },
      coupon: { text: 'Com Cupom', className: styles.typeBadgeCoupon },
      new: { text: 'Nova', className: styles.typeBadgeNew }
    };

    const config = badgeConfig[type] || badgeConfig.new;
    return (
      <span className={`${styles.typeBadge} ${config.className}`}>
        {config.text}
      </span>
    );
  };

  // Obter nome do produto principal
  const getMainProduct = (subscription) => {
    const items = subscription.selectedItems || {};

    // Prioridade: journey > dayUse > workshops[0] > courses[0]
    if (items.journey?.title) {
      return items.journey.title;
    }

    if (items.dayUse?.title) {
      return items.dayUse.title;
    }

    if (items.workshops && items.workshops.length > 0 && items.workshops[0]?.title) {
      return items.workshops[0].title;
    }

    if (items.courses && items.courses.length > 0 && items.courses[0]?.title) {
      return items.courses[0].title;
    }

    return 'N/A';
  };

  // Exportar para Excel - busca todos os dados com filtros aplicados
  const handleExportToExcel = async () => {
    try {
      // Mostrar indicador de loading
      const originalText = document.querySelector('[data-export-btn]')?.textContent;
      const exportBtn = document.querySelector('[data-export-btn]');
      if (exportBtn) {
        exportBtn.textContent = '⏳ Preparando Excel...';
        exportBtn.disabled = true;
      }

      // Buscar TODOS os dados com os filtros aplicados (limit alto)
      const params = new URLSearchParams({
        limit: '10000' // Buscar um número alto para pegar todos os registros
      });

      // Aplicar filtros baseados no tipo selecionado
      if (filters.type === 'coupons') {
        params.append('onlyCoupons', 'true');
      } else if (filters.type === 'imported') {
        params.append('onlyImported', 'true');
      }

      // Adicionar outros filtros
      Object.keys(filters).forEach(key => {
        if (key !== 'type' && filters[key] && filters[key] !== 'all' && filters[key] !== '') {
          params.append(key, filters[key]);
        }
      });

      const response = await fetch(`/api/subscriptions?${params}`);
      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || 'Erro ao buscar dados para exportação');
      }

      const allSubscriptions = data.data || [];

      if (allSubscriptions.length === 0) {
        alert('Não há dados para exportar com os filtros aplicados');
        return;
      }

      // Preparar dados para exportação
      const exportData = allSubscriptions.map(sub => {
        // Função para obter data de check-in
        const getCheckInDate = (subscription) => {
          const items = subscription.selectedItems || {};

          // Verificar se há check-in em qualquer item
          let checkInDate = null;

          if (items.journey?.attendedAt) {
            checkInDate = items.journey.attendedAt;
          } else if (items.dayUse?.attendedAt) {
            checkInDate = items.dayUse.attendedAt;
          } else if (items.workshops?.length > 0) {
            const attendedWorkshop = items.workshops.find(w => w.attendedAt);
            if (attendedWorkshop) checkInDate = attendedWorkshop.attendedAt;
          } else if (items.courses?.length > 0) {
            const attendedCourse = items.courses.find(c => c.attendedAt);
            if (attendedCourse) checkInDate = attendedCourse.attendedAt;
          }

          return checkInDate ? new Date(checkInDate).toLocaleString('pt-BR') : 'Não fez check-in';
        };

        return {
          'Nome': sub.personalInfo?.fullName || sub.name || 'N/A',
          'Email': sub.personalInfo?.email || sub.email || 'N/A',
          'CPF': formatCPF(sub.personalInfo?.cpf || sub.cpf),
          'Telefone': sub.personalInfo?.phone || sub.phone || 'N/A',
          'Categoria': sub.category?.title || 'N/A',
          'Produto': getMainProduct(sub),
          'Código Cupom': sub.appliedCoupon?.code || sub.coupon?.code || 'N/A',
          'Desconto': formatDiscountValue(sub),
          'Valor Original': sub.financial?.originalValue || sub.value || 0,
          'Valor Pago': sub.financial?.finalValue || sub.finalValue || 0,
          'Fonte': getDataSource(sub),
          'Data Inscrição': sub.metadata?.createdAt || sub.createdAt ?
            new Date(sub.metadata?.createdAt || sub.createdAt).toLocaleDateString('pt-BR') : 'N/A',
          'Status Pagamento': translatePaymentStatus(sub.status?.payment || sub.status) || 'N/A',
          'Data/Hora Check-in': getCheckInDate(sub),
          'ID Asaas': sub.asaasPaymentId || 'N/A'
        };
      });

      // Criar planilha
      const worksheet = XLSX.utils.json_to_sheet(exportData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Inscrições');

      // Ajustar largura das colunas
      const colWidths = [
        { wch: 25 }, // Nome
        { wch: 30 }, // Email
        { wch: 15 }, // CPF
        { wch: 15 }, // Telefone
        { wch: 20 }, // Categoria
        { wch: 30 }, // Produto
        { wch: 15 }, // Código Cupom
        { wch: 15 }, // Desconto
        { wch: 12 }, // Valor Original
        { wch: 12 }, // Valor Pago
        { wch: 18 }, // Fonte
        { wch: 15 }, // Data Inscrição
        { wch: 15 }, // Status Pagamento
        { wch: 20 }, // Data/Hora Check-in
        { wch: 20 }  // ID Asaas
      ];
      worksheet['!cols'] = colWidths;

      // Gerar nome do arquivo com filtros aplicados
      let fileName = 'inscricoes';

      if (filters.type && filters.type !== 'all') {
        fileName += `_${filters.type}`;
      }

      if (filters.discountValue && filters.discountValue !== 'all') {
        fileName += `_desconto_${filters.discountValue.replace(/[^a-zA-Z0-9]/g, '_')}`;
      }

      if (filters.couponCode && filters.couponCode !== 'all') {
        fileName += `_${filters.couponCode}`;
      }

      if (filters.search) {
        fileName += '_filtrado';
      }

      fileName += `_${new Date().toISOString().split('T')[0]}.xlsx`;

      // Download do arquivo
      XLSX.writeFile(workbook, fileName);

      // Mostrar mensagem de sucesso
      alert(`✅ Excel exportado com sucesso!\n📊 ${exportData.length} registros exportados`);

    } catch (error) {
      console.error('Erro ao exportar Excel:', error);
      alert('❌ Erro ao exportar dados para Excel: ' + error.message);
    } finally {
      // Restaurar botão
      const exportBtn = document.querySelector('[data-export-btn]');
      if (exportBtn) {
        exportBtn.textContent = '📊 Exportar Excel';
        exportBtn.disabled = false;
      }
    }
  };

  // Formatador de moeda
  const formatCurrency = (value) => {
    // Garantir que o valor seja um número
    const numValue = parseFloat(value) || 0;

    // Se o valor parece estar em centavos (muito alto), dividir por 100
    const finalValue = numValue > 10000 ? numValue / 100 : numValue;

    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(finalValue).replace('R$ ', 'R$');
  };

  // Formatador de data
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  // Traduzir status de pagamento para português
  const translatePaymentStatus = (status) => {
    const statusMap = {
      'CONFIRMED': 'Confirmado',
      'COMPLETED': 'Concluído',
      'PENDING': 'Pendente',
      'FREE': 'Gratuito',
      'OVERDUE': 'Vencido',
      'CANCELED': 'Cancelado',
      'CANCELLED': 'Cancelado',
      'FAILED': 'Falhou',
      'REFUNDED': 'Reembolsado',
      'REFUND_REQUESTED': 'Estornado',
      'PROCESSING': 'Processando',
      'PAID': 'Pago',
      'RECEIVED': 'Recebido'
    };

    return statusMap[status] || status || 'N/A';
  };

  // Renderizar código do cupom com sistema de ocultar/mostrar
  const renderCouponCode = (subscription) => {
    const couponCode = subscription.appliedCoupon?.code;

    if (!couponCode || couponCode === 'N/A') {
      return <span style={{ color: '#9ca3af', fontStyle: 'italic' }}>Sem cupom</span>;
    }

    const subscriptionId = subscription.id;
    const isVisible = visibleCoupons.has(subscriptionId);

    const toggleCouponVisibility = () => {
      const newVisibleCoupons = new Set(visibleCoupons);
      if (isVisible) {
        newVisibleCoupons.delete(subscriptionId);
      } else {
        newVisibleCoupons.add(subscriptionId);
      }
      setVisibleCoupons(newVisibleCoupons);
    };

    const maskedCode = couponCode.length > 4
      ? `${couponCode.substring(0, 2)}${'*'.repeat(couponCode.length - 4)}${couponCode.substring(couponCode.length - 2)}`
      : '*'.repeat(couponCode.length);

    return (
      <div
        className={styles.couponCell}
        data-visible={isVisible}
        onClick={toggleCouponVisibility}
        title={isVisible ? 'Clique para ocultar' : 'Clique para mostrar código completo'}
      >
        <span className={styles.couponCode}>
          {isVisible ? couponCode : maskedCode}
        </span>
        <span className={styles.couponToggle}>
          {isVisible ? '🙈' : '👁️'}
        </span>
      </div>
    );
  };

  // Verificar se o produto específico teve presença marcada
  const getProductAttendance = (subscription) => {
    if (!subscription.currentProduct || !subscription.productType) {
      return false;
    }

    const items = subscription.selectedItems || {};

    switch (subscription.productType) {
      case 'journey':
        return items.journey?.attended || false;
      case 'dayUse':
        return items.dayUse?.attended || false;
      case 'workshops':
        return items.workshops?.[0]?.attended || false;
      case 'courses':
        return items.courses?.[0]?.attended || false;
      default:
        return false;
    }
  };

  // Marcar presença para um produto específico
  const handleMarkAttendance = async (subscription, attended = true) => {
    try {
      const method = attended ? 'POST' : 'DELETE';

      const requestBody = {
        subscriptionId: subscription.id,
        type: 'item',
        itemType: subscription.productType,
        itemIndex: (subscription.productType === 'workshops' || subscription.productType === 'courses') ? 0 : undefined,
        checkedBy: 'admin',
        notes: `Presença ${attended ? 'marcada' : 'desmarcada'} para ${subscription.productTitle}`
      };

      const response = await fetch('/api/attendance', {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();

      if (data.success) {
        // Recarregar os dados
        fetchSubscriptions(filters, pagination.page);
        alert(`✅ Presença ${attended ? 'marcada' : 'desmarcada'} com sucesso!`);
      } else {
        alert(`❌ Erro: ${data.message}`);
      }
    } catch (error) {
      console.error('Erro ao marcar presença:', error);
      alert('❌ Erro ao marcar presença');
    }
  };

  // Renderizar controle de presença
  const renderAttendanceControl = (subscription) => {
    const isAttended = getProductAttendance(subscription);

    return (
      <div className={styles.attendanceControl}>
        <button
          className={`${styles.attendanceBtn} ${isAttended ? styles.attendanceBtnPresent : styles.attendanceBtnAbsent}`}
          onClick={() => handleMarkAttendance(subscription, !isAttended)}
          title={isAttended ? 'Clique para desmarcar presença' : 'Clique para marcar presença'}
        >
          {isAttended ? '✅ Presente' : '❌ Ausente'}
        </button>
      </div>
    );
  };

  return (
    <AuthGuard>
      <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Gestão de Inscrições</h1>
        <p className={styles.headerSubtitle}>
          Visualize e gerencie todas as inscrições por produto: com cupons, controle de presença e registros novos
        </p>
      </header>

      {/* Estatísticas */}
      {stats && (
        <div className={styles.statsGrid}>
          <div className={`${styles.statCard} ${styles.statTotal}`}>
            <div className={styles.statNumber}>
              {stats.total}/{stats.totalOriginal || stats.total}
            </div>
            <div className={styles.statLabel}>Registros/Inscrições</div>
          </div>
          <div className={`${styles.statCard} ${styles.statFullDiscount}`}>
            <div className={styles.statNumber}>
              {stats.couponCount || 0}/{stats.couponOriginal || 0}
            </div>
            <div className={styles.statLabel}>Com Cupons</div>
          </div>
          <div className={`${styles.statCard} ${styles.statPresence}`}>
            <div className={styles.statNumber}>
              {stats.attendanceCount || 0}/{stats.absentCount || 0}
            </div>
            <div className={styles.statLabel}>Presentes/Ausentes</div>
          </div>
          <div className={`${styles.statCard} ${styles.statTotalDiscount}`}>
            <div className={styles.statNumber}>
              {stats.newCount || 0}/{stats.newOriginal || 0}
            </div>
            <div className={styles.statLabel}>Registros Novos</div>
          </div>
        </div>
      )}

      {/* Filtros */}
      <section className={styles.filtersSection}>
        <h2 className={styles.filtersTitle}>Filtros</h2>

        <div className={styles.filtersGrid}>
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Buscar por Nome ou CPF</label>
            <input
              type="text"
              className={styles.filterInput}
              placeholder="Digite o nome ou CPF..."
              value={filters.search}
              onChange={(e) => handleTextChange('search', e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleApplyFilters();
                }
              }}
            />
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Tipo de Inscrição</label>
            <select
              className={styles.filterSelect}
              value={filters.type}
              onChange={(e) => handleSelectChange('type', e.target.value)}
            >
              <option value="all">Todas as Inscrições</option>
              <option value="coupons">Apenas com Cupons</option>
              <option value="imported">Importadas do Asaas</option>
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Categoria</label>
            <select
              className={styles.filterSelect}
              value={filters.category}
              onChange={(e) => handleSelectChange('category', e.target.value)}
            >
              <option value="all">Todas as Categorias</option>
              {availableCategories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Produto</label>
            <select
              className={styles.filterSelect}
              value={filters.product}
              onChange={(e) => handleSelectChange('product', e.target.value)}
            >
              <option value="all">Todos os Produtos</option>
              {availableProducts.map(product => (
                <option key={product} value={product}>
                  {product}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Desconto</label>
            <select
              className={styles.filterSelect}
              value={filters.discountValue}
              onChange={(e) => handleSelectChange('discountValue', e.target.value)}
            >
              <option value="all">Todos os Descontos</option>
              {availableDiscounts.map(discount => (
                <option key={discount} value={discount}>
                  {discount}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Código do Cupom</label>
            <select
              className={styles.filterSelect}
              value={filters.couponCode}
              onChange={(e) => handleSelectChange('couponCode', e.target.value)}
            >
              <option value="all">Todos os Cupons</option>
              {availableCoupons.map(couponCode => (
                <option key={couponCode} value={couponCode}>
                  {couponCode}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Data Inicial</label>
            <input
              type="date"
              className={styles.filterInput}
              value={filters.startDate}
              onChange={(e) => handleSelectChange('startDate', e.target.value)}
            />
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Data Final</label>
            <input
              type="date"
              className={styles.filterInput}
              value={filters.endDate}
              onChange={(e) => handleSelectChange('endDate', e.target.value)}
            />
          </div>
        </div>

        <div className={styles.actionsBar}>
          <div className={styles.filterActions}>
            <button
              className={styles.btnFilter}
              onClick={handleApplyFilters}
              disabled={loading}
            >
              🔍 Buscar
            </button>
            <button
              className={styles.btnClear}
              onClick={handleClearFilters}
              disabled={loading || !hasActiveFilters()}
              title={!hasActiveFilters() ? 'Nenhum filtro aplicado' : 'Limpar todos os filtros'}
            >
              🗑️ Limpar Filtros
            </button>
          </div>

          <button
            className={styles.btnExport}
            onClick={handleExportToExcel}
            disabled={loading}
            data-export-btn
          >
            📊 Exportar Excel
          </button>
        </div>
      </section>

      {/* Loading */}
      {loading && (
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          Carregando dados...
        </div>
      )}

      {/* Error */}
      {error && (
        <div className={styles.error}>
          <strong>Erro:</strong> {error}
        </div>
      )}

      {/* Tabela */}
      {!loading && !error && (
        <section className={styles.tableSection}>
          <div className={styles.tableHeader}>
            <h3 className={styles.tableTitle}>
              Inscrições por Produto ({pagination.total} {pagination.total === 1 ? 'inscrição encontrada' : 'inscrições encontradas'})
            </h3>
          </div>

          {subscriptions.length > 0 ? (
            <>
              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Nome / Email</th>
                      <th>CPF</th>
                      <th>Produto</th>
                      <th>Código Cupom</th>
                      <th>Desconto</th>
                      <th>Valor</th>
                      <th>Data Inscrição</th>
                      <th>Status</th>
                      <th>Presença</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscriptions.map((subscription) => (
                      <tr key={subscription.id}>
                        <td>
                          <div className={styles.nameEmailCell}>
                            <div className={styles.userName}>{subscription.name || 'N/A'}</div>
                            <div className={styles.userEmail}>{subscription.email || 'N/A'}</div>
                          </div>
                        </td>
                        <td>{formatCPF(subscription.cpf)}</td>
                        <td>{getMainProduct(subscription)}</td>
                        <td>{renderCouponCode(subscription)}</td>
                        <td>{formatDiscountValue(subscription)}</td>
                        <td>
                          {formatValueDisplay(subscription)}
                        </td>
                        <td>{formatDate(subscription.createdAt)}</td>
                        <td>
                          <span className={`${styles.statusBadge} ${
                            subscription.paymentStatus === 'CONFIRMED' ? styles.statusConfirmed :
                            subscription.paymentStatus === 'COMPLETED' ? styles.statusConfirmed :
                            subscription.paymentStatus === 'PENDING' ? styles.statusPending :
                            subscription.paymentStatus === 'FREE' ? styles.statusConfirmed :
                            subscription.paymentStatus === 'OVERDUE' ? styles.statusOverdue :
                            subscription.paymentStatus === 'CANCELED' ? styles.statusCanceled :
                            styles.statusPending
                          }`}>
                            {translatePaymentStatus(subscription.paymentStatus) || 'N/A'}
                          </span>
                        </td>
                        <td>
                          {renderAttendanceControl(subscription)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Paginação */}
              {pagination.totalPages > 1 && (
                <div className={styles.pagination}>
                  <div className={styles.paginationInfo}>
                    Página {pagination.page} de {pagination.totalPages}
                  </div>
                  <div className={styles.paginationButtons}>
                    <button
                      className={styles.paginationBtn}
                      onClick={() => handlePageChange(pagination.page - 1)}
                      disabled={pagination.page <= 1}
                    >
                      Anterior
                    </button>

                    {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                      const pageNumber = Math.max(1, Math.min(
                        pagination.totalPages - 4,
                        pagination.page - 2
                      )) + i;

                      return (
                        <button
                          key={pageNumber}
                          className={`${styles.paginationBtn} ${
                            pageNumber === pagination.page ? styles.paginationBtnActive : ''
                          }`}
                          onClick={() => handlePageChange(pageNumber)}
                        >
                          {pageNumber}
                        </button>
                      );
                    })}

                    <button
                      className={styles.paginationBtn}
                      onClick={() => handlePageChange(pagination.page + 1)}
                      disabled={pagination.page >= pagination.totalPages}
                    >
                      Próxima
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyStateIcon}>🎫</div>
              <h3 className={styles.emptyStateTitle}>Nenhum registro encontrado</h3>
              <p className={styles.emptyStateText}>
                Não há registros de produtos que correspondam aos filtros aplicados.
              </p>
            </div>
          )}
        </section>
      )}
    </div>
    </AuthGuard>
  );
}

'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import CupomCard from '../components/CupomCard.jsx';
import CollapsibleSection from '../components/CollapsibleSection.jsx';
import CouponFormSection from '../components/CouponFormSection.jsx';
import CouponTestSection from '../components/CouponTestSection.jsx';

export default function CuponsPage() {
  const [cupons, setCupons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Estados para dados compartilhados
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  const [filters, setFilters] = useState({
    status: 'all',
    year: 'all',
    search: ''
  });
  const [pagination, setPagination] = useState({
    current: 1,
    total: 1,
    totalItems: 0
  });

  // Estados para edição e exclusão
  const [editingCupom, setEditingCupom] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [deletingCupom, setDeletingCupom] = useState(false);

  // Estados para seções colapsáveis
  const [formSectionCollapsed, setFormSectionCollapsed] = useState(false);
  const [testSectionCollapsed, setTestSectionCollapsed] = useState(false);

  // Carregar dados compartilhados (categorias e produtos)
  const loadSharedData = async () => {
    try {
      setDataLoading(true);
      const [categoriesResponse, productsResponse] = await Promise.all([
        fetch('/api/coupon-categories'),
        fetch('/api/coupon-products')
      ]);

      const [categoriesData, productsData] = await Promise.all([
        categoriesResponse.json(),
        productsResponse.json()
      ]);

      if (Array.isArray(categoriesData)) {
        setCategories(categoriesData);
      }
      if (Array.isArray(productsData)) {
        setProducts(productsData);
      }
    } catch (error) {
      console.error('Erro ao carregar dados compartilhados:', error);
    } finally {
      setDataLoading(false);
    }
  };

  // Carregar cupons
  const loadCupons = async (page = 1) => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '10'
      });

      if (filters.status !== 'all') {
        params.append('status', filters.status);
      }
      if (filters.year !== 'all') {
        params.append('year', filters.year);
      }
      if (filters.search.trim()) {
        params.append('search', filters.search.trim());
      }

      const response = await fetch(`/api/cupons?${params}`);
      const data = await response.json();

      if (data.success) {
        setCupons(data.data);
        setPagination(data.pagination);
      } else {
        setError(data.message || 'Erro ao carregar cupons');
      }
    } catch (error) {
      setError('Erro ao conectar com o servidor');
    } finally {
      setLoading(false);
    }
  };

  // Carregar dados compartilhados na inicialização
  useEffect(() => {
    loadSharedData();
  }, []);

  // Carregar cupons quando filtros mudarem
  useEffect(() => {
    loadCupons(1);
  }, [filters]);

  // Callback para sucesso no formulário
  const handleFormSuccess = (message) => {
    setSuccess(message);
    setError('');
    setEditingCupom(null);
    loadCupons(); // Recarregar lista
  };

  // Callback para erro no formulário
  const handleFormError = (message) => {
    setError(message);
    setSuccess('');
  };

  // Callback para cancelar edição
  const handleCancelEdit = () => {
    setEditingCupom(null);
    setError('');
    setSuccess('');
  };

  // Função para editar cupom
  const handleEditCupom = (cupom) => {
    setEditingCupom(cupom);
    setError('');
    setSuccess('');
  };

  // Função para confirmar exclusão
  const handleDeleteCupom = (cupom) => {
    setShowDeleteConfirm(cupom);
  };

  // Função para executar exclusão
  const handleConfirmDelete = async () => {
    if (!showDeleteConfirm) return;

    setDeletingCupom(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch(`/api/cupons/${showDeleteConfirm.id}`, {
        method: 'DELETE'
      });

      const data = await response.json();

      if (data.success) {
        setSuccess('Cupom excluído com sucesso!');
        setShowDeleteConfirm(null);
        loadCupons(); // Recarregar lista
      } else {
        setError(data.message || 'Erro ao excluir cupom');
      }
    } catch (error) {
      setError('Erro ao conectar com o servidor');
    } finally {
      setDeletingCupom(false);
    }
  };

  // Função para cancelar exclusão
  const handleCancelDelete = () => {
    setShowDeleteConfirm(null);
  };

  // Gerar anos para filtro
  const getYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear - 2; i <= currentYear + 2; i++) {
      years.push(i);
    }
    return years;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Gerenciamento de Cupons</h1>
        <p className={styles.subtitle}>
          Visualize e gerencie todos os cupons de desconto do sistema
        </p>
      </div>

      <div className={styles.mainContent}>
        {/* Seção de Cupons */}
        <div className={styles.leftColumn}>
          <section className={styles.cuponsSection}>
            <h2 className={styles.sectionTitle}>Cupons Existentes</h2>

            {/* Filtros */}
            <div className={styles.filters}>
              <div className={styles.searchContainer}>
                <input
                  type="text"
                  placeholder="Pesquisar por nome ou código..."
                  className={styles.searchInput}
                  value={filters.search}
                  onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                />
              </div>

              <select
                className={styles.filterSelect}
                value={filters.status}
                onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
              >
                <option value="all">Todos os Status</option>
                <option value="active">Ativos</option>
                <option value="inactive">Inativos</option>
                <option value="expired">Expirados</option>
              </select>

              <select
                className={styles.filterSelect}
                value={filters.year}
                onChange={(e) => setFilters(prev => ({ ...prev, year: e.target.value }))}
              >
                <option value="all">Todos os Anos</option>
                {getYearOptions().map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            {/* Mensagens */}
            {error && <div className={styles.error}>{error}</div>}
            {success && <div className={styles.success}>{success}</div>}

            {/* Lista de Cupons */}
            {loading ? (
              <div className={styles.loading}>Carregando cupons...</div>
            ) : cupons.length === 0 ? (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>🎫</div>
                <h3>Nenhum cupom encontrado</h3>
                <p>Crie um novo cupom usando o formulário ao lado</p>
              </div>
            ) : (
              <>
                <div className={styles.cuponsGrid}>
                  {cupons.map((cupom) => (
                    <CupomCard
                      key={cupom._id}
                      cupom={cupom}
                      onEdit={handleEditCupom}
                      onDelete={handleDeleteCupom}
                      categories={categories}
                      products={products}
                    />
                  ))}
                </div>

                {/* Paginação */}
                {pagination.total > 1 && (
                  <div className={styles.pagination}>
                    <button
                      className={styles.paginationButton}
                      disabled={pagination.current === 1}
                      onClick={() => loadCupons(pagination.current - 1)}
                    >
                      Anterior
                    </button>

                    <span className={styles.paginationInfo}>
                      Página {pagination.current} de {pagination.total}
                    </span>

                    <button
                      className={styles.paginationButton}
                      disabled={pagination.current === pagination.total}
                      onClick={() => loadCupons(pagination.current + 1)}
                    >
                      Próxima
                    </button>
                  </div>
                )}
              </>
            )}
          </section>
        </div>

        {/* Seções Colapsáveis */}
        <div className={styles.rightColumn}>
          {/* Seção do Formulário */}
          <CollapsibleSection
            title={editingCupom ? 'Editar Cupom' : 'Criar Novo Cupom'}
            collapsed={formSectionCollapsed}
            onToggle={() => setFormSectionCollapsed(!formSectionCollapsed)}
          >
            <CouponFormSection
              editingCupom={editingCupom}
              onSuccess={handleFormSuccess}
              onError={handleFormError}
              onCancelEdit={handleCancelEdit}
              categories={categories}
              products={products}
              dataLoading={dataLoading}
            />
          </CollapsibleSection>

          {/* Seção de Teste */}
          <CollapsibleSection
            title="Terminal de Validação"
            collapsed={testSectionCollapsed}
            onToggle={() => setTestSectionCollapsed(!testSectionCollapsed)}
            variant="terminal"
          >
            <CouponTestSection
              categories={categories}
              products={products}
              dataLoading={dataLoading}
            />
          </CollapsibleSection>
        </div>
      </div>

      {/* Modal de Confirmação de Exclusão */}
      {showDeleteConfirm && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>Confirmar Exclusão</h3>
            <p>
              Tem certeza que deseja excluir o cupom <strong>{showDeleteConfirm.code}</strong>?
            </p>
            <p className={styles.deleteWarning}>
              ⚠️ Esta ação não pode ser desfeita.
            </p>
            <div className={styles.modalActions}>
              <button
                onClick={handleCancelDelete}
                className={styles.cancelButton}
                disabled={deletingCupom}
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmDelete}
                className={styles.deleteButton}
                disabled={deletingCupom}
              >
                {deletingCupom ? 'Excluindo...' : 'Excluir'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
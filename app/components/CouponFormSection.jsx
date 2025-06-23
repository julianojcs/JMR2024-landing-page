'use client';

import { useState, useEffect } from 'react';
import Multselector from './Multselector';
import styles from './CouponFormSection.module.css';

export default function CouponFormSection({
  editingCoupon,
  onSuccess,
  onError,
  onCancelEdit,
  categories = [],
  products = [],
  dataLoading = false
}) {
  // Estados do formulário restaurado para formato original
  const getInitialFormData = () => ({
    code: '',
    name: '',
    year: new Date().getFullYear().toString(),
    discountType: 'PERCENTAGE',
    discountValue: '',
    maxAmount: '',
    usageLimit: '',
    limitPerUser: '1',
    validFrom: '',
    validUntil: '',
    minOrderValue: '0',
    applicableCategories: [0],
    applicableProducts: ['ALL'],
    active: true
  });

  const [formData, setFormData] = useState(getInitialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [touchedFields, setTouchedFields] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Atualizar formulário quando editingCoupon mudar
  useEffect(() => {
    if (editingCoupon) {
      setFormData({
        code: editingCoupon.code || '',
        name: editingCoupon.name || '',
        year: editingCoupon.year?.toString() || new Date().getFullYear().toString(),
        discountType: editingCoupon.discount?.type || 'PERCENTAGE',
        discountValue: editingCoupon.discount?.value?.toString() || '',
        maxAmount: editingCoupon.discount?.maxAmount?.toString() || '',
        usageLimit: editingCoupon.usage?.limit?.toString() || '',
        limitPerUser: editingCoupon.usage?.limitPerUser?.toString() || '1',
        validFrom: editingCoupon.validity?.from ? new Date(editingCoupon.validity.from).toISOString().split('T')[0] : '',
        validUntil: editingCoupon.validity?.until ? new Date(editingCoupon.validity.until).toISOString().split('T')[0] : '',
        minOrderValue: editingCoupon.restrictions?.minOrderValue?.toString() || '0',
        applicableCategories: editingCoupon.restrictions?.applicableCategories || [0],
        applicableProducts: editingCoupon.restrictions?.applicableProducts || ['ALL'],
        active: editingCoupon.active !== false
      });
      setTouchedFields({});
      setHasSubmitted(false);
    } else {
      // Reset para novo cupom
      setFormData(getInitialFormData());
      setTouchedFields({});
      setHasSubmitted(false);
    }
  }, [editingCoupon]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Função para marcar campo como tocado
  const handleFieldTouch = (fieldName) => {
    setTouchedFields(prev => ({
      ...prev,
      [fieldName]: true
    }));
  };

  // Manipular mudanças na seleção de categorias
  const handleCategoriesChange = (selectedOptions) => {
    if (!selectedOptions) {
      setFormData(prev => ({
        ...prev,
        applicableCategories: []
      }));
      return;
    }

    const values = selectedOptions.map(option => option.value);
    const currentValues = formData.applicableCategories || [];
    const wasAllSelected = values.includes(0) && !currentValues.includes(0);

    let finalValues = values;

    if (wasAllSelected) {
      finalValues = [0];
    } else if (values.includes(0) && values.length > 1) {
      finalValues = values.filter(val => val !== 0);
    }

    setFormData(prev => ({
      ...prev,
      applicableCategories: finalValues
    }));
  };

  // Manipular mudanças na seleção de produtos
  const handleProductsChange = (selectedOptions) => {
    if (!selectedOptions) {
      setFormData(prev => ({
        ...prev,
        applicableProducts: []
      }));
      return;
    }

    const values = selectedOptions.map(option => option.value);
    const currentValues = formData.applicableProducts || [];
    const wasAllSelected = values.includes('ALL') && !currentValues.includes('ALL');

    let finalValues = values;

    if (wasAllSelected) {
      finalValues = ['ALL'];
    } else if (values.includes('ALL') && values.length > 1) {
      finalValues = values.filter(val => val !== 'ALL');
    }

    setFormData(prev => ({
      ...prev,
      applicableProducts: finalValues
    }));
  };

  // Converter valores de categorias para formato do Multselector
  const getSelectedCategories = () => {
    if (!formData.applicableCategories || !categories.length) return [];
    return categories.filter(cat =>
      formData.applicableCategories.includes(cat.value)
    );
  };

  // Converter valores de produtos para formato do Multselector
  const getSelectedProducts = () => {
    if (!formData.applicableProducts || !products.length) return [];
    return products.filter(product =>
      formData.applicableProducts.includes(product.value)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    setSubmitting(true);

    try {
      const method = editingCoupon ? 'PUT' : 'POST';
      const url = editingCoupon ? `/api/coupons/${editingCoupon.id}` : '/api/coupons';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        onSuccess?.(editingCoupon ? 'Coupon atualizado com sucesso!' : 'Coupon criado com sucesso!');
        if (!editingCoupon) {
          // Reset form for new coupon
          setFormData(getInitialFormData());
          setTouchedFields({});
          setHasSubmitted(false);
        }
      } else {
        onError?.(data.message || 'Erro ao salvar cupom');
      }
    } catch (error) {
      onError?.('Erro ao conectar com o servidor');
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = () => {
    setFormData(getInitialFormData());
    setTouchedFields({});
    setHasSubmitted(false);
    onCancelEdit?.();
  };

  // Função para verificar se deve mostrar erro
  const shouldShowError = (fieldName, value) => {
    if (!hasSubmitted && !touchedFields[fieldName]) return false;

    // Verificar se é obrigatório e está vazio
    const requiredFields = ['code', 'name', 'year', 'discountType', 'discountValue', 'limitPerUser', 'validFrom', 'validUntil', 'minOrderValue'];
    if (requiredFields.includes(fieldName) && (!value || value === '')) {
      return true;
    }

    return false;
  };

  const getYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear - 2; i <= currentYear + 5; i++) {
      years.push(i);
    }
    return years;
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Código do Coupon*</label>
        <input
          type="text"
          name="code"
          value={formData.code}
          onChange={handleInputChange}
          onBlur={() => handleFieldTouch('code')}
          className={`${styles.input} ${shouldShowError('code', formData.code) ? styles.error : ''}`}
          placeholder="Ex: DESCONTO10"
          maxLength={20}
          disabled={submitting}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Nome do Coupon*</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          onBlur={() => handleFieldTouch('name')}
          className={`${styles.input} ${shouldShowError('name', formData.name) ? styles.error : ''}`}
          placeholder="Ex: Desconto de 10% para estudantes"
          disabled={submitting}
        />
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Ano*</label>
          <select
            name="year"
            value={formData.year}
            onChange={handleInputChange}
            onBlur={() => handleFieldTouch('year')}
            className={`${styles.select} ${shouldShowError('year', formData.year) ? styles.error : ''}`}
            disabled={submitting}
          >
            {getYearOptions().map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Tipo de Desconto*</label>
          <select
            name="discountType"
            value={formData.discountType}
            onChange={handleInputChange}
            onBlur={() => handleFieldTouch('discountType')}
            className={`${styles.select} ${shouldShowError('discountType', formData.discountType) ? styles.error : ''}`}
            disabled={submitting}
          >
            <option value="PERCENTAGE">Porcentagem</option>
            <option value="FIXED_AMOUNT">Valor Fixo</option>
          </select>
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Valor do Desconto* {formData.discountType === 'PERCENTAGE' ? '(%)' : '(R$)'}
          </label>
          <input
            type="number"
            name="discountValue"
            value={formData.discountValue}
            onChange={handleInputChange}
            onBlur={() => handleFieldTouch('discountValue')}
            className={`${styles.input} ${shouldShowError('discountValue', formData.discountValue) ? styles.error : ''}`}
            placeholder={formData.discountType === 'PERCENTAGE' ? '10' : '25.00'}
            step={formData.discountType === 'PERCENTAGE' ? '1' : '0.01'}
            min="0"
            max={formData.discountType === 'PERCENTAGE' ? '100' : undefined}
            disabled={submitting}
          />
        </div>

        {formData.discountType === 'PERCENTAGE' && (
          <div className={styles.formGroup}>
            <label className={styles.label}>Desconto Máximo (R$)</label>
            <input
              type="number"
              name="maxAmount"
              value={formData.maxAmount}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="50.00"
              step="0.01"
              min="0"
              disabled={submitting}
            />
          </div>
        )}
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Limite Total de Usos</label>
          <input
            type="number"
            name="usageLimit"
            value={formData.usageLimit}
            onChange={handleInputChange}
            className={styles.input}
            placeholder="Deixe vazio para ilimitado"
            min="1"
            disabled={submitting}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Limite por Usuário*</label>
          <input
            type="number"
            name="limitPerUser"
            value={formData.limitPerUser}
            onChange={handleInputChange}
            onBlur={() => handleFieldTouch('limitPerUser')}
            className={`${styles.input} ${shouldShowError('limitPerUser', formData.limitPerUser) ? styles.error : ''}`}
            min="1"
            disabled={submitting}
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Válido a partir de*</label>
          <input
            type="date"
            name="validFrom"
            value={formData.validFrom}
            onChange={handleInputChange}
            onBlur={() => handleFieldTouch('validFrom')}
            className={`${styles.input} ${shouldShowError('validFrom', formData.validFrom) ? styles.error : ''}`}
            disabled={submitting}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Válido até*</label>
          <input
            type="date"
            name="validUntil"
            value={formData.validUntil}
            onChange={handleInputChange}
            onBlur={() => handleFieldTouch('validUntil')}
            className={`${styles.input} ${shouldShowError('validUntil', formData.validUntil) ? styles.error : ''}`}
            disabled={submitting}
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Valor Mínimo do Pedido (R$)*</label>
        <input
          type="number"
          name="minOrderValue"
          value={formData.minOrderValue}
          onChange={handleInputChange}
          onBlur={() => handleFieldTouch('minOrderValue')}
          className={`${styles.input} ${shouldShowError('minOrderValue', formData.minOrderValue) ? styles.error : ''}`}
          step="0.01"
          min="0"
          disabled={submitting}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Categorias Aplicáveis*</label>
        {dataLoading ? (
          <div className={styles.loadingText}>Carregando categorias...</div>
        ) : (
          <Multselector
            options={categories}
            value={getSelectedCategories()}
            onChange={handleCategoriesChange}
            placeholder="Selecione as categorias aplicáveis..."
            instanceId="categories-selector"
            closeMenuOnSelect={false}
          />
        )}
        <small className={styles.helpText}>
          Selecione "Todas as Categorias" para aplicar a qualquer categoria, ou escolha categorias específicas. Selecionar "Todas as Categorias" substitui qualquer seleção específica.
        </small>
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Produtos Aplicáveis*</label>
        {dataLoading ? (
          <div className={styles.loadingText}>Carregando produtos...</div>
        ) : (
          <Multselector
            options={products}
            value={getSelectedProducts()}
            onChange={handleProductsChange}
            placeholder="Selecione os produtos aplicáveis..."
            instanceId="products-selector"
            closeMenuOnSelect={false}
          />
        )}
        <small className={styles.helpText}>
          Selecione "Todos os Produtos" para aplicar a qualquer produto, ou escolha produtos específicos. Selecionar "Todos os Produtos" substitui qualquer seleção específica.
        </small>
      </div>

      <div className={styles.formGroup}>
        <div className={styles.checkboxGroup}>
          <input
            type="checkbox"
            name="active"
            checked={formData.active}
            onChange={handleInputChange}
            className={styles.checkbox}
            disabled={submitting}
          />
          <label className={styles.label}>Coupon ativo</label>
        </div>
      </div>

      <div className={styles.formActions}>
        {editingCoupon && (
          <button
            type="button"
            className={styles.cancelButton}
            onClick={handleCancel}
            disabled={submitting}
          >
            Cancelar
          </button>
        )}
        <button
          type="submit"
          className={styles.submitButton}
          disabled={submitting}
        >
          {submitting ? (editingCoupon ? 'Atualizando...' : 'Criando...') : (editingCoupon ? 'Salvar' : 'Criar Coupon')}
        </button>
      </div>
    </form>
  );
}
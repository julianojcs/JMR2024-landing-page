// Hook personalizado para gerenciar coupons
import { useState, useCallback } from 'react';

export const useCoupon = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Limpar mensagens
  const clearMessages = useCallback(() => {
    setError('');
    setSuccess('');
  }, []);

  // Buscar coupons
  const fetchCoupons = useCallback(async (filters = {}, page = 1, limit = 10) => {
    try {
      setLoading(true);
      clearMessages();

      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString()
      });

      Object.entries(filters).forEach(([key, value]) => {
        if (value && value !== 'all') {
          params.append(key, value);
        }
      });

      const response = await fetch(`/api/coupons?${params}`);
      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || 'Erro ao buscar coupons');
      }

      return data;

    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [clearMessages]);

  // Criar cupom
  const createCoupon = useCallback(async (cupomData) => {
    try {
      setLoading(true);
      clearMessages();

      const response = await fetch('/api/coupons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cupomData)
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || 'Erro ao criar cupom');
      }

      setSuccess('Coupon criado com sucesso!');
      return data;

    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [clearMessages]);

  // Atualizar cupom
  const updateCoupon = useCallback(async (id, updateData) => {
    try {
      setLoading(true);
      clearMessages();

      const response = await fetch(`/api/coupons/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || 'Erro ao atualizar cupom');
      }

      setSuccess('Coupon atualizado com sucesso!');
      return data;

    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [clearMessages]);

  // Deletar cupom (desativar)
  const deleteCoupon = useCallback(async (id) => {
    try {
      setLoading(true);
      clearMessages();

      const response = await fetch(`/api/coupons/${id}`, {
        method: 'DELETE'
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || 'Erro ao deletar cupom');
      }

      setSuccess('Coupon desativado com sucesso!');
      return data;

    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [clearMessages]);

  // Buscar cupom específico
  const fetchCoupon = useCallback(async (id) => {
    try {
      setLoading(true);
      clearMessages();

      const response = await fetch(`/api/coupons/${id}`);
      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || 'Erro ao buscar cupom');
      }

      return data;

    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [clearMessages]);

  // Validar código do cupom
  const validateCouponCode = useCallback(async (code) => {
    try {
      const response = await fetch(`/api/coupons/validate/${encodeURIComponent(code)}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return { success: false, message: 'Erro ao validar código' };
    }
  }, []);

  // Buscar produtos disponíveis para cupons
  const fetchCouponProducts = useCallback(async () => {
    try {
      const response = await fetch('/api/coupon-products');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar produtos de cupom:', error);
      return [];
    }
  }, []);

  // Função para verificar se um produto é elegível para o cupom
  const isProductEligibleForCoupon = useCallback((productCode, coupon) => {
    if (!coupon || !coupon.restrictions) {
      return false;
    }

    const { applicableProducts, applicableCategories } = coupon.restrictions;

    // Primeiro: verificar produtos específicos (tem prioridade)
    if (applicableProducts && applicableProducts.length > 0) {
      // Se incluir "ALL", aplica a qualquer produto
      if (applicableProducts.includes('ALL')) {
        return true;
      }

      // Verificar se o produto específico está na lista
      if (applicableProducts.includes(productCode)) {
        return true;
      }

      // Se há produtos específicos definidos e o produto não está na lista, não é elegível
      // (mesmo que applicableCategories tenha 0 - todas as categorias)
      return false;
    }

    // Segundo: se não há produtos específicos, verificar por categorias
    if (applicableCategories && applicableCategories.length > 0) {
      // Se incluir 0 (todas as categorias), aplica a qualquer produto
      if (applicableCategories.includes(0)) {
        return true;
      }

      // Mapear códigos de produtos para categorias e verificar
      const productCategoryMap = {
        'CONGRESS': 1, // Congresso
        'WORKSHOP': 2, // Workshop
        'COURSE': 3,   // Curso
        'DAY_USE': 4   // Day Use
      };

      const productCategory = productCategoryMap[productCode];
      if (productCategory && applicableCategories.includes(productCategory)) {
        return true;
      }
    }

    return false;
  }, []);

  // Função para calcular desconto de um produto específico
  const calculateProductDiscount = useCallback((productValue, productCode, coupon) => {
    console.log('🔍 calculateProductDiscount - Debug:', {
      productValue,
      productCode,
      couponCode: coupon?.code,
      discountType: coupon?.discount?.type,
      discountValue: coupon?.discount?.value
    });

    if (!coupon || !isProductEligibleForCoupon(productCode, coupon)) {
      console.log('🔍 calculateProductDiscount - Produto não elegível');
      return 0;
    }

    let discount = 0;

    if (coupon.discount.type === 'PERCENTAGE') {
      discount = productValue * (coupon.discount.value / 100);
      console.log(`🔍 calculateProductDiscount - Desconto percentual: ${productValue} * ${coupon.discount.value}% = ${discount}`);

      // Aplicar limite máximo se definido
      if (coupon.discount.maxAmount && discount > coupon.discount.maxAmount) {
        discount = Math.min(discount, coupon.discount.maxAmount);
        console.log(`🔍 calculateProductDiscount - Aplicado limite máximo: ${discount}`);
      }
    } else if (coupon.discount.type === 'FIXED_AMOUNT') {
      // Para desconto fixo, aplicar apenas se for o único produto contemplado
      // ou dividir proporcionalmente entre produtos contemplados
      discount = Math.min(coupon.discount.value, productValue);
      console.log(`🔍 calculateProductDiscount - Desconto fixo: ${discount}`);
    }

    console.log(`🔍 calculateProductDiscount - Desconto final: ${discount}`);
    return Math.max(0, discount);
  }, [isProductEligibleForCoupon]);

  // Função para calcular desconto total considerando produtos específicos
  const calculateTotalDiscountByProducts = useCallback((selectedItems, coupon) => {
    if (!coupon || !selectedItems) return { totalDiscount: 0, discountDetails: {} };

    const discountDetails = {};
    let totalDiscount = 0;

    // Converter valores monetários para números
    const currencyToNumber = (currencyString) => {
      if (!currencyString) return 0;
      return parseFloat(
        currencyString
          .replace(/[R$\s]/g, '')
          .replace(/\./g, '')
          .replace(',', '.')
      );
    };

    // Calcular desconto para cada tipo de produto
    if (selectedItems.journey) {
      const productValue = currencyToNumber(selectedItems.journey.getCurrentPrice().value);
      const discount = calculateProductDiscount(productValue, 'CONGRESS', coupon);
      if (discount > 0) {
        discountDetails.journey = discount;
        totalDiscount += discount;
      }
    }

    if (selectedItems.workshops?.length > 0) {
      selectedItems.workshops.forEach((workshop, index) => {
        const productValue = currencyToNumber(workshop.getCurrentPrice().value);
        const discount = calculateProductDiscount(productValue, 'WORKSHOP', coupon);
        if (discount > 0) {
          discountDetails[`workshop_${index}`] = discount;
          totalDiscount += discount;
        }
      });
    }

    if (selectedItems.courses?.length > 0) {
      selectedItems.courses.forEach((course, index) => {
        const productValue = currencyToNumber(course.getCurrentPrice().value);
        const discount = calculateProductDiscount(productValue, 'COURSE', coupon);
        if (discount > 0) {
          discountDetails[`course_${index}`] = discount;
          totalDiscount += discount;
        }
      });
    }

    if (selectedItems.dayUse) {
      const productValue = currencyToNumber(selectedItems.dayUse.getCurrentPrice().value);
      const discount = calculateProductDiscount(productValue, 'DAY_USE', coupon);
      if (discount > 0) {
        discountDetails.dayUse = discount;
        totalDiscount += discount;
      }
    }

    return { totalDiscount, discountDetails };
  }, [calculateProductDiscount]);

  // Função para obter desconto de um item específico
  const getItemDiscount = useCallback((item, itemType, itemIndex, coupon) => {
    console.log('🔍 getItemDiscount chamado:', { itemType, itemTitle: item?.title, couponCode: coupon?.code });

    if (!coupon || !item) {
      console.log('🔍 getItemDiscount - Sem cupom ou item');
      return 0;
    }

    const currencyToNumber = (currencyString) => {
      if (!currencyString) return 0;
      return parseFloat(
        currencyString
          .replace(/[R$\s]/g, '')
          .replace(/\./g, '')
          .replace(',', '.')
      );
    };

    const productValue = currencyToNumber(item.getCurrentPrice().value);

    // Mapear tipos para códigos de produtos
    const typeToProductCode = {
      'journey': 'CONGRESS',
      'workshop': 'WORKSHOP',
      'course': 'COURSE',
      'dayUse': 'DAY_USE'
    };

    const productCode = typeToProductCode[itemType];

    console.log('🔍 getItemDiscount - Debug:', {
      productValue,
      productCode,
      itemType,
      currentPrice: item.getCurrentPrice().value
    });

    const discount = calculateProductDiscount(productValue, productCode, coupon);

    console.log('🔍 getItemDiscount - Resultado:', { discount });

    return discount;
  }, [calculateProductDiscount]);

  return {
    loading,
    error,
    success,
    clearMessages,
    fetchCoupons,
    createCoupon,
    updateCoupon,
    deleteCoupon,
    fetchCoupon,
    validateCouponCode,
    fetchCouponProducts,
    isProductEligibleForCoupon,
    calculateProductDiscount,
    calculateTotalDiscountByProducts,
    getItemDiscount
  };
};

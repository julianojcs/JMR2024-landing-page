// Configurações e utilitários para o sistema de coupons
import Coupon from './Coupon.js';

// Configurações padrão do sistema
export const CUPOM_CONFIG = {
  // Tipos de desconto disponíveis
  DISCOUNT_TYPES: {
    PERCENTAGE: 'PERCENTAGE',
    FIXED_AMOUNT: 'FIXED_AMOUNT'
  },

  // Produtos aplicáveis (aplicableProducts)
  PRODUCTS: {
    ALL: 'ALL',
    CONGRESS: 'CONGRESS',
    WORKSHOP: 'WORKSHOP',
    COURSE: 'COURSE',
    DAYUSE: 'DAYUSE'
  },

  // Categorias de participantes aplicáveis (applicableCategories) - IDs numéricos
  PARTICIPANT_CATEGORY_IDS: {
    ALL: 0,
    MEDICO_SOCIO: 1,
    MEDICO_NAO_SOCIO: 2,
    RESIDENTE: 3,
    ACADEMICO_SOCIO: 4,
    ACADEMICO: 5,
    TECNOLOGO: 6,
    PUBLICO_GERAL: 7
  },

  // Limites padrão
  DEFAULTS: {
    USAGE_LIMIT: 100,
    USER_LIMIT: 1,
    MIN_ORDER_VALUE: 0,
    VALIDITY_DAYS: 30
  },

  // Validações
  VALIDATION: {
    CODE_MIN_LENGTH: 3,
    CODE_MAX_LENGTH: 20,
    NAME_MIN_LENGTH: 5,
    NAME_MAX_LENGTH: 100,
    MAX_DISCOUNT_PERCENTAGE: 100,
    MAX_FIXED_AMOUNT: 1000
  }
};

// Classe utilitária para operações com coupons
export class CouponService {

  // Criar um novo cupom com validações
  static async createCoupon(cupomData) {
    try {
      // Validar dados básicos
      this.validateCouponData(cupomData);

      // Normalizar código
      cupomData.code = cupomData.code.toUpperCase().trim();

      // Verificar se código já existe
      const existing = await Coupon.findOne({ code: cupomData.code });
      if (existing) {
        throw new Error(`Coupon com código '${cupomData.code}' já existe`);
      }

      // Aplicar valores padrão se não fornecidos
      const cupomWithDefaults = this.applyDefaults(cupomData);

      // Criar cupom
      const cupom = await Coupon.create(cupomWithDefaults);

      return {
        success: true,
        cupom,
        message: `Coupon '${cupom.code}' criado com sucesso`
      };

    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Validar dados do cupom
  static validateCouponData(data) {
    const { VALIDATION } = CUPOM_CONFIG;

    if (!data.code || data.code.length < VALIDATION.CODE_MIN_LENGTH) {
      throw new Error(`Código deve ter pelo menos ${VALIDATION.CODE_MIN_LENGTH} caracteres`);
    }

    if (data.code.length > VALIDATION.CODE_MAX_LENGTH) {
      throw new Error(`Código deve ter no máximo ${VALIDATION.CODE_MAX_LENGTH} caracteres`);
    }

    if (!data.name || data.name.length < VALIDATION.NAME_MIN_LENGTH) {
      throw new Error(`Nome deve ter pelo menos ${VALIDATION.NAME_MIN_LENGTH} caracteres`);
    }

    if (data.name.length > VALIDATION.NAME_MAX_LENGTH) {
      throw new Error(`Nome deve ter no máximo ${VALIDATION.NAME_MAX_LENGTH} caracteres`);
    }

    if (!data.discount || !data.discount.type || !data.discount.value) {
      throw new Error('Configuração de desconto é obrigatória');
    }

    if (data.discount.type === 'PERCENTAGE' && data.discount.value > VALIDATION.MAX_DISCOUNT_PERCENTAGE) {
      throw new Error(`Desconto percentual não pode ser maior que ${VALIDATION.MAX_DISCOUNT_PERCENTAGE}%`);
    }

    if (data.discount.type === 'FIXED_AMOUNT' && data.discount.value > VALIDATION.MAX_FIXED_AMOUNT) {
      throw new Error(`Desconto fixo não pode ser maior que R$ ${VALIDATION.MAX_FIXED_AMOUNT}`);
    }

    if (!data.validity || !data.validity.until) {
      throw new Error('Data de validade é obrigatória');
    }

    if (new Date(data.validity.until) <= new Date()) {
      throw new Error('Data de validade deve ser futura');
    }
  }

  // Aplicar valores padrão
  static applyDefaults(cupomData) {
    const { DEFAULTS } = CUPOM_CONFIG;

    return {
      ...cupomData,
      usage: {
        limit: DEFAULTS.USAGE_LIMIT,
        used: 0,
        limitPerUser: DEFAULTS.USER_LIMIT,
        usedBy: [],
        ...cupomData.usage
      },
      validity: {
        from: new Date(),
        ...cupomData.validity
      },
      restrictions: {
        minOrderValue: DEFAULTS.MIN_ORDER_VALUE,
        applicableCategories: [0], // ALL como ID numérico
        applicableProducts: ['ALL'],
        ...cupomData.restrictions
      }
    };
  }

  // Buscar coupons válidos
  static async getValidCoupons(filters = {}) {
    const query = {
      active: true,
      'validity.from': { $lte: new Date() },
      'validity.until': { $gte: new Date() },
      ...filters
    };

    // Adicionar filtro para coupons não esgotados
    query.$expr = {
      $or: [
        { $eq: ['$usage.limit', null] },
        { $lt: ['$usage.used', '$usage.limit'] }
      ]
    };

    return await Coupon.find(query).sort({ 'validity.until': 1 });
  }

  // Aplicar cupom a um pedido
  static async applyCoupon(codigo, cpf, orderData) {
    try {
      const cupom = await Coupon.findOne({
        code: codigo.toUpperCase(),
        active: true
      });

      if (!cupom) {
        return { success: false, message: 'Coupon não encontrado' };
      }

      // Verificar validade
      if (!cupom.isValid) {
        return { success: false, message: 'Coupon inválido ou expirado' };
      }

      // Verificar se usuário pode usar
      if (!cupom.canUserUse(cpf)) {
        return { success: false, message: 'Limite de uso atingido para este usuário' };
      }

      // Verificar valor mínimo
      if (orderData.total < cupom.restrictions.minOrderValue) {
        const minValue = Number(cupom.restrictions.minOrderValue);
        return {
          success: false,
          message: `Valor mínimo do pedido: R$ ${isNaN(minValue) ? cupom.restrictions.minOrderValue : minValue.toFixed(2)}`
        };
      }

      // Verificar categorias aplicáveis
      if (!this.checkCategoryCompatibility(cupom, orderData.categories)) {
        return {
          success: false,
          message: 'Coupon não aplicável aos produtos selecionados'
        };
      }

      // Calcular desconto
      const desconto = cupom.calculateDiscount(orderData.total);

      if (desconto === 0) {
        return { success: false, message: 'Nenhum desconto aplicável' };
      }

      return {
        success: true,
        desconto,
        valorOriginal: orderData.total,
        valorFinal: orderData.total - desconto,
        cupom: {
          code: cupom.code,
          name: cupom.name,
          type: cupom.discount.type,
          value: cupom.discount.value
        }
      };

    } catch (error) {
      return { success: false, message: 'Erro ao processar cupom' };
    }
  }

  // Confirmar uso do cupom (após pagamento)
  static async confirmCouponUsage(codigo, cpf, amount) {
    try {
      const cupom = await Coupon.findOne({ code: codigo.toUpperCase() });

      if (!cupom) {
        throw new Error('Coupon não encontrado');
      }

      await cupom.recordUsage(cpf, amount);

      return {
        success: true,
        message: 'Uso do cupom registrado com sucesso'
      };

    } catch (error) {
      return {
        success: false,
        message: error.message
      };
    }
  }

  // Verificar compatibilidade de categorias
  static checkCategoryCompatibility(cupom, orderCategories) {
    const aplicaveis = cupom.restrictions.applicableCategories;

    // Verificar se aceita todas as categorias (ID 0)
    if (aplicaveis.includes(0)) {
      return true;
    }

    // Verificar compatibilidade com IDs numéricos
    return orderCategories.some(category => aplicaveis.includes(category));
  }

  // Obter estatísticas de coupons
  static async getCouponStats(year = null) {
    const match = year ? { year } : {};

    const stats = await Coupon.aggregate([
      { $match: match },
      {
        $group: {
          _id: null,
          total: { $sum: 1 },
          ativos: { $sum: { $cond: ['$active', 1, 0] } },
          usados: { $sum: '$usage.used' },
          percentuais: { $sum: { $cond: [{ $eq: ['$discount.type', 'PERCENTAGE'] }, 1, 0] } },
          fixos: { $sum: { $cond: [{ $eq: ['$discount.type', 'FIXED_AMOUNT'] }, 1, 0] } },
          expirados: {
            $sum: {
              $cond: [{ $lt: ['$validity.until', new Date()] }, 1, 0]
            }
          }
        }
      }
    ]);

    return stats[0] || {
      total: 0,
      ativos: 0,
      usados: 0,
      percentuais: 0,
      fixos: 0,
      expirados: 0
    };
  }

  // Gerar código único para cupom
  static generateCouponCode(prefix = '', length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = prefix.toUpperCase();

    for (let i = code.length; i < length; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return code;
  }

  // Criar cupom promocional rápido
  static async createPromotionalCoupon(params) {
    const {
      prefix = 'PROMO',
      discountType = 'PERCENTAGE',
      discountValue,
      maxAmount = null,
      validityDays = 30,
      usageLimit = 100,
      userLimit = 1,
      minOrderValue = 0,
      categories = [0], // ALL como ID numérico
      name = null
    } = params;

    const code = this.generateCouponCode(prefix, 10);
    const cupomName = name || `Promoção ${discountType === 'PERCENTAGE' ? discountValue + '%' : 'R$ ' + discountValue}`;

    const cupomData = {
      code,
      name: cupomName,
      year: new Date().getFullYear().toString(),
      discount: {
        type: discountType,
        value: discountValue,
        maxAmount
      },
      usage: {
        limit: usageLimit,
        limitPerUser: userLimit
      },
      validity: {
        from: new Date(),
        until: new Date(Date.now() + validityDays * 24 * 60 * 60 * 1000)
      },
      restrictions: {
        minOrderValue,
        applicableCategories: categories
      }
    };

    return await this.createCoupon(cupomData);
  }
}

export default CouponService;

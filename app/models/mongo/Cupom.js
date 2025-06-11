// models/Cupom.js
import mongoose from 'mongoose';
const { Schema, models, model } = mongoose;

// Função utilitária para sanitizar CPF (apenas números)
const sanitizeCpf = (cpf) => {
  if (!cpf) return '';
  return cpf.toString().replace(/\D/g, '');
};

const CupomSchema = new Schema({
  // Identificação do cupom
  code: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true
  },

  // Nome/descrição do cupom
  name: {
    type: String,
    required: true
  },

  // Ano de referência
  year: {
    type: String,
    required: true
  },

  // Status do cupom
  active: {
    type: Boolean,
    default: true
  },

  // Configuração de desconto unificada
  discount: {
    // Tipo de desconto e valor
    type: {
      type: String,
      enum: ['PERCENTAGE', 'FIXED_AMOUNT'],
      required: true,
      default: 'PERCENTAGE'
    },

    // Valor do desconto (% para PERCENTAGE, R$ para FIXED_AMOUNT)
    value: {
      type: Number,
      required: true,
      min: 0
    },

    // Valor máximo de desconto (apenas para PERCENTAGE)
    maxAmount: {
      type: Number,
      default: null
    }
  },

  // Configuração de limitações de uso unificada
  usage: {
    // Limite total de usos (null = ilimitado)
    limit: {
      type: Number,
      default: null,
      min: 0
    },

    // Contador de usos atual
    used: {
      type: Number,
      default: 0,
      min: 0
    },

    // Limite de uso por usuário (null = ilimitado)
    limitPerUser: {
      type: Number,
      default: 1,
      min: 0
    },

    // Histórico de usuários que usaram o cupom
    usedBy: [{
      cpf: { type: String, required: true },
      usedAt: { type: Date, default: Date.now },
      amount: { type: Number, required: true }
    }]
  },

  // Período de validade
  validity: {
    from: {
      type: Date,
      default: Date.now
    },
    until: {
      type: Date,
      required: true
    }
  },

  // Restrições adicionais
  restrictions: {
    // Valor mínimo do pedido para aplicar o cupom
    minOrderValue: {
      type: Number,
      default: 0
    },

    // Categorias específicas onde o cupom pode ser aplicado (IDs numéricos da tabela CouponCategory)
    applicableCategories: [{
      type: Number,
      default: 0
    }],

    // Produtos específicos onde o cupom pode ser aplicado (referência para CouponProduct)
    applicableProducts: [{
      type: String, // Armazena o código do produto (ex: 'CONGRESS', 'ALL')
      default: 'ALL'
    }],
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual para verificar se o cupom está válido
CupomSchema.virtual('isValid').get(function() {
  const now = new Date();
  return this.active &&
         this.validity.from <= now &&
         this.validity.until >= now &&
         (this.usage.limit === null || this.usage.used < this.usage.limit);
});

// Virtual para verificar se o cupom está expirado
CupomSchema.virtual('isExpired').get(function() {
  return this.validity.until < new Date();
});

// Virtual para calcular porcentagem de uso
CupomSchema.virtual('usagePercentage').get(function() {
  if (this.usage.limit === null) return 0;
  return (this.usage.used / this.usage.limit) * 100;
});

// Método para verificar se um usuário pode usar o cupom
CupomSchema.methods.canUserUse = function(cpf) {
  if (!this.isValid) return false;

  if (this.usage.limitPerUser === null) return true;

  // Sanitizar CPF (apenas números)
  const sanitizedCpf = sanitizeCpf(cpf);
  const userUsages = this.usage.usedBy.filter(usage => usage.cpf === sanitizedCpf);
  return userUsages.length < this.usage.limitPerUser;
};

// Método para calcular o desconto
CupomSchema.methods.calculateDiscount = function(orderValue) {
  if (!this.isValid || orderValue < this.restrictions.minOrderValue) {
    return 0;
  }

  let discountAmount = 0;

  if (this.discount.type === 'PERCENTAGE') {
    discountAmount = (orderValue * this.discount.value) / 100;

    // Aplicar limite máximo se definido
    if (this.discount.maxAmount && discountAmount > this.discount.maxAmount) {
      discountAmount = this.discount.maxAmount;
    }
  } else if (this.discount.type === 'FIXED_AMOUNT') {
    discountAmount = Math.min(this.discount.value, orderValue);
  }

  return Math.round(discountAmount * 100) / 100; // Arredondar para 2 casas decimais
};

// Método para registrar uso do cupom
CupomSchema.methods.recordUsage = function(cpf, amount) {
  // Sanitizar CPF (apenas números)
  const sanitizedCpf = sanitizeCpf(cpf);

  this.usage.used += 1;
  this.usage.usedBy.push({
    cpf: sanitizedCpf,
    amount,
    usedAt: new Date()
  });
  return this.save();
};

// Índices para performance
CupomSchema.index({ active: 1, 'validity.until': 1 });
CupomSchema.index({ year: 1 });

export default models.Cupom || model('Cupom', CupomSchema);
// models/CouponCategory.js
import mongoose from 'mongoose';
const { Schema, models, model } = mongoose;

const CouponCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  code: {
    type: Number, // Alterado para Number para aceitar IDs numéricos (0-7)
    required: true,
    unique: true,
    min: 0,
    max: 7
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isFixed: {
    type: Boolean,
    default: true // Para as categorias padrão do sistema
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Índices para performance (name e code já são únicos por definição do schema)
CouponCategorySchema.index({ isActive: 1 });

export default models.CouponCategory || model('CouponCategory', CouponCategorySchema);

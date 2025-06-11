// models/CouponProduct.js
import mongoose from 'mongoose';
const { Schema, models, model } = mongoose;

const CouponProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  code: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true
  },
  description: {
    type: String,
    default: ''
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isFixed: {
    type: Boolean,
    default: true // Para os produtos padrão do sistema
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Índices para performance (name e code já são únicos por definição do schema)
CouponProductSchema.index({ isActive: 1 });

export default models.CouponProduct || model('CouponProduct', CouponProductSchema);

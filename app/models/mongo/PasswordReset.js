import mongoose from 'mongoose';
const { Schema, models, model } = mongoose;

const PasswordResetSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  token: {
    type: String,
    required: true,
    unique: true
  },
  expires: {
    type: Date,
    required: true
  },
  used: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  collection: 'passwordResets'
});

// Índices
// token já tem índice único automático por conta do unique: true
PasswordResetSchema.index({ userId: 1 });
PasswordResetSchema.index({ expires: 1 });
PasswordResetSchema.index({ used: 1 });

export default models.PasswordReset || model('PasswordReset', PasswordResetSchema);

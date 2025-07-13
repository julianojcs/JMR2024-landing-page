import mongoose from 'mongoose';
const { Schema, models, model } = mongoose;

const SessionSchema = new Schema({
  sessionToken: {
    type: String,
    required: true,
    unique: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  expires: {
    type: Date,
    required: true
  }
}, {
  timestamps: true,
  collection: 'sessions'
});

// Índices
// sessionToken já tem índice único automático por conta do unique: true
SessionSchema.index({ userId: 1 });
SessionSchema.index({ expires: 1 });

export default models.Session || model('Session', SessionSchema);

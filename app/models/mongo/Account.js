import mongoose from 'mongoose';
const { Schema, models, model } = mongoose;

const AccountSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    required: true
  },
  provider: {
    type: String,
    required: true
  },
  providerAccountId: {
    type: String,
    required: true
  },
  refresh_token: {
    type: String,
    default: null
  },
  access_token: {
    type: String,
    default: null
  },
  expires_at: {
    type: Number,
    default: null
  },
  token_type: {
    type: String,
    default: null
  },
  scope: {
    type: String,
    default: null
  },
  id_token: {
    type: String,
    default: null
  },
  session_state: {
    type: String,
    default: null
  }
}, {
  timestamps: true,
  collection: 'accounts'
});

// Índice único composto
AccountSchema.index({ provider: 1, providerAccountId: 1 }, { unique: true });
AccountSchema.index({ userId: 1 });

export default models.Account || model('Account', AccountSchema);

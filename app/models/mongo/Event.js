import mongoose from 'mongoose';
const { Schema, models, model } = mongoose;

const EventSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  description: {
    type: [String],
    required: true
  },
  date: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  workload: {
    type: String,
    required: true
  },
  localAndDate: {
    type: String,
    required: true
  },
  backgroundImage: {
    type: String,
    default: '/certificate.png'
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  collection: 'events'
});

// Índices
// shortName já tem índice único automático por conta do unique: true
EventSchema.index({ isActive: 1 });

export default models.Event || model('Event', EventSchema);

import mongoose from 'mongoose';
const { Schema, models, model } = mongoose;

const LectureSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  // Campos migrados do Prisma
  is_fixed: {
    type: Boolean,
    default: false
  },
  is_new: {
    type: Boolean,
    default: true
  },
  year: {
    type: Number,
    default: () => new Date().getFullYear()
  },
  event: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
    default: null
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  collection: 'lectures'
});

// Índices
LectureSchema.index({ event: 1 });
LectureSchema.index({ name: 1 });
LectureSchema.index({ year: 1 });
LectureSchema.index({ is_fixed: 1 });
LectureSchema.index({ is_new: 1 });

export default models.Lecture || model('Lecture', LectureSchema);

import { Schema, model, models } from 'mongoose';

const speakerSchema = new Schema({
  fullName: {
    type: String,
    required: [true, 'Nome completo é obrigatório'],
    maxLength: [150, 'Nome não pode ter mais que 150 caracteres']
  },
  badgeName: {
    type: String,
    required: [true, 'Nome do crachá é obrigatório'],
    maxLength: [25, 'Nome do crachá não pode ter mais que 25 caracteres']
  },
  email: {
    type: String,
    required: [true, 'Email é obrigatório'],
    maxLength: [150, 'Email não pode ter mais que 150 caracteres']
  },
  phone: {
    type: String,
    required: [true, 'Telefone é obrigatório']
  },
  cpf: {
    type: String,
    required: [true, 'CPF é obrigatório'],
    // unique: true
  },
  city: String,
  state: String,
  category: {
    type: String,
    required: [true, 'Categoria é obrigatória']
  },
  curriculum: {
    type: String,
    required: [true, 'Mini currículo é obrigatório'],
    maxLength: [500, 'Mini currículo não pode ter mais que 500 caracteres']
  },
  lectureName: String,
  photoPath: String,
  year: {
    type: Number,
    default: () => new Date().getFullYear(),
    required: [true, 'Ano é obrigatório']
  },
  createdAt: { type: Date, default: Date.now }
},
{
  timestamps: true
});

const Speaker = models.Speaker || model('Speaker', speakerSchema);

export default Speaker;
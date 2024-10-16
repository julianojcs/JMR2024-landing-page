import { Schema, model, models } from 'mongoose'

const DoctorSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Favor informar o nome do médico']
    },
    url: {
      type: String,
      unique: [true, 'URL já existente'],
      lowercase: true
    },
    title: {
      type: String,
      required: [true, 'Favor informar o título do médico (Dr. ou Dra.)'],
      default: 'Dr.',
      enum: ['Dr.', 'Dra.']
    },
    coordenations: [
      {
        type: String,
        enum: [
          'POCUS SRMG/ ABRAMEDE/MG',
          'Mama',
          'Musculoesquelético',
          'Gastrointestinal',
          'Genitourinário'
        ]
      }
    ],
    image: {
      type: String,
      default: 'no-photo.jpg',
      lowercase: true
    }
  },
  {
    timestamps: true
  }
)

const Doctor = models.Doctor || model('Doctor', DoctorSchema)

export default Doctor

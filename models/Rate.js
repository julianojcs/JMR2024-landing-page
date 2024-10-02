import { Schema, model, models } from 'mongoose'

const RateSchema = new Schema(
  {
    ratename: {
      type: String,
      required: [true, 'Informe o nome do rate']
    },
    type: {
      type: String,
      required: [
        true,
        'Favor Informe o tipo de rate (Programação Científica, Hands On ou Cursos Intensivos)'
      ],
      enum: ['Programação Científica', 'Hands On', 'Cursos Intensivos']
    },
    order: {
      type: Number,
      unique: [true, 'Ordem já existente']
    },
    imagem: {
      type: String,
      default: 'no-photo.jpg'
    },
    bgcolor: {
      type: String,
      default: '#000000'
    },
    extravalue: {
      type: Number,
      default: null
    }
  },
  {
    timestamps: true
  }
)

const Rate = models.Rate || model('Rate', RateSchema)

export default Rate

import { Schema, model, models } from 'mongoose'

const EventSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Informe o nome do event']
    },
    type: {
      type: String,
      required: [
        true,
        'Favor Informe o tipo de event (Programação Científica, Hands On ou Cursos Intensivos)'
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

const Event = models.Event || model('Event', EventSchema)

export default Event

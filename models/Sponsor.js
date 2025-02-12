import { Schema, model, models } from 'mongoose'

const SponsorSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Favor informar o nome do patrocinador']
    },
    url: {
      type: String,
      unique: [true, 'URL já existente'],
      required: [true, 'Favor informar o endereço Web do patrocinador']
    },
    type: {
      type: String,
      required: [
        true,
        'Favor informar o tipo de patrocinador (Ouro, Prata ou Bronze)'
      ]
    },
    image: {
      type: String,
      default: 'no-photo.jpg'
    }
  },
  {
    timestamps: true
  }
)

const Sponsor = models.Sponsor || model('Sponsor', SponsorSchema)

export default Sponsor

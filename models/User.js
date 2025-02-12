import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Informe o nome de usuário']
    },
    email: {
      type: String,
      unique: [true, 'E-mail já cadastrado'],
      required: [true, 'Informe um e-mail'],
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Informe um e-mail válido'],
      lowercase: true
    },
    image: {
      type: String,
      default: 'no-photo.jpg'
    },
    bookmarks: {
      type: [Schema.Types.ObjectId],
      ref: 'Property'
    }
  },
  {
    timestamps: true
  }
)

const User = models.User || model('User', UserSchema)

export default User

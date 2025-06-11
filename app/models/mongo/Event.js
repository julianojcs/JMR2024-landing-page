// models/Event.js
import mongoose from 'mongoose';
const { Schema, models, model } = mongoose;

const EventSchema = new Schema({
  year: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  description: [String],
  keywords: [String],
  ogTitle: String,
  ogDescription: String,
  date: {
    start: String,
    end: String,
    extendedDatePeriod: String,
    shortDatePeriod: String
  },
  recurrenceRule: String,
  location: {
    name: String,
    city: String,
    state: String,
    street: String,
    streetNumber: String,
    neighborhood: String,
    zipCode: String
  },
  social: {
    instagram: String
  },
  events: {
    soon: Boolean,
    callToAct: {
      caption: String,
      link: String
    },
    cardSections: [{
      title: String,
      color: String,
      ratio: [Number],
      orderBy: {
        date: Boolean,
        title: Boolean
      },
      cardlist: [{
        date: String,
        color: String,
        title: Schema.Types.Mixed, // Pode ser String ou [String]
        subtitle: String,
        link: String,
        img: String,
        width: String,
        height: String,
        countdownTimer: String,
        priority: Number
      }]
    }]
  }
}, {
  timestamps: true
});

export default models.Event || model('Event', EventSchema);
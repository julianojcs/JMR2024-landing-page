import mongoose from 'mongoose';
const { Schema, models, model } = mongoose;

const UserSchema = new Schema({
  asaasCustomerId: {
    type: String,
    required: false,
    default: null,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  emailVerified: {
    type: Date,
    default: null
  },
  password: {
    type: String,
    required: false,
    default: null
  },
  image: {
    type: String,
    default: 'https://res.cloudinary.com/dixe3b2i5/image/upload/v1742929226/speakers/default-avatar.png'
  },
  cpf: {
    type: String,
    required: false,
    trim: true
  },
  phone: {
    type: String,
    required: false,
    default: null,
    trim: true
  },
  crm: {
    type: String,
    required: false,
    default: null,
    trim: true
  },
  stateCrm: {
    type: String,
    required: false,
    default: 'MG',
    uppercase: true,
    minlength: 2,
    maxlength: 2,
    trim: true
  },
  specialization: {
    type: String,
    required: false,
    default: null,
    trim: true
  },
  rqe: {
    type: String,
    required: false,
    default: null,
    trim: true
  },
  address: {
    type: String,
    required: false,
    default: null,
    trim: true
  },
  addressNumber: {
    type: String,
    required: false,
    default: null,
    trim: true
  },
  complement: {
    type: String,
    required: false,
    default: null,
    trim: true
  },
  province: {
    type: String,
    required: false,
    default: null,
    trim: true
  },
  city: {
    type: String,
    required: false,
    default: null,
    trim: true
  },
  state: {
    type: String,
    required: false,
    default: null,
    uppercase: true,
    minlength: 2,
    maxlength: 2,
    trim: true
  },
  country: {
    type: String,
    required: false,
    default: 'Brasil',
    trim: true
  },
  cep: {
    type: String,
    required: false,
    default: null,
    trim: true
  },
  badge_name: {
    type: String,
    required: false,
    default: null,
    trim: true
  },
  curriculum: {
    type: String,
    required: false,
    default: null
  },
  termsOfUse: {
    type: Boolean,
    required: true,
    default: false
  },
  membership: {
    type: [String],
    required: false,
    default: []
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  // Múltiplos papéis simultâneos
  roles: [{
    type: String,
    enum: ['CONGRESSPERSON', 'PROFESSIONAL', 'PAPER-PRESENTER', 'SYSTEM-USER']
  }],

  // Dados específicos para profissionais (múltiplas participações)
  professionalData: [{
    event: {
      type: Schema.Types.ObjectId,
      ref: 'Event',
      required: true
    },
    category: {
      type: String,
      enum: ['SPEAKER', 'MODERATOR', 'DEBATER', 'CHAIR-OF-THE-BOARD', 'SCIENTIFIC-COMMITTEE', 'ORGANIZING-COMMITTEE', 'PRESIDENT', 'VOLUNTEER-INTERN'],
      required: true
    },
    hall: {
      type: String,
      default: null,
      trim: true
    },
    lecture: {
      type: Schema.Types.ObjectId,
      ref: 'Lecture',
      required: false
    },
    attendedAt: {
      type: Date,
      default: null
    },
  }],

  // Dados específicos para apresentações de trabalho (múltiplas apresentações)
  paperPresentationData: [{
    event: {
      type: Schema.Types.ObjectId,
      ref: 'Event',
      required: true
    },
    authors: {
      type: [String],
      required: true
    },
    paperTitle: {
      type: String,
      required: true,
      trim: true
    },
    presentationFormat: {
      type: String,
      enum: ['POSTER', 'FREE-THEME'],
      required: true,
      default: 'POSTER'
    },
    awardedTitle: {
      type: String,
      default: null
    }
  }],

  // Dados específicos para congressistas (múltiplas atividades)
  congresspersonData: [{
    event: {
      type: Schema.Types.ObjectId,
      ref: 'Event',
      required: true
    },
    activity: {
      type: String,
      enum: ['CONGRESS', 'SEMINAR', 'DAYUSE', 'COURSE', 'WORKSHOP'],
      required: true
    },
    activityName: {
      type: String,
      required: false,
      default: null,
      trim: true
    },
    attendedAt: {
      type: Date,
      default: null
    },
    paymentStatus: {
      type: String,
      enum: ['CONFIRMED', 'COMPLETED', 'PENDING', 'FREE', 'OVERDUE', 'CANCELED'],
      default: null
    },
  }],

  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  collection: 'users'
});

// Virtual para postalCode (alias para cpf)
UserSchema.virtual('postalCode')
  .get(function() {
    return this.cpf;
  })
  .set(function(value) {
    this.cpf = value;
  });

// Virtual para mobilePhone (alias para phone)
UserSchema.virtual('mobilePhone')
  .get(function() {
    return this.phone;
  })
  .set(function(value) {
    this.phone = value;
  });

// Virtual para cityName (alias para city)
UserSchema.virtual('cityName')
  .get(function() {
    return this.city;
  })
  .set(function(value) {
    this.city = value;
  });

// Virtual para full_Name (alias para name)
UserSchema.virtual('full_name')
  .get(function() {
    return this.name;
  })
  .set(function(value) {
    this.name = value;
  });

// Virtual para photoPath (alias para image)
UserSchema.virtual('photo_path')
  .get(function() {
    return this.image;
  })
  .set(function(value) {
    this.image = value;
  });

// Índices para performance
UserSchema.index({ email: 1 }, { unique: true });
UserSchema.index({ cpf: 1 }, { unique: true, sparse: true });
UserSchema.index({ isActive: 1 });
UserSchema.index({ roles: 1 });
UserSchema.index({ 'professionalData.event': 1 });
UserSchema.index({ 'professionalData.category': 1 });
UserSchema.index({ 'professionalData.lecture': 1 });
UserSchema.index({ 'paperPresentationData.event': 1 });
UserSchema.index({ 'congresspersonData.event': 1 });
UserSchema.index({ 'congresspersonData.activity': 1 });

// Virtual para certificates
UserSchema.virtual('certificates', {
  ref: 'Certificate',
  localField: '_id',
  foreignField: 'userId'
});

// Métodos de instância para verificar papéis
UserSchema.methods.hasRole = function(role) {
  return this.roles && this.roles.includes(role);
};

UserSchema.methods.isProfessional = function() {
  return this.hasRole('PROFESSIONAL') && this.professionalData && this.professionalData.length > 0;
};

UserSchema.methods.isPaperPresenter = function() {
  return this.hasRole('PAPER-PRESENTER') && this.paperPresentationData && this.paperPresentationData.length > 0;
};

UserSchema.methods.isCongressperson = function() {
  return this.hasRole('CONGRESSPERSON');
};

UserSchema.methods.hasCongresspersonData = function() {
  return this.hasRole('CONGRESSPERSON') && this.congresspersonData && this.congresspersonData.length > 0;
};

// Métodos para obter dados específicos
UserSchema.methods.getProfessionalCategories = function() {
  if (!this.professionalData) return [];
  return this.professionalData.map(data => data.category);
};

UserSchema.methods.getProfessionalDataByCategory = function(category) {
  if (!this.professionalData) return [];
  return this.professionalData.filter(data => data.category === category);
};

UserSchema.methods.getPaperPresentations = function() {
  return this.paperPresentationData || [];
};

UserSchema.methods.getAwardedPresentations = function() {
  if (!this.paperPresentationData) return [];
  return this.paperPresentationData.filter(data => data.awarded);
};

// Métodos para dados de congressista
UserSchema.methods.getCongresspersonActivities = function() {
  return this.congresspersonData || [];
};

UserSchema.methods.getCongresspersonActivitiesByType = function(activity) {
  if (!this.congresspersonData) return [];
  return this.congresspersonData.filter(data => data.activity === activity);
};

UserSchema.methods.getTotalCongresspersonHours = function() {
  if (!this.congresspersonData) return 0;
  return this.congresspersonData.reduce((total, data) => {
    return total + (data.duration || 0);
  }, 0);
};

// Métodos estáticos para busca
UserSchema.statics.findProfessionalsByCategory = function(category) {
  return this.find({
    roles: 'PROFESSIONAL',
    'professionalData.category': category,
    isActive: true
  });
};

UserSchema.statics.findPaperPresenters = function() {
  return this.find({
    roles: 'PAPER-PRESENTER',
    isActive: true
  });
};

UserSchema.statics.findByRole = function(role) {
  return this.find({
    roles: role,
    isActive: true
  });
};

UserSchema.statics.findCongresspersonsByActivity = function(activity) {
  return this.find({
    roles: 'CONGRESSPERSON',
    'congresspersonData.activity': activity,
    isActive: true
  });
};

UserSchema.statics.findByCpfAndEmail = function(cpf, email) {
  console.log('Buscando usuário por CPF e email:', cpf, email);
  return this.findOne({
    cpf: cpf.replace(/\D/g, ''),
    email: email.toLowerCase(),
    isActive: true
  });
};

// Criando o modelo User
const User = models.User || model('User', UserSchema);

export default User;

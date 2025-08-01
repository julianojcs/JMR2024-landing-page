import mongoose from 'mongoose';
const { Schema, models, model } = mongoose;

const CertificateTemplatesSchema = new Schema({
  event: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
    required: true
  },
  userType: {
    type: String,
    required: true,
    enum: ['CONGRESSPERSON', 'PROFESSIONAL', 'PAPER-PRESENTER', 'SYSTEM-USER']
  },
  certType: {
    type: String,
    required: true,
    enum: [
      // CONGRESSPERSON certificate types
      'CONGRESS', 'SEMINAR', 'COURSE', 'WORKSHOP', 'DAYUSE',
      // PROFESSIONAL certificate types
      'SPEAKER', 'MODERATOR', 'DEBATER', 'CHAIR-OF-THE-BOARD', 'PROGRAMME-COMMITTEE', 'EXECUTIVE-COMMITTEE', 'PRESIDENT', 'VOLUNTEER-INTERN',
      // PAPER-PRESENTER certificate types
      'PRESENTATION', 'AWARDED'
    ]
  },
  data: {
    type: [String],
    required: true,
    validate: {
      validator: function(array) {
        return array && array.length > 0;
      },
      message: 'Data array must contain at least one string element'
    }
  },
  // Campos específicos baseados no tipo de certificado
  specificFields: {
    type: Schema.Types.Mixed,
    default: {}
  },
  // Metadados do certificado
  metadata: {
    title: {
      type: String,
      required: true,
      default: 'Certificado',
      trim: true
    },
    description: {
      type: String,
      required: false,
      default: null,
      trim: true
    },
    template: {
      type: String,
      default: 'default',
      trim: true
    },
    isActive: {
      type: Boolean,
      default: true
    },
    eventYear: {
      type: Number,
      default: () => new Date().getFullYear()
    }
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  collection: 'certificateTemplates'
});

// Validação customizada para garantir que certType seja válido para o userType
CertificateTemplatesSchema.pre('save', function(next) {
  const validCertTypes = {
    'CONGRESSPERSON': ['CONGRESS', 'SEMINAR', 'COURSE', 'WORKSHOP', 'DAYUSE'],
    'PROFESSIONAL': ['SPEAKER', 'MODERATOR', 'DEBATER', 'CHAIR-OF-THE-BOARD', 'PROGRAMME-COMMITTEE', 'EXECUTIVE-COMMITTEE', 'PRESIDENT', 'VOLUNTEER-INTERN'],
    'PAPER-PRESENTER': ['PRESENTATION', 'AWARDED'],
    'SYSTEM-USER': [] // Sistema não tem certificados específicos
  };

  const validTypes = validCertTypes[this.userType];

  if (!validTypes || !validTypes.includes(this.certType)) {
    const error = new Error(`Certificate type '${this.certType}' is not valid for user type '${this.userType}'. Valid types: ${validTypes?.join(', ')}`);
    return next(error);
  }

  next();
});

// Índices para performance
// Removido unique constraint para permitir múltiplos templates do mesmo tipo (ex: DAYUSE)
CertificateTemplatesSchema.index({ event: 1, userType: 1, certType: 1 });
CertificateTemplatesSchema.index({ event: 1 });
CertificateTemplatesSchema.index({ 'metadata.eventYear': 1 });
CertificateTemplatesSchema.index({ 'metadata.isActive': 1 });
CertificateTemplatesSchema.index({ 'metadata.template': 1 }, { unique: true }); // Template name deve ser único

// Virtual para identificação única
CertificateTemplatesSchema.virtual('identifier')
  .get(function() {
    return `${this.event}_${this.userType}_${this.certType}`;
  });

// Método estático para buscar certificados por tipo de usuário
CertificateTemplatesSchema.statics.findByUserType = function(event, userType) {
  return this.find({
    event,
    userType,
    'metadata.isActive': true
  }).sort({ certType: 1 });
};

// Método estático para buscar certificado específico - SEMPRE requer event
CertificateTemplatesSchema.statics.findByCertType = async function(userType, certType, event) {
  if (!userType || !certType || !event) {
    throw new Error('userType, certType e event são obrigatórios');
  }

  // Primeiro tenta buscar com o valor original (pode ser string ou ObjectId)
  let template = await this.findOne({
    userType,
    certType,
    event: event,
    'metadata.isActive': true
  });

  // Se não encontrar e o event for uma string válida de ObjectId, tenta converter
  if (!template && typeof event === 'string' && mongoose.Types.ObjectId.isValid(event)) {
    const eventObjectId = new mongoose.Types.ObjectId(event);
    template = await this.findOne({
      userType,
      certType,
      event: eventObjectId,
      'metadata.isActive': true
    });
  }

  // Se ainda não encontrar e o event for um ObjectId, tenta como string
  if (!template && mongoose.Types.ObjectId.isValid(event)) {
    const eventString = event.toString();
    template = await this.findOne({
      userType,
      certType,
      event: eventString,
      'metadata.isActive': true
    });
  }

  return template;
};

// Método estático para buscar certificado específico COM dados do evento
CertificateTemplatesSchema.statics.findByCertTypeWithEvent = async function(userType, certType, event) {
  if (!userType || !certType || !event) {
    throw new Error('userType, certType e event são obrigatórios');
  }

  // Converte string para ObjectId se necessário
  let eventQuery;
  if (mongoose.Types.ObjectId.isValid(event)) {
    eventQuery = new mongoose.Types.ObjectId(event);
  } else {
    eventQuery = event;
  }

  const template = await this.findOne({
    userType,
    certType,
    event: eventQuery,
    'metadata.isActive': true
  }).populate('event');

  return template;
};

// Método estático para buscar todos os certificados de um evento
CertificateTemplatesSchema.statics.findByEvent = function(event) {
  // Converte string para ObjectId se necessário
  const eventId = mongoose.Types.ObjectId.isValid(event)
    ? new mongoose.Types.ObjectId(event)
    : event;

  return this.find({
    event: eventId,
    'metadata.isActive': true
  }).sort({ userType: 1, certType: 1 });
};

// Método estático para buscar todos os templates de um evento COM dados do evento
CertificateTemplatesSchema.statics.findByEventWithDetails = function(event) {
  // Converte string para ObjectId se necessário
  let eventQuery;
  if (mongoose.Types.ObjectId.isValid(event)) {
    eventQuery = new mongoose.Types.ObjectId(event);
  } else {
    eventQuery = event;
  }

  return this.find({
    event: eventQuery,
    'metadata.isActive': true
  })
  .populate('event')
  .sort({ userType: 1, certType: 1 });
};

// Método de instância para validar dados específicos
CertificateTemplatesSchema.methods.validateSpecificFields = function() {
  // Validações específicas podem ser implementadas aqui baseadas no certType
  const validations = {
    'SPEAKER': () => {
      // Exemplo: speaker pode precisar de campos específicos
      return true;
    },
    'MODERATOR': () => {
      // Validação para moderador
      return true;
    },
    'DEBATER': () => {
      // Validação para debatedor
      return true;
    },
    'CHAIR-OF-THE-BOARD': () => {
      // Validação para presidente de mesa
      return true;
    },
    'PRESENTATION': () => {
      // Exemplo: presentation pode precisar de título do trabalho
      return true;
    },
    // Adicionar mais validações conforme necessário
  };

  const validator = validations[this.certType];
  return validator ? validator() : true;
};

// Método de instância para processar texto do certificado com variáveis e dados de participação
CertificateTemplatesSchema.methods.processText = function(userData = {}) {
  // Combina dados específicos com dados do usuário
  const allData = {
    ...this.specificFields,
    ...userData,
    eventYear: this.metadata.eventYear
  };

  // Processar dados de participação específica se disponível
  if (userData.currentParticipation) {
    const participationData = userData.currentParticipation.data || {};

    // Adicionar dados específicos da participação
    Object.keys(participationData).forEach(key => {
      // Usar prefixo 'participation_' para evitar conflitos
      allData[`participation_${key}`] = participationData[key];
      // Também disponibilizar sem prefixo para compatibilidade
      if (!allData[key]) {
        allData[key] = participationData[key];
      }
    });

    // Adicionar índice da participação
    allData.participationIndex = userData.currentParticipation.index;
    allData.participationType = userData.currentParticipation.type;
  }

  // Processar metadados do certificado se disponível
  if (userData.certificateMetadata) {
    const metadata = userData.certificateMetadata;
    Object.keys(metadata).forEach(key => {
      if (metadata[key] !== null && metadata[key] !== undefined) {
        allData[`cert_${key}`] = metadata[key];
        // Também disponibilizar sem prefixo para compatibilidade
        if (!allData[key]) {
          allData[key] = metadata[key];
        }
      }
    });
  }

  // Função auxiliar para formatar arrays de autores
  const formatAuthors = (authors) => {
    // Se não é array nem string, retorna vazio
    if (!authors) {
      return '';
    }

    // Se é uma string, pode ser uma lista de autores separados por vírgula
    if (typeof authors === 'string') {
      // Se já contém vírgulas, assumimos que é uma lista de autores
      if (authors.includes(',')) {
        // Divide por vírgula, remove espaços extras e filtra strings vazias
        const authorsList = authors.split(',')
          .map(author => author.trim())
          .filter(author => author.length > 0);

        // Agora processa como array
        if (authorsList.length === 0) {
          return '';
        }

        if (authorsList.length === 1) {
          return authorsList[0];
        }

        if (authorsList.length === 2) {
          return authorsList.join(' e ');
        }

        // Para 3 ou mais autores: "Autor1, Autor2 e Autor3"
        const lastAuthor = authorsList[authorsList.length - 1];
        const otherAuthors = authorsList.slice(0, -1);
        return otherAuthors.join(', ') + ' e ' + lastAuthor;
      }

      // Se é string sem vírgulas, retorna como está
      return authors.trim();
    }

    // Se é array, processa normalmente
    if (!Array.isArray(authors)) {
      return authors || '';
    }

    if (authors.length === 0) {
      return '';
    }

    if (authors.length === 1) {
      return authors[0];
    }

    if (authors.length === 2) {
      return authors.join(' e ');
    }

    // Para 3 ou mais autores: "Autor1, Autor2 e Autor3"
    const lastAuthor = authors[authors.length - 1];
    const otherAuthors = authors.slice(0, -1);
    return otherAuthors.join(', ') + ' e ' + lastAuthor;
  };

  // Função auxiliar para formatar duração
  const formatDuration = (duration) => {
    if (!duration || duration === 0) return '';
    return duration === 1 ? '1 hora' : `${duration} horas`;
  };

  // Função auxiliar para formatar data
  const formatDate = (date) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('pt-BR');
  };

  // Processa cada linha do array data
  return this.data.map(line => {
    let processedLine = line;

    // Substitui variáveis no formato {variableName}
    Object.keys(allData).forEach(key => {
      const regex = new RegExp(`\\{${key}\\}`, 'g');
      let value = allData[key];

      // Tratamentos especiais para diferentes tipos de dados
      if (key === 'authors') {
        // Sempre aplica formatAuthors para o campo authors (array ou string)
        value = formatAuthors(value);
      } else if (key === 'duration' && typeof value === 'number') {
        value = formatDuration(value);
      } else if (key === 'date' && value instanceof Date) {
        value = formatDate(value);
      } else if (key === 'hall' && value) {
        value = `Sala: ${value}`;
      } else if (value === null || value === undefined) {
        value = '';
      }

      processedLine = processedLine.replace(regex, value);
    });

    // Adicionar certType automaticamente dos dados do template
    if (processedLine.includes('{certType}')) {
      processedLine = processedLine.replace(/\{certType\}/g, this.certType);
    }

    // CORREÇÃO FINAL: Substituir vírgulas sem espaço por vírgulas com espaço
    // Isso garante que qualquer formatação mal feita seja corrigida no texto final
    processedLine = processedLine.replace(/,(?!\s)/g, ', ');

    return processedLine;
  });
};

// Método de instância para gerar texto completo do certificado
CertificateTemplatesSchema.methods.generateCertificateText = function(userData = {}) {
  const processedLines = this.processText(userData);
  return processedLines.join(' ').trim();
};

// Método estático para criar template de certificado profissional
CertificateTemplatesSchema.statics.createProfessionalTemplate = async function(event, certType, templateData) {
  const certificateData = {
    event,
    userType: 'PROFESSIONAL',
    certType,
    data: templateData.data || [
      'Certificamos que {name} participou do evento como {certType}',
      'na sala {hall}, conforme registrado em nossos arquivos.',
      'Curriculum: {curriculum}'
    ],
    specificFields: templateData.specificFields || {},
    metadata: {
      title: templateData.title || `Certificado ${certType}`,
      description: templateData.description || `Certificado de participação como ${certType}`,
      template: templateData.template || 'professional',
      isActive: true,
      eventYear: new Date().getFullYear()
    }
  };

  return this.create(certificateData);
};

// Método estático para criar template de certificado de apresentação
CertificateTemplatesSchema.statics.createPresentationTemplate = async function(event, certType, templateData) {
  const certificateData = {
    event,
    userType: 'PAPER-PRESENTER',
    certType,
    data: templateData.data || [
      'Certificamos que {authors} apresentou o trabalho',
      '"{paperTitle}" no formato {presentationFormat}',
      certType === 'AWARDED' ? 'e foi premiado(a) pela qualidade da apresentação.' : 'durante o evento.'
    ],
    specificFields: templateData.specificFields || {},
    metadata: {
      title: templateData.title || `Certificado ${certType}`,
      description: templateData.description || `Certificado de ${certType === 'AWARDED' ? 'apresentação premiada' : 'apresentação de trabalho'}`,
      template: templateData.template || 'presentation',
      isActive: true,
      eventYear: new Date().getFullYear()
    }
  };

  return this.create(certificateData);
};

// Método estático para criar template de certificado de congressista
CertificateTemplatesSchema.statics.createCongresspersonTemplate = async function(event, certType, templateData) {
  const certificateData = {
    event,
    userType: 'CONGRESSPERSON',
    certType,
    data: templateData.data || [
      'Certificamos que {name} participou do {activity}',
      '"{activityTitle}" com carga horária de {duration}',
      'realizado durante o evento.'
    ],
    specificFields: templateData.specificFields || {},
    metadata: {
      title: templateData.title || `Certificado ${certType}`,
      description: templateData.description || `Certificado de participação em ${certType}`,
      template: templateData.template || 'congressperson',
      isActive: true,
      eventYear: new Date().getFullYear()
    }
  };

  return this.create(certificateData);
};

// Método estático para buscar templates por tipo de participação
CertificateTemplatesSchema.statics.findTemplatesByParticipationType = function(event, userType) {
  return this.find({
    event,
    userType,
    'metadata.isActive': true
  }).sort({ certType: 1 });
};

// Método estático para validar se template existe para combinação específica
CertificateTemplatesSchema.statics.validateTemplateExists = async function(event, userType, certType) {
  const template = await this.findByCertType(userType, certType, event);
  return !!template;
};

// Método estático para migrar templates antigos para nova nomenclatura
CertificateTemplatesSchema.statics.migrateOldTemplates = async function() {
  const migrations = [
    { from: 'ATTENDEE', to: 'CONGRESSPERSON' },
    { from: 'PAPER-PRESENTATION', to: 'PAPER-PRESENTER' }
  ];

  const results = [];

  for (const migration of migrations) {
    try {
      const updateResult = await this.updateMany(
        { userType: migration.from },
        { $set: { userType: migration.to } }
      );
      results.push({
        from: migration.from,
        to: migration.to,
        updated: updateResult.modifiedCount
      });
    } catch (error) {
      results.push({
        from: migration.from,
        to: migration.to,
        error: error.message
      });
    }
  }

  return results;
};

// Método estático principal para processar certificado com dados do usuário
CertificateTemplatesSchema.statics.generateCertificate = async function(event, userType, certType, userData) {
  const certificateData = await this.findByCertType(userType, certType, event);

  if (!certificateData) {
    throw new Error(`Certificate not found for ${userType}/${certType} in event ${event}`);
  }

  return {
    certificateData,
    processedText: certificateData.generateCertificateText(userData),
    processedLines: certificateData.processText(userData)
  };
};

// Método estático para processar variáveis em templates
CertificateTemplatesSchema.statics.processTemplateVariables = function(templateArray, variables = {}) {
  if (!Array.isArray(templateArray)) {
    return [];
  }

  return templateArray.map(line => {
    if (typeof line !== 'string') {
      return line;
    }

    let processedLine = line;

    // Substituir todas as variáveis no formato {variableName}
    Object.keys(variables).forEach(key => {
      const placeholder = `{${key}}`;
      const value = variables[key];

      if (value !== null && value !== undefined) {
        processedLine = processedLine.replace(new RegExp(placeholder, 'g'), value);
      }
    });

    return processedLine;
  });
};

export default (models.CertificateTemplates || model('CertificateTemplates', CertificateTemplatesSchema));

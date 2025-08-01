import mongoose from 'mongoose';
const { Schema, models, model } = mongoose;

// Schema para certificados com suporte a múltiplas participações
const certificateSchema = new Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true,
    index: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  event: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
    required: true,
    index: true
  },
  userType: {
    type: String,
    required: true,
    enum: ['CONGRESSPERSON', 'PROFESSIONAL', 'PAPER-PRESENTER', 'SYSTEM-USER'],
    index: true
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
    ],
    index: true
  },
  // Referência específica para dados de participação múltipla
  participationData: {
    // Para professionalData - índice do array
    professionalDataIndex: {
      type: Number,
      required: false,
      default: null
    },
    // Para paperPresentationData - índice do array
    paperPresentationDataIndex: {
      type: Number,
      required: false,
      default: null
    },
    // Para congresspersonData - índice do array
    congresspersonDataIndex: {
      type: Number,
      required: false,
      default: null
    },
    // Dados específicos da participação (cache para performance)
    cachedData: {
      type: Schema.Types.Mixed,
      required: false,
      default: null
    }
  },
  // Metadados adicionais do certificado
  metadata: {
    lecture: {
      type: Schema.Types.ObjectId,
      ref: 'Lecture',
      required: false
    },
    hall: {
      type: String,
      required: false,
      trim: true
    },
    duration: {
      type: Number, // em horas
      required: false
    },
    date: {
      type: Date,
      required: false
    }
  },
  // Template e dados processados do certificado
  templateId: {
    type: Schema.Types.ObjectId,
    ref: 'CertificateTemplate',
    required: false
  },
  // Dados processados do certificado (variáveis substituídas)
  data: {
    type: Schema.Types.Mixed,
    required: false,
    default: {}
  },
  isActive: {
    type: Boolean,
    default: true,
    index: true
  },
  issuedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  collection: 'certificates',
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Índices compostos para consultas comuns
certificateSchema.index({ event: 1, userType: 1 });
certificateSchema.index({ userType: 1, certType: 1 });
certificateSchema.index({ userId: 1, isActive: 1 });
certificateSchema.index({ userId: 1, userType: 1, certType: 1 });
certificateSchema.index({ 'participationData.professionalDataIndex': 1 });
certificateSchema.index({ 'participationData.paperPresentationDataIndex': 1 });
certificateSchema.index({ 'participationData.congresspersonDataIndex': 1 });
certificateSchema.index({ 'metadata.lecture': 1 });

// Virtual para popular dados do usuário
certificateSchema.virtual('user', {
  ref: 'User',
  localField: 'userId',
  foreignField: '_id',
  justOne: true
});

// Virtual para obter template do certificado
certificateSchema.virtual('template').get(function() {
  // Será populado via método estático quando necessário
  return this._template;
});

// Métodos estáticos
certificateSchema.statics.createCertificate = async function(userData, event, userType, certType, participationOptions = {}) {
  const { name, cpf } = userData;

  // Garantir que event seja ObjectId
  const objectEventId = mongoose.Types.ObjectId.isValid(event)
    ? new mongoose.Types.ObjectId(event)
    : event;

  // Preparar dados de participação
  const participationData = {
    professionalDataIndex: participationOptions.professionalDataIndex || null,
    paperPresentationDataIndex: participationOptions.paperPresentationDataIndex || null,
    congresspersonDataIndex: participationOptions.congresspersonDataIndex || null,
    cachedData: participationOptions.cachedData || null
  };

  // Verificar se certificado já existe (busca mais simples por código único)
  const input = `${name.trim().toUpperCase()}|${cpf.trim()}|${event}|${userType}|${certType}`;
  const crypto = await import('crypto');
  const hash = crypto.createHash("md5").update(input).digest("hex");
  const code = hash.slice(0, 12).toUpperCase();

  // Verificar se já existe certificado com este código
  const existingCert = await this.findOne({ code, isActive: true });
  if (existingCert) {
    return existingCert;
  }

  // Preparar metadados do certificado
  const metadata = {
    lecture: participationOptions.lecture || null,
    hall: participationOptions.hall || null,
    duration: participationOptions.duration || null,
    date: participationOptions.date || null
  };

  return this.create({
    code,
    userId: userData._id,
    event: objectEventId,
    userType,
    certType,
    participationData,
    metadata,
    isActive: true
  });
};

certificateSchema.statics.findWithUserAndTemplate = async function(code) {
  // Importar dinamicamente quando necessário
  const { default: CertificateTemplates } = await import('./CertificateTemplates.js');
  const { default: User } = await import('./User.js'); // Importar User para garantir que o schema esteja registrado

  const certificate = await this.findOne({
    code: code.toUpperCase(),
    isActive: true
  }).lean();

  if (!certificate) return null;

  console.log('🔍 Certificado encontrado:', {
    code: certificate.code,
    userType: certificate.userType,
    certType: certificate.certType,
    event: certificate.event,
    userId: certificate.userId
  });

  // Buscar o usuário separadamente para ter mais controle
  let user = null;
  if (certificate.userId) {
    // TEMPORARY: Removendo .lean() para testar se resolve problema de formatação de authors
    const userDoc = await User.findById(certificate.userId);
    user = userDoc ? userDoc.toObject() : null;
  }

  // Se o usuário não for encontrado, lançar erro específico
  if (!user) {
    throw new Error(`Usuário não encontrado para o certificado ${code}. O certificado pode estar com referência inválida.`);
  }

  // Buscar template do CertificateTemplates
  let template = null;
  if (certificate.userType && certificate.certType && certificate.event) {
    try {
      template = await CertificateTemplates.findByCertType(
        certificate.userType,
        certificate.certType,
        certificate.event
      );
    } catch (error) {
      console.warn(`Erro ao buscar template para certificado ${code}:`, error.message);
    }
  } else {
    console.warn(`Certificado ${code} não possui todos os campos obrigatórios para buscar template:`, {
      userType: certificate.userType,
      certType: certificate.certType,
      event: certificate.event
    });
  }

  return {
    ...certificate,
    user, // Usuário carregado separadamente
    template
  };
};

certificateSchema.statics.generateCertificateData = async function(certificate) {
  // Importar dinamicamente quando necessário
  const { default: CertificateTemplates } = await import('./CertificateTemplates.js');
  const { default: User } = await import('./User.js');
  const { default: Lecture } = await import('./Lecture.js');

  if (!certificate.user) {
    throw new Error('Dados do usuário não encontrados no certificado');
  }

  // Buscar template
  let template = certificate.template;
  if (!template && certificate.userType && certificate.certType && certificate.event) {
    try {
      template = await CertificateTemplates.findByCertType(
        certificate.userType,
        certificate.certType,
        certificate.event
      );
    } catch (error) {
      throw new Error(`Erro ao buscar template: ${error.message}`);
    }
  }

  if (!template) {
    throw new Error(`Template não encontrado para ${certificate.userType}/${certificate.certType}/${certificate.event}`);
  }

  // Buscar usuário completo com populate das lectures se necessário
  const user = await User.findById(certificate.user._id)
    .populate('professionalData.lecture')
    .lean();

  if (!user) {
    throw new Error('Usuário não encontrado');
  }

  // Obter dados específicos da participação
  let participationData = {};
  const participationIndex = certificate.participationData?.professionalDataIndex ??
                            certificate.participationData?.congresspersonDataIndex ??
                            certificate.participationData?.paperPresentationDataIndex ?? 0;

  if (certificate.userType === 'PROFESSIONAL' && user.professionalData && user.professionalData[participationIndex]) {
    participationData = user.professionalData[participationIndex];
  } else if (certificate.userType === 'CONGRESSPERSON' && user.congresspersonData && user.congresspersonData[participationIndex]) {
    participationData = user.congresspersonData[participationIndex];
  } else if (certificate.userType === 'PAPER-PRESENTER' && user.paperPresentationData && user.paperPresentationData[participationIndex]) {
    participationData = user.paperPresentationData[participationIndex];
  }

  // Função para criar o mapeamento de dados do certificado (mesma lógica da API)
  function createCertificateData(template, user, participationData) {
    const certificateData = {};

    // Preencher dados básicos do usuário
    certificateData.full_name = user.name;
    certificateData.name = user.name;
    certificateData.cpf = user.cpf;
    certificateData.email = user.email;

    // Fazer spread de todas as propriedades dos dados de participação
    if (participationData) {
      Object.keys(participationData).forEach(key => {
        // Tratar lecture especialmente - usar o nome da lecture se estiver populado
        if (key === 'lecture' && participationData.lecture && participationData.lecture.name) {
          certificateData.lectureTitle = participationData.lecture.name;
        } else if (key !== '_id' && key !== '__v') {
          // Evitar campos internos do MongoDB
          certificateData[key] = participationData[key];
        }
      });
    }

    // Preencher dados específicos definidos no template.specificFields (sobrescreve se necessário)
    if (template.specificFields) {
      Object.keys(template.specificFields).forEach(key => {
        const fieldConfig = template.specificFields[key];

        if (typeof fieldConfig === 'object' && fieldConfig.source) {
          // Configuração com objeto (source, field, value)
          if (fieldConfig.source === 'user') {
            certificateData[key] = user[fieldConfig.field] || '';
          } else if (fieldConfig.source === 'participation') {
            certificateData[key] = participationData[fieldConfig.field] || '';
          } else if (fieldConfig.source === 'template') {
            certificateData[key] = fieldConfig.value || '';
          }
        } else {
          // Configuração direta (valor simples)
          certificateData[key] = fieldConfig;
        }
      });
    }

    return certificateData;
  }

  // Gerar dados do certificado
  const certificateData = createCertificateData(template, user, participationData);

  // Processar template substituindo variáveis
  let processedText = template.data.join(' ');
  const processedLines = [];

  template.data.forEach(line => {
    let processedLine = line;
    Object.keys(certificateData).forEach(key => {
      const placeholder = `{${key}}`;
      if (processedLine.includes(placeholder)) {
        processedLine = processedLine.replace(new RegExp(placeholder.replace(/[{}]/g, '\\$&'), 'g'), certificateData[key] || '');
      }
    });
    processedLines.push(processedLine);
  });

  // Processar texto completo
  Object.keys(certificateData).forEach(key => {
    const placeholder = `{${key}}`;
    if (processedText.includes(placeholder)) {
      processedText = processedText.replace(new RegExp(placeholder.replace(/[{}]/g, '\\$&'), 'g'), certificateData[key] || '');
    }
  });

  return {
    certificateData,
    processedText,
    processedLines,
    template,
    user: {
      name: user.name,
      email: user.email,
      cpf: user.cpf
    }
  };
};

certificateSchema.statics.getTypeMapping = function() {
  return {
    // CertType -> UserType mapping
    'CONGRESS': 'CONGRESSPERSON',
    'SEMINAR': 'CONGRESSPERSON',
    'COURSE': 'CONGRESSPERSON',
    'WORKSHOP': 'CONGRESSPERSON',
    'DAYUSE': 'CONGRESSPERSON',
    'SPEAKER': 'PROFESSIONAL',
    'MODERATOR': 'PROFESSIONAL',
    'DEBATER': 'PROFESSIONAL',
    'CHAIR-OF-THE-BOARD': 'PROFESSIONAL',
    'PROGRAMME-COMMITTEE': 'PROFESSIONAL',
    'EXECUTIVE-COMMITTEE': 'PROFESSIONAL',
    'PRESIDENT': 'PROFESSIONAL',
    'VOLUNTEER-INTERN': 'PROFESSIONAL',
    'PRESENTATION': 'PAPER-PRESENTER',
    'AWARDED': 'PAPER-PRESENTER'
  };
};

// Método helper para determinar qual array de dados consultar
certificateSchema.statics.getParticipationDataField = function(userType) {
  switch (userType) {
    case 'PROFESSIONAL':
      return 'professionalData';
    case 'PAPER-PRESENTER':
      return 'paperPresentationData';
    case 'CONGRESSPERSON':
      return 'congresspersonData';
    default:
      return null;
  }
};

// Método helper para validar se um usuário pode ter certificado de um tipo específico
certificateSchema.statics.validateUserCanReceiveCertificate = function(userData, userType, certType, participationIndex = null) {
  // Verificar se o usuário tem o papel necessário
  if (!userData.roles || !userData.roles.includes(userType)) {
    return { valid: false, error: `Usuário não possui o papel ${userType}` };
  }

  // Verificar dados específicos da participação
  const dataField = this.getParticipationDataField(userType);
  if (dataField && participationIndex !== null) {
    const participationData = userData[dataField];
    if (!participationData || !participationData[participationIndex]) {
      return { valid: false, error: `Dados de participação não encontrados para índice ${participationIndex}` };
    }

    // Validar se o certType é compatível com os dados da participação
    const participationItem = participationData[participationIndex];
    if (userType === 'PROFESSIONAL' && participationItem.category !== certType) {
      return { valid: false, error: `Tipo de certificado ${certType} não compatível com categoria ${participationItem.category}` };
    }
    if (userType === 'CONGRESSPERSON' && participationItem.activity !== certType) {
      return { valid: false, error: `Tipo de certificado ${certType} não compatível com atividade ${participationItem.activity}` };
    }
    if (userType === 'PAPER-PRESENTER') {
      const expectedType = participationItem.awarded ? 'AWARDED' : 'PRESENTATION';
      if (certType !== expectedType) {
        return { valid: false, error: `Tipo de certificado ${certType} não compatível com apresentação (esperado: ${expectedType})` };
      }
    }
  }

  return { valid: true };
};

// Métodos específicos para criar certificados por tipo de participação
certificateSchema.statics.createProfessionalCertificate = async function(userData, event, professionalDataIndex, professionalData) {
  const certType = professionalData.category; // SPEAKER, MODERATOR, etc.

  const participationOptions = {
    professionalDataIndex,
    cachedData: professionalData,
    lecture: professionalData.lecture,
    hall: professionalData.hall
  };

  return this.createCertificate(userData, event, 'PROFESSIONAL', certType, participationOptions);
};

certificateSchema.statics.createPaperPresentationCertificate = async function(userData, event, paperPresentationDataIndex, presentationData) {
  const certType = presentationData.awarded ? 'AWARDED' : 'PRESENTATION';

  const participationOptions = {
    paperPresentationDataIndex,
    cachedData: presentationData
  };

  return this.createCertificate(userData, event, 'PAPER-PRESENTER', certType, participationOptions);
};

certificateSchema.statics.createCongresspersonCertificate = async function(userData, event, congresspersonDataIndex, congresspersonData) {
  const certType = congresspersonData.activity; // CONGRESS, SEMINAR, etc.

  const participationOptions = {
    congresspersonDataIndex,
    cachedData: congresspersonData,
    hall: congresspersonData.hall,
    duration: congresspersonData.duration,
    date: congresspersonData.date
  };

  return this.createCertificate(userData, event, 'CONGRESSPERSON', certType, participationOptions);
};

// Método para buscar certificados de um usuário com dados de participação
certificateSchema.statics.findUserCertificatesWithParticipation = async function(userId, event = null) {
  const query = { userId, isActive: true };
  if (event) {
    query.event = event;
  }

  const certificates = await this.find(query)
    .populate('user')
    .sort({ issuedAt: -1 })
    .lean();
console.log("Certificados encontrados:", certificates);


  // Enriquecer certificados com dados de participação
  return certificates.map(cert => {
    const user = cert.user;
    let participationDetails = null;

    // Buscar dados específicos da participação
    if (cert.userType === 'PROFESSIONAL' && cert.participationData?.professionalDataIndex !== null && cert.participationData?.professionalDataIndex !== undefined) {
      participationDetails = user.professionalData?.[cert.participationData.professionalDataIndex] || cert.participationData.cachedData;
    } else if (cert.userType === 'PAPER-PRESENTER' && cert.participationData?.paperPresentationDataIndex !== null && cert.participationData?.paperPresentationDataIndex !== undefined) {
      participationDetails = user.paperPresentationData?.[cert.participationData.paperPresentationDataIndex] || cert.participationData.cachedData;
    } else if (cert.userType === 'CONGRESSPERSON' && cert.participationData?.congresspersonDataIndex !== null && cert.participationData?.congresspersonDataIndex !== undefined) {
      participationDetails = user.congresspersonData?.[cert.participationData.congresspersonDataIndex] || cert.participationData.cachedData;
    }

    // Se não encontrou pelos índices, usar cachedData como fallback
    if (!participationDetails && cert.participationData?.cachedData) {
      participationDetails = cert.participationData.cachedData;
    }

    return {
      ...cert,
      participationDetails
    };
  });
};

// Método para criar todos os certificados de um usuário multi-roles
certificateSchema.statics.createAllUserCertificates = async function(userData, event) {
  const certificates = [];

  // Certificados profissionais
  if (userData.professionalData && userData.professionalData.length > 0) {
    for (let i = 0; i < userData.professionalData.length; i++) {
      const professionalData = userData.professionalData[i];
      try {
        const cert = await this.createProfessionalCertificate(userData, event, i, professionalData);
        certificates.push(cert);
      } catch (error) {
        console.error(`Erro ao criar certificado profissional ${i}:`, error);
      }
    }
  }

  // Certificados de apresentação de trabalho
  if (userData.paperPresentationData && userData.paperPresentationData.length > 0) {
    for (let i = 0; i < userData.paperPresentationData.length; i++) {
      const presentationData = userData.paperPresentationData[i];
      try {
        const cert = await this.createPaperPresentationCertificate(userData, event, i, presentationData);
        certificates.push(cert);
      } catch (error) {
        console.error(`Erro ao criar certificado de apresentação ${i}:`, error);
      }
    }
  }

  // Certificados de congressista
  if (userData.congresspersonData && userData.congresspersonData.length > 0) {
    for (let i = 0; i < userData.congresspersonData.length; i++) {
      const congresspersonData = userData.congresspersonData[i];
      try {
        const cert = await this.createCongresspersonCertificate(userData, event, i, congresspersonData);
        certificates.push(cert);
      } catch (error) {
        console.error(`Erro ao criar certificado de congressista ${i}:`, error);
      }
    }
  }

  return certificates;
};

const Certificate = models.Certificate || model('Certificate', certificateSchema);

export default Certificate;

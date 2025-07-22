import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import crypto from 'crypto';
import User from '@/models/mongo/User.js';
import Certificate from '@/models/mongo/Certificate.js';
import CertificateTemplates from '@/models/mongo/CertificateTemplates.js';
// eslint-disable-next-line no-unused-vars
import Lecture from '@/models/mongo/Lecture.js';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/jornada';

// Funções auxiliares para descrições em português-BR
function getActivityDescription(activity) {
  const descriptions = {
    'CONGRESS': 'Participação no Congresso',
    'SEMINAR': 'Participação no Seminário',
    'DAYUSE': 'Participação Congressista de Dia Único',
    'COURSE': 'Participação em Curso',
    'WORKSHOP': 'Participação em Workshop'
  };
  return descriptions[activity] || activity;
}

function getProfessionalDescription(category) {
  const descriptions = {
    'SPEAKER': 'Palestrante',
    'MODERATOR': 'Moderador',
    'DEBATER': 'Debatedor',
    'CHAIR-OF-THE-BOARD': 'Presidente de Mesa'
  };
  return descriptions[category] || category;
}

function getActivityNameInPortuguese(activity) {
  const names = {
    'CONGRESS': 'Congresso',
    'SEMINAR': 'Seminário',
    'DAYUSE': 'Dia Único',
    'COURSE': 'Curso',
    'WORKSHOP': 'Workshop'
  };
  return names[activity] || activity;
}

// POST /api/certificate - Emitir certificado
export async function POST(request) {
  try {
    const { cpf, email, userType, certType, event, participationIndex } = await request.json();

    // Validações
    if (!cpf || !email || !userType || !certType || !event) {
      return NextResponse.json(
        { error: 'Dados obrigatórios não informados.' },
        { status: 400 }
      );
    }

    // Buscar usuário com populate para professionalData.lecture
    const user = await User.findByCpfAndEmail(cpf, email)
      .populate('professionalData.lecture')
      .exec();
    if (!user) {
      return NextResponse.json(
        { error: 'Usuário não encontrado.' },
        { status: 404 }
      );
    }

    // Buscar template
    const template = await CertificateTemplates.findByCertType(userType, certType, event);

    if (!template) {
      return NextResponse.json(
        { error: 'Template não encontrado para ' + userType + '/' + certType },
        { status: 404 }
      );
    }

    // Obter dados específicos da participação baseado no userType e participationIndex
    let participationData = {};

    if (userType === 'PROFESSIONAL' && user.professionalData && user.professionalData[participationIndex]) {
      participationData = user.professionalData[participationIndex];

      // Validar se o profissional compareceu
      if (!participationData.attendedAt || participationData.attendedAt === null) {
        return NextResponse.json(
          { error: 'Certificado não pode ser emitido. Profissional não registrou comparecimento ao evento.' },
          { status: 400 }
        );
      }
    } else if (userType === 'CONGRESSPERSON' && user.congresspersonData && user.congresspersonData[participationIndex]) {
      participationData = user.congresspersonData[participationIndex];

      // Validar se o congressista compareceu e tem pagamento válido
      const hasValidAttendance = participationData.attendedAt && participationData.attendedAt !== null;
      const hasValidPayment = participationData.paymentStatus === 'CONFIRMED' || participationData.paymentStatus === 'FREE';

      if (!hasValidAttendance) {
        return NextResponse.json(
          { error: 'Certificado não pode ser emitido. Congressista não registrou comparecimento ao evento.' },
          { status: 400 }
        );
      }

      if (!hasValidPayment) {
        return NextResponse.json(
          { error: `Certificado não pode ser emitido. Status de pagamento inválido: ${participationData.paymentStatus}. Deve ser CONFIRMED ou FREE.` },
          { status: 400 }
        );
      }
    } else if (userType === 'PAPER-PRESENTER' && user.paperPresentationData && user.paperPresentationData[participationIndex]) {
      participationData = user.paperPresentationData[participationIndex];
    }

    // Função para extrair variáveis do template
    function extractTemplateVariables(templateData) {
      const variables = new Set();
      const regex = /\{(\w+)\}/g;
      let match;

      while ((match = regex.exec(templateData)) !== null) {
        variables.add(match[1]);
      }

      return Array.from(variables);
    }

    // Função para criar o mapeamento de dados do certificado
    function createCertificateData(template, user, participationData) {
      const certificateData = {};

      // Preencher dados básicos do usuário
      certificateData.full_name = user.name;
      certificateData.name = user.name;
      certificateData.cpf = user.cpf;
      certificateData.email = user.email;

      // Fazer spread de todas as propriedades dos dados de participação
      // Isso garante que todas as variáveis (hall, lecture, category, etc.) estejam disponíveis
      if (participationData) {
        Object.keys(participationData).forEach(key => {
          // Tratar lecture especialmente para incluir dados completos
          if (key === 'lecture' && participationData.lecture) {
            if (typeof participationData.lecture === 'object' && participationData.lecture.name) {
              // Se lecture já foi populada, usar os dados completos
              certificateData.lecture = participationData.lecture.name;
              certificateData.lectureId = participationData.lecture._id;
            } else {
              // Se lecture é só o ID, armazenar para busca posterior se necessário
              certificateData.lectureId = participationData.lecture;
            }
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

      console.log('🎯 Final certificate data:', certificateData);
      return certificateData;
    }

    // Criar os dados do certificado
    const certificateData = createCertificateData(template, user, participationData);

    // Gerar código único do certificado incluindo o participationIndex e dados específicos
    const certificateCode = generateCertificateCode(user.name, user.cpf, event, userType, certType, participationIndex, participationData);

    // Verificar se já existe certificado com este código
    const existingCertificate = await Certificate.findOne({
      code: certificateCode,
      isActive: true
    });

    if (existingCertificate) {
      return NextResponse.json({
        success: true,
        message: 'Certificado já foi emitido para esta combinação.',
        certificate: {
          code: certificateCode,
          issuedAt: existingCertificate.issuedAt,
          id: existingCertificate._id
        }
      });
    }

    // Preparar participationData baseado no userType
    const participationDataToSave = {};

    if (userType === 'PROFESSIONAL') {
      participationDataToSave.professionalDataIndex = participationIndex || 0;
    } else if (userType === 'CONGRESSPERSON') {
      participationDataToSave.congresspersonDataIndex = participationIndex || 0;
    } else if (userType === 'PAPER-PRESENTER') {
      participationDataToSave.paperPresentationDataIndex = participationIndex || 0;
    }

    // Criar novo certificado
    const newCertificate = new Certificate({
      userId: user._id,
      userType,
      certType,
      event,
      participationData: participationDataToSave,
      code: certificateCode,
      templateId: template._id,
      data: certificateData,
      issuedAt: new Date()
    });

    await newCertificate.save();

    return NextResponse.json({
      success: true,
      message: 'Certificado emitido com sucesso!',
      certificate: {
        code: certificateCode,
        issuedAt: newCertificate.issuedAt,
        id: newCertificate._id
      }
    });

  } catch (error) {
    console.error('❌ Erro ao emitir certificado:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor.' },
      { status: 500 }
    );
  }
}

// Função auxiliar para gerar código do certificado determinístico
function generateCertificateCode(name, cpf, event, userType, certType, participationIndex = 0, participationData = null) {
  // Incluir dados específicos para garantir códigos únicos
  let specificData = '';
  
  if (participationData) {
    // Para profissionais, incluir lecture ID se disponível
    if (userType === 'PROFESSIONAL' && participationData.lecture) {
      specificData = `|${participationData.lecture._id || participationData.lecture}`;
    }
    // Para trabalhos científicos, incluir título do trabalho
    else if (userType === 'PAPER-PRESENTER' && participationData.paperTitle) {
      specificData = `|${participationData.paperTitle.substring(0, 20)}`;
    }
    // Para congressistas, incluir atividade específica
    else if (userType === 'CONGRESSPERSON' && participationData.activityName) {
      specificData = `|${participationData.activityName.substring(0, 20)}`;
    }
  }
  
  // Incluir participationIndex para garantir códigos únicos para múltiplas participações
  const input = `${name.trim().toUpperCase()}|${cpf.trim()}|${event}|${userType}|${certType}|${participationIndex || 0}${specificData}`;
  const hash = crypto.createHash("md5").update(input).digest("hex");
  return hash.slice(0, 12).toUpperCase();
}

// Função para conectar ao MongoDB
async function connectToMongoDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
  }
}

// GET /api/certificate - Listar certificados ou tipos disponíveis
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const event = searchParams.get('event');
    const userType = searchParams.get('userType');
    const certCode = searchParams.get('code'); // Novo parâmetro para buscar por código
    const action = searchParams.get('action'); // 'stats', 'types', 'certificates', 'processed', 'eligible'

    // Conectar ao MongoDB
    await connectToMongoDB();

    // Nova funcionalidade: Analisar dados do usuário para determinar certificados elegíveis
    if (action === 'eligible' && userId) {
      // Buscar o usuário completo com todos os dados e popular as referências de lecture
      const userDoc = await User.findById(userId).populate('professionalData.lecture');
      const user = userDoc ? userDoc.toObject() : null;

      if (!user) {
        return NextResponse.json(
          { error: 'Usuário não encontrado.' },
          { status: 404 }
        );
      }

      console.log('🔍 Analisando dados do usuário para certificados elegíveis:', user.name);

      // Analisar dados e determinar certificados elegíveis
      const eligibleCertificates = [];

      // 1. Verificar certificados de CONGRESSPERSON baseado em congresspersonData
      if (user.roles && user.roles.includes('CONGRESSPERSON') && user.congresspersonData && user.congresspersonData.length > 0) {
        user.congresspersonData.forEach((data, index) => {
          const activity = data.activity; // 'CONGRESS', 'SEMINAR', 'DAYUSE', 'COURSE', 'WORKSHOP'

          // Verificar se o usuário atende aos critérios para emissão de certificado
          const hasValidAttendance = data.attendedAt && data.attendedAt !== null;
          const hasValidPayment = data.paymentStatus === 'CONFIRMED' || data.paymentStatus === 'FREE';

          // Só adicionar se atender aos critérios de comparecimento e pagamento
          if (hasValidAttendance && hasValidPayment) {
            eligibleCertificates.push({
              userType: 'CONGRESSPERSON',
              certType: activity,
              participationIndex: index,
              event: data.event, // Event específico da participação
              participationDetails: {
                event: data.event,
                activity: data.activity,
                activityName: data.activityName || getActivityNameInPortuguese(data.activity),
                attendedAt: data.attendedAt,
                paymentStatus: data.paymentStatus
              },
              description: `Certificado de ${getActivityDescription(activity)}`,
              isEligible: true,
              dataSource: 'congresspersonData'
            });
          }
        });
      }

      // 2. Verificar certificados de PROFESSIONAL baseado em professionalData
      if (user.roles && user.roles.includes('PROFESSIONAL') && user.professionalData && user.professionalData.length > 0) {
        user.professionalData.forEach((data, index) => {
          const category = data.category; // 'SPEAKER', 'MODERATOR', 'DEBATER', 'CHAIR-OF-THE-BOARD'

          // Verificar se o profissional compareceu (attendedAt deve estar preenchido)
          const hasValidAttendance = data.attendedAt && data.attendedAt !== null;

          // Só adicionar se atender ao critério de comparecimento
          if (hasValidAttendance) {
            eligibleCertificates.push({
              userType: 'PROFESSIONAL',
              certType: category,
              participationIndex: index,
              event: data.event, // Event específico da participação
              participationDetails: {
                event: data.event,
                category: data.category,
                hall: data.hall,
                lecture: data.lecture,
                badge_name: data.badge_name,
                curriculum: data.curriculum,
                attendedAt: data.attendedAt
              },
              description: `Certificado de ${getProfessionalDescription(category)}`,
              isEligible: true,
              dataSource: 'professionalData'
            });
          }
        });
      }

      // 3. Verificar certificados de PAPER-PRESENTER baseado em paperPresentationData
      if (user.roles && user.roles.includes('PAPER-PRESENTER') && user.paperPresentationData && user.paperPresentationData.length > 0) {
        user.paperPresentationData.forEach((data, index) => {
          // Certificado de apresentação
          eligibleCertificates.push({
            userType: 'PAPER-PRESENTER',
            certType: 'PRESENTATION',
            participationIndex: index,
            event: data.event, // Event específico da participação
            participationDetails: {
              event: data.event,
              authors: data.authors,
              paperTitle: data.paperTitle,
              presentationFormat: data.presentationFormat,
              awardedTitle: data.awardedTitle
            },
            description: `Certificado de Apresentação de Trabalho ${data.presentationFormat === 'POSTER' ? 'em formato Pôster' : 'Tema Livre/Oral'}`,
            isEligible: true,
            dataSource: 'paperPresentationData'
          });

          // Certificado de premiação (se tiver awardedTitle)
          if (data.awardedTitle && data.awardedTitle.trim() !== '') {
            eligibleCertificates.push({
              userType: 'PAPER-PRESENTER',
              certType: 'AWARDED',
              participationIndex: index,
              event: data.event, // Event específico da participação
              participationDetails: {
                event: data.event,
                authors: data.authors,
                paperTitle: data.paperTitle,
                presentationFormat: data.presentationFormat,
                awardedTitle: data.awardedTitle
              },
              description: `Certificado de Premiação: ${data.awardedTitle}`,
              isEligible: true,
              dataSource: 'paperPresentationData'
            });
          }
        });
      }

      // Verificar quais certificados já foram emitidos para evitar duplicatas
      const existingCertificates = await Certificate.find({
        userId: user._id,
        isActive: true
      }).lean();

      // Marcar certificados que já foram emitidos
      eligibleCertificates.forEach(eligible => {
        const alreadyIssued = existingCertificates.find(existing => {
          // Comparação de userType e certType (deve ser exata)
          const userTypeMatch = existing.userType === eligible.userType;
          const certTypeMatch = existing.certType === eligible.certType;

          // Comparação de evento (ObjectId vs String)
          const eventMatch = existing.event && existing.event.toString() === eligible.event.toString();

          // Comparação de participationIndex baseado no userType
          let participationMatch = true;

          if (eligible.participationIndex !== undefined) {
            if (eligible.userType === 'PROFESSIONAL') {
              participationMatch = existing.participationData?.professionalDataIndex === eligible.participationIndex;
            } else if (eligible.userType === 'CONGRESSPERSON') {
              participationMatch = existing.participationData?.congresspersonDataIndex === eligible.participationIndex;
            } else if (eligible.userType === 'PAPER-PRESENTER') {
              participationMatch = existing.participationData?.paperPresentationDataIndex === eligible.participationIndex;
            }
          }

          return userTypeMatch && certTypeMatch && eventMatch && participationMatch;
        });

        if (alreadyIssued) {
          eligible.isEligible = false;
          eligible.alreadyIssued = true;
          eligible.certificateCode = alreadyIssued.code;
          eligible.issuedAt = alreadyIssued.issuedAt;
        }
      });

      return NextResponse.json({
        success: true,
        userId,
        userName: user.name,
        userEmail: user.email,
        event: event || 'all',
        eligibleCertificates,
        summary: {
          total: eligibleCertificates.length,
          canIssue: eligibleCertificates.filter(c => c.isEligible).length,
          alreadyIssued: eligibleCertificates.filter(c => c.alreadyIssued).length,
          roles: user.roles || []
        }
      });
    }

    if (action === 'types') {
      // Retornar tipos disponíveis baseado nos templates do CertificateTemplates
      const availableTypes = {};

      if (event) {
        // Buscar tipos disponíveis para um evento específico
        const templates = await CertificateTemplates.findByEvent(event);
        templates.forEach(template => {
          if (!availableTypes[template.userType]) {
            availableTypes[template.userType] = [];
          }
          if (!availableTypes[template.userType].includes(template.certType)) {
            availableTypes[template.userType].push(template.certType);
          }
        });
      } else if (userType) {
        // Filtrar por userType específico
        const templates = await CertificateTemplates.find({
          userType,
          'metadata.isActive': true
        });
        availableTypes[userType] = templates.map(t => t.certType);
      } else {
        // Todos os tipos organizados por userType (baseado nos enums do modelo)
        availableTypes.CONGRESSPERSON = ['CONGRESS', 'SEMINAR', 'COURSE', 'WORKSHOP', 'DAYUSE'];
        availableTypes.PROFESSIONAL = ['SPEAKER', 'MODERATOR', 'DEBATER', 'CHAIR-OF-THE-BOARD'];
        availableTypes['PAPER-PRESENTER'] = ['PRESENTATION', 'AWARDED'];
      }

      return NextResponse.json({
        success: true,
        event: event || 'all',
        userType: userType || 'all',
        availableTypes
      });
    }

    if (userId) {
      // Buscar certificados de um usuário específico com dados de participação
      const certificates = await Certificate.findUserCertificatesWithParticipation(
        userId,
        event ? new mongoose.Types.ObjectId(event) : null
      );

      return NextResponse.json({
        success: true,
        userId,
        event: event || 'all',
        certificates: certificates.map(cert => ({
          code: cert.code,
          userType: cert.userType,
          certType: cert.certType,
          issuedAt: cert.issuedAt,
          participationData: cert.participationData,
          participationDetails: cert.participationDetails,
          metadata: cert.metadata
        }))
      });
    }

    if (certCode) {
      // Buscar certificado específico por código com dados processados
      const certificate = await Certificate.findWithUserAndTemplate(certCode);

      if (!certificate) {
        return NextResponse.json(
          { error: 'Certificado não encontrado.' },
          { status: 404 }
        );
      }

      // Gerar dados processados se solicitado
      if (action === 'processed') {
        try {
          const processedData = await Certificate.generateCertificateData(certificate);

          return NextResponse.json({
            success: true,
            certificate: {
              code: certificate.code,
              userType: certificate.userType,
              certType: certificate.certType,
              issuedAt: certificate.issuedAt,
              user: {
                name: certificate.user.name,
                email: certificate.user.email
              },
              specificFields: {
                ...certificate.template.specificFields
              },
              processedText: processedData.processedText,
              processedLines: processedData.processedLines,
              template: certificate.template ? {
                title: certificate.template.metadata.title,
                description: certificate.template.metadata.description
              } : null
            }
          });
        } catch (error) {
          return NextResponse.json(
            { error: 'Erro ao processar dados do certificado.', details: error.message },
            { status: 500 }
          );
        }
      }

      // Retornar dados básicos do certificado
      return NextResponse.json({
        success: true,
        certificate: {
          code: certificate.code,
          userType: certificate.userType,
          certType: certificate.certType,
          issuedAt: certificate.issuedAt,
          user: {
            name: certificate.user.name,
            email: certificate.user.email
          },
          template: certificate.template ? {
            title: certificate.template.metadata.title,
            description: certificate.template.metadata.description
          } : null
        }
      });
    }

    if (action === 'stats') {
      // Estatísticas gerais
      const stats = await Certificate.aggregate([
        { $match: { isActive: true } },
        { $group: {
          _id: { userType: '$userType', certType: '$certType' },
          count: { $sum: 1 }
        }},
        { $sort: { '_id.userType': 1, '_id.certType': 1 } }
      ]);

      // Estatísticas de templates
      const templateStats = await CertificateTemplates.aggregate([
        { $match: { 'metadata.isActive': true } },
        { $group: {
          _id: '$userType',
          templates: { $push: '$certType' },
          count: { $sum: 1 }
        }},
        { $sort: { '_id': 1 } }
      ]);

      return NextResponse.json({
        success: true,
        certificateStats: stats,
        templateStats,
        totalCertificates: await Certificate.countDocuments({ isActive: true }),
        totalTemplates: await CertificateTemplates.countDocuments({ 'metadata.isActive': true })
      });
    }

    // Retorna help se nenhum parâmetro específico for fornecido
    return NextResponse.json({
      success: true,
      help: {
        endpoints: {
          'POST': 'Emitir certificado - Body: { cpf, email, userType, certType, event, participationIndex? }',
          'GET ?action=types&event=xxx': 'Lista tipos de certificados disponíveis para um evento',
          'GET ?action=types&userType=yyy': 'Lista tipos por userType',
          'GET ?userId=xxx&event=yyy': 'Lista certificados de um usuário para um evento',
          'GET ?userId=xxx': 'Lista todos os certificados de um usuário',
          'GET ?code=xxx': 'Busca certificado específico por código',
          'GET ?code=xxx&action=processed': 'Busca certificado com dados processados',
          'GET ?action=stats': 'Estatísticas gerais'
        },
        userTypes: ['CONGRESSPERSON', 'PROFESSIONAL', 'PAPER-PRESENTER', 'SYSTEM-USER'],
        certTypes: {
          CONGRESSPERSON: ['CONGRESS', 'SEMINAR', 'COURSE', 'WORKSHOP', 'DAYUSE'],
          PROFESSIONAL: ['SPEAKER', 'MODERATOR', 'DEBATER', 'CHAIR-OF-THE-BOARD'],
          'PAPER-PRESENTER': ['PRESENTATION', 'AWARDED']
        },
        notes: {
          'participationIndex': 'Índice da participação específica (necessário para usuários com múltiplas participações do mesmo tipo)',
          'validation': 'API valida automaticamente se o usuário pode receber o certificado baseado em seus dados de participação'
        }
      }
    });

  } catch (error) {
    console.error('Erro ao processar requisição GET:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor.', details: error.message },
      { status: 500 }
    );
  }
}

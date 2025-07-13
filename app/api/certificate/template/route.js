import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import User from '@/models/mongo/User.js';
import Certificate from '@/models/mongo/Certificate.js';
import CertificateTemplates from '@/models/mongo/CertificateTemplates.js';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/jornada';

// Função para conectar ao MongoDB
async function connectToMongoDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
  }
}

// GET /api/certificate/template - Buscar template específico
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const event = searchParams.get('event');
    const userType = searchParams.get('userType');
    const certType = searchParams.get('certType');

    if (!event || !userType || !certType) {
      return NextResponse.json(
        {
          error: 'Parâmetros obrigatórios: event, userType, certType',
          example: '/api/certificate/template?event=6844b06292642fb12c3667b5&userType=PROFESSIONAL&certType=SPEAKER',
          validUserTypes: ['CONGRESSPERSON', 'PROFESSIONAL', 'PAPER-PRESENTER', 'SYSTEM-USER'],
          validCertTypes: {
            CONGRESSPERSON: ['CONGRESS', 'SEMINAR', 'COURSE', 'WORKSHOP', 'DAYUSE'],
            PROFESSIONAL: ['SPEAKER', 'MODERATOR', 'DEBATER', 'CHAIR-OF-THE-BOARD'],
            'PAPER-PRESENTER': ['PRESENTATION', 'AWARDED']
          }
        },
        { status: 400 }
      );
    }

    // Validar userType e certType
    const validUserTypes = ['CONGRESSPERSON', 'PROFESSIONAL', 'PAPER-PRESENTER', 'SYSTEM-USER'];
    const validCertTypes = [
      'CONGRESS', 'SEMINAR', 'COURSE', 'WORKSHOP', 'DAYUSE',
      'SPEAKER', 'MODERATOR', 'DEBATER', 'CHAIR-OF-THE-BOARD',
      'PRESENTATION', 'AWARDED'
    ];

    if (!validUserTypes.includes(userType)) {
      return NextResponse.json(
        { error: `userType inválido. Tipos válidos: ${validUserTypes.join(', ')}` },
        { status: 400 }
      );
    }

    if (!validCertTypes.includes(certType)) {
      return NextResponse.json(
        { error: `certType inválido. Tipos válidos: ${validCertTypes.join(', ')}` },
        { status: 400 }
      );
    }

    // Conectar ao MongoDB
    await connectToMongoDB();

    // Busca template específico usando o modelo refatorado
    const template = await CertificateTemplates.findByCertType(userType, certType, event);

    if (!template) {
      return NextResponse.json(
        { error: 'Template não encontrado para os parâmetros fornecidos.' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      event,
      userType,
      certType,
      template: {
        id: template._id,
        title: template.metadata.title,
        description: template.metadata.description,
        templateName: template.metadata.template,
        sampleData: template.data,
        specificFields: template.specificFields,
        metadata: template.metadata,
        isActive: template.metadata.isActive
      },
      note: "Para gerar código de validação e preview, use POST com: event, certType, userType, cpf, participationIndex (opcional)"
    });

  } catch (error) {
    console.error('Erro ao buscar template:', error);

    return NextResponse.json(
      { error: 'Erro interno do servidor.', details: error.message },
      { status: 500 }
    );
  }
}

// POST /api/certificate/template - Validar dados para template usando CPF
export async function POST(request) {
  try {
    const { event, certType, userType, cpf, participationIndex } = await request.json();

    if (!event || !certType || !userType || !cpf) {
      return NextResponse.json(
        {
          error: 'Campos obrigatórios: event, certType, userType, cpf',
          optional: 'participationIndex (para usuários com múltiplas participações)'
        },
        { status: 400 }
      );
    }

    // Validar userType e certType
    const validUserTypes = ['CONGRESSPERSON', 'PROFESSIONAL', 'PAPER-PRESENTER', 'SYSTEM-USER'];
    const validCertTypes = [
      'CONGRESS', 'SEMINAR', 'COURSE', 'WORKSHOP', 'DAYUSE',
      'SPEAKER', 'MODERATOR', 'DEBATER', 'CHAIR-OF-THE-BOARD',
      'PRESENTATION', 'AWARDED'
    ];

    if (!validUserTypes.includes(userType)) {
      return NextResponse.json(
        { error: `userType inválido. Tipos válidos: ${validUserTypes.join(', ')}` },
        { status: 400 }
      );
    }

    if (!validCertTypes.includes(certType)) {
      return NextResponse.json(
        { error: `certType inválido. Tipos válidos: ${validCertTypes.join(', ')}` },
        { status: 400 }
      );
    }

    // Conectar ao MongoDB
    await connectToMongoDB();

    // Busca dados do usuário no banco pelo CPF
    // TEMPORARY: Removendo .lean() para testar se resolve problema de formatação de authors
    const userDoc = await User.findOne({
      cpf: cpf.replace(/\D/g, ''),
      isActive: true
    });
    const user = userDoc ? userDoc.toObject() : null;

    if (!user) {
      return NextResponse.json(
        { error: 'Usuário não encontrado com o CPF fornecido' },
        { status: 404 }
      );
    }

    // Verifica se o usuário possui o papel necessário
    if (!user.roles || !user.roles.includes(userType)) {
      return NextResponse.json(
        {
          error: `Usuário não possui o papel necessário: ${userType}`,
          userRoles: user.roles || []
        },
        { status: 400 }
      );
    }

    // Busca o template para o tipo de certificado
    const template = await CertificateTemplates.findByCertType(userType, certType, event);

    if (!template) {
      return NextResponse.json(
        { error: 'Template não encontrado para os parâmetros fornecidos.' },
        { status: 404 }
      );
    }

    // Obter dados específicos de participação baseado no userType
    let participationData = null;
    let participations = [];
    let currentParticipation = null;

    if (userType === 'PROFESSIONAL') {
      // Buscar dados profissionais do usuário
      participations = user.professionalData || [];

      // Filtrar por categoria correspondente ao certType
      const relevantParticipations = participations.filter(data => data.category === certType);

      if (relevantParticipations.length === 0) {
        return NextResponse.json(
          {
            error: `Usuário não possui dados de participação como ${certType}`,
            availableCategories: participations.map(p => p.category)
          },
          { status: 400 }
        );
      }

      // Se participationIndex foi fornecido, usar índice específico
      const targetIndex = participationIndex !== undefined ? participationIndex : 0;

      if (targetIndex >= relevantParticipations.length) {
        return NextResponse.json(
          {
            error: `Índice de participação inválido. Máximo: ${relevantParticipations.length - 1}`,
            availableParticipations: relevantParticipations.length
          },
          { status: 400 }
        );
      }

      currentParticipation = {
        type: 'PROFESSIONAL',
        index: targetIndex,
        data: relevantParticipations[targetIndex]
      };

    } else if (userType === 'PAPER-PRESENTER') {
      participations = user.paperPresentationData || [];

      if (participations.length === 0) {
        return NextResponse.json(
          { error: 'Usuário não possui dados de apresentação de trabalho' },
          { status: 400 }
        );
      }

      // Filtrar participações baseado no certType
      let relevantParticipations = participations;
      if (certType === 'AWARDED') {
        relevantParticipations = participations.filter(p => p.awarded === true);
        if (relevantParticipations.length === 0) {
          return NextResponse.json(
            { error: 'Usuário não possui apresentações premiadas' },
            { status: 400 }
          );
        }
      }

      const targetIndex = participationIndex !== undefined ? participationIndex : 0;

      if (targetIndex >= relevantParticipations.length) {
        return NextResponse.json(
          {
            error: `Índice de participação inválido. Máximo: ${relevantParticipations.length - 1}`,
            availableParticipations: relevantParticipations.length
          },
          { status: 400 }
        );
      }

      currentParticipation = {
        type: 'PAPER-PRESENTER',
        index: targetIndex,
        data: relevantParticipations[targetIndex]
      };

    } else if (userType === 'CONGRESSPERSON') {
      participations = user.congresspersonData || [];

      // Filtrar por atividade correspondente ao certType
      const relevantParticipations = participations.filter(data => data.activity === certType);

      if (relevantParticipations.length === 0) {
        return NextResponse.json(
          {
            error: `Usuário não possui dados de participação em ${certType}`,
            availableActivities: participations.map(p => p.activity)
          },
          { status: 400 }
        );
      }

      const targetIndex = participationIndex !== undefined ? participationIndex : 0;

      if (targetIndex >= relevantParticipations.length) {
        return NextResponse.json(
          {
            error: `Índice de participação inválido. Máximo: ${relevantParticipations.length - 1}`,
            availableParticipations: relevantParticipations.length
          },
          { status: 400 }
        );
      }

      currentParticipation = {
        type: 'CONGRESSPERSON',
        index: targetIndex,
        data: relevantParticipations[targetIndex]
      };
    }

    // Monta userData para processamento do template
    const userData = {
      // Dados básicos do usuário
      name: user.name,
      full_name: user.name,
      cpf: user.cpf,
      email: user.email,
      city: user.city,
      state: user.state,
      phone: user.phone,

      // Dados da participação atual
      currentParticipation,

      // Metadados do certificado
      certificateMetadata: {
        event,
        userType,
        certType,
        eventYear: template.metadata.eventYear,
        title: template.metadata.title,
        description: template.metadata.description
      }
    };

    // Gerar o texto do certificado processado
    const processedText = template.generateCertificateText(userData);
    const processedLines = template.processText(userData);

    // Gerar código de validação
    let validationCode = null;
    try {
      const Certificate = await import('@/models/mongo/Certificate.js').then(mod => mod.default);
      const codeData = {
        name: userData.name,
        cpf: userData.cpf,
        event,
        userType,
        certType,
        participationIndex: currentParticipation?.index
      };
      validationCode = Certificate.generateCertificateCode(codeData);
    } catch (error) {
      console.warn('Não foi possível gerar código de validação:', error.message);
    }

    return NextResponse.json({
      success: true,
      user: {
        name: user.name,
        cpf: user.cpf,
        email: user.email,
        roles: user.roles
      },
      participation: {
        type: userType,
        certType,
        index: currentParticipation?.index || 0,
        data: currentParticipation?.data,
        totalParticipations: participations.length
      },
      template: {
        id: template._id,
        title: template.metadata.title,
        description: template.metadata.description,
        templateName: template.metadata.template,
        specificFields: template.specificFields,
        metadata: template.metadata
      },
      preview: {
        processedText,
        processedLines,
        rawData: template.data
      },
      validationCode,
      note: "Certificado válido e pronto para geração"
    });

  } catch (error) {
    console.error('Erro ao validar template:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor.', details: error.message },
      { status: 500 }
    );
  }
}

import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Certificate from '@/models/mongo/Certificate.js';
import User from '@/models/mongo/User.js';
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

// POST /api/certificate/validate - Validar certificado
export async function POST(request) {
  try {
    const { codigo } = await request.json();

    if (!codigo) {
      return NextResponse.json(
        { error: 'Código obrigatório.' },
        { status: 400 }
      );
    }

    // Conectar ao MongoDB
    await connectToMongoDB();

    // Buscar certificado pelo código usando o modelo refatorado
    const certificate = await Certificate.findWithUserAndTemplate(codigo.trim());

    if (!certificate) {
      return NextResponse.json(
        {
          success: false,
          valid: false,
          found: false,
          error: 'Certificado não encontrado ou inválido',
          code: codigo.trim().toUpperCase()
        },
        { status: 404 }
      );
    }

    // Verificar se o certificado está ativo
    if (!certificate.isActive) {
      return NextResponse.json(
        {
          success: false,
          valid: false,
          found: true,
          error: 'Certificado foi desativado',
          code: certificate.code
        },
        { status: 404 }
      );
    }

    // Gerar dados processados do certificado
    let processedCertificate = null;
    try {
      const certificateData = await Certificate.generateCertificateData(certificate);
      processedCertificate = {
        processedText: certificateData.processedText,
        processedLines: certificateData.processedLines
      };
    } catch (error) {
      console.warn('Não foi possível processar dados do certificado:', error.message);
    }

    // Obter dados específicos de participação
    let participationDetails = null;
    const user = certificate.user;

    if (certificate.participationData) {
      // Usar dados cacheados se disponíveis
      if (certificate.participationData.cachedData) {
        participationDetails = certificate.participationData.cachedData;
      } else {
        // Buscar dados atuais do usuário
        if (certificate.userType === 'PROFESSIONAL' &&
            certificate.participationData.professionalDataIndex !== null &&
            certificate.participationData.professionalDataIndex !== undefined) {
          participationDetails = user.professionalData?.[certificate.participationData.professionalDataIndex];
        } else if (certificate.userType === 'PAPER-PRESENTER' &&
                   certificate.participationData.paperPresentationDataIndex !== null &&
                   certificate.participationData.paperPresentationDataIndex !== undefined) {
          participationDetails = user.paperPresentationData?.[certificate.participationData.paperPresentationDataIndex];
        } else if (certificate.userType === 'CONGRESSPERSON' &&
                   certificate.participationData.congresspersonDataIndex !== null &&
                   certificate.participationData.congresspersonDataIndex !== undefined) {
          participationDetails = user.congresspersonData?.[certificate.participationData.congresspersonDataIndex];
        }
      }
    }

    // Formatar dados para retorno
    const certificateResult = {
      code: certificate.code,
      event: certificate.event,
      userType: certificate.userType,
      certType: certificate.certType,
      issuedAt: certificate.issuedAt,
      isActive: certificate.isActive,
      user: {
        name: user.name,
        cpf: user.cpf,
        email: user.email,
        city: user.city,
        state: user.state
      },
      participation: {
        type: certificate.userType,
        certType: certificate.certType,
        index: certificate.participationData?.professionalDataIndex ??
               certificate.participationData?.paperPresentationDataIndex ??
               certificate.participationData?.congresspersonDataIndex ?? 0,
        data: participationDetails
      },
      template: certificate.template ? {
        id: certificate.template._id,
        title: certificate.template.metadata?.title,
        description: certificate.template.metadata?.description,
        templateName: certificate.template.metadata?.template
      } : null,
      preview: processedCertificate,
      metadata: certificate.metadata || {}
    };

    return NextResponse.json({
      success: true,
      valid: true,
      found: true,
      certificate: certificateResult
    });

  } catch (error) {
    console.error('Erro ao validar certificado:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Erro interno do servidor.',
        details: error.message
      },
      { status: 500 }
    );
  }
}

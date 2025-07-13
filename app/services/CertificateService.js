import dbConnect from '../lib/mongoose.js';
import User from '../models/mongo/User.js';
import Certificate from '../models/mongo/Certificate.js';
import CertificateTemplates from '../models/mongo/CertificateTemplates.js';
import Event from '../models/mongo/Event.js';
import Lecture from '../models/mongo/Lecture.js';
import { users, event } from '../data/certificate.js';
import crypto from 'crypto';

export class CertificateService {
  constructor() {
    this.dataSource = process.env.NEXT_PUBLIC_CERTIFICATE_DATA_SOURCE || 'database';
  }

  /**
   * Conecta ao MongoDB se necessário
   */
  async connectDatabase() {
    if (this.dataSource === 'database') {
      try {
        await dbConnect();
      } catch (error) {
        console.error('Erro ao conectar MongoDB, usando fallback para arquivo:', error.message);
        this.dataSource = 'file';
      }
    }
  }

  /**
   * Busca usuário por CPF e email
   */
  async findUser(cpf, email) {
    await this.connectDatabase();

    if (this.dataSource === 'file') {
      // Busca no arquivo de dados
      const formattedCpf = this.formatCpf(cpf);
      return users.find(user =>
        user.cpf === formattedCpf &&
        user.email?.toLowerCase() === email?.toLowerCase()
      );
    }

    // Busca no banco de dados
    const cleanCpf = cpf.replace(/\D/g, ''); // Remove formatação
    // TEMPORARY: Removendo .lean() para testar se resolve problema de formatação de authors
    const userDoc = await User.findOne({
      cpf: cleanCpf,
      email: email.toLowerCase(),
      isActive: true
    });
    const user = userDoc ? userDoc.toObject() : null;
console.log('User found:', cleanCpf, email, user);
    return user;
  }

  /**
   * Busca usuário apenas por CPF
   */
  async findUserByCpf(cpf) {
    await this.connectDatabase();

    if (this.dataSource === 'file') {
      // Busca no arquivo de dados
      const formattedCpf = this.formatCpf(cpf);
      return users.find(user => user.cpf === formattedCpf);
    }

    // Busca no banco de dados
    const cleanCpf = cpf.replace(/\D/g, ''); // Remove formatação
    const user = await User.findOne({
      cpf: cleanCpf,
      isActive: true
    }).lean();

    console.log('User found by CPF:', cleanCpf, user);
    return user;
  }

  /**
   * Busca certificado por código
   */
  async findCertificateByCode(code) {
    await this.connectDatabase();

    if (this.dataSource === 'file') {
      // Para arquivo, vamos simular que existe um certificado
      // Na implementação real, você teria uma estrutura de certificados no arquivo
      const user = users.find(u => u.certificates?.some(cert => cert.code === code.toUpperCase()));
      if (user) {
        const cert = user.certificates.find(cert => cert.code === code.toUpperCase());
        return {
          ...cert,
          user: user,
          event: event[0]
        };
      }
      return null;
    }

    try {
      // Busca no banco de dados
      return await Certificate.findOne({
        code: code.toUpperCase(),
        isActive: true
      })
      .populate('user')
      .populate('event')
      .populate('lectures')
      .lean();
    } catch (error) {
      console.error('Erro ao buscar certificado no banco, tentando arquivo:', error.message);
      this.dataSource = 'file';
      return await this.findCertificateByCode(code);
    }
  }

  /**
   * Cria ou busca certificado existente
   */
  async createOrFindCertificate(userId, certificateData) {
    await this.connectDatabase();

    if (this.dataSource === 'file') {
      // Para arquivo, retorna dados mockados
      return {
        code: certificateData.code,
        type: certificateData.userType || 'ATTENDEE',
        user: users.find(u => u._id === userId),
        event: event[0]
      };
    }

    // Verifica se já existe
    let certificate = await Certificate.findOne({
      code: certificateData.code,
      isActive: true
    }).lean();

    if (!certificate) {
      // Cria novo certificado
      certificate = await Certificate.create({
        userId,
        event: certificateData.event,
        code: certificateData.code,
        type: certificateData.userType || 'ATTENDEE',
        ...certificateData.data
      });
    }

    return certificate;
  }

  /**
   * Busca evento padrão
   */
  async getEvent(eventName) {
    await this.connectDatabase();

    if (this.dataSource === 'file') {
      return event[0];
    }

    return await Event.findOne({
      isActive: true,
      name: eventName
    }).lean();
  }

  /**
   * Busca palestras por IDs
   */
  async getLecturesByIds(lectureIds) {
    await this.connectDatabase();

    if (this.dataSource === 'file') {
      // Para arquivo, retorna dados mockados
      return lectureIds.map(id => ({
        _id: id,
        name: `Palestra ${id}`,
        description: `Descrição da palestra ${id}`
      }));
    }

    return await Lecture.find({
      _id: { $in: lectureIds },
      isActive: true
    }).lean();
  }

  /**
   * Gera código determinístico do certificado
   */
  generateCertificateCode(userData) {
    const { name, cpf, event, userType, certType } = userData;
    if (!name || !cpf || !event || !userType || !certType) {
      throw new Error('Dados insuficientes para gerar código do certificado. Necessário: name, cpf, event, userType, certType');
    }

    const input = `${name.trim().toUpperCase()}|${cpf.trim()}|${event.trim()}|${userType.trim().toUpperCase()}|${certType.trim().toUpperCase()}`;
    const hash = crypto.createHash("md5").update(input).digest("hex");

    return hash.slice(0, 12).toUpperCase();
  }

  /**
   * Formata CPF para o padrão xxx.xxx.xxx-xx
   */
  formatCpf(cpf) {
    const digits = cpf.replace(/\D/g, '');
    if (digits.length !== 11) return cpf;
    return digits.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  /**
   * Valida certificado e retorna dados formatados
   */
  async validateCertificate(code) {
    const certificate = await this.findCertificateByCode(code);

    if (!certificate) {
      return {
        valid: false,
        found: false,
        error: 'Certificado não encontrado',
        code: code
      };
    }

    return {
      valid: true,
      found: true,
      certificate: {
        name: certificate.user.name,
        cpf: certificate.user.cpf,
        event: certificate.event?.name?.join(' e ') || 'XI Jornada Mineira de Radiologia (JMR2025) e XIV Congresso de Imaginologia da Mulher (CIM2025)',
        eventDate: certificate.event?.date || '27 e 28 de junho de 2025',
        issuedAt: certificate.createdAt || new Date(),
        type: certificate.type,
        specificData: this.getSpecificCertificateData(certificate)
      }
    };
  }

  /**
   * Retorna dados específicos baseados no tipo do certificado
   */
  getSpecificCertificateData(certificate) {
    switch (certificate.type) {
      case 'SPEAKER':
        return {
          lectures: certificate.lectures || [],
          lectureTitle: certificate.lectureTitle
        };

      case 'DEBATER':
        return {
          debateTitle: certificate.debateTitle,
          debateDate: certificate.debateDate
        };

      case 'MODERATOR':
        return {
          moderationTitle: certificate.moderationTitle,
          moderationDate: certificate.moderationDate
        };

      case 'CHAIR-OF-THE-BOARD':
        return {
          chairTitle: certificate.chairTitle,
          chairDate: certificate.chairDate,
          chairHall: certificate.chairHall
        };

      case 'PRESENTATION':
        return {
          workTitle: certificate.workTitle,
          workAuthors: certificate.workAuthors,
          presentationDate: certificate.presentationDate,
          sessionName: certificate.sessionName,
          presentationFormat: certificate.presentationFormat
        };

      case 'AWARDED':
        return {
          awardName: certificate.awardName,
          awardCategory: certificate.awardCategory,
          awardPosition: certificate.awardPosition,
          awardDate: certificate.awardDate,
          paperTitle: certificate.paperTitle
        };

      case 'CONGRESS':
      case 'SEMINAR':
      case 'COURSE':
      case 'WORKSHOP':
      case 'DAYUSE':
      default: // ATTENDEE types
        return {
          participationType: certificate.participationType,
          totalHours: certificate.totalHours,
          eventLocation: certificate.eventLocation
        };
    }
  }

  /**
   * Lista todos os certificados de um usuário
   */
  async getUserCertificates(userId) {
    await this.connectDatabase();

    if (this.dataSource === 'file') {
      const user = users.find(u => u._id === userId);
      return user?.certificates || [];
    }

    return await Certificate.find({
      userId,
      isActive: true
    })
    .populate('event')
    .populate('lectures')
    .lean();
  }

  /**
   * Estatísticas de certificados
   */
  async getCertificateStats() {
    await this.connectDatabase();

    if (this.dataSource === 'file') {
      const totalCerts = users.reduce((acc, user) => acc + (user.certificates?.length || 0), 0);
      return {
        total: totalCerts,
        byType: {
          // ATTENDEE types
          CONGRESS: 0,
          SEMINAR: 0,
          COURSE: 0,
          WORKSHOP: 0,
          DAYUSE: 0,
          // PROFESSIONAL types
          SPEAKER: 0,
          MODERATOR: 0,
          DEBATER: 0,
          'CHAIR-OF-THE-BOARD': 0,
          // PAPER-PRESENTATION types
          PRESENTATION: 0,
          AWARDED: 0
        }
      };
    }

    const pipeline = [
      { $match: { isActive: true } },
      { $group: { _id: '$type', count: { $sum: 1 } } }
    ];

    const stats = await Certificate.aggregate(pipeline);
    const total = await Certificate.countDocuments({ isActive: true });

    const byType = {};
    stats.forEach(stat => {
      byType[stat._id] = stat.count;
    });

    return { total, byType };
  }

  /**
   * Gera certificado usando o novo modelo CertificateTemplates
   */
  async generateCertificateWithTemplate(event, userType, certType, userData) {
    await this.connectDatabase();

    try {
      const result = await CertificateTemplates.generateCertificate(event, userType, certType, userData);

      return {
        success: true,
        certificateData: result.certificateData,
        processedText: result.processedText,
        processedLines: result.processedLines,
        metadata: {
          title: result.certificateData.metadata.title,
          template: result.certificateData.metadata.template,
          eventYear: result.certificateData.metadata.eventYear
        }
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Lista tipos de certificados disponíveis para um evento
   */
  async getAvailableCertificateTypes(event, userType = null) {
    await this.connectDatabase();

    try {
      let certificateTypes;

      if (userType) {
        certificateTypes = await CertificateTemplates.findByUserType(event, userType);
      } else {
        certificateTypes = await CertificateTemplates.findByEvent(event);
      }

      return certificateTypes.map(cert => ({
        userType: cert.userType,
        certType: cert.certType,
        title: cert.metadata.title,
        description: cert.metadata.description,
        template: cert.metadata.template,
        identifier: cert.identifier,
        requiredFields: Object.keys(cert.specificFields || {})
      }));
    } catch (error) {
      console.error('Erro ao buscar tipos de certificados:', error);
      return [];
    }
  }

  /**
   * Busca template de certificado específico
   */
  async getCertificateTemplate(event, userType, certType) {
    await this.connectDatabase();

    try {
      const certificateData = await CertificateTemplates.findByCertType(event, userType, certType);

      if (!certificateData) {
        throw new Error(`Template não encontrado para ${userType}/${certType} no evento ${event}`);
      }

      return {
        template: certificateData,
        sampleData: certificateData.data,
        specificFields: certificateData.specificFields,
        metadata: certificateData.metadata
      };
    } catch (error) {
      throw new Error(`Erro ao buscar template: ${error.message}`);
    }
  }

  /**
   * Valida dados do usuário para um tipo específico de certificado
   */
  async validateUserDataForCertificate(event, userType, certType, userData) {
    await this.connectDatabase();

    try {
      const template = await this.getCertificateTemplate(event, userType, certType);
      const requiredFields = Object.keys(template.specificFields || {});
      const missingFields = [];

      // Verifica campos obrigatórios
      requiredFields.forEach(field => {
        if (!userData[field] && !template.specificFields[field]) {
          missingFields.push(field);
        }
      });

      // Verifica campo nome (sempre obrigatório)
      if (!userData.name) {
        missingFields.push('name');
      }

      return {
        isValid: missingFields.length === 0,
        missingFields,
        requiredFields,
        template: template.metadata
      };
    } catch (error) {
      return {
        isValid: false,
        error: error.message
      };
    }
  }
}

// Instância singleton
export const certificateService = new CertificateService();

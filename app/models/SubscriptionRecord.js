/**
 * MongoDB Schema e Modelo para Inscrições
 * Armazena todas as inscrições do sistema (pagas e gratuitas)
 */

/**
 * Classe para representar uma inscrição completa no nosso sistema
 */
class SubscriptionRecord {
  constructor(data = {}) {
    // Identificadores únicos
    this._id = data._id || null;
    this.subscriptionId = data.subscriptionId || this.generateSubscriptionId();
    this.asaasPaymentId = data.asaasPaymentId || null;

    // Dados do evento
    this.eventYear = data.eventYear || new Date().getFullYear();
    this.eventName = data.eventName || `JMR & CIM ${this.eventYear}`;

    // Dados pessoais do inscrito
    this.personalInfo = {
      fullName: data.personalInfo?.fullName || '',
      email: data.personalInfo?.email || '',
      cpf: data.personalInfo?.cpf || '',
      phone: data.personalInfo?.phone || '',
      crm: data.personalInfo?.crm || '',
      stateCrm: data.personalInfo?.stateCrm || '',
      address: {
        zipCode: data.personalInfo?.address?.zipCode || '',
        address: data.personalInfo?.address?.address || '',
        number: data.personalInfo?.address?.number || '',
        complement: data.personalInfo?.address?.complement || '',
        neighborhood: data.personalInfo?.address?.neighborhood || '',
        city: data.personalInfo?.address?.city || '',
        state: data.personalInfo?.address?.state || ''
      }
    };

    // Categoria da inscrição
    this.category = {
      id: data.category?.id || null,
      title: data.category?.title || '',
      description: data.category?.description || []
    };

    // Produtos selecionados
    this.selectedItems = {
      journey: data.selectedItems?.journey || null,
      workshops: data.selectedItems?.workshops || [],
      courses: data.selectedItems?.courses || [],
      dayUse: data.selectedItems?.dayUse || null
    };

    // Informações financeiras
    this.financial = {
      originalValue: data.financial?.originalValue || 0,
      discountValue: data.financial?.discountValue || 0,
      finalValue: data.financial?.finalValue || 0,
      currency: data.financial?.currency || 'BRL'
    };

    // Informações do cupom (se aplicado)
    this.coupon = {
      applied: data.coupon?.applied || false,
      code: data.coupon?.code || '',
      name: data.coupon?.name || '',
      discountType: data.coupon?.discountType || '',
      discountValue: data.coupon?.discountValue || 0,
      totalDiscount: data.coupon?.totalDiscount || 0
    };

    // Status da inscrição
    this.status = {
      registration: data.status?.registration || 'COMPLETED',
      payment: data.status?.payment || (this.financial.finalValue === 0 ? 'FREE' : 'PENDING'),
      lastUpdated: data.status?.lastUpdated || new Date()
    };

    // Informações de pagamento (quando aplicável)
    this.payment = {
      method: data.payment?.method || (this.financial.finalValue === 0 ? 'FREE' : ''),
      dueDate: data.payment?.dueDate || null,
      paidDate: data.payment?.paidDate || null,
      invoiceNumber: data.payment?.invoiceNumber || '',
      invoiceUrl: data.payment?.invoiceUrl || '',
      bankSlipUrl: data.payment?.bankSlipUrl || '',
      transactionReceiptUrl: data.payment?.transactionReceiptUrl || ''
    };

    // Anexos
    this.attachments = {
      receipt: {
        filename: data.attachments?.receipt?.filename || '',
        originalName: data.attachments?.receipt?.originalName || '',
        downloadUrl: data.attachments?.receipt?.downloadUrl || ''
      }
    };

    // Metadados
    this.metadata = {
      createdAt: data.metadata?.createdAt || new Date(),
      updatedAt: data.metadata?.updatedAt || new Date(),
      createdBy: data.metadata?.createdBy || 'system',
      source: data.metadata?.source || 'web_form',
      ipAddress: data.metadata?.ipAddress || '',
      userAgent: data.metadata?.userAgent || ''
    };
  }

  /**
   * Gera um ID único para a inscrição
   */
  generateSubscriptionId() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000).toString(36);
    const year = this.eventYear || new Date().getFullYear();
    return `SUB_${year}_${timestamp}_${random}`;
  }

  /**
   * Converte os dados para formato compatível com o Asaas
   * Para manter compatibilidade com o SubscriptionsList
   */
  toAsaasFormat() {
    return {
      id: this.asaasPaymentId || this.subscriptionId,
      dateCreated: this.metadata.createdAt,
      customer: this.personalInfo.cpf,
      value: this.financial.finalValue,
      description: this.generateDescription(),
      billingType: this.payment.method,
      status: this.mapStatusToAsaas(),
      dueDate: this.payment.dueDate,
      clientPaymentDate: this.payment.paidDate,
      invoiceNumber: this.payment.invoiceNumber,
      invoiceUrl: this.payment.invoiceUrl,
      bankSlipUrl: this.payment.bankSlipUrl,
      transactionReceiptUrl: this.payment.transactionReceiptUrl
    };
  }

  /**
   * Gera descrição da inscrição baseada nos produtos selecionados
   */
  generateDescription() {
    let description = `Inscrição ${this.category.title}`;

    if (this.selectedItems.journey) {
      description += ` - ${this.selectedItems.journey.title}`;
    }

    if (this.selectedItems.workshops?.length > 0) {
      const workshops = this.selectedItems.workshops.map(w => w.title).join(', ');
      description += ` - Workshops: ${workshops}`;
    }

    if (this.selectedItems.courses?.length > 0) {
      const courses = this.selectedItems.courses.map(c => c.title).join(', ');
      description += ` - Cursos: ${courses}`;
    }

    if (this.selectedItems.dayUse) {
      description += ` - ${this.selectedItems.dayUse.title}`;
    }

    return description;
  }

  /**
   * Mapeia status interno para formato Asaas
   */
  mapStatusToAsaas() {
    const statusMap = {
      'FREE': 'CONFIRMED',
      'CONFIRMED': 'CONFIRMED',
      'PENDING': 'PENDING',
      'OVERDUE': 'OVERDUE',
      'CANCELLED': 'CANCELED'
    };

    return statusMap[this.status.payment] || 'PENDING';
  }

  /**
   * Valida se os dados obrigatórios estão presentes
   */
  validate() {
    const errors = [];

    if (!this.personalInfo.fullName) errors.push('Nome completo é obrigatório');
    if (!this.personalInfo.email) errors.push('Email é obrigatório');
    if (!this.personalInfo.cpf) errors.push('CPF é obrigatório');
    if (!this.category.id) errors.push('Categoria é obrigatória');

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * Retorna dados para salvar no MongoDB
   */
  toMongoDB() {
    return {
      subscriptionId: this.subscriptionId,
      asaasPaymentId: this.asaasPaymentId,
      eventYear: this.eventYear,
      eventName: this.eventName,
      personalInfo: this.personalInfo,
      category: this.category,
      selectedItems: this.selectedItems,
      financial: this.financial,
      coupon: this.coupon,
      status: this.status,
      payment: this.payment,
      attachments: this.attachments,
      metadata: this.metadata,
      productIdentifier: this.generateProductIdentifier()
    };
  }

  /**
   * Alias para compatibilidade com testes
   */
  toMongoFormat() {
    return this.toMongoDB();
  }

  /**
   * Gera um identificador único para o produto baseado nos itens selecionados
   * Usado para verificar duplicação de inscrições
   */
  generateProductIdentifier() {
    const parts = [];

    if (this.selectedItems.journey?.id) {
      parts.push(`journey:${this.selectedItems.journey.id}`);
    }

    if (this.selectedItems.workshops?.length > 0) {
      const workshopIds = this.selectedItems.workshops
        .map(w => w.id)
        .sort()
        .join(',');
      parts.push(`workshops:${workshopIds}`);
    }

    if (this.selectedItems.courses?.length > 0) {
      const courseIds = this.selectedItems.courses
        .map(c => typeof c === 'string' ? c : c.id)
        .sort()
        .join(',');
      parts.push(`courses:${courseIds}`);
    }

    if (this.selectedItems.dayUse?.id) {
      parts.push(`dayUse:${this.selectedItems.dayUse.id}`);
    }

    return parts.join('|');
  }
}

export { SubscriptionRecord };

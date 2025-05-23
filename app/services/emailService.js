import nodemailer from 'nodemailer';

class EmailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: process.env.EMAIL_SERVER_PORT,
      secure: process.env.EMAIL_SERVER_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });
  }

  /**
   * Enviar email
   * @param {Object} options - Opções do email
   * @param {string} options.to - Destinatário do email
   * @param {string} options.subject - Assunto do email
   * @param {string} options.text - Conteúdo de texto simples
   * @param {string} options.html - Conteúdo HTML (opcional)
   * @returns {Promise} - Resultado do envio
   */
  async sendEmail({ to, subject, text, html }) {
    try {
      const mailOptions = {
        from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM_ADDRESS}>`,
        to,
        subject,
        text,
        html: html || text,
      };

      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email enviado:', info.messageId);
      return { success: true, messageId: info.messageId };
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Enviar email de confirmação de inscrição
   * @param {Object} data - Dados da inscrição
   * @param {string} data.name - Nome do inscrito
   * @param {string} data.email - Email do inscrito
   * @param {string} data.eventName - Nome do evento
   * @param {Object} data.subscription - Dados da inscrição
   * @returns {Promise} - Resultado do envio
   */
  async sendSubscriptionConfirmation(data) {
    const subject = `Confirmação de Inscrição - ${data.eventName}`;
    const text = `
      Olá ${data.name},

      Sua inscrição para o evento ${data.eventName} foi confirmada!

      Detalhes da inscrição:
      - Evento: ${data.eventName}
      - Data: ${data.subscription.event?.date || 'A confirmar'}
      - Status do pagamento: ${data.subscription.status === 'paid' ? 'Confirmado' : 'Pendente'}

      Obrigado por se inscrever! Aguardamos você no evento.

      Atenciosamente,
      Equipe do Congresso SRMG
    `;

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0E1D59;">Confirmação de Inscrição</h2>
        <p>Olá <strong>${data.name}</strong>,</p>

        <p>Sua inscrição para o evento <strong>${data.eventName}</strong> foi confirmada!</p>

        <div style="background-color: #f7f7f7; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #0E1D59;">Detalhes da inscrição:</h3>
          <ul style="list-style-type: none; padding-left: 0;">
            <li><strong>Evento:</strong> ${data.eventName}</li>
            <li><strong>Data:</strong> ${data.subscription.event?.date || 'A confirmar'}</li>
            <li><strong>Status do pagamento:</strong>
              <span style="color: ${data.subscription.status === 'paid' ? 'green' : 'orange'}">
                ${data.subscription.status === 'paid' ? 'Confirmado' : 'Pendente'}
              </span>
            </li>
          </ul>
        </div>

        <p>Obrigado por se inscrever! Aguardamos você no evento.</p>

        <p>Atenciosamente,<br>
        <strong>Equipe do Congresso SRMG</strong></p>
      </div>
    `;

    return this.sendEmail({
      to: data.email,
      subject,
      text,
      html
    });
  }

  /**
   * Envia um email baseado em um template predefinido
   * @param {string} templateName - Nome do template a ser usado
   * @param {Object} data - Dados para preencher o template
   * @returns {Promise} - Resultado do envio
   */
  async sendTemplateEmail(templateName, data) {
    let subject = '';
    let text = '';
    let html = '';

    // Selecionar o template com base no nome
    switch (templateName) {
      case 'payment-confirmed':
        subject = `Pagamento Confirmado - ${data.eventName}`;
        text = this.getPaymentConfirmedText(data);
        html = this.getPaymentConfirmedHtml(data);
        break;

      case 'payment-pending':
        subject = `Inscrição Realizada - ${data.eventName}`;
        text = this.getPaymentPendingText(data);
        html = this.getPaymentPendingHtml(data);
        break;

      case 'payment-overdue':
        subject = `Pagamento Vencido - ${data.eventName}`;
        text = this.getPaymentOverdueText(data);
        html = this.getPaymentOverdueHtml(data);
        break;

      case 'payment-cancelled':
        subject = `Pagamento Cancelado - ${data.eventName}`;
        text = this.getPaymentCancelledText(data);
        html = this.getPaymentCancelledHtml(data);
        break;

      default:
        throw new Error(`Template de email '${templateName}' não encontrado`);
    }

    // Enviar o email com o template selecionado
    return this.sendEmail({
      to: data.email,
      subject,
      text,
      html
    });
  }

  getPaymentConfirmedText(data) {
    return `
      Olá ${data.name},

      Seu pagamento para o evento ${data.eventName} foi confirmado!

      Detalhes:
      - Evento: ${data.eventName}
      - Data: ${data.eventDate || 'A confirmar'}
      - Valor: R$ ${(data.value || 0).toFixed(2)}
      - ID da inscrição: ${data.subscriptionId}

      Sua inscrição está confirmada. Aguardamos você no evento!

      Atenciosamente,
      Equipe do Congresso SRMG
    `;
  }

  getPaymentConfirmedHtml(data) {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0E1D59;">Pagamento Confirmado! 🎉</h2>
        <p>Olá <strong>${data.name}</strong>,</p>

        <p>Seu pagamento para o evento <strong>${data.eventName}</strong> foi confirmado!</p>

        <div style="background-color: #f7f7f7; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #0E1D59;">Detalhes:</h3>
          <ul style="list-style-type: none; padding-left: 0;">
            <li><strong>Evento:</strong> ${data.eventName}</li>
            <li><strong>Data:</strong> ${data.eventDate || 'A confirmar'}</li>
            <li><strong>Valor:</strong> R$ ${(data.value || 0).toFixed(2)}</li>
            <li><strong>ID da inscrição:</strong> ${data.subscriptionId}</li>
            <li><strong>Status:</strong> <span style="color: green;">Confirmado</span></li>
          </ul>
        </div>

        <p>Sua inscrição está confirmada. Aguardamos você no evento!</p>

        <p>Atenciosamente,<br>
        <strong>Equipe do Congresso SRMG</strong></p>
      </div>
    `;
  }

  getPaymentPendingText(data) {
    const paymentTypeDesc = data.paymentType === 'BOLETO' ? 'boleto' : 'PIX';

    return `
      Olá ${data.name},

      Sua inscrição para o evento ${data.eventName} foi realizada com sucesso!

      Detalhes:
      - Evento: ${data.eventName}
      - Data: ${data.eventDate || 'A confirmar'}
      - Valor: R$ ${(data.value || 0).toFixed(2)}
      - ID da inscrição: ${data.subscriptionId}
      - Forma de pagamento: ${paymentTypeDesc.toUpperCase()}
      - Status: Aguardando pagamento

      Estamos aguardando a confirmação do seu pagamento para finalizar sua inscrição.
      ${data.paymentType === 'BOLETO' ? 'O pagamento via boleto pode levar até 3 dias úteis para ser compensado.' : 'O pagamento via PIX geralmente é confirmado em poucos minutos.'}

      Atenciosamente,
      Equipe do Congresso SRMG
    `;
  }

  getPaymentPendingHtml(data) {
    const paymentTypeDesc = data.paymentType === 'BOLETO' ? 'boleto' : 'PIX';
    const paymentTypeMessage = data.paymentType === 'BOLETO'
      ? 'O pagamento via boleto pode levar até 3 dias úteis para ser compensado.'
      : 'O pagamento via PIX geralmente é confirmado em poucos minutos.';

    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0E1D59;">Inscrição Realizada</h2>
        <p>Olá <strong>${data.name}</strong>,</p>

        <p>Sua inscrição para o evento <strong>${data.eventName}</strong> foi realizada com sucesso!</p>

        <div style="background-color: #f7f7f7; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #0E1D59;">Detalhes:</h3>
          <ul style="list-style-type: none; padding-left: 0;">
            <li><strong>Evento:</strong> ${data.eventName}</li>
            <li><strong>Data:</strong> ${data.eventDate || 'A confirmar'}</li>
            <li><strong>Valor:</strong> R$ ${(data.value || 0).toFixed(2)}</li>
            <li><strong>ID da inscrição:</strong> ${data.subscriptionId}</li>
            <li><strong>Forma de pagamento:</strong> ${paymentTypeDesc.toUpperCase()}</li>
            <li><strong>Status:</strong> <span style="color: orange;">Aguardando pagamento</span></li>
          </ul>
        </div>

        <p>Estamos aguardando a confirmação do seu pagamento para finalizar sua inscrição.</p>
        <p>${paymentTypeMessage}</p>

        <p>Atenciosamente,<br>
        <strong>Equipe do Congresso SRMG</strong></p>
      </div>
    `;
  }
}

// Cria uma única instância do serviço de email
const emailService = new EmailService();

export default emailService;
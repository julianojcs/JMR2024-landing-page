import nodemailer from 'nodemailer';

const formatDate = (dateString) => {
  if (!dateString) return 'A definir';

  // Se a entrada é uma data ISO (YYYY-MM-DD)
  if (dateString.includes('-')) {
    const parts = dateString.split('T')[0].split('-');
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`; // DD/MM/YYYY
    }
  }

  // Fallback para o método padrão
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR');
};

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
   * @param {string|string[]} options.cc - Destinatários em cópia (opcional)
   * @param {string|string[]} options.bcc - Destinatários em cópia oculta (opcional)
   * @param {string} options.subject - Assunto do email
   * @param {string} options.text - Conteúdo de texto simples
   * @param {string} options.html - Conteúdo HTML (opcional)
   * @returns {Promise} - Resultado do envio
   */
  async sendEmail({ to, cc, bcc, subject, text, html }) {
    try {
      const mailOptions = {
        from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM_ADDRESS}>`,
        to,
        subject,
        text,
        html: html || text,
      };

      // Adicionar cc e bcc se fornecidos
      if (cc) mailOptions.cc = cc;
      if (bcc) mailOptions.bcc = bcc;

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
   * @param {Array} data.selectedItems - Itens selecionados (opcional)
   * @param {Object} data.category - Categoria da inscrição (opcional)
   * @param {string} data.receiptDownloadUrl - URL para download do comprovante (opcional)
   * @param {string|string[]} data.cc - Destinatários em cópia (opcional)
   * @param {string|string[]} data.bcc - Destinatários em cópia oculta (opcional)
   * @param {string} data.event.shortName - Nome curto do evento (opcional)
   * @param {string} data.event.date - Data do evento (opcional)
   * @returns {Promise} - Resultado do envio
   */
  async sendSubscriptionConfirmation(data) {
    const { name, email, phone, eventName, subscription, selectedItems = [], category, receiptDownloadUrl, cc, bcc, event } = data;

    // Formatar o valor se disponível
    const formattedValue = subscription?.value
      ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(subscription.value)
      : 'Não definido';

    // Formatar data de vencimento se disponível
    const dueDate = formatDate(subscription?.dueDate)

    // Definir o assunto do email
    const subject = `Inscrição Realizada - ${eventName}`;

    // Versão de texto simples do email
    const text = `
      Olá ${name},

      Sua inscrição para o ${eventName} foi realizada com sucesso!

      DETALHES DA INSCRIÇÃO:
      - Evento: ${eventName}
      - Data do evento: ${subscription?.event?.date || '27 a 28 de Junho de 2025'}
      - Categoria: ${category?.title || 'Não especificada'}
      - Status do pagamento: Aguardando Pagamento
      ${subscription?.invoiceNumber ? `- Número da inscrição: ${subscription.invoiceNumber}` : ''}
      ${subscription?.id ? `- ID do pagamento: ${subscription.id}` : ''}
      ${subscription?.value ? `- Valor: ${formattedValue}` : ''}
      ${subscription?.dueDate ? `- Vencimento: ${dueDate}` : ''}

      ${selectedItems?.length > 0 ? `
      PRODUTOS SELECIONADOS:
      ${selectedItems.map(item => `- ${item}`).join('\n')}
      ` : ''}

      ${subscription?.invoiceUrl ? `
      LINKS IMPORTANTES:
      - Efetuar pagamento: ${subscription.invoiceUrl}
      ${subscription.bankSlipUrl ? `- Baixar Boleto em PDF: ${subscription.bankSlipUrl}` : ''}
      ${receiptDownloadUrl ? `- Baixar Anexo: ${receiptDownloadUrl}` : ''}
      ` : ''}

      Estamos aguardando a confirmação do seu pagamento para finalizar sua inscrição.
      Após o pagamento, você receberá um email de confirmação.

      Atenciosamente,
      Equipe ${eventName || 'JMR & CIM 2025'}
      Em caso de dúvidas, entre em contato conosco pelo email ${email || "srmg@srmg.org.br"}
      © ${new Date().getFullYear()} Join Digital Solutions - Todos os direitos reservados - ${phone || "(27)98133-0708"}
      Este é um email automático. Por favor não responda diretamente.
    `;

    // Versão HTML do email
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background-color: #0E1D59; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">
            Inscrição Realizada! ✓
          </h1>
        </div>

        <div style="padding: 20px;">
          <p style="font-size: 16px;">Olá <strong>${name}</strong>,</p>

          <p style="font-size: 16px;">
            Sua inscrição para o <strong>${eventName}</strong> foi realizada com sucesso!
          </p>

          <!-- Bloco de detalhes da inscrição -->
          <div style="background-color: #f7f7f7; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #0E1D59;">
            <h2 style="margin-top: 0; color: #0E1D59; font-size: 18px;">Detalhes da Inscrição</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; width: 40%;"><strong>Evento:</strong></td>
                <td style="padding: 8px 0;">${eventName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Data do evento:</strong></td>
                <td style="padding: 8px 0;">${subscription?.event?.date || '27 a 28 de Junho de 2025'}</td>
              </tr>
              ${category?.title ? `
              <tr>
                <td style="padding: 8px 0;"><strong>Categoria:</strong></td>
                <td style="padding: 8px 0;">${category.title}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 8px 0;"><strong>Status do pagamento:</strong></td>
                <td style="padding: 8px 0;">
                  <span style="color: orange; font-weight: bold;">
                    Aguardando Pagamento
                  </span>
                </td>
              </tr>
              ${subscription?.invoiceNumber ? `
              <tr>
                <td style="padding: 8px 0;"><strong>Número da inscrição:</strong></td>
                <td style="padding: 8px 0;">${subscription.invoiceNumber}</td>
              </tr>` : ''}
              ${subscription?.id ? `
              <tr>
                <td style="padding: 8px 0;"><strong>ID do pagamento:</strong></td>
                <td style="padding: 8px 0;">${subscription.id}</td>
              </tr>` : ''}
              ${subscription?.value ? `
              <tr>
                <td style="padding: 8px 0;"><strong>Valor total:</strong></td>
                <td style="padding: 8px 0;"><strong>${formattedValue}</strong></td>
              </tr>` : ''}
              ${subscription?.dueDate ? `
              <tr>
                <td style="padding: 8px 0;"><strong>Vencimento:</strong></td>
                <td style="padding: 8px 0;">${dueDate}</td>
              </tr>` : ''}
            </table>
          </div>

          <!-- Produtos selecionados -->
          ${selectedItems?.length > 0 ? `
          <div style="background-color: #f7f7f7; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #0E1D59;">
            <h2 style="margin-top: 0; color: #0E1D59; font-size: 18px;">Produtos Selecionados</h2>
            <table style="width: 100%; border-collapse: collapse;">
              ${selectedItems.map((item, index) => `
                <tr style="border-bottom: ${index < selectedItems.length - 1 ? '1px solid #e0e0e0' : 'none'}">
                  <td style="padding: 10px 0;">
                    <span style="display: inline-block; margin-right: 8px; color: #0E1D59;">✓</span>
                    ${item}
                  </td>
                </tr>
              `).join('')}
            </table>
          </div>` : ''}

          <!-- Links importantes -->
          ${subscription?.invoiceUrl ? `
          <div style="background-color: #f7f7f7; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #0E1D59;">
            <h2 style="margin-top: 0; color: #0E1D59; font-size: 18px;">Links Importantes</h2>
            <p style="margin-bottom: 15px;">
              <a href="${subscription.invoiceUrl}"
                 style="display: inline-block; padding: 10px 20px; background-color: #0E1D59; color: white; text-decoration: none; border-radius: 4px; font-weight: bold;">
                <span style="display: inline-block; margin-right: 8px;">💳</span> Efetuar Pagamento
              </a>
            </p>

            ${subscription.bankSlipUrl ? `
            <p style="margin-bottom: 15px;">
              <a href="${subscription.bankSlipUrl}"
                 style="display: inline-block; padding: 8px 16px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 4px; font-weight: bold;">
                <span style="display: inline-block; margin-right: 8px;">📄</span> Baixar Boleto em PDF
              </a>
            </p>` : ''}

            ${receiptDownloadUrl ? `
            <p style="margin-bottom: 15px;">
              <a href="${receiptDownloadUrl}"
                 style="display: inline-block; padding: 8px 16px; background-color: #2196F3; color: white; text-decoration: none; border-radius: 4px; font-weight: bold;">
                <span style="display: inline-block; margin-right: 8px;">📎</span> Baixar Anexo
              </a>
            </p>` : ''}
          </div>` : ''}

          <!-- Mensagem de conclusão -->
          <div style="margin: 30px 0; padding: 15px; background-color: #fff8e1; border-radius: 5px;">
            <p style="margin: 0 0 10px 0;">
              Estamos aguardando a confirmação do seu pagamento para finalizar sua inscrição.
              Após o pagamento, você receberá um email de confirmação.
            </p>
          </div>

          <!-- Assinatura -->
          <p style="margin-top: 30px; color: #666; font-size: 14px;">
            Atenciosamente,<br>
            <strong>Equipe JMR & CIM ${new Date().getFullYear()}</strong>
          </p>

          <!-- Rodapé -->
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #999; text-align: center;">
            Este é um email automático. Por favor não responda diretamente.
            <p>Em caso de dúvidas, entre em contato conosco pelo email: <a href="mailto:${event?.email || "srmg@srmg.org.br"}" style="color: #0E1D59;">${event?.email || "srmg@srmg.org.br"}</a></p>
            <p>© ${new Date().getFullYear()} Join Digital Solutions - Todos os direitos reservados - <a href="http://wa.me/5527981330708">Whatsapp</a></p>
          </div>
        </div>
      </div>
    `;

    return this.sendEmail({
      to: email,
      cc,
      bcc,
      subject,
      text,
      html
    });
  }

  /**
   * Envia um email baseado em um template predefinido
   * @param {string} templateName - Nome do template a ser usado
   * @param {Object} data - Dados para preencher o template
   * @param {string|string[]} data.cc - Destinatários em cópia (opcional)
   * @param {string|string[]} data.bcc - Destinatários em cópia oculta (opcional)
   * @returns {Promise} - Resultado do envio
   */
  async sendTemplateEmail(templateName, data) {
    let subject = '';
    let text = '';
    let html = '';
    const { cc, bcc } = data;

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

    // Enviar o email com o template selecionado, incluindo cc e bcc
    return this.sendEmail({
      to: data.email,
      cc,
      bcc,
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
      Equipe JMR & CIM 2025
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
        <strong>Equipe JMR & CIM 2025</strong></p>
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
      Equipe JMR & CIM 2025
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
        <strong>Equipe JMR & CIM 2025</strong></p>
      </div>
    `;
  }
}

// Cria uma única instância do serviço de email
const emailService = new EmailService();

export default emailService;
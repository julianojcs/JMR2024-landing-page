Vamos criar um serviço de envio de email para a sua aplicação. Para isso, usarei o Nodemailer, que é uma biblioteca popular para envio de emails em aplicações Node.js.

### 1. Primeiro, instalemos o Nodemailer:

```bash
npm install nodemailer
```

### 2. Agora, vamos criar um serviço de email:

```javascript
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
}

// Cria uma única instância do serviço de email
const emailService = new EmailService();

export default emailService;
```

### 3. Vamos adicionar as variáveis de ambiente necessárias ao seu arquivo .env.development:

```bash
# Email Configuration
EMAIL_SERVER_HOST=smtp.example.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_SECURE=false
EMAIL_SERVER_USER=your-email@example.com
EMAIL_SERVER_PASSWORD=your-password
EMAIL_FROM_NAME=Congresso SRMG
EMAIL_FROM_ADDRESS=no-reply@congressosrmg.com.br
```

### 4. Exemplo de uso do serviço de email em uma API route:

```javascript
import { NextResponse } from 'next/server';
import emailService from '@/app/services/emailService';

export async function POST(req) {
  try {
    const body = await req.json();
    const { to, subject, text, html, template, data } = body;

    let result;

    // Usar um template específico ou enviar email personalizado
    if (template === 'subscription-confirmation' && data) {
      result = await emailService.sendSubscriptionConfirmation(data);
    } else {
      result = await emailService.sendEmail({ to, subject, text, html });
    }

    if (result.success) {
      return NextResponse.json({ success: true, messageId: result.messageId }, { status: 200 });
    } else {
      return NextResponse.json({ success: false, error: result.error }, { status: 500 });
    }
  } catch (error) {
    console.error('Erro ao processar requisição de envio de email:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
```

### 5. Como usar em componentes ou outras partes da aplicação:

```javascript
// Exemplo de uso em um componente ou página
async function handleSubscription() {
  try {
    // Dados da inscrição
    const subscriptionData = {
      name: 'João Silva',
      email: 'joao@example.com',
      eventName: 'Congresso SRMG 2025',
      subscription: {
        status: 'paid',
        event: {
          date: '22/05/2025'
        }
      }
    };

    // Enviar email de confirmação
    const response = await fetch('/api/emails/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        template: 'subscription-confirmation',
        data: subscriptionData
      })
    });

    const result = await response.json();
    if (result.success) {
      console.log('Email de confirmação enviado com sucesso!');
    } else {
      console.error('Erro ao enviar email:', result.error);
    }
  } catch (error) {
    console.error('Erro ao processar inscrição:', error);
  }
}
```

### Notas importantes:

1. **Segurança das credenciais**: Nunca exponha suas credenciais SMTP no código. Use sempre variáveis de ambiente.

2. **Provedores de email**: Para ambiente de produção, considere usar serviços como:
   - SendGrid
   - Mailgun
   - AWS SES
   - Resend.com

3. **Testes**: Para testes locais, você pode usar serviços como Mailtrap.io que permitem visualizar emails sem realmente enviá-los.

4. **Templates**: Para emails mais complexos, considere usar um sistema de templates como Handlebars.js ou EJS.

5. **Filas**: Para aplicações de produção com alto volume de emails, considere implementar um sistema de filas para evitar bloqueios e garantir entregas.

Você pode expandir este serviço adicionando mais templates específicos para diferentes tipos de emails que sua aplicação precisa enviar.
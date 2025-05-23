import { NextResponse } from 'next/server';
import emailService from '/app/services/emailService';

export async function POST(req) {
  try {
    const body = await req.json();
    const { to, subject, text, html, template, data } = body;

    let result;

    // Usar um template específico ou enviar email personalizado
    if (template && data) {
      // Se temos um template e dados, usar o método sendTemplateEmail
      if (template === 'subscription-confirmation') {
        result = await emailService.sendSubscriptionConfirmation(data);
      } else if (['payment-confirmed', 'payment-pending', 'payment-overdue', 'payment-cancelled'].includes(template)) {
        result = await emailService.sendTemplateEmail(template, data);
      } else {
        throw new Error(`Template de email '${template}' não encontrado`);
      }
    } else {
      // Email padrão sem template
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
import { NextResponse } from 'next/server';
import emailService from '/app/services/emailService';
import { fetchPaymentById, fetchCustomerById } from '/app/services/api';
import { Subscription } from '/app/models';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const payload = await req.json();
    let subscription;

    // Log detalhado do payload recebido
    console.log('Payment callback received:', JSON.stringify(payload, null, 2));

    // Verificar se o payload é válido
    if (!payload || !payload.payment || !payload.payment.id) {
      console.error('Invalid payload structure');
      return NextResponse.json(
        { error: 'Invalid payload structure' },
        { status: 400 }
      );
    }

    const payment = payload.payment;
    const paymentId = payment.id;
    const status = payment.status;
    const paymentType = payment.billingType;
    const customerId = payment.customer;

    const customer = await fetchCustomerById(customerId);
    if (!customer) {
      console.error(`Customer not found for ID: ${customerId}`);
      return NextResponse.json(
        { error: 'Customer not found' },
        { status: 404 }
      );
    }
    // Verificar se o pagamento já foi processado
    const existingPayment = await fetchPaymentById(paymentId);
    if (!existingPayment) {
      console.error(`Payment not found for ID: ${paymentId}`);
      return NextResponse.json(
        { error: 'Payment not found' },
        { status: 404 }
      );
    } else {
      subscription = new Subscription(paymentsResponse)
    }

    // Atualizar status da inscrição conforme o status do pagamento
    let subscriptionStatus;
    switch (status) {
      case 'CONFIRMED':
      case 'RECEIVED':
      case 'RECEIVED_IN_CASH':
        subscriptionStatus = 'paid';
        break;
      case 'PENDING':
        subscriptionStatus = 'pending';
        break;
      case 'OVERDUE':
        subscriptionStatus = 'overdue';
        break;
      case 'REFUNDED':
        subscriptionStatus = 'refunded';
        break;
      case 'CANCELLED':
      case 'DECLINED':
        subscriptionStatus = 'cancelled';
        break;
      default:
        subscriptionStatus = 'pending';
    }

    let emailTemplate = '';
    let emailData = {
      name: customer.name,
      email: customer.email,
      eventName: "JMR & CIM 2025",
      eventDate: "27 e 28 de junho de 2025",
      subscriptionId: subscription.id,
      subscriptionStatus,
      paymentType,
      value: payment.value
    };

    if (['CONFIRMED', 'RECEIVED', 'RECEIVED_IN_CASH'].includes(status)) {
      // Pagamento confirmado
      emailTemplate = 'payment-confirmed';
    } else if (status === 'PENDING' && ['BOLETO', 'PIX'].includes(paymentType)) {
      // Pagamento pendente (boleto ou PIX)
      emailTemplate = 'payment-pending';
    } else if (status === 'OVERDUE') {
      // Pagamento vencido
      emailTemplate = 'payment-overdue';
    } else if (['REFUNDED', 'CANCELLED', 'DECLINED'].includes(status)) {
      // Pagamento cancelado, estornado ou recusado
      emailTemplate = 'payment-cancelled';
    }

    // Enviar email se temos um template definido
    if (emailTemplate) {
      try {
        await emailService.sendTemplateEmail(emailTemplate, emailData);
        console.log(`Email ${emailTemplate} sent to ${customer.email}`);
      } catch (emailError) {
        console.error('Failed to send email:', emailError);
        // Não interrompemos o fluxo se o email falhar, apenas logamos o erro
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Payment processed successfully',
      subscriptionStatus,
      emailSent: Boolean(emailTemplate)
    });

  } catch (error) {
    console.error('Payment callback error:', error);
    return NextResponse.json(
      { error: 'Failed to process payment callback' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const payment = await req.json();

    // Log detalhado do payload recebido
    console.log('Payment callback received:');
    console.log('------------------------');
    console.log('Full payload:', JSON.stringify(payment, null, 2));
    console.log('------------------------');
    console.log('Payment ID:', payment.id);
    console.log('Status:', payment.status);
    console.log('Payment method:', payment.billingType);
    console.log('Customer:', payment.customer);
    console.log('Value:', payment.value);
    console.log('Description:', payment.description);
    console.log('------------------------');

    // Por enquanto, apenas retornamos sucesso para confirmar recebimento
    return NextResponse.json({
      success: true,
      message: 'Callback received and logged. Check server logs for details.'
    });

  } catch (error) {
    console.error('Payment callback error:', error);
    return NextResponse.json(
      { error: 'Failed to process payment callback' },
      { status: 500 }
    );
  }
}
import { NextResponse } from 'next/server';
import { apiKey } from '@/api/asaas/config';

export async function GET(request, { params }) {
  try {
    const { paymentId } = params;
    const response = await fetch(
      `${process.env.ASAAS_API_URL}/payments/${paymentId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'access_token': apiKey
        }
      }
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
import { NextResponse } from 'next/server';
import { apiKey } from '@/api/asaas/config';

// List payments
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const cpfCnpj = searchParams.get('cpfCnpj');
    let customerId;

    if (cpfCnpj) {
      // get the customers by CPF/CNPJ
      const customersResponse = await fetch(
        `${process.env.NEXT_PUBLIC_ASAAS_API_URL}/customers?${searchParams.toString()}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'access_token': apiKey
          }
        }
      );
      const customers = await customersResponse.json();

      if (!customers.data || customers.data.length === 0) {
        return NextResponse.json({ error: 'Customer not found' }, { status: 404 });
      }

      customerId = customers.data[0].id;
    }

    const url = cpfCnpj
      ? `${process.env.NEXT_PUBLIC_ASAAS_API_URL}/payments?customer=${customerId}&${searchParams.toString()}`
      : `${process.env.NEXT_PUBLIC_ASAAS_API_URL}/payments?${searchParams.toString()}`;

    const response = await fetch(
      url,
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

// Create payment
export async function POST(request) {
  try {
    const body = await request.json();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_ASAAS_API_URL}/payments`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'access_token': apiKey
        },
        body: JSON.stringify(body)
      }
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
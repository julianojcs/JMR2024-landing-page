import { NextResponse } from 'next/server';
import { apiKey } from '@/api/asaas/config';

const checkEnvironmentVariables = () => {
  if (!process.env.NEXT_PUBLIC_ASAAS_API_URL) {
    console.log('NEXT_PUBLIC_ASAAS_API_URL: ', process.env.NEXT_PUBLIC_ASAAS_API_URL);
    throw new Error('NEXT_PUBLIC_ASAAS_API_URL environment variable is not defined');
  }
};

// List customers
export async function GET(request) {
  try {
    checkEnvironmentVariables();
    const { searchParams } = new URL(request.url);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_ASAAS_API_URL}/customers?${searchParams.toString()}`,
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

// Create customer
export async function POST(request) {
  try {
    const customerData = await request.json();

    // Validate required fields
    if (!customerData.name || !customerData.cpfCnpj) {
      return NextResponse.json(
        { error: 'Name and CPF/CNPJ are required' },
        { status: 400 }
      )
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_ASAAS_API_URL}/customers`,
      `${process.env.NEXT_PUBLIC_ASAAS_API_URL}/customers`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'access_token': apiKey
        },
        body: JSON.stringify(customerData)
      }
    );

    if (!response.ok) {
      const errorData = await response.json()
      console.error('ASAAS API error:', errorData)
      return NextResponse.json(
        { error: 'Failed to create customer in ASAAS' },
        { status: response.status }
      )
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
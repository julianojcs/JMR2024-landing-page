import { NextResponse } from 'next/server';
import { apiKey } from '@/api/asaas/config';

export async function GET(request, { params }) {
  try {
    const { customerId } = params;
    const response = await fetch(
      `${process.env.ASAAS_API_URL}/customers/${customerId}`,
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

export async function PUT(request, { params }) {
  try {
    const { customerId } = params;
    const body = await request.json();

    const response = await fetch(
      `${process.env.ASAAS_API_URL}/customers/${customerId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
          'access_token': apiKey
        },
        body: JSON.stringify(body)
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(error, { status: response.status });
    }

    return NextResponse.json(responseData);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update customer: ' + error.message },
      { status: 500 }
    );
  }
}
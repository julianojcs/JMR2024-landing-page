import { NextResponse } from 'next/server';
import { apiKey } from '@/api/asaas/config';

// List customers
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const response = await fetch(
      `${process.env.ASAAS_API_URL}/customers?${searchParams.toString()}`,
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
    const body = await request.json();
    const response = await fetch(
      `${process.env.ASAAS_API_URL}/customers`,
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
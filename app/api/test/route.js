import { NextResponse } from 'next/server'

export async function GET(request) {
  console.log('API Test endpoint called')

  return NextResponse.json(
    {
      status: 'OK',
      message: 'API routes funcionando corretamente',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'unknown',
      hasAccessToken: !!process.env.ACCESS_TOKEN,
      url: request.url,
      method: 'GET'
    },
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }
    }
  )
}

export async function POST(request) {
  console.log('API Test endpoint called via POST')

  try {
    const body = await request.text()
    console.log('Request body:', body)

    return NextResponse.json(
      {
        status: 'OK',
        message: 'API routes funcionando corretamente via POST',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'unknown',
        hasAccessToken: !!process.env.ACCESS_TOKEN,
        receivedBody: body,
        url: request.url,
        method: 'POST'
      },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      }
    )
  } catch (error) {
    return NextResponse.json(
      {
        status: 'ERROR',
        message: 'Erro ao processar request',
        error: error.message,
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}

export async function OPTIONS(request) {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}

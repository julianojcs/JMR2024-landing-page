import { NextResponse } from 'next/server'

// Get token from environment variables
const ACCESS_TOKEN = process.env.ACCESS_TOKEN || 'Luc123456.'

// Add CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

// Handle OPTIONS request for CORS
export async function OPTIONS(request) {
  return new Response(null, {
    status: 200,
    headers: corsHeaders,
  })
}

// Handle GET request for testing
export async function GET(request) {
  try {
    console.log('GET /api/auth/validate-token called')

    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')

    if (!token) {
      return NextResponse.json(
        {
          error: 'Token é obrigatório',
          method: 'GET',
          timestamp: new Date().toISOString()
        },
        {
          status: 400,
          headers: corsHeaders
        }
      )
    }

    if (token === ACCESS_TOKEN) {
      return NextResponse.json(
        {
          success: true,
          message: 'Token válido',
          method: 'GET',
          timestamp: new Date().toISOString()
        },
        {
          status: 200,
          headers: corsHeaders
        }
      )
    } else {
      return NextResponse.json(
        {
          error: 'Token de acesso inválido',
          method: 'GET',
          timestamp: new Date().toISOString()
        },
        {
          status: 401,
          headers: corsHeaders
        }
      )
    }
  } catch (error) {
    console.error('Erro na validação do token (GET):', error)
    return NextResponse.json(
      {
        error: 'Erro interno do servidor',
        method: 'GET',
        timestamp: new Date().toISOString(),
        details: error.message
      },
      {
        status: 500,
        headers: corsHeaders
      }
    )
  }
}

// Handle POST request (main method)
export async function POST(request) {
  try {
    console.log('POST /api/auth/validate-token called')
    console.log('Request headers:', Object.fromEntries(request.headers.entries()))

    // Check content type
    const contentType = request.headers.get('content-type')
    console.log('Content-Type:', contentType)

    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json(
        {
          error: 'Content-Type deve ser application/json',
          received: contentType,
          timestamp: new Date().toISOString()
        },
        {
          status: 400,
          headers: corsHeaders
        }
      )
    }

    const body = await request.text()
    console.log('Request body:', body)

    let parsedBody
    try {
      parsedBody = JSON.parse(body)
    } catch (parseError) {
      console.error('JSON parse error:', parseError)
      return NextResponse.json(
        {
          error: 'Body inválido - JSON malformado',
          timestamp: new Date().toISOString()
        },
        {
          status: 400,
          headers: corsHeaders
        }
      )
    }

    const { token } = parsedBody
    console.log('Token received:', token ? 'presente' : 'ausente')

    if (!token) {
      return NextResponse.json(
        {
          error: 'Token é obrigatório',
          timestamp: new Date().toISOString()
        },
        {
          status: 400,
          headers: corsHeaders
        }
      )
    }

    console.log('Comparing token with ACCESS_TOKEN')
    console.log('ACCESS_TOKEN defined:', !!ACCESS_TOKEN)

    if (token === ACCESS_TOKEN) {
      console.log('Token válido!')
      return NextResponse.json(
        {
          success: true,
          message: 'Token válido',
          timestamp: new Date().toISOString()
        },
        {
          status: 200,
          headers: corsHeaders
        }
      )
    } else {
      console.log('Token inválido!')
      return NextResponse.json(
        {
          error: 'Token de acesso inválido',
          timestamp: new Date().toISOString()
        },
        {
          status: 401,
          headers: corsHeaders
        }
      )
    }
  } catch (error) {
    console.error('Erro na validação do token (POST):', error)
    return NextResponse.json(
      {
        error: 'Erro interno do servidor',
        timestamp: new Date().toISOString(),
        details: error.message
      },
      {
        status: 500,
        headers: corsHeaders
      }
    )
  }
}
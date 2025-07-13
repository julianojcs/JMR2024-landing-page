import { NextResponse } from 'next/server'

// Get token from environment variables with fallback
const ACCESS_TOKEN = process.env.ACCESS_TOKEN || process.env.NEXT_PUBLIC_ACCESS_TOKEN || 'Luc123456.'

// Enhanced CORS headers for production compatibility
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
  'Access-Control-Max-Age': '86400',
  'Cache-Control': 'no-cache, no-store, must-revalidate',
  'Pragma': 'no-cache',
  'Expires': '0'
}

// Helper function to create response
function createResponse(data, status = 200, additionalHeaders = {}) {
  return NextResponse.json(data, {
    status,
    headers: {
      ...corsHeaders,
      ...additionalHeaders
    }
  })
}

// Helper function to validate token
function validateToken(token) {
  if (!token) {
    return {
      valid: false,
      error: 'Token é obrigatório',
      code: 'MISSING_TOKEN'
    }
  }

  if (token === ACCESS_TOKEN) {
    return {
      valid: true,
      message: 'Token válido'
    }
  }

  return {
    valid: false,
    error: 'Token de acesso inválido',
    code: 'INVALID_TOKEN'
  }
}

// Handle OPTIONS request for CORS preflight
export async function OPTIONS(request) {
  try {
    console.log('OPTIONS /api/auth/validate-token - CORS preflight')
    console.log('Origin:', request.headers.get('origin'))
    console.log('Access-Control-Request-Method:', request.headers.get('access-control-request-method'))

    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    })
  } catch (error) {
    console.error('Error in OPTIONS handler:', error)
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    })
  }
}

// Handle GET request (fallback method)
export async function GET(request) {
  try {
    console.log('GET /api/auth/validate-token called')
    console.log('Request URL:', request.url)
    console.log('Request headers:', Object.fromEntries(request.headers.entries()))

    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')

    console.log('Token from query params:', token ? 'presente' : 'ausente')
    console.log('ACCESS_TOKEN configured:', !!ACCESS_TOKEN)

    const validation = validateToken(token)

    if (validation.valid) {
      console.log('Token válido via GET!')
      return createResponse({
        success: true,
        message: validation.message,
        method: 'GET',
        timestamp: new Date().toISOString()
      })
    } else {
      console.log('Token inválido via GET:', validation.error)
      return createResponse({
        error: validation.error,
        code: validation.code,
        method: 'GET',
        timestamp: new Date().toISOString()
      }, validation.code === 'MISSING_TOKEN' ? 400 : 401)
    }
  } catch (error) {
    console.error('Erro na validação do token (GET):', error)
    return createResponse({
      error: 'Erro interno do servidor',
      method: 'GET',
      timestamp: new Date().toISOString(),
      details: error.message
    }, 500)
  }
}

// Handle POST request (primary method)
export async function POST(request) {
  try {
    console.log('POST /api/auth/validate-token called')
    console.log('Request URL:', request.url)
    console.log('Request headers:', Object.fromEntries(request.headers.entries()))

    // More flexible content type checking
    const contentType = request.headers.get('content-type')
    console.log('Content-Type:', contentType)

    let token

    if (contentType && contentType.includes('application/json')) {
      // Handle JSON body
      try {
        const body = await request.text()
        console.log('Request body length:', body.length)

        const parsedBody = JSON.parse(body)
        token = parsedBody.token
        console.log('Token from JSON body:', token ? 'presente' : 'ausente')
      } catch (parseError) {
        console.error('JSON parse error:', parseError)
        return createResponse({
          error: 'Body inválido - JSON malformado',
          timestamp: new Date().toISOString()
        }, 400)
      }
    } else {
      // Try to get token from form data or query params as fallback
      try {
        const formData = await request.formData()
        token = formData.get('token')
        console.log('Token from form data:', token ? 'presente' : 'ausente')
      } catch {
        // Last resort: try query params
        const { searchParams } = new URL(request.url)
        token = searchParams.get('token')
        console.log('Token from query params (POST fallback):', token ? 'presente' : 'ausente')
      }
    }

    console.log('ACCESS_TOKEN configured:', !!ACCESS_TOKEN)

    const validation = validateToken(token)

    if (validation.valid) {
      console.log('Token válido via POST!')
      return createResponse({
        success: true,
        message: validation.message,
        method: 'POST',
        timestamp: new Date().toISOString()
      })
    } else {
      console.log('Token inválido via POST:', validation.error)
      return createResponse({
        error: validation.error,
        code: validation.code,
        method: 'POST',
        timestamp: new Date().toISOString()
      }, validation.code === 'MISSING_TOKEN' ? 400 : 401)
    }
  } catch (error) {
    console.error('Erro na validação do token (POST):', error)
    return createResponse({
      error: 'Erro interno do servidor',
      method: 'POST',
      timestamp: new Date().toISOString(),
      details: error.message
    }, 500)
  }
}

// Handle PUT request (additional compatibility)
export async function PUT(request) {
  console.log('PUT request received, redirecting to POST handler')
  return POST(request)
}

// Handle PATCH request (additional compatibility)
export async function PATCH(request) {
  console.log('PATCH request received, redirecting to POST handler')
  return POST(request)
}
import { NextResponse } from 'next/server'

// Environment diagnostic endpoint
export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const debug = searchParams.get('debug') === 'true'

  const diagnostics = {
    timestamp: new Date().toISOString(),
    nextVersion: process.env.NEXT_RUNTIME || 'nodejs',
    environment: process.env.NODE_ENV || 'unknown',
    platform: process.platform || 'unknown',
    runtime: {
      node: process.version || 'unknown',
      nextRuntime: process.env.NEXT_RUNTIME || 'nodejs'
    },
    deployment: {
      vercel: !!process.env.VERCEL,
      vercelUrl: process.env.VERCEL_URL || null,
      vercelRegion: process.env.VERCEL_REGION || null
    },
    apiRoutes: {
      supportedMethods: ['GET', 'POST', 'OPTIONS'],
      routePattern: '/api/debug/environment'
    },
    tokens: {
      accessTokenConfigured: !!process.env.ACCESS_TOKEN,
      publicAccessTokenConfigured: !!process.env.NEXT_PUBLIC_ACCESS_TOKEN,
      fallbackToken: 'Luc123456.'
    }
  }

  if (debug) {
    diagnostics.headers = Object.fromEntries(request.headers.entries())
    diagnostics.url = request.url
    diagnostics.method = request.method
  }

  return NextResponse.json(diagnostics, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Cache-Control': 'no-cache'
    }
  })
}

export async function POST(request) {
  return NextResponse.json({
    message: 'POST method working',
    timestamp: new Date().toISOString(),
    method: 'POST'
  }, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Cache-Control': 'no-cache'
    }
  })
}

export async function OPTIONS(request) {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400'
    }
  })
}

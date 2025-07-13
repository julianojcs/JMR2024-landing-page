import { NextResponse } from 'next/server'

export function middleware(request) {
  // Only apply to API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    // Clone the request headers and add CORS headers
    const response = NextResponse.next()

    // Add CORS headers to all API responses
    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With')
    response.headers.set('Access-Control-Max-Age', '86400')

    // Handle preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
          'Access-Control-Max-Age': '86400'
        }
      })
    }

    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*'
}

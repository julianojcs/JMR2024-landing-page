import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  const diagnostics = {
    environment: process.env.NODE_ENV,
    dbUrl: process.env.POSTGRES_PRISMA_URL ? 'Configurado' : 'Não configurado',
    connectionState: 'Não iniciada',
    connectionTime: null,
    databaseInfo: null,
    error: null,
    timestamp: new Date().toISOString()
  }

  try {
    diagnostics.connectionState = 'Conectando...'
    const startTime = Date.now()

    // Simple query to test connection
    const result = await prisma.$queryRaw`SELECT current_timestamp`

    diagnostics.connectionState = 'Conectado'
    diagnostics.connectionTime = `${Date.now() - startTime}ms`
    diagnostics.databaseInfo = {
      timestamp: result[0].current_timestamp,
      prismaVersion: prisma._engineConfig?.version || 'unknown'
    }

    // Only try to count speakers if connection is successful
    try {
      const speakersCount = await prisma.speaker.count()
      diagnostics.databaseInfo.speakersCount = speakersCount
    } catch (e) {
      diagnostics.databaseInfo.speakersCount = 'Tabela não encontrada'
    }

    return NextResponse.json({
      success: true,
      diagnostics
    }, {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })

  } catch (error) {
    console.error('Database connection test failed:', error)

    diagnostics.connectionState = 'Falha'
    diagnostics.error = {
      name: error.name,
      message: error.message,
      code: error.code,
      meta: error.meta,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }

    return NextResponse.json({
      success: false,
      diagnostics
    }, {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
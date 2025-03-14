import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const lectures = await prisma.lecture.findMany({
      select: {
        id: true,
        name: true
      },
      orderBy: [
        { is_fixed: 'desc' },
        { name: 'asc' }
      ]
    })
    return NextResponse.json(lectures)
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
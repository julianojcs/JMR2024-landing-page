import { NextResponse } from 'next/server'
import { connectToDatabase } from '../../../lib/database'

export const GET = async (request, { params }) => {
  try {
    const { year } = params

    await connectToDatabase()

    return NextResponse.json(
      {
        success: true,
        message: 'Hello from the Test API',
        year: year
      },
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=60, s-maxage=60'
        },
      }
    )
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      {
        success: false,
        message: error.message
      },
      { status: 500 }
    )
  }
}
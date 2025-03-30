import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@vercel/postgres' // Adjust the import based on your SQL library

export async function POST(req: NextRequest) {
  try {
    const payment = await req.json()
    
    // Update our database if external reference exists
    if (payment.externalReference) {
      await sql`
        UPDATE payments 
        SET 
          status = ${payment.status},
          updated_at = CURRENT_TIMESTAMP
        WHERE id = ${parseInt(payment.externalReference)}
      `
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Payment callback error:', error)
    return NextResponse.json(
      { error: 'Failed to process payment callback' },
      { status: 500 }
    )
  }
}
import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/database';

export async function GET(request, { params }) {
  try {
    const { year } = params;
    const pool = await connectToDatabase();

    const query = `
      SELECT DISTINCT ON (cpf) *
      FROM speakers
      WHERE EXTRACT(YEAR FROM created_at) = $1
      ORDER BY cpf, updated_at DESC, full_name ASC
    `;

    const { rows: speakers } = await pool.query(query, [year]);

    // Sort speakers array by full_name
    const sortedSpeakers = speakers.sort((a, b) =>
      a.full_name.localeCompare(b.full_name, 'pt-BR')
    );

    return NextResponse.json(sortedSpeakers, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}
import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/database';
import cloudinary from '../../../lib/cloudinary';

export async function GET(request, { params }) {
  try {
    const { year } = params;
    const pool = await connectToDatabase();

    // Updated query to include lectures and categories
    const query = `
      WITH speaker_data AS (
        SELECT DISTINCT ON (s.cpf) 
          s.*,
          array_agg(DISTINCT l.name) FILTER (WHERE l.name IS NOT NULL) as lectures,
          array_agg(DISTINCT c.name) FILTER (WHERE c.name IS NOT NULL) as categories
        FROM speakers s
        LEFT JOIN speaker_lectures sl ON s.id = sl."speakerId"
        LEFT JOIN lectures l ON sl."lectureId" = l.id
        LEFT JOIN speaker_categories sc ON s.id = sc."speakerId"
        LEFT JOIN categories c ON sc."categoryId" = c.id
        WHERE s.year = $1
        GROUP BY
          s.id, s.full_name, s.badge_name, s.email, s.phone,
          s.cpf, s.city, s.state, s.curriculum, s.photo_path,
          s.year, s.created_at, s.updated_at
        ORDER BY s.cpf, s.updated_at DESC
      )
      SELECT * FROM speaker_data
      ORDER BY full_name ASC;
    `;

    const { rows: speakers } = await pool.query(query, [year]);

    // Process the results and add Cloudinary URLs
    const processedSpeakers = speakers.map(speaker => ({
      ...speaker,
      // Transform empty arrays to null
      lectures: speaker.lectures?.length ? speaker.lectures : null,
      categories: speaker.categories?.length ? speaker.categories : null,
      // Add Cloudinary URL if photo exists
      photo_path: speaker.photo_path
        ? cloudinary.url(speaker.photo_path, {
            width: 50,
            height: 50,
            crop: 'fill',
            quality: 'auto',
            fetch_format: 'auto'
          })
        : null
    }));

    return NextResponse.json(processedSpeakers, {
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
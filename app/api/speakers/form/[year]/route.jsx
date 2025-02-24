import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/database';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(request) {
  try {
    const pool = await connectToDatabase();
    const formData = await request.formData();
    const cpf = formData.get('cpf');

    // Handle photo upload
    let photo_path = null;
    const photo = formData.get('photo_path');

    if (photo && photo.size > 0) {
      try {
        const bytes = await photo.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Get file extension from original filename
        const fileExtension = path.extname(photo.name).toLowerCase();

        // Create filename using CPF
        const fileName = `${cpf}${fileExtension}`;
        const uploadDir = path.join(process.cwd(), 'public', 'uploads');
        const filePath = path.join(uploadDir, fileName);

        // Ensure upload directory exists
        try {
          await mkdir(uploadDir, { recursive: true });
        } catch (err) {
          if (err.code !== 'EEXIST') throw err;
        }

        // Write file to disk
        await writeFile(filePath, buffer);
        photo_path = `/uploads/${fileName}`;

        console.log('Photo uploaded successfully:', photo_path); // Debug log
      } catch (uploadError) {
        console.error('Photo upload error:', uploadError);
        return NextResponse.json({
          success: false,
          error: 'Erro ao fazer upload da foto',
          details: uploadError.message
        }, { status: 500 });
      }
    } else {
      console.log('No photo provided or empty file'); // Debug log
    }

    const query = `
      INSERT INTO speakers (
        full_name, badge_name, email, phone, cpf,
        city, state, category, curriculum, lecture_name,
        photo_path, year, created_at, updated_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, NOW(), NOW())
      RETURNING id
    `;

    const values = [
      formData.get('full_name'),
      formData.get('badge_name'),
      formData.get('email'),
      formData.get('phone'),
      formData.get('cpf'),
      formData.get('city'),
      formData.get('state'),
      formData.get('category') === 'other'
        ? formData.get('other_category')
        : formData.get('category'),
      formData.get('curriculum'),
      formData.get('lecture_name'),
      photo_path,
      new Date().getFullYear() // Add current year
    ];

    console.log('Inserting with values:', values); // Debug log

    const { rows } = await pool.query(query, values);

    return NextResponse.json({
      success: true,
      id: rows[0].id,
      photo_path: rows[0].photo_path, // Return the saved path
      message: 'Palestrante cadastrado com sucesso'
    });

  } catch (error) {
    console.error('API Error:', error);

    if (error.code === '23505') { // Unique violation
      return NextResponse.json(
        {
          success: false,
          error: 'CPF já cadastrado',
          field: 'cpf'
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
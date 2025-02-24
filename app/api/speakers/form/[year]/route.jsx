import { NextResponse } from 'next/server';
import cloudinary from '@/app/lib/cloudinary';
import { connectToDatabase } from '../../../../lib/database';
import path from 'path';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const photo = formData.get('photo_path');
    const cpf = formData.get('cpf');

    let photo_path = null;

    if (photo && photo.size > 0) {
      try {
        // Convert file to base64
        const bytes = await photo.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const base64Image = `data:${photo.type};base64,${buffer.toString('base64')}`;

        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(base64Image, {
          folder: 'speakers',
          public_id: cpf, // Use CPF as filename
          overwrite: true // Update if exists
        });

        photo_path = result.secure_url;

      } catch (uploadError) {
        console.error('Photo upload error:', uploadError);
        return NextResponse.json({
          success: false,
          error: 'Erro ao fazer upload da foto',
          details: uploadError.message
        }, { status: 500 });
      }
    }

    const pool = await connectToDatabase();

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

    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
import { NextResponse } from 'next/server';
import cloudinary from '@/app/lib/cloudinary';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export async function POST(request, {params}) {
  const { year } = params;

  try {
    const formData = await request.formData();
    const photo = formData.get('photo_path');
    const cpf = formData.get('cpf');

    let photo_path = null;

    // Start transaction
    const result = await prisma.$transaction(async (tx) => {

      const categories = JSON.parse(formData.get('categories'))
      const newCategories = categories.filter(cat => cat.isNew)
      // Create new categories if any
      const createdCategories = await Promise.all(
        newCategories.map(async (category) => {
          return await tx.category.create({
            data: {
              name: category.tempValue,
            }
          })
        })
      )
      // Map temporary IDs to real ones
      const finalCategories = categories.map(category => {
        if (category.isNew) {
          const created = createdCategories.find(c => c.name === category.tempValue)
          return created.id
        }
        return category.value
      })

      const lectures = JSON.parse(formData.get('lectures'))
      const newLectures = lectures.filter(lecture => lecture.isNew)
      // Create new lectures if any
      const createdLectures = await Promise.all(
        newLectures.map(async (lecture) => {
          return await tx.lecture.create({
            data: {
              name: lecture.tempValue,
            }
          })
        })
      )
      // Map temporary IDs to real ones
      const finalLectures = lectures.map(lecture => {
        if (lecture.isNew) {
          const created = createdLectures.find(l => l.name === lecture.tempValue)
          return created.id
        }
        return lecture.value
      })

      // Upload foto to Cloudinary and set photo_path
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

      // 4. Create the speaker
      const speaker = await tx.speaker.create({
        data: {
          full_name: formData.get('full_name'),
          badge_name: formData.get('badge_name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          cpf: formData.get('cpf'),
          city: formData.get('city'),
          state: formData.get('state'),
          curriculum: formData.get('curriculum'),
          photo_path: photo_path,
          year: parseInt(year)
        }
      })


      // Create category associations
      await tx.speakerCategory.createMany({
        data: finalCategories.map(categoryId => ({
          speakerId: speaker.id,
          categoryId: categoryId
        }))
      })

      // Create lecture associations
      await tx.speakerLecture.createMany({
        data: finalLectures.map(lectureId => ({
          speakerId: speaker.id,
          lectureId: lectureId
        }))
      })

      return speaker
    })

    return NextResponse.json({
      success: true,
      id: result.id,
      photo_path: result.photo_path,
      message: 'Palestrante cadastrado com sucesso',
      data: result
    })

  } catch (error) {
    console.error('Transaction failed:', error)

    return NextResponse.json(
      {
        success: false,
        error: error.message,
        message: 'Failed to create speaker and associations'
      },
      { status: 500 }
    );
  }
}
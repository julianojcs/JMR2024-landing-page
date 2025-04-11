import { NextResponse } from 'next/server';
import cloudinary from '../../../../lib/cloudinary';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export async function POST(request, {params}) {
  const { year } = params;

  try {
    const formData = await request.formData();
    const photo = formData.get('photo_path');
    const cpf = formData.get('cpf');
    let photo_path = null;

    const result = await prisma.$transaction(async (tx) => {
      // Handle categories
      const categories = JSON.parse(formData.get('categories'));
      const finalCategories = await Promise.all(
        categories.map(async (category) => {
          if (category.isNew) {
            // Check if category already exists
            const existingCategory = await tx.category.findFirst({
              where: {
                name: {
                  equals: category.tempValue,
                  mode: 'insensitive' // Case insensitive search
                }
              }
            });

            if (existingCategory) {
              return existingCategory.id;
            }

            // Create new category if it doesn't exist
            const newCategory = await tx.category.create({
              data: {
                name: category.tempValue
              }
            });
            return newCategory.id;
          }
          return category.value;
        })
      );

      // Handle lectures
      const lectures = JSON.parse(formData.get('lectures'));
      const finalLectures = await Promise.all(
        lectures.map(async (lecture) => {
          if (lecture.isNew) {
            // Check if lecture already exists
            const existingLecture = await tx.lecture.findFirst({
              where: {
                name: {
                  equals: lecture.tempValue,
                  mode: 'insensitive' // Case insensitive search
                }
              }
            });

            if (existingLecture) {
              return existingLecture.id;
            }

            // Create new lecture if it doesn't exist
            const newLecture = await tx.lecture.create({
              data: {
                name: lecture.tempValue
              }
            });
            return newLecture.id;
          }
          return lecture.value;
        })
      );

      // Handle photo upload
      if (photo && photo.size > 0) {
        try {
          const bytes = await photo.arrayBuffer();
          const buffer = Buffer.from(bytes);
          const base64Image = `data:${photo.type};base64,${buffer.toString('base64')}`;

          const result = await cloudinary.uploader.upload(base64Image, {
            folder: 'speakers',
            public_id: cpf,
            overwrite: true
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

      // Create speaker
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
          photo_path: photo_path || 'https://res.cloudinary.com/dixe3b2i5/image/upload/v1742929226/speakers/default-avatar.png',
          year: parseInt(year)
        }
      });

      // Create category associations
      await tx.speakerCategory.createMany({
        data: finalCategories.map(categoryId => ({
          speakerId: speaker.id,
          categoryId: categoryId
        }))
      });

      // Create lecture associations
      await tx.speakerLecture.createMany({
        data: finalLectures.map(lectureId => ({
          speakerId: speaker.id,
          lectureId: lectureId
        }))
      });

      return speaker;
    });

    return NextResponse.json({
      success: true,
      id: result.id,
      photo_path: result.photo_path,
      message: 'Palestrante cadastrado com sucesso',
      data: result
    });

  } catch (error) {
    console.error('Transaction failed:', error);
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
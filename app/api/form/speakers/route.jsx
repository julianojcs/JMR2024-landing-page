import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import Speaker from '@/models/Speaker';
import mongoose from 'mongoose';

// Connection function
async function connectToDatabase() {
  try {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGODB_URI, {
        dbName: process.env.MONGODB_DB || 'jornada'
      });
      console.log('MongoDB connected successfully');
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

export async function POST(request) {
  try {
    await connectToDatabase();
    const formData = await request.formData();
    const cpf = formData.get('cpf');

    // Check if CPF already exists
    // const existingSpeaker = await Speaker.findOne({ cpf });
    // if (existingSpeaker) {
    //   return NextResponse.json(
    //     {
    //       success: false,
    //       error: 'CPF já cadastrado',
    //       field: 'cpf'
    //     },
    //     { status: 409 } // Conflict status code
    //   );
    // }

    // Processar a foto
    const photo = formData.get('photo');
    let photoPath = null;

    if (photo) {
      const bytes = await photo.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Salvar a foto
      const uploadDir = path.join(process.cwd(), 'public', 'temp');
      const filePath = path.join(uploadDir, photo.name);
      await writeFile(filePath, buffer);
      photoPath = `/temp/${photo.name}`;
    }

    // Criar documento para inserção
    const speakerDoc = {
      fullName: formData.get('fullName'),
      badgeName: formData.get('badgeName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      cpf: formData.get('cpf'),
      city: formData.get('city'),
      state: formData.get('state'),
      category: formData.get('category') === 'other' ? formData.get('otherCategory') : formData.get('category'),
      // otherCategory: formData.get('otherCategory'),
      curriculum: formData.get('curriculum'),
      lectureName: formData.get('lectureName'),
      photoPath: photoPath,
      // createdAt: new Date()
    };

    // Criar documento para inserção
    const speaker = new Speaker(speakerDoc);
    // Inserir no MongoDB
    const result = await speaker.save();

    return NextResponse.json({
      success: true,
      id: result._id
    });

  } catch (error) {
    console.error('Error:', error);

    // Handle mongoose validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = {};
      for (let field in error.errors) {
        validationErrors[field] = error.errors[field].message;
      }
      return NextResponse.json(
        {
          success: false,
          error: 'Erro de validação',
          validationErrors
        },
        { status: 400 }
      );
    }

    // Handle duplicate key error
    if (error.code === 11000) {
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
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Society from '@/models/mongo/Society.js';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/jornada';

// Função para conectar ao MongoDB
async function connectToMongoDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
  }
}

// GET /api/societies/[id] - Buscar sociedade por ID
export async function GET(request, { params }) {
  try {
    await connectToMongoDB();

    const { id } = params;
    const { searchParams } = new URL(request.url);
    const includeAffiliates = searchParams.get('includeAffiliates') !== 'false';

    const society = await Society.getSocietyById(id, includeAffiliates);

    if (!society) {
      return NextResponse.json(
        { error: 'Sociedade não encontrada.' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: society
    });

  } catch (error) {
    console.error('Erro ao buscar sociedade por ID:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor.', details: error.message },
      { status: 500 }
    );
  }
}

// PUT /api/societies/[id] - Atualizar sociedade por ID
export async function PUT(request, { params }) {
  try {
    await connectToMongoDB();

    const { id } = params;
    const updateData = await request.json();

    const society = await Society.updateSociety(id, updateData);

    if (!society) {
      return NextResponse.json(
        { error: 'Sociedade não encontrada.' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Sociedade atualizada com sucesso.',
      data: society
    });

  } catch (error) {
    console.error('Erro ao atualizar sociedade:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor.', details: error.message },
      { status: 500 }
    );
  }
}

// DELETE /api/societies/[id] - Deletar sociedade por ID
export async function DELETE(request, { params }) {
  try {
    await connectToMongoDB();

    const { id } = params;

    const society = await Society.deleteSociety(id);

    if (!society) {
      return NextResponse.json(
        { error: 'Sociedade não encontrada.' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Sociedade deletada com sucesso.',
      data: society
    });

  } catch (error) {
    console.error('Erro ao deletar sociedade:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor.', details: error.message },
      { status: 500 }
    );
  }
}

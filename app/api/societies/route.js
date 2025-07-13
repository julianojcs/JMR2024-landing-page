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

// GET /api/societies - Listar todas as sociedades
export async function GET(request) {
  try {
    await connectToMongoDB();

    const { searchParams } = new URL(request.url);
    const includeAffiliates = searchParams.get('includeAffiliates') !== 'false';
    const shortName = searchParams.get('shortName');
    const affiliateEmail = searchParams.get('affiliateEmail');
    const affiliateCpf = searchParams.get('affiliateCpf');

    let societies;

    if (shortName) {
      // Buscar por shortName específico
      societies = await Society.findByShortName(shortName);
      societies = societies ? [societies] : [];
    } else if (affiliateEmail) {
      // Buscar sociedades por email do afiliado
      societies = await Society.findByAffiliateEmail(affiliateEmail);
    } else if (affiliateCpf) {
      // Buscar sociedades por CPF do afiliado
      societies = await Society.findByAffiliateCpf(affiliateCpf);
    } else {
      // Listar todas as sociedades
      societies = await Society.getAllSocieties(includeAffiliates);
    }

    return NextResponse.json({
      success: true,
      data: societies,
      count: societies.length
    });

  } catch (error) {
    console.error('Erro ao buscar sociedades:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor.', details: error.message },
      { status: 500 }
    );
  }
}

// POST /api/societies - Criar nova sociedade
export async function POST(request) {
  try {
    await connectToMongoDB();

    const societyData = await request.json();

    // Validações básicas
    if (!societyData.name || !societyData.shortName) {
      return NextResponse.json(
        { error: 'Nome e nome abreviado são obrigatórios.' },
        { status: 400 }
      );
    }

    // Verificar se já existe sociedade com o mesmo shortName
    const existingSociety = await Society.findByShortName(societyData.shortName);
    if (existingSociety) {
      return NextResponse.json(
        { error: 'Já existe uma sociedade com este nome abreviado.' },
        { status: 409 }
      );
    }

    const society = await Society.createSociety(societyData);

    return NextResponse.json({
      success: true,
      message: 'Sociedade criada com sucesso.',
      data: society
    }, { status: 201 });

  } catch (error) {
    console.error('Erro ao criar sociedade:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor.', details: error.message },
      { status: 500 }
    );
  }
}

// PUT /api/societies - Atualizar sociedade
export async function PUT(request) {
  try {
    await connectToMongoDB();

    const { id, ...updateData } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: 'ID da sociedade é obrigatório.' },
        { status: 400 }
      );
    }

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

// DELETE /api/societies - Deletar sociedade
export async function DELETE(request) {
  try {
    await connectToMongoDB();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'ID da sociedade é obrigatório.' },
        { status: 400 }
      );
    }

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

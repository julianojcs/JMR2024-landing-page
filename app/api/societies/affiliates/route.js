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

// POST /api/societies/affiliates - Gerenciar afiliados
export async function POST(request) {
  try {
    await connectToMongoDB();

    const { action, societyId, societyShortName, ...data } = await request.json();

    if (!action) {
      return NextResponse.json(
        { error: 'Ação é obrigatória.' },
        { status: 400 }
      );
    }

    let society;

    // Buscar sociedade por ID ou shortName
    if (societyId) {
      society = await Society.getSocietyById(societyId);
    } else if (societyShortName) {
      society = await Society.findByShortName(societyShortName);
    } else {
      return NextResponse.json(
        { error: 'ID da sociedade ou nome abreviado é obrigatório.' },
        { status: 400 }
      );
    }

    if (!society) {
      return NextResponse.json(
        { error: 'Sociedade não encontrada.' },
        { status: 404 }
      );
    }

    let result;

    switch (action) {
      case 'add':
        // Adicionar afiliado
        const { name, email, cpf, isAffiliated = true } = data;
        if (!email && !cpf) {
          return NextResponse.json(
            { error: 'Email ou CPF é obrigatório.' },
            { status: 400 }
          );
        }

        result = await society.addAffiliate(name, email, cpf, isAffiliated);
        break;

      case 'remove':
        // Remover afiliado
        const { emailOrCpf } = data;
        if (!emailOrCpf) {
          return NextResponse.json(
            { error: 'Email ou CPF é obrigatório.' },
            { status: 400 }
          );
        }

        result = await society.removeAffiliate(emailOrCpf);
        break;

      case 'update':
        // Atualizar afiliado
        const { emailOrCpf: updateEmailOrCpf, updateData } = data;
        if (!updateEmailOrCpf || !updateData) {
          return NextResponse.json(
            { error: 'Email/CPF e dados de atualização são obrigatórios.' },
            { status: 400 }
          );
        }

        result = await society.updateAffiliate(updateEmailOrCpf, updateData);
        break;

      case 'toggleStatus':
        // Alternar status de afiliação
        const { emailOrCpf: toggleEmailOrCpf } = data;
        if (!toggleEmailOrCpf) {
          return NextResponse.json(
            { error: 'Email ou CPF é obrigatório.' },
            { status: 400 }
          );
        }

        result = await society.toggleAffiliateStatus(toggleEmailOrCpf);
        break;

      case 'bulkAdd':
        // Adicionar múltiplos afiliados
        const { affiliates } = data;
        if (!Array.isArray(affiliates) || affiliates.length === 0) {
          return NextResponse.json(
            { error: 'Lista de afiliados é obrigatória.' },
            { status: 400 }
          );
        }

        result = await society.bulkAddAffiliates(affiliates);
        break;

      case 'clear':
        // Limpar todos os afiliados
        result = await society.clearAllAffiliates();
        break;

      default:
        return NextResponse.json(
          { error: 'Ação inválida.' },
          { status: 400 }
        );
    }

    return NextResponse.json({
      success: true,
      message: `Operação '${action}' realizada com sucesso.`,
      data: result
    });

  } catch (error) {
    console.error('Erro ao gerenciar afiliados:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor.', details: error.message },
      { status: 500 }
    );
  }
}

// GET /api/societies/affiliates - Consultar afiliados
export async function GET(request) {
  try {
    await connectToMongoDB();

    const { searchParams } = new URL(request.url);
    const societyId = searchParams.get('societyId');
    const societyShortName = searchParams.get('societyShortName');
    const action = searchParams.get('action') || 'list';

    let society;

    // Buscar sociedade por ID ou shortName
    if (societyId) {
      society = await Society.getSocietyById(societyId);
    } else if (societyShortName) {
      society = await Society.findByShortName(societyShortName);
    } else {
      return NextResponse.json(
        { error: 'ID da sociedade ou nome abreviado é obrigatório.' },
        { status: 400 }
      );
    }

    if (!society) {
      return NextResponse.json(
        { error: 'Sociedade não encontrada.' },
        { status: 404 }
      );
    }

    let result;

    switch (action) {
      case 'list':
        result = society.affiliates;
        break;

      case 'active':
        result = society.getActiveAffiliates();
        break;

      case 'inactive':
        result = society.getInactiveAffiliates();
        break;

      case 'stats':
        result = society.getAffiliatesStats();
        break;

      case 'export':
        const includeInactive = searchParams.get('includeInactive') === 'true';
        result = society.exportAffiliatesToCSV(includeInactive);

        // Retornar como arquivo CSV
        return new NextResponse(result, {
          headers: {
            'Content-Type': 'text/csv',
            'Content-Disposition': `attachment; filename="${society.shortName}_affiliates.csv"`
          }
        });

      default:
        return NextResponse.json(
          { error: 'Ação inválida.' },
          { status: 400 }
        );
    }

    return NextResponse.json({
      success: true,
      data: result,
      societyName: society.name,
      societyShortName: society.shortName
    });

  } catch (error) {
    console.error('Erro ao consultar afiliados:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor.', details: error.message },
      { status: 500 }
    );
  }
}

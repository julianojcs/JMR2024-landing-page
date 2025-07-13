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

// POST /api/societies/search - Buscar sociedades por critérios específicos
export async function POST(request) {
  try {
    await connectToMongoDB();

    const { type, value, includeAffiliates = true } = await request.json();

    if (!type || !value) {
      return NextResponse.json(
        { error: 'Tipo de busca e valor são obrigatórios.' },
        { status: 400 }
      );
    }

    let result;

    switch (type) {
      case 'name':
        result = await Society.findByName(value);
        result = result ? [result] : [];
        break;

      case 'shortName':
        result = await Society.findByShortName(value);
        result = result ? [result] : [];
        break;

      case 'affiliateEmail':
        result = await Society.findByAffiliateEmail(value);
        break;

      case 'affiliateCpf':
        result = await Society.findByAffiliateCpf(value);
        break;

      case 'affiliate':
        // Buscar por email ou CPF automaticamente
        const isEmail = value.includes('@');
        if (isEmail) {
          result = await Society.findByAffiliateEmail(value);
        } else {
          result = await Society.findByAffiliateCpf(value);
        }
        break;

      case 'affiliateClean':
        // Buscar sociedades sem incluir afiliados
        const isEmailClean = value.includes('@');
        if (isEmailClean) {
          result = await Society.findSocietiesByAffiliate(value);
        } else {
          result = await Society.findSocietiesByAffiliate(value);
        }
        break;

      default:
        return NextResponse.json(
          { error: 'Tipo de busca inválido. Use: name, shortName, affiliateEmail, affiliateCpf, affiliate, affiliateClean' },
          { status: 400 }
        );
    }

    // Se não quiser incluir afiliados, remover do resultado
    if (!includeAffiliates && Array.isArray(result)) {
      result = result.map(society => {
        const { affiliates, ...societyWithoutAffiliates } = society.toObject ? society.toObject() : society;
        return societyWithoutAffiliates;
      });
    }

    return NextResponse.json({
      success: true,
      searchType: type,
      searchValue: value,
      data: result,
      count: Array.isArray(result) ? result.length : (result ? 1 : 0)
    });

  } catch (error) {
    console.error('Erro na busca de sociedades:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor.', details: error.message },
      { status: 500 }
    );
  }
}

// GET /api/societies/search - Documentação de tipos de busca
export async function GET() {
  try {
    const searchTypes = {
      name: {
        description: "Buscar sociedade por nome (case-insensitive)",
        example: { type: "name", value: "Sociedade Brasileira" }
      },
      shortName: {
        description: "Buscar sociedade por nome abreviado (case-insensitive)",
        example: { type: "shortName", value: "SBM" }
      },
      affiliateEmail: {
        description: "Buscar sociedades que possuem afiliado com este email",
        example: { type: "affiliateEmail", value: "joao@example.com" }
      },
      affiliateCpf: {
        description: "Buscar sociedades que possuem afiliado com este CPF",
        example: { type: "affiliateCpf", value: "12345678901" }
      },
      affiliate: {
        description: "Buscar sociedades por email ou CPF do afiliado (detecta automaticamente)",
        example: { type: "affiliate", value: "joao@example.com" }
      },
      affiliateClean: {
        description: "Buscar sociedades por afiliado, mas retorna sem dados dos afiliados",
        example: { type: "affiliateClean", value: "joao@example.com" }
      }
    };

    const usage = {
      endpoint: "/api/societies/search",
      method: "POST",
      payload: {
        type: "string (required) - Tipo de busca",
        value: "string (required) - Valor a ser buscado",
        includeAffiliates: "boolean (optional, default: true) - Incluir dados dos afiliados"
      },
      examples: Object.values(searchTypes).map(t => t.example)
    };

    return NextResponse.json({
      success: true,
      data: {
        searchTypes: searchTypes,
        usage: usage
      }
    });

  } catch (error) {
    console.error('Erro ao gerar documentação de busca:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor.', details: error.message },
      { status: 500 }
    );
  }
}

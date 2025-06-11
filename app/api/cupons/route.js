// API para gerenciar cupons
import { NextResponse } from 'next/server';
import Cupom from '../../models/mongo/Cupom.js';
import { useMongoDB } from '../../hooks/useMongoDB.js';

// Função utilitária para ajustar datas com timezone brasileiro (UTC-3)
const adjustDateForBrazilTimezone = (dateString, isEndDate = false) => {
  // Criar data no timezone de Brasília
  const date = new Date(dateString + 'T00:00:00-03:00');

  if (isEndDate) {
    // Data fim: 23:59:59 no timezone brasileiro
    const endDate = new Date(dateString + 'T23:59:59-03:00');
    return endDate;
  } else {
    // Data início: 00:00:00 no timezone brasileiro
    return date;
  }
};

// GET - Listar todos os cupons
export async function GET(request) {
  try {
    await useMongoDB();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const status = searchParams.get('status'); // 'active', 'inactive', 'expired'
    const year = searchParams.get('year');
    const search = searchParams.get('search');

    // Construir filtros
    const filters = {};

    // Filtro de pesquisa por nome ou código
    if (search) {
      filters.$or = [
        { name: { $regex: search, $options: 'i' } },
        { code: { $regex: search, $options: 'i' } }
      ];
    }

    if (status === 'active') {
      filters.active = true;
      filters['validity.until'] = { $gte: new Date() };
    } else if (status === 'inactive') {
      filters.active = false;
    } else if (status === 'expired') {
      filters['validity.until'] = { $lt: new Date() };
    }

    if (year) {
      filters.year = year;
    }

    // Buscar cupons com paginação
    const skip = (page - 1) * limit;
    const cupons = await Cupom.find(filters)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    // Contar total para paginação
    const total = await Cupom.countDocuments(filters);

    return NextResponse.json({
      success: true,
      data: cupons,
      pagination: {
        current: page,
        total: Math.ceil(total / limit),
        count: cupons.length,
        totalItems: total
      }
    });

  } catch (error) {
    console.error('Erro ao buscar cupons:', error);
    return NextResponse.json({
      success: false,
      message: 'Erro interno do servidor'
    }, { status: 500 });
  }
}

// POST - Criar novo cupom
export async function POST(request) {
  try {
    await useMongoDB();

    const data = await request.json();

    // Validações básicas
    if (!data.code || !data.name || !data.year) {
      return NextResponse.json({
        success: false,
        message: 'Campos obrigatórios: code, name, year'
      }, { status: 400 });
    }

    // Verificar se código já existe
    const existingCupom = await Cupom.findOne({
      code: data.code.toUpperCase()
    });

    if (existingCupom) {
      return NextResponse.json({
        success: false,
        message: 'Código do cupom já existe'
      }, { status: 400 });
    }

    // Preparar dados do cupom
    const cupomData = {
      code: data.code.toUpperCase(),
      name: data.name,
      year: data.year,
      discount: {
        type: data.discountType || 'PERCENTAGE',
        value: parseFloat(data.discountValue) || 0,
        maxAmount: data.maxAmount ? parseFloat(data.maxAmount) : undefined
      },
      usage: {
        limit: data.usageLimit ? parseInt(data.usageLimit) : null,
        limitPerUser: parseInt(data.limitPerUser) || 1,
        used: 0,
        usedBy: []
      },
      validity: {
        from: adjustDateForBrazilTimezone(data.validFrom, false), // 00:00:00 UTC-3
        until: adjustDateForBrazilTimezone(data.validUntil, true)  // 23:59:59 UTC-3
      },
      restrictions: {
        minOrderValue: parseFloat(data.minOrderValue) || 0,
        applicableCategories: data.applicableCategories || [0], // ALL como ID numérico
        applicableProducts: data.applicableProducts || ['ALL']
      },
      active: data.active !== false
    };

    // Criar cupom
    const novoCupom = await Cupom.create(cupomData);

    return NextResponse.json({
      success: true,
      message: 'Cupom criado com sucesso',
      data: novoCupom
    }, { status: 201 });

  } catch (error) {
    console.error('Erro ao criar cupom:', error);

    if (error.name === 'ValidationError') {
      return NextResponse.json({
        success: false,
        message: 'Dados inválidos',
        errors: error.errors
      }, { status: 400 });
    }

    return NextResponse.json({
      success: false,
      message: 'Erro interno do servidor'
    }, { status: 500 });
  }
}

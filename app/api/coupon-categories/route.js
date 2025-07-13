import { NextResponse } from 'next/server';
import CouponCategory from '../../models/mongo/CouponCategory.js';
import { useMongoDB } from '../../hooks/useMongoDB.js';

export async function GET() {
  try {
    await useMongoDB();

    const categories = await CouponCategory.find({ isActive: true })
      .select('_id name code isFixed')
      .sort({ isFixed: -1, name: 1 });

    const formattedCategories = categories.map(cat => ({
      id: cat._id.toString(),
      value: cat.code,
      label: cat.name,
      isFixed: cat.isFixed
    }));

    return NextResponse.json(formattedCategories);
  } catch (error) {
    console.error('Erro ao buscar categorias de cupom:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await useMongoDB();

    const body = await request.json();
    const { name, code, description } = body;

    if (!name || !code) {
      return NextResponse.json(
        { error: 'Nome e código são obrigatórios' },
        { status: 400 }
      );
    }

    const newCategory = await CouponCategory.create({
      name: name.trim(),
      code: code.trim().toUpperCase(),
      isFixed: false // Categorias criadas pelo usuário não são fixas
    });

    return NextResponse.json({
      id: newCategory._id.toString(),
      value: newCategory.code,
      label: newCategory.name,
      isFixed: newCategory.isFixed
    });
  } catch (error) {
    console.error('Erro ao criar categoria de cupom:', error);

    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'Já existe uma categoria com este nome ou código' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

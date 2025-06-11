import { NextResponse } from 'next/server';
import CouponProduct from '../../models/mongo/CouponProduct.js';
import { useMongoDB } from '../../hooks/useMongoDB.js';

export async function GET() {
  try {
    await useMongoDB();

    const products = await CouponProduct.find({ isActive: true })
      .select('_id name code description isFixed')
      .sort({ isFixed: -1, name: 1 });

    const formattedProducts = products.map(product => ({
      id: product._id.toString(),
      value: product.code,
      label: product.name,
      description: product.description,
      isFixed: product.isFixed
    }));

    return NextResponse.json(formattedProducts);
  } catch (error) {
    console.error('Erro ao buscar produtos de cupom:', error);
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

    const newProduct = await CouponProduct.create({
      name: name.trim(),
      code: code.trim().toUpperCase(),
      description: description?.trim() || '',
      isFixed: false // Produtos criados pelo usuário não são fixos
    });

    return NextResponse.json({
      id: newProduct._id.toString(),
      value: newProduct.code,
      label: newProduct.name,
      description: newProduct.description,
      isFixed: newProduct.isFixed
    });
  } catch (error) {
    console.error('Erro ao criar produto de cupom:', error);

    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'Já existe um produto com este nome ou código' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

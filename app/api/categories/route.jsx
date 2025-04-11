import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      select: {
        id: true,
        name: true,
        is_new: false
      },
      orderBy: [
        { is_fixed: 'desc' },
        { name: 'asc' }
      ]
    })
    console.log('Fetched categories:', categories)
    return NextResponse.json(categories)
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    if (!body.name) {
      return NextResponse.json(
        { error: 'Category name is required' },
        { status: 400 }
      );
    }
    const newCategory = await prisma.category.create({
      data: {
        name: body.name,
        is_fixed: body.is_fixed || false
      }
    });

    return NextResponse.json(newCategory);
  } catch (error) {
    console.error('Error creating category:', error);
    return NextResponse.json(
      { error: 'Failed to create category' },
      { status: 500 }
    );
  }
}
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(request) {
  try {
    const body = await request.json()
    const { name } = body

    if (!name) {
      return NextResponse.json(
        { error: 'Nome da palestra é obrigatório' },
        { status: 400 }
      )
    }

    // Check if lecture already exists
    const existingLecture = await prisma.lecture.findFirst({
      where: {
        name: {
          equals: name.trim(),
          mode: 'insensitive' // Case insensitive search
        }
      }
    });

    if (existingLecture) {
      return NextResponse.json({
        id: existingLecture.id,
        name: existingLecture.name,
        is_fixed: existingLecture.is_fixed,
        is_new: existingLecture.is_new,
        created_at: existingLecture.created_at,
        message: 'Palestra já existe'
      })
    }

    const newLecture = await prisma.lecture.create({
      data: {
        name: name.trim(),
        is_fixed: false,
        is_new: true
      }
    })

    return NextResponse.json({
      id: newLecture.id,
      name: newLecture.name,
      is_fixed: newLecture.is_fixed,
      is_new: newLecture.is_new,
      created_at: newLecture.created_at
    })
  } catch (error) {
    console.error('Erro ao criar palestra:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const lectures = await prisma.lecture.findMany({
      select: {
        id: true,
        name: true,
        is_fixed: true,
        is_new: true,
        created_at: true
      },
      orderBy: [
        { is_fixed: 'desc' },
        { name: 'asc' }
      ]
    })
    return NextResponse.json(lectures)
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function PUT(request) {
  try {
    const body = await request.json()
    const { id, name, is_fixed, is_new } = body

    if (!id) {
      return NextResponse.json(
        { error: 'ID da palestra é obrigatório' },
        { status: 400 }
      )
    }

    if (!name || name.trim() === '') {
      return NextResponse.json(
        { error: 'Nome da palestra é obrigatório' },
        { status: 400 }
      )
    }

    // Check if lecture exists
    const existingLecture = await prisma.lecture.findUnique({
      where: { id: parseInt(id) }
    })

    if (!existingLecture) {
      return NextResponse.json(
        { error: 'Palestra não encontrada' },
        { status: 404 }
      )
    }

    // Check if another lecture with the same name already exists (excluding current one)
    const duplicateLecture = await prisma.lecture.findFirst({
      where: {
        AND: [
          { id: { not: parseInt(id) } },
          {
            name: {
              equals: name.trim(),
              mode: 'insensitive'
            }
          }
        ]
      }
    })

    if (duplicateLecture) {
      return NextResponse.json(
        { error: 'Já existe uma palestra com este nome' },
        { status: 409 }
      )
    }

    // Update the lecture
    const updatedLecture = await prisma.lecture.update({
      where: { id: parseInt(id) },
      data: {
        name: name.trim(),
        is_fixed: is_fixed !== undefined ? Boolean(is_fixed) : existingLecture.is_fixed,
        is_new: is_new !== undefined ? Boolean(is_new) : existingLecture.is_new
      }
    })

    return NextResponse.json({
      id: updatedLecture.id,
      name: updatedLecture.name,
      is_fixed: updatedLecture.is_fixed,
      is_new: updatedLecture.is_new,
      message: 'Palestra atualizada com sucesso'
    })
  } catch (error) {
    console.error('Erro ao atualizar palestra:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

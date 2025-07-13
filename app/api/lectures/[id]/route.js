import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function DELETE(request, {params}) {
  const { id } = params;
  try {
    // const url = new URL(request.url)
    // const id = url.searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { error: 'ID da palestra é obrigatório' },
        { status: 400 }
      )
    }

    const lectureId = parseInt(id)

    if (isNaN(lectureId)) {
      return NextResponse.json(
        { error: 'ID da palestra deve ser um número válido' },
        { status: 400 }
      )
    }

    // Check if lecture exists
    const existingLecture = await prisma.lecture.findUnique({
      where: { id: lectureId }
    })

    if (!existingLecture) {
      return NextResponse.json(
        { error: 'Palestra não encontrada' },
        { status: 404 }
      )
    }

    // Check if lecture is being used in speaker_lectures table
    const lectureUsage = await prisma.speakerLecture.findFirst({
      where: { lectureId: lectureId }
    })

    if (lectureUsage) {
      return NextResponse.json(
        {
          error: 'Não é possível excluir esta palestra pois ela está sendo utilizada por um ou mais palestrantes',
          details: 'Para excluir esta palestra, primeiro remova-a de todos os palestrantes associados'
        },
        { status: 409 }
      )
    }

    // Delete the lecture
    await prisma.lecture.delete({
      where: { id: lectureId }
    })

    return NextResponse.json({
      message: 'Palestra excluída com sucesso',
      deletedLecture: {
        id: existingLecture.id,
        name: existingLecture.name
      }
    })
  } catch (error) {
    console.error('Erro ao excluir palestra:', error)

    // Check if it's a foreign key constraint error
    if (error.code === 'P2003') {
      return NextResponse.json(
        {
          error: 'Não é possível excluir esta palestra devido a restrições de integridade',
          details: 'Esta palestra está sendo referenciada por outros registros'
        },
        { status: 409 }
      )
    }

    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
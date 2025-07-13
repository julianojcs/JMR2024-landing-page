import { NextResponse } from 'next/server';
import { certificateService } from '@/services/CertificateService.js';

// GET /api/events/[eventId]/lectures - Listar palestras de um evento
export async function GET(request, { params }) {
  try {
    const { eventId } = params;

    if (!eventId) {
      return NextResponse.json(
        { error: 'ID do evento é obrigatório.' },
        { status: 400 }
      );
    }

    // Por enquanto, retorna palestras mockadas ou do arquivo
    const lectures = await certificateService.getLecturesByIds(['lecture1', 'lecture2', 'lecture3', 'lecture4']);

    return NextResponse.json(lectures);

  } catch (error) {
    console.error('Erro ao buscar palestras:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor.' },
      { status: 500 }
    );
  }
}

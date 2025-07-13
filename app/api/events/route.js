import { NextResponse } from 'next/server';
import { certificateService } from '@/services/CertificateService.js';

// GET /api/events - Listar eventos
export async function GET() {
  try {
    const events = await certificateService.getDefaultEvent();
    return NextResponse.json(events ? [events] : []);
  } catch (error) {
    console.error('Erro ao buscar eventos:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor.' },
      { status: 500 }
    );
  }
}

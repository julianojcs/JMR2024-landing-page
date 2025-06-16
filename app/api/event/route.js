import { NextResponse } from 'next/server';
import { useMongoDB } from '@/hooks/useMongoDB';
import Event from '@/models/mongo/Event';

/**
 * GET /api/event - Recupera informações do evento
 * Pode receber year como query parameter (?year=2024) ou retornar o ano atual
 * @param {Request} request - Objeto de requisição
 * @param {Object} context - Contexto da requisição contendo parâmetros da rota
 * @returns {Response} Resposta com dados do evento ou mensagem de erro
 */
export async function GET(request, context) {
  let session = null;

  try {
    // Conectar ao MongoDB utilizando o hook
    await useMongoDB();

    // Get year from query parameters
    const { searchParams } = new URL(request.url);
    const yearParam = searchParams.get('year');

    let year = yearParam;

    // If no year provided, get current year (latest event)
    if (!year) {
      const latestEvent = await Event.findOne().sort({ year: -1 }).lean();
      if (latestEvent) {
        year = latestEvent.year;
      } else {
        return NextResponse.json(
          { success: false, message: 'Nenhum evento encontrado' },
          { status: 404 }
        );
      }
    }

    // Buscar o evento para o ano especificado
    const event = await Event.findOne({ year }).lean();

    // Verificar se o evento foi encontrado
    if (!event) {
      return NextResponse.json(
        { success: false, message: `Nenhum evento encontrado para o ano ${year}` },
        { status: 404 }
      );
    }

    // Retornar os dados do evento
    return NextResponse.json({
      success: true,
      data: event
    }, { status: 200 });

  } catch (error) {
    // Abortar qualquer transação em andamento se houver um erro
    if (session) {
      await session.abortTransaction();
      session.endSession();
    }

    // Log de erro para análise no servidor
    console.error(`Erro ao buscar evento para o ano ${context.params?.year}:`, error);

    // Tratamento específico para diferentes tipos de erro
    if (error.name === 'ValidationError') {
      return NextResponse.json(
        {
          success: false,
          message: 'Dados de validação inválidos',
          errors: error.errors
        },
        { status: 400 }
      );
    } else if (error.name === 'CastError') {
      return NextResponse.json(
        {
          success: false,
          message: 'Formato de parâmetro inválido',
          error: error.message
        },
        { status: 400 }
      );
    } else if (error.name === 'MongoNetworkError') {
      return NextResponse.json(
        {
          success: false,
          message: 'Erro de conexão com o banco de dados',
          error: error.message
        },
        { status: 503 }
      );
    } else if (error.code === 11000) {
      return NextResponse.json(
        {
          success: false,
          message: 'Violação de chave única',
          error: error.message
        },
        { status: 409 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: 'Erro interno do servidor',
          error: error.message
        },
        { status: 500 }
      );
    }
  }
}
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

// POST /api/societies/import-csv - Importar afiliados via CSV
export async function POST(request) {
  try {
    await connectToMongoDB();

    const { societyShortName, csvContent, options = {} } = await request.json();

    if (!societyShortName) {
      return NextResponse.json(
        { error: 'Nome abreviado da sociedade é obrigatório.' },
        { status: 400 }
      );
    }

    if (!csvContent) {
      return NextResponse.json(
        { error: 'Conteúdo CSV é obrigatório.' },
        { status: 400 }
      );
    }

    // Verificar se a sociedade existe
    const society = await Society.findByShortName(societyShortName);
    if (!society) {
      return NextResponse.json(
        { error: 'Sociedade não encontrada.' },
        { status: 404 }
      );
    }

    // Realizar importação
    const result = await Society.importAffiliatesFromCSV(societyShortName, csvContent);

    return NextResponse.json({
      success: true,
      message: 'Importação CSV concluída com sucesso.',
      data: result
    });

  } catch (error) {
    console.error('Erro na importação CSV:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor.', details: error.message },
      { status: 500 }
    );
  }
}

// GET /api/societies/import-csv - Obter exemplo de CSV para importação
export async function GET() {
  try {
    const csvExample = `nome,email,cpf
Dr. João Silva,joao.silva@example.com,12345678901
Dra. Maria Santos,maria.santos@example.com,98765432109
Dr. Pedro Costa,pedro.costa@example.com,11122233344`;

    const csvFormats = {
      format1: {
        description: "Formato padrão: nome, email, cpf",
        example: csvExample
      },
      format2: {
        description: "Formato alternativo: email, cpf, nome",
        example: `email,cpf,nome
joao.silva@example.com,12345678901,Dr. João Silva
maria.santos@example.com,98765432109,Dra. Maria Santos`
      },
      format3: {
        description: "Sem cabeçalho (detectado automaticamente)",
        example: `Dr. João Silva,joao.silva@example.com,12345678901
Dra. Maria Santos,maria.santos@example.com,98765432109`
      }
    };

    const instructions = {
      rules: [
        "Pelo menos email OU CPF deve ser fornecido para cada afiliado",
        "Emails devem estar em formato válido (exemplo@dominio.com)",
        "CPFs podem estar com ou sem formatação (12345678901 ou 123.456.789-01)",
        "O sistema detecta automaticamente a ordem dos campos",
        "Afiliados duplicados (mesmo email ou CPF) serão ignorados",
        "O cabeçalho é opcional - se presente, deve conter palavras como 'nome', 'email', 'cpf'"
      ],
      supportedOrders: [
        "nome, email, cpf",
        "email, cpf, nome",
        "cpf, nome, email",
        "email, nome, cpf",
        "nome, cpf, email",
        "cpf, email, nome"
      ]
    };

    return NextResponse.json({
      success: true,
      data: {
        formats: csvFormats,
        instructions: instructions,
        endpoint: "/api/societies/import-csv",
        method: "POST",
        payload: {
          societyShortName: "string (required)",
          csvContent: "string (required)",
          options: "object (optional)"
        }
      }
    });

  } catch (error) {
    console.error('Erro ao gerar exemplo CSV:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor.', details: error.message },
      { status: 500 }
    );
  }
}

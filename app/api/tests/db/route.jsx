import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

export async function GET() {
  const diagnostics = {
    mongoUrl: process.env.MONGODB_URI ? 'Configurado' : 'Não configurado',
    dbName: process.env.MONGODB_DB || 'jornada',
    connectionState: 'Não iniciada',
    connectionTime: null,
    databaseName: null,
    host: null,
    error: null,
    mongooseVersion: mongoose.version,
    nodeVersion: process.version,
  };

  try {
    // Adiciona timeout explícito
    const connectOptions = {
      dbName: process.env.MONGODB_DB || 'jornada',
      connectTimeoutMS: 10000, // 10 segundos
      serverSelectionTimeoutMS: 10000,
    };

    // Tenta conectar com timeout
    diagnostics.connectionState = 'Conectando...';
    const startTime = Date.now();

    await mongoose.connect(process.env.MONGODB_URI, connectOptions);

    diagnostics.connectionTime = `${Date.now() - startTime}ms`;
    diagnostics.connectionState = mongoose.connection.readyState === 1 ? 'Conectado' : 'Não conectado';
    diagnostics.databaseName = mongoose.connection.name;
    diagnostics.host = mongoose.connection.host;

    return NextResponse.json({
      success: true,
      diagnostics,
    }, { status: 200 });

  } catch (error) {
    diagnostics.connectionState = 'Falha';
    diagnostics.error = {
      name: error.name,
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      code: error.code,
    };

    return NextResponse.json({
      success: false,
      diagnostics,
    }, { status: 500 });
  } finally {
    // Fecha a conexão se estiver aberta
    if (mongoose.connection.readyState === 1) {
      await mongoose.disconnect();
    }
  }
}
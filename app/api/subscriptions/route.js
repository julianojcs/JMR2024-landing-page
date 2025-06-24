/**
 * API para gerenciar inscrições no MongoDB
 * POST /api/subscriptions - Criar nova inscrição
 */

import { MongoClient } from 'mongodb';
import { SubscriptionRecord } from '../../models/SubscriptionRecord.js';

// Configuração do MongoDB com timeouts otimizados para produção
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  connectTimeoutMS: 5000, // Reduzido de 10000 para 5000
  serverSelectionTimeoutMS: 5000, // Timeout para seleção do servidor
  maxPoolSize: 10, // Limite do pool de conexões
});

const dbName = 'jornada';
const collectionName = 'subscriptions';

/**
 * Conecta ao MongoDB (otimizado para produção)
 */
async function connectToMongoDB() {
  try {
    // Conectar com timeout curto
    await client.connect();
    return client.db(dbName).collection(collectionName);
  } catch (error) {
    console.error('❌ Erro ao conectar ao MongoDB:', error.message);
    throw new Error(`Falha na conexão MongoDB: ${error.message}`);
  }
}

/**
 * POST /api/subscriptions - Criar nova inscrição (otimizado para produção)
 */
export async function POST(request) {
  const startTime = Date.now();

  try {
    console.log('🚀 POST /api/subscriptions iniciado');

    // Timeout de 20 segundos para toda a operação
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Timeout na criação da inscrição')), 20000);
    });

    const operationPromise = async () => {
      const collection = await connectToMongoDB();
      const subscriptionData = await request.json();

      console.log('📝 Nova inscrição:', {
        cpf: subscriptionData.personalInfo?.cpf,
        email: subscriptionData.personalInfo?.email,
        finalValue: subscriptionData.financial?.finalValue
      });

      // Criar instância do SubscriptionRecord
      const subscriptionRecord = new SubscriptionRecord(subscriptionData);

      // Validar dados
      const validation = subscriptionRecord.validate();
      if (!validation.isValid) {
        return Response.json({
          success: false,
          message: 'Dados inválidos',
          errors: validation.errors
        }, { status: 400 });
      }

      // Verificar duplicação e criar/atualizar inscrição
      const productIdentifier = subscriptionRecord.generateProductIdentifier();
      const existingSubscription = await collection.findOne({
        'personalInfo.cpf': subscriptionRecord.personalInfo.cpf,
        eventYear: subscriptionRecord.eventYear,
        productIdentifier: productIdentifier
      });

      if (existingSubscription) {
        console.log('⚠️ Atualizando inscrição existente');

        const recordData = subscriptionRecord.toMongoDB();
        recordData.metadata.updatedAt = new Date();

        const updateResult = await collection.updateOne(
          { _id: existingSubscription._id },
          { $set: recordData }
        );

        return Response.json({
          success: true,
          message: 'Inscrição atualizada com sucesso',
          subscriptionId: existingSubscription.subscriptionId,
          action: 'updated',
          processingTime: Date.now() - startTime
        });
      }

      // Criar nova inscrição
      const result = await collection.insertOne(subscriptionRecord.toMongoDB());

      if (result.insertedId) {
        console.log('✅ Inscrição criada:', result.insertedId);

        return Response.json({
          success: true,
          message: 'Inscrição criada com sucesso',
          subscriptionId: subscriptionRecord.subscriptionId,
          mongoId: result.insertedId,
          action: 'created',
          processingTime: Date.now() - startTime
        }, { status: 201 });
      } else {
        throw new Error('Falha ao inserir no banco de dados');
      }
    };

    // Executar com timeout
    return await Promise.race([operationPromise(), timeoutPromise]);

  } catch (error) {
    console.error('❌ Erro ao criar inscrição:', error);
    return Response.json({
      success: false,
      message: 'Erro ao criar inscrição',
      error: error.message,
      processingTime: Date.now() - startTime
    }, { status: 500 });
  }
}

/**
 * GET /api/subscriptions - Buscar inscrições
 */
export async function GET(request) {
  try {
    const collection = await connectToMongoDB();
    const { searchParams } = new URL(request.url);

    const cpf = searchParams.get('cpf');
    const email = searchParams.get('email');
    const subscriptionId = searchParams.get('subscriptionId');
    const eventYear = searchParams.get('eventYear');

    console.log('🔍 Buscando inscrições:', { cpf, email, subscriptionId, eventYear });

    // Construir filtros de busca
    const filters = {};

    if (cpf) {
      // Remover formatação do CPF
      const cleanCpf = cpf.replace(/\D/g, '');
      filters['personalInfo.cpf'] = cleanCpf;
    }

    if (email) {
      filters['personalInfo.email'] = { $regex: new RegExp(email, 'i') };
    }

    if (subscriptionId) {
      filters.subscriptionId = subscriptionId;
    }

    if (eventYear) {
      filters.eventYear = parseInt(eventYear);
    } else {
      // Default para ano atual se não especificado
      filters.eventYear = new Date().getFullYear();
    }

    console.log('🔍 Filtros aplicados:', filters);

    // Buscar inscrições
    const subscriptions = await collection.find(filters).toArray();

    console.log(`📋 Encontradas ${subscriptions.length} inscrições`);

    // Converter para formato compatível com Asaas
    const formattedSubscriptions = subscriptions.map(sub => {
      const record = new SubscriptionRecord(sub);
      return record.toAsaasFormat();
    });

    return Response.json({
      success: true,
      count: formattedSubscriptions.length,
      data: formattedSubscriptions,
      source: 'mongodb'
    });

  } catch (error) {
    console.error('❌ Erro ao buscar inscrições:', error);
    return Response.json({
      success: false,
      message: 'Erro ao buscar inscrições',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    }, { status: 500 });
  }
}

/**
 * PUT /api/subscriptions - Atualizar inscrição
 */
export async function PUT(request) {
  try {
    const collection = await connectToMongoDB();
    const { searchParams } = new URL(request.url);
    const subscriptionId = searchParams.get('subscriptionId');
    const updateData = await request.json();

    if (!subscriptionId) {
      return Response.json({
        success: false,
        message: 'ID da inscrição é obrigatório'
      }, { status: 400 });
    }

    console.log('📝 Atualizando inscrição:', subscriptionId);

    // Adicionar timestamp de atualização
    updateData['metadata.updatedAt'] = new Date();

    const result = await collection.updateOne(
      { subscriptionId: subscriptionId },
      { $set: updateData }
    );

    if (result.modifiedCount > 0) {
      return Response.json({
        success: true,
        message: 'Inscrição atualizada com sucesso'
      });
    } else {
      return Response.json({
        success: false,
        message: 'Inscrição não encontrada'
      }, { status: 404 });
    }

  } catch (error) {
    console.error('❌ Erro ao atualizar inscrição:', error);
    return Response.json({
      success: false,
      message: 'Erro ao atualizar inscrição',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    }, { status: 500 });
  }
}


/**
 * API para buscar inscrições por CPF
 * Combina dados do Asaas e MongoDB
 * GET /api/subscriptions/by-cpf?cpf=123.456.789-00&email=test@email.com
 */

import { MongoClient } from 'mongodb';
import { SubscriptionRecord } from '../../../models/SubscriptionRecord';
import { apiKey, apiUrl } from '@/api/asaas/config';

// Configuração do MongoDB
const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/jornada';
const client = new MongoClient(uri, {
  connectTimeoutMS: 10000,
});

const dbName = 'jornada';
const collectionName = 'subscriptions';

/**
 * Conecta ao MongoDB
 */
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('✅ Conectado ao MongoDB para busca por CPF');
    return client.db(dbName).collection(collectionName);
  } catch (error) {
    console.error('❌ Erro ao conectar ao MongoDB:', error);
    throw error;
  }
}

/**
 * Buscar pagamentos no Asaas usando a API interna
 */
async function fetchAsaasPayments(cpf) {
  try {
    const cleanCpf = cpf.replace(/\D/g, '');

    // Usa a API interna que já implementa a lógica correta de buscar customer primeiro
    const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/asaas/payments?cpfCnpj=${cleanCpf}&limit=100`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      if (response.status === 404) {
        console.log('⚠️ Customer não encontrado no Asaas para CPF:', cleanCpf);
        return { data: [] };
      }
      console.error('❌ Erro na API do Asaas:', response.status, errorText);
      return { data: [] };
    }

    const data = await response.json();
    console.log(`📋 Encontrados ${data.data?.length || 0} pagamentos no Asaas para CPF:`, cleanCpf);

    return data;
  } catch (error) {
    console.error('❌ Erro ao buscar pagamentos no Asaas:', error);
    return { data: [] };
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const cpf = searchParams.get('cpf');
    const email = searchParams.get('email');
    const eventYear = searchParams.get('eventYear');

    if (!cpf) {
      return Response.json({
        success: false,
        message: 'CPF é obrigatório'
      }, { status: 400 });
    }

    console.log('🔍 Buscando inscrições combinadas para CPF:', cpf);

    // Limpar CPF para busca
    const cleanCpf = cpf.replace(/\D/g, '');

    // Buscar no MongoDB e Asaas em paralelo
    const [mongoCollection, asaasPayments] = await Promise.all([
      connectToMongoDB(),
      fetchAsaasPayments(cpf)
    ]);

    // Buscar inscrições no MongoDB
    const mongoFilters = {
      'personalInfo.cpf': cleanCpf
    };

    if (eventYear) {
      mongoFilters.eventYear = parseInt(eventYear);
    }

    const mongoSubscriptions = await mongoCollection.find(mongoFilters).toArray();
    console.log(`📋 Encontradas ${mongoSubscriptions.length} inscrições no MongoDB`);

    // Converter inscrições do MongoDB para formato padrão
    const formattedMongoSubscriptions = mongoSubscriptions.map(sub => {
      const record = new SubscriptionRecord(sub);
      return {
        ...record.toAsaasFormat(),
        source: 'mongodb',
        isFree: record.financial.finalValue === 0,
        couponApplied: record.coupon.applied
      };
    });

    // Formatar pagamentos do Asaas
    const formattedAsaasPayments = (asaasPayments.data || []).map(payment => ({
      ...payment,
      source: 'asaas',
      isFree: false,
      couponApplied: false
    }));

    // Combinar resultados, removendo duplicatas
    const allSubscriptions = [...formattedMongoSubscriptions];

    // Adicionar pagamentos do Asaas que não estão no MongoDB
    formattedAsaasPayments.forEach(asaasPayment => {
      const existsInMongo = formattedMongoSubscriptions.some(mongoSub =>
        mongoSub.id === asaasPayment.id ||
        mongoSub.invoiceNumber === asaasPayment.invoiceNumber
      );

      if (!existsInMongo) {
        allSubscriptions.push(asaasPayment);
      }
    });

    // Verificar email se fornecido
    if (email && allSubscriptions.length > 0) {
      // Para inscrições do MongoDB, verificar se o email bate
      const mongoSubscriptionsWithEmail = mongoSubscriptions.filter(sub =>
        sub.personalInfo.email.toLowerCase() === email.toLowerCase()
      );

      if (mongoSubscriptionsWithEmail.length === 0) {
        // Se forneceu email mas não bate, verificar no Asaas através da API de customers
        try {
          const customerResponse = await fetch(`${apiUrl}/customers?cpfCnpj=${cleanCpf}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'access_token': apiKey
            }
          });

          if (customerResponse.ok) {
            const customerData = await customerResponse.json();
            const customer = customerData.data?.[0];

            if (customer && customer.email.toLowerCase() !== email.toLowerCase()) {
              return Response.json({
                success: false,
                message: 'O e-mail informado não corresponde ao cadastrado para este CPF.'
              }, { status: 400 });
            }
          }
        } catch (error) {
          console.warn('⚠️ Erro ao verificar email no Asaas:', error);
        }
      }
    }

    // Ordenar por data de criação (mais recente primeiro)
    allSubscriptions.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated));

    console.log(`📋 Total de inscrições encontradas: ${allSubscriptions.length}`);

    return Response.json({
      success: true,
      count: allSubscriptions.length,
      data: allSubscriptions,
      sources: {
        mongodb: formattedMongoSubscriptions.length,
        asaas: formattedAsaasPayments.length
      }
    });

  } catch (error) {
    console.error('❌ Erro ao buscar inscrições por CPF:', error);
    return Response.json({
      success: false,
      message: 'Erro ao buscar inscrições',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    }, { status: 500 });
  }
}

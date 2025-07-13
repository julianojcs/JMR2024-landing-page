/**
 * API para gerenciar inscrições no MongoDB - Modelo de Produção
 * Consome dados reais da coleção "subscriptions" usando estrutura de produção
 */

import { MongoClient } from 'mongodb';

// Configuração do MongoDB com timeouts otimizados para produção
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  connectTimeoutMS: 5000,
  serverSelectionTimeoutMS: 5000,
  maxPoolSize: 10,
});

const dbName = 'jornada';
const collectionName = 'subscriptions';

/**
 * Conecta ao MongoDB (otimizado para produção)
 */
async function connectToMongoDB() {
  try {
    await client.connect();
    return client.db(dbName).collection(collectionName);
  } catch (error) {
    console.error('❌ Erro ao conectar ao MongoDB:', error.message);
    throw new Error(`Falha na conexão MongoDB: ${error.message}`);
  }
}

/**
 * GET /api/subscriptions - Buscar inscrições do modelo de produção
 */
export async function GET(request) {
  try {
    const collection = await connectToMongoDB();
    const { searchParams } = new URL(request.url);

    // Parâmetros de filtro
    const discountValue = searchParams.get('discountValue');
    const couponCode = searchParams.get('couponCode');
    const search = searchParams.get('search');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const onlyCoupons = searchParams.get('onlyCoupons') === 'true';
    const onlyImported = searchParams.get('onlyImported') === 'true';
    const category = searchParams.get('category');
    const product = searchParams.get('product');

    console.log('🔍 Buscando inscrições (modelo produção):', {
      discountValue,
      couponCode,
      search,
      onlyCoupons,
      onlyImported,
      category,
      product
    });

    // Construir filtros baseados na estrutura real de produção
    const filters = {};
    const orConditions = [];

    // PRIMEIRO: Filtro de busca por nome ou CPF (prioridade máxima)
    if (search) {
      const searchRegex = { $regex: new RegExp(search, 'i') };
      const cleanSearchCpf = search.replace(/\D/g, '');
      orConditions.push(
        { 'personalInfo.fullName': searchRegex },
        { 'personalInfo.cpf': cleanSearchCpf }
      );
    }

    // Filtrar apenas inscrições com cupons aplicados
    if (onlyCoupons) {
      filters['coupon.applied'] = true;
    }

    // Filtrar apenas inscrições importadas do Asaas
    if (onlyImported) {
      const importedConditions = [
        { 'asaasPaymentId': { $exists: true, $ne: null } },
        { '_importData.importScript': { $exists: true } }
      ];

      if (orConditions.length > 0) {
        // Combinar busca textual com filtro importados usando AND
        filters.$and = [
          { $or: orConditions },
          { $or: importedConditions }
        ];
        orConditions.length = 0; // Limpar array pois já foi usado
      } else {
        orConditions.push(...importedConditions);
      }
    }

    // Filtro por categoria
    if (category && category !== 'all') {
      filters['category.title'] = category;
    }

    // Filtro por produto
    if (product && product !== 'all') {
      const productConditions = [
        { 'selectedItems.journey.title': product },
        { 'selectedItems.workshops.title': product },
        { 'selectedItems.courses.title': product },
        { 'selectedItems.dayUse.title': product }
      ];

      if (orConditions.length > 0) {
        // Combinar com condições existentes usando AND
        if (filters.$and) {
          filters.$and.push({ $or: productConditions });
        } else {
          filters.$and = [
            { $or: orConditions },
            { $or: productConditions }
          ];
        }
        orConditions.length = 0; // Limpar array pois já foi usado
      } else {
        orConditions.push(...productConditions);
      }
    }

    // Filtro por código específico do cupom
    if (couponCode && couponCode !== 'all') {
      filters['coupon.code'] = couponCode;
    }

    // Se ainda há condições OR pendentes, adicionar ao filtro
    if (orConditions.length > 0) {
      if (filters.$and) {
        filters.$and.push({ $or: orConditions });
      } else {
        filters.$or = orConditions;
      }
    }

    // Filtro por data de criação
    if (startDate || endDate) {
      filters['metadata.createdAt'] = {};
      if (startDate) {
        filters['metadata.createdAt'].$gte = new Date(startDate);
      }
      if (endDate) {
        filters['metadata.createdAt'].$lte = new Date(endDate + 'T23:59:59');
      }
    }

    // Log dos filtros construídos para debug
    console.log('🔍 Filtros MongoDB construídos:', JSON.stringify(filters, null, 2));

    // Buscar inscrições com paginação
    const skip = (page - 1) * limit;

    // Se há filtro de desconto, buscar todos primeiro e filtrar
    let matchStage = filters;
    if (discountValue && discountValue !== 'all' && onlyCoupons) {
      // Adicionar filtro de desconto diretamente no MongoDB
      if (discountValue.includes('%')) {
        const percentValue = parseFloat(discountValue.replace('%', ''));
        matchStage['coupon.discountType'] = 'PERCENTAGE';
        matchStage['coupon.discountValue'] = percentValue;
      } else if (discountValue.startsWith('R$')) {
        const moneyValue = parseFloat(discountValue.replace('R$', ''));
        matchStage['coupon.discountType'] = 'FIXED';
        matchStage['coupon.discountValue'] = moneyValue;
      }
    }

    const total = await collection.countDocuments(matchStage);

    // Para paginação, primeiro expandir todos os registros para obter o total real
    const allSubscriptionsForTotal = await collection.find(matchStage)
      .sort({ 'personalInfo.fullName': 1 })
      .toArray();

    // Expandir todos os registros para calcular o total real com estrutura completa
    let allExpandedForTotal = [];
    allSubscriptionsForTotal.forEach(sub => {
      const baseSubscription = {
        id: sub._id,
        subscriptionId: sub.subscriptionId,
        name: sub.personalInfo?.fullName || 'Nome não informado',
        email: sub.personalInfo?.email || '',
        cpf: sub.personalInfo?.cpf || '',
        phone: sub.personalInfo?.phone || '',
        value: sub.financial?.originalValue || 0,
        finalValue: sub.financial?.finalValue || 0,
        discountAmount: sub.financial?.discountValue || 0,
        status: sub.status?.registration || 'PENDING',
        paymentStatus: sub.status?.payment || 'PENDING',
        paymentMethod: sub.payment?.method || 'NOT_DEFINED',
        createdAt: sub.metadata?.createdAt || new Date(),
        updatedAt: sub.metadata?.updatedAt || new Date(),
        eventName: sub.eventName || '',
        eventYear: sub.eventYear || new Date().getFullYear(),
        // Dados do cupom (se aplicado)
        appliedCoupon: sub.coupon?.applied ? {
          code: sub.coupon.code,
          name: sub.coupon.name,
          discountType: sub.coupon.discountType,
          discountValue: sub.coupon.discountValue,
          totalDiscount: sub.coupon.totalDiscount
        } : null,
        // Dados originais para estatísticas
        coupon: sub.coupon,
        asaasPaymentId: sub.asaasPaymentId || null,
        _importData: sub._importData || null,
        // Itens selecionados (original)
        selectedItems: {
          journey: sub.selectedItems?.journey,
          workshops: sub.selectedItems?.workshops || [],
          courses: sub.selectedItems?.courses || [],
          dayUse: sub.selectedItems?.dayUse
        },
        category: sub.category || null
      };
      const expandedRecords = expandSubscriptionByProducts(baseSubscription);
      allExpandedForTotal.push(...expandedRecords);
    });

    const totalExpanded = allExpandedForTotal.length;

    // Agora buscar apenas a página atual
    const subscriptions = await collection.find(matchStage)
      .sort({ 'personalInfo.fullName': 1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    // Função para extrair valor numérico de string de preço (ex: "R$ 355" -> 355)
    function extractPriceValue(priceValue) {
      // Se não há valor, retorna 0
      if (!priceValue && priceValue !== 0) return 0;

      // Se já é um número, retorna ele
      if (typeof priceValue === 'number') return priceValue;

      // Se é string, remove formatação e converte para número
      if (typeof priceValue === 'string') {
        const cleanPrice = priceValue.replace(/[R$\s\.,]/g, '');
        return parseInt(cleanPrice) || 0;
      }

      // Para outros tipos, tenta converter para número
      return parseInt(priceValue) || 0;
    }

    // Função para expandir registros com múltiplos produtos
    function expandSubscriptionByProducts(subscription) {
      const products = [];
      const selectedItems = subscription.selectedItems || {};

      // Verificar journey
      if (selectedItems.journey && selectedItems.journey.title) {
        const journeyPrice = extractPriceValue(selectedItems.journey.price?.value);
        products.push({
          type: 'journey',
          data: selectedItems.journey,
          title: selectedItems.journey.title,
          price: journeyPrice
        });
      }

      // Verificar workshops (array)
      if (selectedItems.workshops && Array.isArray(selectedItems.workshops) && selectedItems.workshops.length > 0) {
        selectedItems.workshops.forEach(workshop => {
          if (workshop && workshop.title) {
            const workshopPrice = extractPriceValue(workshop.price?.value);
            products.push({
              type: 'workshops',
              data: workshop,
              title: workshop.title,
              price: workshopPrice
            });
          }
        });
      }

      // Verificar courses (array)
      if (selectedItems.courses && Array.isArray(selectedItems.courses) && selectedItems.courses.length > 0) {
        selectedItems.courses.forEach(course => {
          if (course && course.title) {
            const coursePrice = extractPriceValue(course.price?.value);
            products.push({
              type: 'courses',
              data: course,
              title: course.title,
              price: coursePrice
            });
          }
        });
      }

      // Verificar dayUse
      if (selectedItems.dayUse && selectedItems.dayUse.title) {
        const dayUsePrice = extractPriceValue(selectedItems.dayUse.price?.value);
        products.push({
          type: 'dayUse',
          data: selectedItems.dayUse,
          title: selectedItems.dayUse.title,
          price: dayUsePrice
        });
      }

      // Se não há produtos, retornar um registro vazio
      if (products.length === 0) {
        return [{
          ...subscription,
          currentProduct: null,
          productType: null,
          productTitle: 'Nenhum produto selecionado',
          value: 0,
          finalValue: 0
        }];
      }

      // Criar um registro para cada produto com valor individual
      return products.map(product => ({
        ...subscription,
        currentProduct: product.data,
        productType: product.type,
        productTitle: product.title,
        // Ajustar valores para refletir apenas o produto atual
        value: product.price,
        finalValue: product.price, // Pode ser ajustado se houver desconto específico
        // Ajustar selectedItems para mostrar apenas o produto atual
        selectedItems: {
          journey: product.type === 'journey' ? product.data : null,
          workshops: product.type === 'workshops' ? [product.data] : [],
          courses: product.type === 'courses' ? [product.data] : [],
          dayUse: product.type === 'dayUse' ? product.data : null
        }
      }));
    }

    // Converter para formato padronizado da listagem e expandir por produtos
    let formattedSubscriptions = [];

    subscriptions.forEach(sub => {
      const baseSubscription = {
        id: sub._id,
        subscriptionId: sub.subscriptionId,
        name: sub.personalInfo?.fullName || 'Nome não informado',
        email: sub.personalInfo?.email || '',
        cpf: sub.personalInfo?.cpf || '',
        phone: sub.personalInfo?.phone || '',
        value: sub.financial?.originalValue || 0,
        finalValue: sub.financial?.finalValue || 0,
        discountAmount: sub.financial?.discountValue || 0,
        status: sub.status?.registration || 'PENDING',
        paymentStatus: sub.status?.payment || 'PENDING',
        paymentMethod: sub.payment?.method || 'NOT_DEFINED',
        createdAt: sub.metadata?.createdAt || new Date(),
        updatedAt: sub.metadata?.updatedAt || new Date(),
        eventName: sub.eventName || '',
        eventYear: sub.eventYear || new Date().getFullYear(),
        // Dados do cupom (se aplicado)
        appliedCoupon: sub.coupon?.applied ? {
          code: sub.coupon.code,
          name: sub.coupon.name,
          discountType: sub.coupon.discountType,
          discountValue: sub.coupon.discountValue,
          totalDiscount: sub.coupon.totalDiscount
        } : null,
        // Itens selecionados (original)
        selectedItems: {
          journey: sub.selectedItems?.journey,
          workshops: sub.selectedItems?.workshops || [],
          courses: sub.selectedItems?.courses || [],
          dayUse: sub.selectedItems?.dayUse
        },
        category: sub.category || null,
        // Dados de importação do Asaas (se existir)
        asaasPaymentId: sub.asaasPaymentId || null,
        _importData: sub._importData || null
      };

      // Expandir por produtos
      const expandedRecords = expandSubscriptionByProducts(baseSubscription);
      formattedSubscriptions.push(...expandedRecords);
    });

    console.log(`📋 Encontradas ${subscriptions.length} inscrições originais, expandidas para ${formattedSubscriptions.length} registros (total expandido: ${totalExpanded})`);

    // O filtro de desconto já foi aplicado no MongoDB, não precisa aplicar novamente

    // Calcular estatísticas baseadas nos registros expandidos
    let stats = null;

    // Usar os registros já expandidos para calcular estatísticas
    stats = {
      total: totalExpanded,
      totalOriginal: allSubscriptionsForTotal.length, // Total de inscrições originais
      fullDiscountCount: allExpandedForTotal.filter(s =>
        s.coupon?.applied && s.coupon?.discountValue >= 100
      ).length,
      fullDiscountOriginal: allSubscriptionsForTotal.filter(s =>
        s.coupon?.applied && s.coupon?.discountValue >= 100
      ).length,
      partialDiscountCount: allExpandedForTotal.filter(s =>
        s.coupon?.applied && s.coupon?.discountValue > 0 && s.coupon?.discountValue < 100
      ).length,
      partialDiscountOriginal: allSubscriptionsForTotal.filter(s =>
        s.coupon?.applied && s.coupon?.discountValue > 0 && s.coupon?.discountValue < 100
      ).length,
      totalDiscountAmount: allExpandedForTotal.reduce((sum, s) =>
        sum + (s.coupon?.totalDiscount || 0), 0
      ),
      importedCount: allExpandedForTotal.filter(s =>
        s.asaasPaymentId || s._importData?.importScript
      ).length,
      importedOriginal: allSubscriptionsForTotal.filter(s =>
        s.asaasPaymentId || s._importData?.importScript
      ).length,
      couponCount: allExpandedForTotal.filter(s =>
        s.coupon?.applied
      ).length,
      couponOriginal: allSubscriptionsForTotal.filter(s =>
        s.coupon?.applied
      ).length,
      newCount: allExpandedForTotal.filter(s =>
        !s.coupon?.applied && !s.asaasPaymentId && !s._importData?.importScript
      ).length,
      newOriginal: allSubscriptionsForTotal.filter(s =>
        !s.coupon?.applied && !s.asaasPaymentId && !s._importData?.importScript
      ).length,
      // Estatísticas de presença
      attendanceCount: allExpandedForTotal.filter(s => {
        const items = s.selectedItems || {};
        return items.journey?.attended ||
               items.dayUse?.attended ||
               items.workshops?.some(w => w.attended) ||
               items.courses?.some(c => c.attended);
      }).length,
      absentCount: allExpandedForTotal.filter(s => {
        const items = s.selectedItems || {};
        return !(items.journey?.attended ||
                items.dayUse?.attended ||
                items.workshops?.some(w => w.attended) ||
                items.courses?.some(c => c.attended));
      }).length,
      attendanceOriginal: allSubscriptionsForTotal.filter(s => {
        const items = s.selectedItems || {};
        return items.journey?.attended ||
               items.dayUse?.attended ||
               items.workshops?.some(w => w.attended) ||
               items.courses?.some(c => c.attended);
      }).length,
      absentOriginal: allSubscriptionsForTotal.filter(s => {
        const items = s.selectedItems || {};
        return !(items.journey?.attended ||
                items.dayUse?.attended ||
                items.workshops?.some(w => w.attended) ||
                items.courses?.some(c => c.attended));
      }).length
    };

    const response = {
      success: true,
      count: formattedSubscriptions.length,
      data: formattedSubscriptions,
      source: 'mongodb-production',
      model: 'Subscription (Production)'
    };

    // Adicionar informações de paginação e estatísticas
    response.pagination = {
      page,
      limit,
      total: totalExpanded,
      totalPages: Math.ceil(totalExpanded / limit),
      hasNext: page < Math.ceil(totalExpanded / limit),
      hasPrev: page > 1
    };
    response.stats = stats;

    return Response.json(response);

  } catch (error) {
    console.error('❌ Erro ao buscar inscrições:', error);
    return Response.json({
      success: false,
      message: 'Erro ao buscar inscrições',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    }, { status: 500 });
  }
}

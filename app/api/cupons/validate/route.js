import { useMongoDB } from '../../../hooks/useMongoDB.js';
import Cupom from '../../../models/mongo/Cupom.js';

// POST - Validar cupom
export async function POST(request) {
  try {
    await useMongoDB();

    const { code, year, category, products, orderValue } = await request.json();

    // Buscar o cupom pelo código
    const cupom = await Cupom.findOne({ code });

    if (!cupom) {
      return Response.json(
        { valid: false, message: 'Cupom não encontrado' },
        { status: 404 }
      );
    }

    // Verificar se o cupom está ativo
    if (!cupom.active) {
      return Response.json(
        { valid: false, message: 'Cupom inativo' },
        { status: 400 }
      );
    }

    // Verificar data de validade
    const now = new Date();
    if (cupom.validity?.from && new Date(cupom.validity.from) > now) {
      return Response.json(
        { valid: false, message: 'Cupom ainda não é válido' },
        { status: 400 }
      );
    }

    if (cupom.validity?.until && new Date(cupom.validity.until) < now) {
      return Response.json(
        { valid: false, message: 'Cupom expirado' },
        { status: 400 }
      );
    }

    // Verificar ano do evento
    if (cupom.year && cupom.year !== year && cupom.year !== year.toString()) {
      return Response.json(
        { valid: false, message: 'Cupom não válido para este ano' },
        { status: 400 }
      );
    }

    // Verificar categorias permitidas
    if (cupom.restrictions?.applicableCategories && cupom.restrictions.applicableCategories.length > 0) {
      if (!cupom.restrictions.applicableCategories.includes(0) &&
          !cupom.restrictions.applicableCategories.includes(category)) {
        return Response.json(
          { valid: false, message: 'Cupom não válido para sua categoria' },
          { status: 400 }
        );
      }
    }

    // Verificar produtos aplicáveis
    if (cupom.restrictions?.applicableProducts && cupom.restrictions.applicableProducts.length > 0) {
      const hasValidProduct = cupom.restrictions.applicableProducts.includes('ALL') ||
        products.some(product => cupom.restrictions.applicableProducts.includes(product));

      if (!hasValidProduct) {
        return Response.json(
          { valid: false, message: 'Cupom não válido para os produtos selecionados' },
          { status: 400 }
        );
      }
    }

    // Verificar valor mínimo do pedido
    if (cupom.restrictions?.minOrderValue && orderValue < cupom.restrictions.minOrderValue) {
      const minValue = Number(cupom.restrictions.minOrderValue);
      return Response.json(
        {
          valid: false,
          message: `Valor mínimo do pedido deve ser R$ ${isNaN(minValue) ? cupom.restrictions.minOrderValue : minValue.toFixed(2)}`
        },
        { status: 400 }
      );
    }

    // Verificar limite de uso
    if (cupom.usage?.limit && cupom.usage.used >= cupom.usage.limit) {
      return Response.json(
        { valid: false, message: 'Cupom esgotado' },
        { status: 400 }
      );
    }

    // Cupom válido - retornar dados do cupom
    return Response.json({
      valid: true,
      coupon: {
        _id: cupom._id,
        code: cupom.code,
        name: cupom.name,
        discount: cupom.discount,
        description: cupom.description || `Desconto de ${cupom.discount.type === 'PERCENTAGE' ? cupom.discount.value + '%' : 'R$ ' + (isNaN(Number(cupom.discount.value)) ? cupom.discount.value : Number(cupom.discount.value).toFixed(2))}`
      },
      message: 'Cupom aplicado com sucesso!'
    });

  } catch (error) {
    console.error('Erro ao validar cupom:', error);
    return Response.json(
      { valid: false, message: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

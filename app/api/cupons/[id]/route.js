// API para operações específicas em cupons
import { NextResponse } from 'next/server';
import Cupom from '../../../models/mongo/Cupom.js';
import { useMongoDB } from '../../../hooks/useMongoDB.js';

// Função utilitária para ajustar datas com timezone brasileiro (UTC-3)
const adjustDateForBrazilTimezone = (dateString, isEndDate = false) => {
  // Criar data no timezone de Brasília
  const date = new Date(dateString + 'T00:00:00-03:00');

  if (isEndDate) {
    // Data fim: 23:59:59 no timezone brasileiro
    const endDate = new Date(dateString + 'T23:59:59-03:00');
    return endDate;
  } else {
    // Data início: 00:00:00 no timezone brasileiro
    return date;
  }
};

// GET - Buscar cupom específico
export async function GET(request, { params }) {
  try {
    await useMongoDB();

    const { id } = params;
    const cupom = await Cupom.findById(id);

    if (!cupom) {
      return NextResponse.json({
        success: false,
        message: 'Cupom não encontrado'
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: cupom
    });

  } catch (error) {
    console.error('Erro ao buscar cupom:', error);
    return NextResponse.json({
      success: false,
      message: 'Erro interno do servidor'
    }, { status: 500 });
  }
}

// PUT - Atualizar cupom
export async function PUT(request, { params }) {
  try {
    await useMongoDB();

    const { id } = params;
    const data = await request.json();

    const cupom = await Cupom.findById(id);
    if (!cupom) {
      return NextResponse.json({
        success: false,
        message: 'Cupom não encontrado'
      }, { status: 404 });
    }

    // Preparar objeto de atualização
    const updateData = {};

    // Campos básicos (exceto code que não deve ser alterado)
    if (data.name !== undefined) updateData.name = data.name;
    if (data.year !== undefined) updateData.year = data.year;
    if (data.active !== undefined) updateData.active = data.active;

    // Campos de desconto
    if (data.discountType !== undefined) updateData['discount.type'] = data.discountType;
    if (data.discountValue !== undefined) updateData['discount.value'] = parseFloat(data.discountValue);
    if (data.maxAmount !== undefined) {
      updateData['discount.maxAmount'] = data.maxAmount ? parseFloat(data.maxAmount) : null;
    }

    // Campos de validade
    if (data.validFrom !== undefined) updateData['validity.from'] = adjustDateForBrazilTimezone(data.validFrom, false);
    if (data.validUntil !== undefined) updateData['validity.until'] = adjustDateForBrazilTimezone(data.validUntil, true);

    // Campos de restrições
    if (data.minOrderValue !== undefined) {
      updateData['restrictions.minOrderValue'] = parseFloat(data.minOrderValue);
    }
    if (data.applicableCategories !== undefined) {
      updateData['restrictions.applicableCategories'] = data.applicableCategories;
    }
    if (data.applicableProducts !== undefined) {
      updateData['restrictions.applicableProducts'] = data.applicableProducts;
    }

    // Campos de uso
    if (data.limitPerUser !== undefined) {
      updateData['usage.limitPerUser'] = parseInt(data.limitPerUser);
    }

    // Lógica especial para usageLimit (limite total de usos)
    if (data.usageLimit !== undefined) {
      const newLimit = data.usageLimit ? parseInt(data.usageLimit) : null;
      const currentUsed = cupom.usage.used || 0;

      // Se o novo limite for menor que a quantidade já utilizada,
      // o limite deve assumir a quantidade já utilizada
      if (newLimit !== null && newLimit < currentUsed) {
        updateData['usage.limit'] = currentUsed;
      } else {
        updateData['usage.limit'] = newLimit;
      }
    }

    // Atualizar cupom
    const updatedCupom = await Cupom.findByIdAndUpdate(id, updateData, { new: true });

    return NextResponse.json({
      success: true,
      message: 'Cupom atualizado com sucesso',
      data: updatedCupom
    });

  } catch (error) {
    console.error('Erro ao atualizar cupom:', error);
    return NextResponse.json({
      success: false,
      message: 'Erro interno do servidor'
    }, { status: 500 });
  }
}

// DELETE - Deletar cupom (soft delete)
export async function DELETE(request, { params }) {
  try {
    await useMongoDB();

    const { id } = params;

    const cupom = await Cupom.findByIdAndUpdate(id, {
      active: false
    }, { new: true });

    if (!cupom) {
      return NextResponse.json({
        success: false,
        message: 'Cupom não encontrado'
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: 'Cupom desativado com sucesso'
    });

  } catch (error) {
    console.error('Erro ao deletar cupom:', error);
    return NextResponse.json({
      success: false,
      message: 'Erro interno do servidor'
    }, { status: 500 });
  }
}

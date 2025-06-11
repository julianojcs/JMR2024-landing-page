import { useMongoDB } from '../../../hooks/useMongoDB.js';
import Cupom from '../../../models/mongo/Cupom.js';

// POST - Usar cupom (incrementar contador de uso e registrar uso)
export async function POST(request) {
  try {
    await useMongoDB();

    const { couponId, cpf, discountAmount } = await request.json();

    if (!couponId) {
      return Response.json(
        { success: false, message: 'ID do cupom é obrigatório' },
        { status: 400 }
      );
    }

    if (!cpf) {
      return Response.json(
        { success: false, message: 'CPF do usuário é obrigatório' },
        { status: 400 }
      );
    }

    if (discountAmount === undefined || discountAmount === null) {
      return Response.json(
        { success: false, message: 'Valor do desconto é obrigatório' },
        { status: 400 }
      );
    }

    // Buscar o cupom
    const cupom = await Cupom.findById(couponId);

    if (!cupom) {
      return Response.json(
        { success: false, message: 'Cupom não encontrado' },
        { status: 404 }
      );
    }

    // Sanitizar CPF (apenas números)
    const sanitizedCpf = cpf.replace(/\D/g, '');

    // Verificar se o cupom ainda está válido (incluindo limite total)
    if (!cupom.isValid) {
      // Verificar especificamente se é por limite total de usos
      if (cupom.usage.limit !== null && cupom.usage.used >= cupom.usage.limit) {
        return Response.json(
          { success: false, message: 'Este cupom já atingiu seu limite máximo de usos' },
          { status: 400 }
        );
      }
      // Outros motivos de invalidade (expirado, inativo, etc.)
      return Response.json(
        { success: false, message: 'Cupom não está válido para uso' },
        { status: 400 }
      );
    }

    // Verificar limite por usuário específico
    if (cupom.usage.limitPerUser !== null) {
      const userUsages = cupom.usage.usedBy.filter(usage => usage.cpf === sanitizedCpf);
      if (userUsages.length >= cupom.usage.limitPerUser) {
        return Response.json(
          { success: false, message: 'Usuário já atingiu o limite de uso deste cupom' },
          { status: 400 }
        );
      }
    }

    // Registrar o uso do cupom usando o método do model
    await cupom.recordUsage(sanitizedCpf, discountAmount);

    return Response.json({
      success: true,
      message: 'Cupom utilizado com sucesso',
      usageCount: cupom.usage.used,
      discountAmount
    });

  } catch (error) {
    console.error('Erro ao usar cupom:', error);
    return Response.json(
      { success: false, message: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

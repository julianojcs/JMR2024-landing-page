/**
 * API para gerenciar presença e controle de attendance
 * Permite marcar presença geral e por produto específico
 */

import { MongoClient, ObjectId } from 'mongodb';

// Configuração do MongoDB
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  connectTimeoutMS: 5000,
  serverSelectionTimeoutMS: 5000,
  maxPoolSize: 10,
});

const dbName = 'jornada';
const collectionName = 'subscriptions';

/**
 * Conecta ao MongoDB
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
 * POST /api/attendance - Marcar presença
 */
export async function POST(request) {
  try {
    const { subscriptionId, type, itemType, itemIndex, checkedBy, notes } = await request.json();

    if (!subscriptionId) {
      return Response.json({
        success: false,
        message: 'ID da inscrição é obrigatório'
      }, { status: 400 });
    }

    const collection = await connectToMongoDB();
    const now = new Date().toISOString();

    let updateQuery = {};

    if (type === 'general') {
      // Marcar presença geral
      updateQuery = {
        $set: {
          'attendance.present': true,
          'attendance.checkedInAt': now,
          'attendance.checkedInBy': checkedBy || 'system',
          'attendance.notes': notes || ''
        }
      };
    } else if (type === 'item' && itemType) {
      // Marcar presença para item específico
      if (itemType === 'journey') {
        updateQuery = {
          $set: {
            'selectedItems.journey.attended': true,
            'selectedItems.journey.attendedAt': now,
            'selectedItems.journey.attendedBy': checkedBy || 'system'
          }
        };
      } else if (itemType === 'dayUse') {
        updateQuery = {
          $set: {
            'selectedItems.dayUse.attended': true,
            'selectedItems.dayUse.attendedAt': now,
            'selectedItems.dayUse.attendedBy': checkedBy || 'system'
          }
        };
      } else if (itemType === 'workshops' && itemIndex !== undefined) {
        updateQuery = {
          $set: {
            [`selectedItems.workshops.${itemIndex}.attended`]: true,
            [`selectedItems.workshops.${itemIndex}.attendedAt`]: now,
            [`selectedItems.workshops.${itemIndex}.attendedBy`]: checkedBy || 'system'
          }
        };
      } else if (itemType === 'courses' && itemIndex !== undefined) {
        updateQuery = {
          $set: {
            [`selectedItems.courses.${itemIndex}.attended`]: true,
            [`selectedItems.courses.${itemIndex}.attendedAt`]: now,
            [`selectedItems.courses.${itemIndex}.attendedBy`]: checkedBy || 'system'
          }
        };
      } else {
        return Response.json({
          success: false,
          message: 'Tipo de item inválido ou índice não fornecido'
        }, { status: 400 });
      }
    } else {
      return Response.json({
        success: false,
        message: 'Tipo de marcação inválido'
      }, { status: 400 });
    }

    const result = await collection.updateOne(
      { _id: new ObjectId(subscriptionId) },
      updateQuery
    );

    if (result.matchedCount === 0) {
      return Response.json({
        success: false,
        message: 'Inscrição não encontrada'
      }, { status: 404 });
    }

    return Response.json({
      success: true,
      message: type === 'general' ? 'Presença geral marcada com sucesso' : 'Presença do item marcada com sucesso',
      data: {
        subscriptionId,
        type,
        itemType,
        itemIndex,
        markedAt: now,
        markedBy: checkedBy || 'system'
      }
    });

  } catch (error) {
    console.error('❌ Erro ao marcar presença:', error);
    return Response.json({
      success: false,
      message: 'Erro ao marcar presença',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    }, { status: 500 });
  }
}

/**
 * DELETE /api/attendance - Desmarcar presença
 */
export async function DELETE(request) {
  try {
    const { subscriptionId, type, itemType, itemIndex } = await request.json();

    if (!subscriptionId) {
      return Response.json({
        success: false,
        message: 'ID da inscrição é obrigatório'
      }, { status: 400 });
    }

    const collection = await connectToMongoDB();

    let updateQuery = {};

    if (type === 'general') {
      // Desmarcar presença geral
      updateQuery = {
        $set: {
          'attendance.present': false,
          'attendance.checkedInAt': null,
          'attendance.checkedInBy': null,
          'attendance.notes': ''
        }
      };
    } else if (type === 'item' && itemType) {
      // Desmarcar presença para item específico
      if (itemType === 'journey') {
        updateQuery = {
          $set: {
            'selectedItems.journey.attended': false,
            'selectedItems.journey.attendedAt': null,
            'selectedItems.journey.attendedBy': null
          }
        };
      } else if (itemType === 'dayUse') {
        updateQuery = {
          $set: {
            'selectedItems.dayUse.attended': false,
            'selectedItems.dayUse.attendedAt': null,
            'selectedItems.dayUse.attendedBy': null
          }
        };
      } else if (itemType === 'workshops' && itemIndex !== undefined) {
        updateQuery = {
          $set: {
            [`selectedItems.workshops.${itemIndex}.attended`]: false,
            [`selectedItems.workshops.${itemIndex}.attendedAt`]: null,
            [`selectedItems.workshops.${itemIndex}.attendedBy`]: null
          }
        };
      } else if (itemType === 'courses' && itemIndex !== undefined) {
        updateQuery = {
          $set: {
            [`selectedItems.courses.${itemIndex}.attended`]: false,
            [`selectedItems.courses.${itemIndex}.attendedAt`]: null,
            [`selectedItems.courses.${itemIndex}.attendedBy`]: null
          }
        };
      } else {
        return Response.json({
          success: false,
          message: 'Tipo de item inválido ou índice não fornecido'
        }, { status: 400 });
      }
    } else {
      return Response.json({
        success: false,
        message: 'Tipo de desmarcação inválido'
      }, { status: 400 });
    }

    const result = await collection.updateOne(
      { _id: new ObjectId(subscriptionId) },
      updateQuery
    );

    if (result.matchedCount === 0) {
      return Response.json({
        success: false,
        message: 'Inscrição não encontrada'
      }, { status: 404 });
    }

    return Response.json({
      success: true,
      message: type === 'general' ? 'Presença geral desmarcada com sucesso' : 'Presença do item desmarcada com sucesso',
      data: {
        subscriptionId,
        type,
        itemType,
        itemIndex,
        unmarkedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('❌ Erro ao desmarcar presença:', error);
    return Response.json({
      success: false,
      message: 'Erro ao desmarcar presença',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    }, { status: 500 });
  }
}

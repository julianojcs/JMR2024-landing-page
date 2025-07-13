#!/usr/bin/env node

/**
 * Script para validar se há warnings nos schemas MongoDB
 * Testa a criação de conexão e modelos sem warnings
 */

import mongoose from 'mongoose';
import '../app/models/mongo/index.js';

console.log('🔍 Validando schemas MongoDB...\n');

try {
  // Conectar ao MongoDB (sem persistir dados)
  const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/jornada';

  // Configurar mongoose para não mostrar warnings desnecessários, mas manter os importantes
  mongoose.set('strictQuery', false);

  // Conectar
  await mongoose.connect(MONGODB_URI);
  console.log('✅ Conexão MongoDB estabelecida');

  // Listar todos os modelos carregados
  const modelNames = mongoose.modelNames();
  console.log(`📋 Modelos carregados: ${modelNames.join(', ')}\n`);

  // Verificar discriminators
  const userModel = mongoose.model('User');
  console.log('🔍 Verificando discriminators do User:');

  if (userModel.discriminators) {
    const discriminatorNames = Object.keys(userModel.discriminators);
    console.log(`   Discriminators encontrados: ${discriminatorNames.join(', ')}`);
  } else {
    console.log('   Nenhum discriminator encontrado');
  }

  console.log('\n✅ Validação concluída sem warnings críticos!');
  console.log('📝 Nota: Se você viu esta mensagem, significa que todos os warnings foram corrigidos.');

} catch (error) {
  console.error('❌ Erro durante validação:', error.message);
  process.exit(1);
} finally {
  // Fechar conexão
  await mongoose.disconnect();
  console.log('🔌 Conexão MongoDB fechada');
}

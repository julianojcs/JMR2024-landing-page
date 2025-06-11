import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Ativar debug do Mongoose se necessário
if (process.env.MONGOOSE_DEBUG === 'true') {
  mongoose.set('debug', true);
}

// Cache de conexão
let cached = global.mongoose;

// Obter o caminho absoluto para o diretório atual
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Garantir que a URI começa com 'mongodb://'
const uri = process.env.MONGODB_URI;

// Log para depuração
// console.log(`MongoDB URI: ${uri ? uri.replace(/\/\/[^@]*@/, '//***:***@') : 'não definida'}`);
console.log(`MongoDB URI: ${uri}`);

// Inicializar o cache se não existir
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

/**
 * Hook para conectar ao MongoDB
 * @returns {Promise<Mongoose>} Instância do mongoose
 */
export async function useMongoDB() {
  // Se já temos uma conexão, retorne-a
  if (cached.conn) {
    return cached.conn;
  }

  // Se não temos uma MONGODB_URI, lance um erro
  if (!uri) {
    throw new Error('MONGODB_URI não está definido no arquivo .env');
  }

  // Se uma conexão está sendo estabelecida, aguarde e retorne-a
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      connectTimeoutMS: 10000, // Reduzir o tempo de timeout para falhar mais rápido durante testes
    };

    // Configurações específicas para produção
    if (process.env.NODE_ENV === 'production') {
      console.log('Configurando conexão MongoDB para produção...');
      console.log('MONGODB_FORCE_SSL:', process.env.MONGODB_FORCE_SSL);
      console.log('MONGODB_CA_CERT:', process.env.MONGODB_CA_CERT);

      // Para servidores MongoDB que não suportam SSL ou têm problemas de SSL
      // Desabilitar SSL por padrão e permitir configuração manual
      const forceSSL = process.env.MONGODB_FORCE_SSL === 'true';
      const certPath = process.env.MONGODB_CA_CERT;

      if (forceSSL) {
        console.log('SSL forçado via MONGODB_FORCE_SSL=true');
        opts.tls = true;

        if (certPath && fs.existsSync(certPath)) {
          console.log(`Usando certificado em: ${certPath}`);
          opts.tlsCAFile = certPath;
        } else {
          // Configurações para aceitar certificados autoassinados
          opts.tlsAllowInvalidCertificates = true;
          opts.tlsAllowInvalidHostnames = true;
        }
      } else {
        console.log('SSL desabilitado - conexão sem TLS/SSL');
        // Garantir que SSL está explicitamente desabilitado
        opts.tls = false;
        opts.ssl = false;
      }
    }

    console.log('Tentando conectar ao MongoDB com opções:', JSON.stringify(opts, null, 2));

    cached.promise = mongoose
      .connect(uri, opts)
      .then((mongoose) => {
        console.log('✅ MongoDB conectado com sucesso!');
        return mongoose;
      })
      .catch((error) => {
        console.error('❌ Erro ao conectar com MongoDB:', error.message);

        // Diagnóstico específico para erros SSL
        if (error.message.includes('SSL') || error.message.includes('TLS')) {
          console.error('🔒 Erro relacionado a SSL/TLS detectado');
          console.error('💡 Sugestões para resolver:');
          console.error('   1. Adicione MONGODB_FORCE_SSL=false no .env.production para desabilitar SSL');
          console.error('   2. Ou configure MONGODB_FORCE_SSL=true se o servidor exigir SSL');
          console.error('   3. Verifique se o servidor MongoDB está configurado corretamente');
        }

        // Diagnostico para erros de autenticação
        if (error.message.includes('Authentication failed') || error.message.includes('auth')) {
          console.error('🔐 Erro de autenticação detectado');
          console.error('💡 Verifique as credenciais na MONGODB_URI');
        }

        // Diagnóstico para erros de conectividade
        if (error.message.includes('ECONNREFUSED') || error.message.includes('connection')) {
          console.error('🌐 Erro de conectividade detectado');
          console.error('💡 Verifique se o servidor MongoDB está rodando e acessível');
        }

        throw error;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}
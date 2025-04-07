// Get API key based on environment
const getApiKey = () => {
  if (process.env.NODE_ENV === 'development') {
    if (!process.env.ASAAS_API_KEY) {
      throw new Error('ASAAS_API_KEY environment variable is not defined');
    }
    return `$${process.env.ASAAS_API_KEY}`;
  }
  if (process.env.NODE_ENV === 'production') {
    // Ambiente de produção
    if (!process.env.ASAAS_API_KEY_PROD) {
      throw new Error('ASAAS_API_KEY_PROD environment variable is not defined');
    }
    return process.env.ASAAS_API_KEY_PROD;
  }
  // In production, use the full API key directly
  return process.env.ASAAS_API_KEY;
};

// Função para retornar a URL da API baseada no ambiente
const getAsaasApiUrl = () => {
  // Verifica se estamos em ambiente de desenvolvimento
  if (process.env.NODE_ENV === 'development') {
    if (!process.env.NEXT_PUBLIC_ASAAS_API_URL) {
      throw new Error('NEXT_PUBLIC_ASAAS_API_URL environment variable is not defined');
    }
    return process.env.NEXT_PUBLIC_ASAAS_API_URL;
  }
  if (process.env.NODE_ENV === 'production') {
    // Ambiente de produção
    if (!process.env.NEXT_PUBLIC_ASAAS_API_URL_PROD) {
      throw new Error('NEXT_PUBLIC_ASAAS_API_URL_PROD environment variable is not defined');
    }
    return process.env.NEXT_PUBLIC_ASAAS_API_URL_PROD;
  }
  return process.env.NEXT_PUBLIC_ASAAS_API_URL;
};

export const apiKey = getApiKey();
export const apiUrl = getAsaasApiUrl();
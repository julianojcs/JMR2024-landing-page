// Get API key based on environment
const getApiKey = () => {
  if (process.env.NODE_ENV === 'development') {
    return `$${process.env.ASAAS_API_KEY}`;
  }
  // In production, use the full API key directly
  return process.env.ASAAS_API_KEY;
};

export const apiKey = getApiKey();
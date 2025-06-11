// Hook personalizado para gerenciar cupons
import { useState, useCallback } from 'react';

export const useCupons = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Limpar mensagens
  const clearMessages = useCallback(() => {
    setError('');
    setSuccess('');
  }, []);

  // Buscar cupons
  const fetchCupons = useCallback(async (filters = {}, page = 1, limit = 10) => {
    try {
      setLoading(true);
      clearMessages();

      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString()
      });

      Object.entries(filters).forEach(([key, value]) => {
        if (value && value !== 'all') {
          params.append(key, value);
        }
      });

      const response = await fetch(`/api/cupons?${params}`);
      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || 'Erro ao buscar cupons');
      }

      return data;

    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [clearMessages]);

  // Criar cupom
  const createCupom = useCallback(async (cupomData) => {
    try {
      setLoading(true);
      clearMessages();

      const response = await fetch('/api/cupons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cupomData)
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || 'Erro ao criar cupom');
      }

      setSuccess('Cupom criado com sucesso!');
      return data;

    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [clearMessages]);

  // Atualizar cupom
  const updateCupom = useCallback(async (id, updateData) => {
    try {
      setLoading(true);
      clearMessages();

      const response = await fetch(`/api/cupons/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || 'Erro ao atualizar cupom');
      }

      setSuccess('Cupom atualizado com sucesso!');
      return data;

    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [clearMessages]);

  // Deletar cupom (desativar)
  const deleteCupom = useCallback(async (id) => {
    try {
      setLoading(true);
      clearMessages();

      const response = await fetch(`/api/cupons/${id}`, {
        method: 'DELETE'
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || 'Erro ao deletar cupom');
      }

      setSuccess('Cupom desativado com sucesso!');
      return data;

    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [clearMessages]);

  // Buscar cupom específico
  const fetchCupom = useCallback(async (id) => {
    try {
      setLoading(true);
      clearMessages();

      const response = await fetch(`/api/cupons/${id}`);
      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || 'Erro ao buscar cupom');
      }

      return data;

    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [clearMessages]);

  // Validar código do cupom
  const validateCupomCode = useCallback(async (code) => {
    try {
      const response = await fetch(`/api/cupons/validate/${encodeURIComponent(code)}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return { success: false, message: 'Erro ao validar código' };
    }
  }, []);

  return {
    loading,
    error,
    success,
    clearMessages,
    fetchCupons,
    createCupom,
    updateCupom,
    deleteCupom,
    fetchCupom,
    validateCupomCode
  };
};

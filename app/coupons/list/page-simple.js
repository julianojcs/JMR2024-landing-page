"use client";

import { useState, useEffect } from 'react';

export default function CouponsListPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/subscriptions?onlyCoupons=true&limit=5');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Erro:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#333', marginBottom: '2rem' }}>
        Lista de Inscrições com Cupons
      </h1>

      {loading && (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          Carregando...
        </div>
      )}

      {data && (
        <div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              background: '#f8f9fa',
              padding: '1rem',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <h3>Total</h3>
              <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#007bff' }}>
                {data.count || 0}
              </p>
            </div>

            {data.stats && (
              <>
                <div style={{
                  background: '#d4edda',
                  padding: '1rem',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <h3>Desconto Total</h3>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#28a745' }}>
                    {data.stats.fullDiscountCount || 0}
                  </p>
                </div>

                <div style={{
                  background: '#fff3cd',
                  padding: '1rem',
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <h3>Desconto Parcial</h3>
                  <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ffc107' }}>
                    {data.stats.partialDiscountCount || 0}
                  </p>
                </div>
              </>
            )}
          </div>

          {data.data && data.data.length > 0 && (
            <div style={{
              background: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#f8f9fa' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #dee2e6' }}>
                      Nome
                    </th>
                    <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #dee2e6' }}>
                      Email
                    </th>
                    <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #dee2e6' }}>
                      CPF
                    </th>
                    <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #dee2e6' }}>
                      Cupom
                    </th>
                    <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #dee2e6' }}>
                      Desconto
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.data.map((item, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid #dee2e6' }}>
                      <td style={{ padding: '1rem' }}>
                        {item.user?.name || 'N/A'}
                      </td>
                      <td style={{ padding: '1rem' }}>
                        {item.user?.email || 'N/A'}
                      </td>
                      <td style={{ padding: '1rem' }}>
                        {item.user?.cpf || 'N/A'}
                      </td>
                      <td style={{ padding: '1rem' }}>
                        {item.appliedCoupon?.code || 'N/A'}
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <span style={{
                          padding: '0.25rem 0.5rem',
                          borderRadius: '4px',
                          background: item.appliedCoupon?.discount >= 100 ? '#d4edda' : '#fff3cd',
                          color: item.appliedCoupon?.discount >= 100 ? '#28a745' : '#ffc107',
                          fontSize: '0.875rem',
                          fontWeight: 'bold'
                        }}>
                          {item.appliedCoupon?.discount || 0}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {data.data && data.data.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '3rem',
              background: '#f8f9fa',
              borderRadius: '8px'
            }}>
              <p style={{ fontSize: '1.2rem', color: '#6c757d' }}>
                Nenhuma inscrição com cupom encontrada
              </p>
            </div>
          )}
        </div>
      )}

      <div style={{ marginTop: '2rem' }}>
        <button
          onClick={fetchData}
          style={{
            background: '#007bff',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Recarregar Dados
        </button>
      </div>

      {data && (
        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          background: '#e9ecef',
          borderRadius: '4px',
          fontSize: '0.875rem'
        }}>
          <strong>Debug:</strong>
          <pre style={{ marginTop: '0.5rem', overflow: 'auto' }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

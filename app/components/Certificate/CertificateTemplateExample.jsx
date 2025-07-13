/**
 * Exemplo de uso do componente Certificate refatorado para templates dinâmicos
 * Este exemplo demonstra como integrar o componente com a API de validação
 */

import React, { useState, useEffect } from 'react';
import Certificate from './index';
import styles from './Certificate.module.css';

// Componente de exemplo para demonstrar o uso
export default function CertificateExample() {
  const [certificateData, setCertificateData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [codigo, setCodigo] = useState('');

  // Função para buscar dados do certificado
  const fetchCertificateData = async (codigo) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/certificate/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ codigo }),
      });

      const data = await response.json();

      if (data.success && data.certificate) {
        setCertificateData(data.certificate);
      } else {
        setError(data.error || 'Certificado não encontrado');
        setCertificateData(null);
      }
    } catch (err) {
      setError('Erro ao buscar certificado: ' + err.message);
      setCertificateData(null);
    } finally {
      setLoading(false);
    }
  };

  // Exemplo de dados mockados para demonstração
  const mockCertificateData = {
    code: 'JMR2025-DEMO-001',
    eventId: '6844b06292642fb12c3667b5',
    userType: 'CONGRESSPERSON',
    certType: 'CONGRESS',
    issuedAt: new Date().toISOString(),
    isActive: true,
    user: {
      name: 'Dr. João Silva Santos',
      cpf: '123.456.789-00',
      email: 'joao.silva@email.com',
      city: 'São Paulo',
      state: 'SP'
    },
    participation: {
      type: 'CONGRESSPERSON',
      certType: 'CONGRESS',
      index: 0,
      data: {
        role: 'CONGRESSPERSON',
        event: 'XI Jornada Mineira de Radiologia'
      }
    },
    template: {
      id: '685b5fbb6c63931a360a94f2',
      title: 'Certificado de Participação - Congresso',
      description: 'Certificado para participantes do congresso médico',
      templateName: 'congress_template',
      metadata: {
        template: 'congress_template',
        isActive: true,
        eventYear: 2025
      },
      specificFields: {
        eventName: "XI Jornada Mineira de Radiologia (JMR2025) e do XIV Congresso de Imaginologia da Mulher (CIM2025)",
        totalHours: 20,
        eventLocation: "Centro de Convenções da Associação Médica de Minas Gerais (AMMG), em Belo Horizonte/MG, Brasil",
        eventDate: "27 e 28 de junho de 2025",
        localAndDate: "Belo Horizonte/MG, 28 de junho de 2025"
      }
    },
    preview: {
      processedText: 'Certificamos que Dr. João Silva Santos participou como congressista da XI Jornada Mineira de Radiologia (JMR2025) e do XIV Congresso de Imaginologia da Mulher (CIM2025)',
      processedLines: [
        'Certificamos que',
        'Dr. João Silva Santos',
        'participou como congressista da XI Jornada Mineira de Radiologia (JMR2025) e do XIV Congresso de Imaginologia da Mulher (CIM2025)',
        'realizada nos dias 27 e 28 de junho de 2025 no Centro de Convenções da Associação Médica de Minas Gerais (AMMG), em Belo Horizonte/MG, Brasil,',
        'com carga horária total de 20 horas.'
      ]
    },
    metadata: {}
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (codigo.trim()) {
      fetchCertificateData(codigo.trim());
    }
  };

  const handleUseMockData = () => {
    setCertificateData(mockCertificateData);
    setCodigo(mockCertificateData.code);
    setError(null);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>Demonstração - Componente Certificate com Templates</h1>

      <div style={{ marginBottom: '2rem', padding: '1rem', background: '#f8fafc', borderRadius: '8px' }}>
        <h2>Buscar Certificado</h2>
        <form onSubmit={handleSearch} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <input
            type="text"
            placeholder="Digite o código do certificado"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            style={{
              flex: 1,
              padding: '0.5rem',
              border: '1px solid #d1d5db',
              borderRadius: '4px'
            }}
          />
          <button
            type="submit"
            disabled={loading || !codigo.trim()}
            style={{
              padding: '0.5rem 1rem',
              background: '#4f46e5',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {loading ? 'Buscando...' : 'Buscar'}
          </button>
        </form>

        <button
          onClick={handleUseMockData}
          style={{
            padding: '0.5rem 1rem',
            background: '#059669',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Usar Dados de Exemplo
        </button>
      </div>

      {loading && (
        <div style={{ textAlign: 'center', color: '#6b7280' }}>
          Carregando certificado...
        </div>
      )}

      {error && (
        <div style={{
          padding: '1rem',
          background: '#fef2f2',
          border: '1px solid #fecaca',
          borderRadius: '8px',
          color: '#dc2626',
          marginBottom: '1rem'
        }}>
          <strong>Erro:</strong> {error}
        </div>
      )}

      {certificateData && (
        <div>
          <h2>Certificado Encontrado</h2>
          <Certificate
            name={certificateData.user.name}
            code={certificateData.code}
            certificateData={certificateData}
            userType={certificateData.userType}
            certType={certificateData.certType}
          />
        </div>
      )}

      <div style={{ marginTop: '3rem', padding: '1rem', background: '#f0f9ff', borderRadius: '8px' }}>
        <h3>Recursos do Componente Refatorado:</h3>
        <ul style={{ lineHeight: '1.6' }}>
          <li>✅ <strong>Templates Dinâmicos:</strong> Conteúdo gerado a partir de templates processados pela API</li>
          <li>✅ <strong>Múltiplos Tipos:</strong> Suporte a congressistas, palestrantes, moderadores, etc.</li>
          <li>✅ <strong>PDF Personalizado:</strong> Geração de PDF usando dados do template específico</li>
          <li>✅ <strong>Preview Visual:</strong> Visualização do certificado antes da exportação</li>
          <li>✅ <strong>Validação QR Code:</strong> Código QR para validação online</li>
          <li>✅ <strong>Dados do Usuário:</strong> Informações detalhadas do participante</li>
          <li>✅ <strong>Responsivo:</strong> Interface adaptada para mobile e desktop</li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', background: '#fef3c7', borderRadius: '8px' }}>
        <h3>Como Usar:</h3>
        <pre style={{ background: '#1f2937', color: '#f9fafb', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
{`// Importar o componente
import Certificate from './components/Certificate';

// Usar com dados da API
<Certificate
  name={certificateData.user.name}
  code={certificateData.code}
  certificateData={certificateData}
  userType={certificateData.userType}
  certType={certificateData.certType}
/>

// certificateData deve conter:
// - user: { name, email, city, state }
// - template: { title, description, metadata }
// - preview: { processedLines: [] }
// - participation: { type, certType, data }
`}
        </pre>
      </div>
    </div>
  );
}

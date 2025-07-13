import React, { useState, useEffect } from 'react';
import Certificate from '@/components/Certificate';

/**
 * Exemplo de uso do componente Certificate refatorado
 * Este componente demonstra como integrar o Certificate com os dados do template
 */
export default function CertificateExample() {
  const [certificateData, setCertificateData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Dados do usuário/certificado (exemplo)
  const userInfo = {
    name: "Maria Silva Santos",
    cpf: "12345678901",
    code: "17A67C564937",
    userType: "PROFESSIONAL",
    certType: "SPEAKER"
  };

  // Buscar dados do certificado (simulação)
  const fetchCertificateData = async () => {
    setLoading(true);
    setError(null);

    try {
      // Exemplo 1: Validar certificado existente
      const validateResponse = await fetch('/api/certificate/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          codigo: userInfo.code
        })
      });

      if (validateResponse.ok) {
        const validateResult = await validateResponse.json();
        if (validateResult.success) {
          setCertificateData(validateResult.certificate);
          return;
        }
      }

      // Exemplo 2: Buscar template para gerar novo certificado
      const templateResponse = await fetch('/api/certificate/template', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventId: '6844b06292642fb12c3667b5',
          certType: userInfo.certType,
          userType: userInfo.userType,
          cpf: userInfo.cpf,
          participationIndex: 0
        })
      });

      if (templateResponse.ok) {
        const templateResult = await templateResponse.json();
        if (templateResult.success) {
          // Adapta os dados do template para o formato esperado pelo Certificate
          const adaptedData = {
            code: userInfo.code,
            user: templateResult.user,
            participation: templateResult.participation,
            template: templateResult.template,
            preview: templateResult.preview,
            userType: userInfo.userType,
            certType: userInfo.certType
          };
          setCertificateData(adaptedData);
          return;
        }
      }

      throw new Error('Não foi possível carregar os dados do certificado');

    } catch (err) {
      setError(err.message);
      console.error('Erro ao buscar dados do certificado:', err);
    } finally {
      setLoading(false);
    }
  };

  // Simular dados offline para desenvolvimento
  const simulateOfflineData = () => {
    const mockData = {
      code: userInfo.code,
      user: {
        name: userInfo.name,
        cpf: userInfo.cpf,
        email: "maria.santos@gmail.com"
      },
      participation: {
        type: userInfo.userType,
        certType: userInfo.certType,
        data: {
          category: "SPEAKER",
          hall: "Auditório Principal",
          curriculum: "Doutor em Medicina com 20 anos de experiência"
        }
      },
      template: {
        title: "Certificado de Participação - Palestrante",
        metadata: {
          title: "Certificado de Participação - Palestrante",
          description: "Certificado para palestrantes do evento",
          template: "speaker_template"
        },
        specificFields: {
          eventName: "XI Jornada Mineira de Radiologia (JMR2025) e do XIV Congresso de Imaginologia da Mulher (CIM2025)",
          localAndDate: "Belo Horizonte/MG, 28 de junho de 2025",
          eventLocation: "Centro de Convenções da Associação Médica de Minas Gerais (AMMG), em Belo Horizonte/MG, Brasil",
          eventDate: "27 e 28 de junho de 2025",
          totalHours: 20
        }
      },
      preview: {
        processedText: "Certificamos que Maria Silva Santos participou da XI Jornada Mineira de Radiologia (JMR2025) e do XIV Congresso de Imaginologia da Mulher (CIM2025) como Palestrante no curso Sala: Auditório Principal com o tema da aula {lectureTitle}, no período de 27 e 28 de junho de 2025, no Centro de Convenções da Associação Médica de Minas Gerais (AMMG), em Belo Horizonte/MG, Brasil.",
        processedLines: [
          "Certificamos que",
          "Maria Silva Santos",
          "participou da XI Jornada Mineira de Radiologia (JMR2025) e do XIV Congresso de Imaginologia da Mulher (CIM2025)",
          "como Palestrante no curso Sala: Auditório Principal",
          "com o tema da aula {lectureTitle},",
          "no período de 27 e 28 de junho de 2025, no Centro de Convenções da Associação Médica de Minas Gerais (AMMG), em Belo Horizonte/MG, Brasil."
        ]
      },
      userType: userInfo.userType,
      certType: userInfo.certType
    };

    setCertificateData(mockData);
  };

  useEffect(() => {
    // Tentar buscar dados reais primeiro, senão usar dados simulados
    fetchCertificateData().catch(() => {
      console.log('Usando dados simulados para desenvolvimento');
      simulateOfflineData();
    });
  }, []);

  if (loading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <p>Carregando dados do certificado...</p>
      </div>
    );
  }

  if (error && !certificateData) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <p style={{ color: 'red' }}>Erro: {error}</p>
        <button onClick={simulateOfflineData} style={{ marginTop: '1rem' }}>
          Usar Dados Simulados
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Certificado Digital</h1>

      {certificateData ? (
        <Certificate
          name={certificateData.user?.name || userInfo.name}
          code={certificateData.code || userInfo.code}
          certificateData={certificateData}
          userType={certificateData.userType || userInfo.userType}
          certType={certificateData.certType || userInfo.certType}
        />
      ) : (
        <p>Nenhum dado de certificado disponível.</p>
      )}

      {/* Debug info */}
      {process.env.NODE_ENV === 'development' && certificateData && (
        <details style={{ marginTop: '2rem', fontSize: '0.8rem' }}>
          <summary>Dados do Certificado (Debug)</summary>
          <pre style={{ background: '#f5f5f5', padding: '1rem', overflow: 'auto' }}>
            {JSON.stringify(certificateData, null, 2)}
          </pre>
        </details>
      )}
    </div>
  );
}

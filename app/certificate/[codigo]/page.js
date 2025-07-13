"use client";

import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function CertificateCodePage() {
  const params = useParams();
  const router = useRouter();
  const codigo = params.codigo;

  useEffect(() => {
    // Redirecionar para a página principal com o código como query parameter
    // Isso mantém a funcionalidade existente funcionando
    if (codigo) {
      router.replace(`/certificate?codigo=${codigo}`);
    } else {
      router.replace('/certificate');
    }
  }, [codigo, router]);

  // Mostrar um loading enquanto redireciona
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '4px solid #f3f3f3',
        borderTop: '4px solid #3498db',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
      <p>Validando certificado...</p>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

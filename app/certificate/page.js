"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import { generateCertificatePDF } from "../utils/certificatePDFGenerator";
import styles from "./CertificatePage.module.css";

function formatCpfInput(value) {
  value = value.replace(/\D/g, "");
  if (value.length > 3) value = value.replace(/(\d{3})(\d)/, "$1.$2");
  if (value.length > 7) value = value.replace(/(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
  if (value.length > 11) value = value.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
  return value.slice(0, 14);
}

export default function EmitirCertificadoPage() {
  const searchParams = useSearchParams();

  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingPdf, setLoadingPdf] = useState({});
  const [showCertificates, setShowCertificates] = useState(false);
  const [userCertificates, setUserCertificates] = useState([]);
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");

  // Estados para validação de certificado
  const [codigo, setCodigo] = useState("");
  const [certValido, setCertValido] = useState(null);
  const [validatedCertData, setValidatedCertData] = useState(null);

  // Estados para controle de seções (collapse)
  const [activeSection, setActiveSection] = useState("search"); // "search" ou "validate"
  const [showValidationForm, setShowValidationForm] = useState(false); // Controla se o form de validação está visível
  const [sectionTransition, setSectionTransition] = useState("entered"); // Estado da transição

  // Verificar se há código na URL para auto-validação
  useEffect(() => {
    const codigoFromUrl = searchParams.get('codigo');
    if (codigoFromUrl) {
      setCodigo(codigoFromUrl);
      setActiveSection("validate");
      setShowValidationForm(true); // Mostrar o form quando há código na URL
      // Auto-validar o certificado
      handleValidateFromUrl(codigoFromUrl);
    }
  }, [searchParams]);

  // Função para limpar dados de busca
  const clearSearchData = () => {
    setCpf("");
    setEmail("");
    setShowCertificates(false);
    setUserCertificates([]);
    setUserName("");
    setUserId("");
  };

  // Função para limpar dados de validação
  const clearValidationData = () => {
    setCodigo("");
    setCertValido(null);
    setValidatedCertData(null);
    setShowValidationForm(false); // Ocultar o form de validação
  };

  // Função para alternar seções com limpeza de dados e transição suave
  const handleSectionChange = (section) => {
    if (section === activeSection) return; // Não fazer nada se já estiver na seção

    // Iniciar transição de saída
    setSectionTransition("exiting");

    setTimeout(() => {
      setErro(""); // Limpar sempre os erros

      if (section === "search") {
        clearValidationData(); // Limpar dados de validação ao ir para busca
      } else if (section === "validate") {
        clearSearchData(); // Limpar dados de busca ao ir para validação
        setShowValidationForm(true); // Mostrar o form de validação
      }

      setActiveSection(section);

      // Iniciar transição de entrada
      setSectionTransition("entering");

      setTimeout(() => {
        setSectionTransition("entered");
      }, 100);
    }, 200);
  };

  // Função para validar certificado da URL
  const handleValidateFromUrl = async (codigoFromUrl) => {
    setErro("");
    setCertValido(null);
    setValidatedCertData(null);
    setLoading(true);

    try {
      const response = await fetch("/api/certificate/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ codigo: codigoFromUrl })
      });

      if (!response.ok) {
        throw new Error("Certificado não encontrado ou código inválido.");
      }

      const data = await response.json();

      if (data.success && data.certificate) {
        setCertValido(true);
        setValidatedCertData(data.certificate);
      } else {
        setCertValido(false);
        setErro(data.error || "Certificado inválido.");
      }
    } catch (err) {
      setCertValido(false);
      setErro(err.message || "Erro ao validar certificado.");
    } finally {
      setLoading(false);
    }
  };

  // Handler para buscar certificados do usuário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");
    setShowCertificates(false);
    setUserCertificates([]);
    setUserName("");
    setUserId("");
    setLoading(true);

    try {
      // Primeiro, buscar o usuário por CPF e email
      const userResponse = await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cpf, email, action: "find" })
      });

      if (!userResponse.ok) {
        throw new Error("Usuário não encontrado com o CPF e email informados.");
      }

      const userData = await userResponse.json();
      console.log("Dados do usuário:", userData);
      console.log("Id e nome do usuário:", userData.user._id, userData.user.name);
      setUserName(userData.user.name);

      // Buscar certificados elegíveis baseados nos dados do usuário
      const certificatesResponse = await fetch(`/api/certificate?userId=${userData.user._id}&action=eligible`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });

      if (!certificatesResponse.ok) {
        throw new Error("Erro ao buscar certificados do usuário.");
      }

      const certificatesData = await certificatesResponse.json();

      if (certificatesData.success) {
        if (certificatesData.eligibleCertificates.length > 0) {
          setUserCertificates(certificatesData.eligibleCertificates);
          setShowCertificates(true);
          console.log("Certificados elegíveis encontrados:", certificatesData.summary);
        } else {
          setUserCertificates([]);
          setShowCertificates(true);
          setErro("Este usuário não possui dados de participação para emissão de certificados.");
        }
      } else {
        setErro("Erro ao buscar certificados do usuário.");
      }
    } catch (err) {
      setErro(err.message || "Erro ao buscar certificados do usuário.");
    } finally {
      setLoading(false);
    }
  };

  // Handler para emitir um novo certificado
  const handleIssueCertificate = async (certificate) => {
    setLoading(true);
    setErro("");

    try {
      const issueResponse = await fetch("/api/certificate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cpf: cpf,
          email: email,
          userType: certificate.userType,
          certType: certificate.certType,
          event: certificate.event || certificate.participationDetails?.event, // Event dinâmico da participação
          participationIndex: certificate.participationIndex
        })
      });

      if (!issueResponse.ok) {
        const errorData = await issueResponse.json();
        throw new Error(errorData.error || "Erro ao emitir certificado.");
      }

      const issueData = await issueResponse.json();

      if (issueData.success) {
        // Atualizar a lista de certificados após emissão
        setUserCertificates(prevCerts =>
          prevCerts.map(cert =>
            cert.userType === certificate.userType &&
            cert.certType === certificate.certType &&
            cert.participationIndex === certificate.participationIndex
              ? {
                  ...cert,
                  alreadyIssued: true,
                  isEligible: false,
                  certificateCode: issueData.certificate.code,
                  issuedAt: issueData.certificate.issuedAt
                }
              : cert
          )
        );

        alert(`Certificado emitido com sucesso! Código: ${issueData.certificate.code}`);
      } else {
        throw new Error(issueData.error || "Erro desconhecido ao emitir certificado.");
      }
    } catch (err) {
      setErro(err.message || "Erro ao emitir certificado.");
    } finally {
      setLoading(false);
    }
  };

  // Handler para gerar PDF de um certificado específico
  const handleGeneratePDF = async (certificateCode) => {
    setLoadingPdf(prev => ({ ...prev, [certificateCode]: true }));
    try {
      // Buscar dados completos do certificado com template processado
      const response = await fetch(`/api/certificate?code=${certificateCode}&action=processed`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });

      if (!response.ok) {
        throw new Error("Erro ao buscar dados do certificado.");
      }

      const data = await response.json();

      if (data.success && data.certificate) {
        // Importar e usar a função utilitária de geração de PDF
        await generateCertificatePDF(data.certificate);
      } else {
        throw new Error(data.error || "Erro ao processar certificado.");
      }
    } catch (err) {
      setErro(err.message || "Erro ao gerar PDF do certificado.");
    } finally {
      setLoadingPdf(prev => ({ ...prev, [certificateCode]: false }));
    }
  };

  // Handler para validação
  const handleValidate = async (e) => {
    e.preventDefault();
    setErro("");
    setCertValido(null);
    setValidatedCertData(null);
    setLoading(true);

    try {
      const response = await fetch("/api/certificate/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ codigo })
      });

      if (!response.ok) {
        throw new Error("Certificado não encontrado ou código inválido.");
      }

      const data = await response.json();

      if (data.success && data.certificate) {
        setCertValido(true);
        setValidatedCertData(data.certificate);
      } else {
        setCertValido(false);
        setErro(data.error || "Certificado inválido.");
      }
    } catch (err) {
      setCertValido(false);
      setErro(err.message || "Erro ao validar certificado.");
    } finally {
      setLoading(false);
    }
  };

  // Função para formatar tipo de certificado
  const formatCertificateType = (userType, certType) => {
    const userTypeLabels = {
      'CONGRESSPERSON': 'Participante',
      'PROFESSIONAL': 'Professor',
      'PAPER-PRESENTER': 'Trabalho Científico',
      'SYSTEM-USER': 'Usuário do Sistema'
    };

    const certTypeLabels = {
      'CONGRESS': 'Congresso',
      'SEMINAR': 'Seminário',
      'COURSE': 'Curso',
      'WORKSHOP': 'Workshop',
      'DAYUSE': 'Uso Diário',
      'SPEAKER': 'Palestrante',
      'MODERATOR': 'Moderador',
      'DEBATER': 'Debatedor',
      'CHAIR-OF-THE-BOARD': 'Presidente da Mesa',
      'PRESENTATION': 'Autores',
      'AWARDED': 'Premiado'
    };

    return `${userTypeLabels[userType] || userType} - ${certTypeLabels[certType] || certType}`;
  };

  // Função para formatar data
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Funções auxiliares para traduções
  const getActivityNameInPortuguese = (activity) => {
    const names = {
      'CONGRESS': 'Congresso',
      'SEMINAR': 'Seminário',
      'DAYUSE': 'Dia Único',
      'COURSE': 'Curso',
      'WORKSHOP': 'Workshop'
    };
    return names[activity] || activity;
  };

  const getProfessionalDescription = (category) => {
    const descriptions = {
      'SPEAKER': 'Palestrante',
      'MODERATOR': 'Moderador',
      'DEBATER': 'Debatedor',
      'CHAIR-OF-THE-BOARD': 'Presidente de Mesa'
    };
    return descriptions[category] || category;
  };

  // useEffect para lidar com cleanup ao desmontar o componente
  useEffect(() => {
    return () => {
      // Cleanup quando o componente for desmontado
      setErro("");
      setLoading(false);
    };
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.container}>
          <h1 className={styles.title}>Certificados</h1>

          {/* Navegação entre seções */}
          <div className={styles.sectionNavigation}>
            <button
              className={`${styles.navButton} ${activeSection === "search" ? styles.active : ""}`}
              onClick={() => handleSectionChange("search")}
            >
              <span className={styles.navButtonIcon}>🔍</span>
              <span className={styles.navButtonTextLong}>Buscar Meus Certificados</span>
              <span className={styles.navButtonTextShort}>Buscar</span>
            </button>
            <button
              className={`${styles.navButton} ${activeSection === "validate" ? styles.active : ""}`}
              onClick={() => handleSectionChange("validate")}
            >
              <span className={styles.navButtonIcon}>✅</span>
              <span className={styles.navButtonTextLong}>Validar Certificado</span>
              <span className={styles.navButtonTextShort}>Validar</span>
            </button>
          </div>

          {/* Seção: Buscar Certificados do Usuário */}
          {activeSection === "search" && !certValido && (
            <div className={`${styles.section} ${styles.sectionTransition} ${styles[sectionTransition]}`}>
              <h2 className={styles.sectionTitle}>Buscar Meus Certificados</h2>
              <form onSubmit={handleSubmit} className={styles.form}>
                <label className={styles.label}>
                  CPF:
                  <input
                    type="text"
                    name="cpf"
                    autoComplete="on"
                    value={cpf}
                    onChange={e => setCpf(formatCpfInput(e.target.value))}
                    required
                    maxLength={14}
                    placeholder="Digite seu CPF"
                    className={styles.input}
                  />
                </label>
                <label className={styles.label}>
                  Email:
                  <input
                    name="email"
                    autoComplete="on"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    placeholder="Digite seu email"
                    className={styles.input}
                  />
                </label>
                {erro && <div className={styles.error}>{erro}</div>}
                <button type="submit" disabled={loading} className={`${styles.button} ${styles.buttonWithSpinner}`}>
                  {loading && <span className={styles.loadingSpinner}></span>}
                  {loading ? "Buscando..." : "Buscar Certificados"}
                </button>
              </form>
            </div>
          )}

          {/* Seção: Lista de Certificados */}
          {activeSection === "search" && showCertificates && (
            <div className={`${styles.section} ${styles.sectionTransition} ${styles[sectionTransition]}`}>
              <h2 className={styles.sectionTitle}>
                Certificados de {userName}
              </h2>
              {userCertificates.length > 0 ? (
            <div className={styles.certificatesList}>
              {userCertificates.map((certificate) => (
                <div key={`${certificate.userType}-${certificate.certType}-${certificate.participationIndex || 0}`}
                     className={`${styles.certificateCard} ${certificate.alreadyIssued ? styles.issued : styles.available}`}>
                  <div className={styles.certificateHeader}>
                    <h3 className={styles.certificateTitle}>
                      {certificate.description}
                    </h3>
                    <div className={styles.certificateStatus}>
                      {certificate.alreadyIssued ? (
                        <span className={styles.issuedBadge}>✅ Emitido</span>
                      ) : certificate.isEligible ? (
                        <span className={styles.availableBadge}>📋 Disponível</span>
                      ) : (
                        <span className={styles.unavailableBadge}>❌ Indisponível</span>
                      )}
                    </div>
                  </div>
                  <div className={styles.certificateDetails}>
                    {certificate.alreadyIssued && (
                      <>
                        <p className={styles.certificateCode}>
                          <strong>Código:</strong> {certificate.certificateCode}
                        </p>
                        <p className={styles.certificateDate}>
                          <strong>Emitido em:</strong> {formatDate(certificate.issuedAt)}
                        </p>
                      </>
                    )}

                    {certificate.participationDetails && (
                      <div className={styles.participationDetails}>
                        <h4>Detalhes da Participação:</h4>
                        {certificate.userType === 'CONGRESSPERSON' && (
                          <>
                            <p><strong>Atividade:</strong> {certificate.participationDetails.activityName || getActivityNameInPortuguese(certificate.participationDetails.activity)}</p>
                            {certificate.participationDetails.attendedAt && (
                              <p><strong>Comparecimento:</strong> {formatDate(certificate.participationDetails.attendedAt)}</p>
                            )}
                            {certificate.participationDetails.paymentStatus && (
                              <p><strong>Status Pagamento:</strong> {certificate.participationDetails.paymentStatus}</p>
                            )}
                          </>
                        )}

                        {certificate.userType === 'PROFESSIONAL' && (
                          <>
                            <p><strong>Categoria:</strong> {getProfessionalDescription(certificate.participationDetails.category)}</p>
                            {certificate.participationDetails.hall && (
                              <p><strong>Módulo:</strong> {certificate.participationDetails.hall}</p>
                            )}
                            {certificate.participationDetails.lecture && (
                              <p><strong>Palestra:</strong> {certificate.participationDetails.lecture.name}</p>
                            )}
                          </>
                        )}

                        {certificate.userType === 'PAPER-PRESENTER' && (
                          <>
                            <p><strong>Título do Trabalho:</strong> {certificate.participationDetails.paperTitle}</p>
                            <p><strong>Formato:</strong> {certificate.participationDetails.presentationFormat === 'POSTER' ? 'Pôster' : 'Tema Livre/Oral'}</p>
                            <p><strong>Autores:</strong> {certificate.participationDetails.authors.join(', ')}</p>
                            {certificate.participationDetails.awardedTitle && certificate.certType === 'AWARDED' && (
                              <p><strong>Premiação:</strong> {certificate.participationDetails.awardedTitle}</p>
                            )}
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  <div className={styles.certificateActions}>
                    {certificate.alreadyIssued && certificate.certificateCode ? (
                      <button
                        onClick={() => handleGeneratePDF(certificate.certificateCode)}
                        disabled={loadingPdf[certificate.certificateCode]}
                        className={styles.downloadButton}
                      >
                        {loadingPdf[certificate.certificateCode] ? "Gerando..." : "Baixar PDF"}
                      </button>
                    ) : certificate.isEligible ? (
                      <button
                        onClick={() => handleIssueCertificate(certificate)}
                        disabled={loading}
                        className={styles.issueButton}
                      >
                        {loading ? "Emitindo..." : "Emitir Certificado"}
                      </button>
                    ) : (
                      <button
                        disabled
                        className={styles.unavailableButton}
                      >
                        Não Disponível
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.emptyStateMessage}>
              <div className={styles.emptyStateIcon}>📋</div>
              <p className={`${styles.emptyStateText} ${styles.primary}`}>
                Este usuário não possui dados de participação válidos para emissão de certificados.
              </p>
              <p className={styles.emptyStateText}>Verifique se:</p>
              <ul style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
                <li className={styles.emptyStateText}>Os dados de participação foram cadastrados corretamente</li>
                <li className={styles.emptyStateText}>O comparecimento foi registrado (attendedAt preenchido)</li>
                <li className={styles.emptyStateText}>O status de pagamento está como CONFIRMED ou FREE (para congressistas)</li>
              </ul>
            </div>
          )}
        </div>
      )}

          {/* Seção: Validar Certificado */}
          {activeSection === "validate" && !certValido && (
            <div className={`${styles.section} ${styles.sectionTransition} ${styles[sectionTransition]}`}>
              <h2 className={styles.sectionTitle}>Validar Certificado</h2>

          {/* Formulário de validação - só aparece quando necessário */}
          {showValidationForm && (
            <form onSubmit={handleValidate} className={`${styles.form} ${styles.validateForm}`}>
              <label className={styles.label}>
                 Código de Autenticação:
                <input
                  type="text"
                  value={codigo}
                  onChange={e => setCodigo(e.target.value.toUpperCase())}
                  required
                  placeholder="Digite o código do certificado"
                  className={`${styles.input} ${styles.codeInput}`}
                />
              </label>
              {erro && <div className={styles.error}>{erro}</div>}
              <button type="submit" disabled={loading} className={`${styles.button} ${styles.buttonWithSpinner}`}>
                {loading && <span className={styles.loadingSpinner}></span>}
                {loading ? "Validando..." : "Validar Certificado"}
              </button>
            </form>
          )}

          {/* Mensagem quando formulário está oculto */}
          {!showValidationForm && !certValido && (
            <div className={styles.emptyStateMessage}>
              <div className={styles.emptyStateIcon}>✅</div>
              <p className={`${styles.emptyStateText} ${styles.primary}`}>
                Pronto para validar um certificado
              </p>
              <p className={styles.emptyStateText}>
                Digite um código de certificado no campo acima ou use um QR code para validar automaticamente.
              </p>
              <button
                onClick={() => setShowValidationForm(true)}
                className={styles.button}
                style={{ marginTop: '1rem' }}
              >
                Inserir Código Manualmente
              </button>
            </div>
          )}
        </div>
      )}

      {/* Resultado da Validação */}
      {activeSection === "validate" && certValido && validatedCertData && (
        <div className={`${styles.section} ${styles.sectionTransition} ${styles[sectionTransition]}`}>
          <div className={styles.certificateValidResult}>
            <h3 className={styles.validTitle}>✅ Certificado Válido</h3>
            <div className={styles.validDetails}>
              <p><strong>Nome:</strong> {validatedCertData.user.name}</p>
              <p><strong>CPF:</strong> {formatCpfInput(validatedCertData.user.cpf)}</p>
              <p><strong>Tipo:</strong> {formatCertificateType(validatedCertData.userType, validatedCertData.certType)}</p>
              <p><strong>Código:</strong> {validatedCertData.code}</p>
              <p><strong>Emitido em:</strong> {formatDate(validatedCertData.issuedAt)}</p>
              {validatedCertData.template && (
                <p><strong>Certificado:</strong> {validatedCertData.template.title}</p>
              )}
            </div>

            {/* Preview do certificado validado */}
            {validatedCertData.preview && validatedCertData.preview.processedText && (
              <div className={styles.previewSection}>
                <h4>Conteúdo do Certificado:</h4>
                <div className={styles.previewContent}>
                  <p className={styles.certificateText}>
                    {validatedCertData.preview.processedText.replace(/,(?!\s)/g, ', ')}
                  </p>
                </div>
              </div>
            )}

            <div className={styles.certificateActions}>
              <button
                onClick={() => handleGeneratePDF(validatedCertData.code)}
                disabled={loadingPdf[validatedCertData.code]}
                className={styles.downloadButton}
              >
                {loadingPdf[validatedCertData.code] ? "Gerando..." : "Baixar PDF"}
              </button>
            </div>
          </div>
        </div>
      )}

      {activeSection === "validate" && certValido === false && (
        <div className={`${styles.section} ${styles.sectionTransition} ${styles[sectionTransition]}`}>
          <div className={styles.error}>
            ❌ Certificado não encontrado ou código inválido.
          </div>
        </div>
      )}
        </div>
      </div>
    </div>
  );
}

import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import { QRCodeCanvas } from "qrcode.react";
import certificadoImage from "/app/assets/certificado.png";
import styles from "./Certificate.module.css";

/**
 * Componente Certificate - Refatorado para templates dinâmicos
 * Props:
 * - name: string (nome completo)
 * - code: string (código de autenticação)
 * - certificateData: object (dados do certificado incluindo template processado)
 * - userType: string (tipo de usuário: PROFESSIONAL, PAPER-PRESENTER, CONGRESSPERSON)
 * - certType: string (tipo de certificado: SPEAKER, MODERATOR, etc.)
 */
export default function Certificate({ name, code, certificateData, userType, certType }) {
  const qrCanvasRef = useRef();

  // Gera a URL do QR Code
  const qrUrl = code ? `${typeof window !== 'undefined' ? window.location.origin : ''}/certificate?codigo=${code}` : '';

  // Extrai dados do template processado
  const processedLines = certificateData?.preview?.processedLines || [];
  const templateTitle = certificateData?.template?.title || 'Certificado';
  const templateDescription = certificateData?.template?.description || '';
  const templateMetadata = certificateData?.template?.metadata || {};

  // Fallback para nome se não vier no template
  const participantName = name || certificateData?.user?.name || 'Nome não informado';

  // Função para processar linhas do template para display
  const getDisplayLines = () => {
    if (processedLines.length === 0) {
      return [
        "Certificamos que",
        participantName,
        "participou da XI Jornada Mineira de Radiologia (JMR2025) e do XIV Congresso de Imaginologia da Mulher (CIM2025)",
        "evento realizado nos dias 27 e 28 de junho de 2025",
        "no Centro de Convenções da Associação Médica de Minas Gerais (AMMG), em Belo Horizonte/MG, Brasil",
        "Carga horária total: 20 horas"
      ];
    }
    return processedLines;
  };

  // Função para processar linhas do template para PDF
  const processTextForPDF = () => {
    return getDisplayLines();
  };

  // Função para obter dados específicos do certificado
  const getCertificateSpecifics = () => {
    const defaults = {
      location: "Belo Horizonte/MG",
      date: "28 de junho de 2025",
      hours: "20 horas",
      eventLocation: "Centro de Convenções da Associação Médica de Minas Gerais (AMMG), em Belo Horizonte/MG, Brasil"
    };

    // Dados do template ou defaults
    const templateData = certificateData?.template || {};
    const specificFields = templateData.specificFields || {};

    return {
      location: specificFields.localAndDate || `${defaults.location}, ${defaults.date}`,
      hours: specificFields.totalHours ? `${specificFields.totalHours} horas` : defaults.hours,
      eventLocation: specificFields.eventLocation || defaults.eventLocation,
      eventName: specificFields.eventName || "XI Jornada Mineira de Radiologia (JMR2025)",
      eventDate: specificFields.eventDate || "27 e 28 de junho de 2025"
    };
  };

  // Função para identificar se uma linha contém o nome do participante
  const isNameLine = (line, index) => {
    const nameToCheck = participantName.toLowerCase();
    return line.toLowerCase().includes(nameToCheck) ||
           (index === 1 && getDisplayLines().length > 1);
  };

  // Função para exportar PDF usando template dinâmico
  const handleExportPDF = async () => {
    const doc = new jsPDF({ orientation: "landscape", unit: "px", format: [842, 595] });
    const img = new window.Image();
    img.src = certificadoImage.src;

    img.onload = async () => {
      // Primeira página - certificado com template processado
      doc.addImage(img, "PNG", 0, 0, 842, 595);

      const textLines = processTextForPDF();
      const specifics = getCertificateSpecifics();

      let currentY = 180; // Posição Y inicial
      const lineHeight = 25; // Altura entre linhas
      const centerX = 421; // Centro horizontal da página

      // Processa cada linha do template processado
      textLines.forEach((line, index) => {
        if (!line || line.trim() === '') return;

        // Define estilos baseado no contexto da linha
        if (index === 0) {
          // Primeira linha - geralmente "Certificamos que"
          doc.setFont("Times", "bold");
          doc.setFontSize(22);
        } else if (isNameLine(line, index)) {
          // Linha com o nome da pessoa
          doc.setFont("Times", "bold");
          doc.setFontSize(28);
        } else {
          // Linhas de conteúdo
          doc.setFont("Times", "normal");
          doc.setFontSize(18);
        }

        // Ajusta Y baseado no tamanho da fonte
        const fontSize = doc.getFontSize();
        if (fontSize >= 28) {
          currentY += 35;
        } else if (fontSize >= 22) {
          currentY += 30;
        } else {
          currentY += lineHeight;
        }

        // Renderiza a linha com quebra automática se necessário
        doc.text(line, centerX, currentY, {
          align: "center",
          maxWidth: 700
        });
      });

      // Código de autenticação
      currentY += 40;
      doc.setFont("Times", "normal");
      doc.setFontSize(12);
      doc.text(`Código de autenticação: ${code}`, centerX, currentY, { align: "center" });

      // QR Code pequeno no canto
      if (qrCanvasRef.current) {
        const qrDataUrl = qrCanvasRef.current.toDataURL("image/png");
        doc.addImage(qrDataUrl, 'PNG', 727, 150, 50, 50);
      }

      // Segunda página (fundo branco) - Página de validação
      doc.addPage([842, 595], 'landscape');
      let y = 120;

      // Título da segunda página
      doc.setFont("Times", "bold");
      doc.setFontSize(22);
      doc.text("QR Code para Validação", centerX, y, { align: "center" });
      y += 40;

      // QR Code grande centralizado
      if (qrCanvasRef.current) {
        const qrDataUrl = qrCanvasRef.current.toDataURL("image/png");
        doc.addImage(qrDataUrl, 'PNG', 371, y, 100, 100); // centralizado
      }
      y += 120;

      // Informações do certificado baseadas no template
      doc.setFont("Times", "bold");
      doc.setFontSize(16);
      doc.text(`${templateTitle}`, centerX, y, { align: "center" });
      y += 25;

      if (templateDescription) {
        doc.setFont("Times", "normal");
        doc.setFontSize(14);
        doc.text(templateDescription, centerX, y, { align: "center", maxWidth: 600 });
        y += 25;
      }

      doc.setFont("Times", "normal");
      doc.setFontSize(14);
      doc.text(`Modalidade: ${userType} - ${certType}`, centerX, y, { align: "center" });
      y += 25;

      // Dados do participante
      doc.text(`Participante: ${participantName}`, centerX, y, { align: "center" });
      y += 20;

      // Código de autenticação
      doc.setFontSize(16);
      doc.text(`Código de autenticação: ${code}`, centerX, y, { align: "center" });
      y += 30;

      // Link para validação
      doc.setFontSize(14);
      doc.text(`Valide em: ${qrUrl}`, centerX, y, { align: "center", maxWidth: 700 });
      y += 50;

      // NOTA LEGAL
      doc.setFontSize(18);
      doc.setFont("Times", "bold");
      doc.text("NOTA LEGAL:", centerX, y, { align: "center" });
      y += 30;

      doc.setFontSize(12);
      doc.setFont("Times", "normal");
      const notaLegal = [
        "O certificado é um documento de comprovação da sua atividade científica no evento. Sua adulteração e uso indevido é ilegal e está sujeita às penas da lei.",
        "",
        "Decreto Lei nº 2.848 de 07 de Dezembro de 1940",
        "",
        "Art. 299 - Omitir, em documento público ou particular, declaração que dele devia constar, ou nele inserir ou fazer inserir declaração falsa ou diversa da que devia ser escrita, com o fim de prejudicar direito, criar obrigação ou alterar a verdade sobre fato juridicamente relevante:",
        "",
        "Pena - reclusão, de um a cinco anos, e multa, se o documento é público, e reclusão de um a três anos, e multa, se o documento é particular.",
        "",
        "Parágrafo único - Se o agente é funcionário público, e comete o crime prevalecendo-se do cargo, ou se a falsificação ou alteração é de assentamento de registro civil, aumenta-se a pena de sexta parte."
      ];

      notaLegal.forEach((line, i) => {
        if (line.trim() === "") {
          // Linha em branco para espaçamento
          return;
        }
        doc.text(line, centerX, y + i * 15, { align: "center", maxWidth: 700 });
      });

      // Nome do arquivo baseado no template e participante
      const safeName = participantName.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_-]/g, "");
      const templateName = templateMetadata?.template || certType || 'certificado';
      const fileName = `${templateName}-${safeName}-${code}.pdf`;
      doc.save(fileName);
    };
  };

  return (
    <div className={styles.certificateContainer}>
      <div className={styles.certificateInfo}>
        {certificateData && (
          <div className={styles.certificateDetails}>
            <h3>{templateTitle}</h3>
            {templateDescription && (
              <p><em>{templateDescription}</em></p>
            )}
            <p><strong>Tipo:</strong> {userType} - {certType}</p>
            <p><strong>Participante:</strong> {participantName}</p>

            {certificateData.preview && (
              <div className={styles.previewSection}>
                <h4>Preview do Certificado:</h4>
                <div className={styles.previewText}>
                  {getDisplayLines().map((line, index) => (
                    <p key={index} className={isNameLine(line, index) ? styles.nameHighlight : ''}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {certificateData.user && (
              <div className={styles.userInfo}>
                <h4>Dados do Participante:</h4>
                <p><strong>Email:</strong> {certificateData.user.email}</p>
                <p><strong>Cidade:</strong> {certificateData.user.city} - {certificateData.user.state}</p>
              </div>
            )}
          </div>
        )}
      </div>

      <button className={styles.button} onClick={handleExportPDF}>
        Exportar Certificado PDF
      </button>

      {code && (
        <div style={{ marginTop: 24 }}>
          <QRCodeCanvas
            value={qrUrl}
            size={120}
            ref={qrCanvasRef}
            style={{ display: 'block', margin: '0 auto' }}
          />
          <div style={{ fontSize: 12, color: '#6366f1', marginTop: 8 }}>
            Escaneie para validar
          </div>
          <div style={{ fontSize: 14, marginTop: 8 }}>
            Código: <b>{code}</b>
          </div>
          {userType && certType && (
            <div style={{ fontSize: 12, marginTop: 4, color: '#666' }}>
              {userType} - {certType}
            </div>
          )}
          {templateTitle && (
            <div style={{ fontSize: 12, marginTop: 4, color: '#666' }}>
              {templateTitle}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

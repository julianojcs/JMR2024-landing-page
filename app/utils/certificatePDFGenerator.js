import { jsPDF } from "jspdf";
import { QRCodeCanvas } from "qrcode.react";

/**
 * Função utilitária para calcular quebras de linha e espaçamento
 * @param {Object} doc - Instância do jsPDF
 * @param {string} text - Texto a ser analisado
 * @param {number} maxWidth - Largura máxima em pixels
 * @param {number} fontSize - Tamanho da fonte
 * @returns {Object} - { linesCount, extraSpacing }
 */
function calculateTextLines(doc, text, maxWidth = 700, fontSize = 16) {
  const textWidth = doc.getTextWidth(text);
  let actualLinesCount = 1;

  if (textWidth > maxWidth) {
    const words = text.split(' ');
    let currentLineWidth = 0;
    actualLinesCount = 1;

    words.forEach(word => {
      const wordWidth = doc.getTextWidth(word + ' ');
      if (currentLineWidth + wordWidth > maxWidth && currentLineWidth > 0) {
        actualLinesCount++;
        currentLineWidth = wordWidth;
      } else {
        currentLineWidth += wordWidth;
      }
    });
  }

  const lineHeight = fontSize;
  const extraSpacing = actualLinesCount > 1 ? (actualLinesCount - 1) * lineHeight : 0;

  return {
    linesCount: actualLinesCount,
    extraSpacing
  };
}

/**
 * Função utilitária para gerar PDF de certificado
 * @param {Object} certificateData - Dados completos do certificado
 * @param {string} certificadoImageSrc - Caminho para a imagem do certificado
 * @returns {Promise<void>} - Gera e faz download do PDF
 */
async function generateCertificatePDF(certificateData, certificadoImageSrc = '/images/certificatesbg/certificado.png') {
  return new Promise(async (resolve, reject) => {
    try {
      const doc = new jsPDF({ orientation: "landscape", unit: "px", format: [842, 595] });

      // Dados do certificado
      const processedLines = certificateData?.processedLines || [];
      const participantName = certificateData?.user?.name || 'Nome não informado';
      const code = certificateData?.code || '';
      const templateTitle = certificateData?.template?.title || 'Certificado';
      const userType = certificateData?.userType || '';
      const certType = certificateData?.certType || '';
      const localAndDate = certificateData?.specificFields?.localAndDate || 'Belo Horizonte, 28 de junho de 2025';

      // Função para identificar linha com nome
      const isNameLine = (line, index) => {
        const nameToCheck = participantName.toLowerCase();
        return line.toLowerCase().includes(nameToCheck) || (index === 1 && processedLines.length > 1);
      };

      // Função para obter linhas de exibição
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

        // CORREÇÃO: Normalizar vírgulas nos authors - adicionar espaço após vírgulas se não houver
        return processedLines.map(line => {
          if (typeof line === 'string') {
            // Regex para encontrar vírgulas seguidas diretamente por letra (sem espaço)
            return line.replace(/,([A-ZÀ-ÿ])/g, ', $1');
          }
          return line;
        });
      };

      // Criar QR Code URL
      const qrUrl = `${window?.location?.origin || ''}/certificate/${code}`;

      // Função para gerar QR Code usando QRCodeCanvas do qrcode.react
      const generateQRCode = async (url, size = 120) => {
        try {

          // Importar React e createRoot uma vez
          const { createElement } = await import('react');
          const { createRoot } = await import('react-dom/client');

          // Criar um container temporário
          const container = document.createElement('div');
          container.style.position = 'absolute';
          container.style.left = '-9999px';
          document.body.appendChild(container);

          return new Promise((resolve, reject) => {
            try {
              const qrElement = createElement(QRCodeCanvas, {
                value: url,
                size: size,
                level: 'M',
                includeMargin: false
              });

              const root = createRoot(container);
              root.render(qrElement);

              // Aguardar um pouco para o canvas ser renderizado
              setTimeout(() => {
                const canvas = container.querySelector('canvas');
                if (canvas) {
                  const dataUrl = canvas.toDataURL("image/png");
                  document.body.removeChild(container);
                  resolve(dataUrl);
                } else {
                  document.body.removeChild(container);
                  reject(new Error('Canvas não encontrado'));
                }
              }, 300);

              // Timeout de segurança
              setTimeout(() => {
                if (document.body.contains(container)) {
                  document.body.removeChild(container);
                  reject(new Error('Timeout na geração do QR Code'));
                }
              }, 5000);

            } catch (error) {
              if (document.body.contains(container)) {
                document.body.removeChild(container);
              }
              reject(error);
            }
          });
        } catch (error) {
          console.error('Erro ao gerar QR Code:', error);
          throw error;
        }
      };

      try {
        // Gerar QR Code
        const qrDataUrl = await generateQRCode(qrUrl, 120);

        // Carregar imagem do certificado
        const img = new window.Image();
        img.crossOrigin = 'anonymous';
        img.src = certificadoImageSrc;

        img.onload = () => {
          try {

            // Primeira página - certificado com template
            doc.addImage(img, "PNG", 0, 0, 842, 595);

            const textLines = getDisplayLines();
            let currentY = 180;
            const centerX = 421;

            // Processar cada linha do template
            textLines.forEach((line, index) => {
              if (!line || line.trim() === '') return;

              // Definir estilos baseado no contexto da linha
              let fontSize, fontWeight, baseSpacing;
              if (index === 0) {
                // Primeira linha - geralmente "Certificamos que"
                fontWeight = certificateData.certType === 'PRESENTATION' ? "normal" : "bold";

                // Aplicar fonte usando método mais direto
                if (certificateData.certType === 'PRESENTATION') {
                  // Para apresentação: fonte normal
                  doc.setFont("times", "normal");
                } else {
                  // Para outros: fonte bold
                  doc.setFont("times", "bold");
                }

                fontSize = certificateData.certType === 'PRESENTATION' ? 18 : 22;
                doc.setFontSize(fontSize);
                baseSpacing = certificateData.certType === 'PRESENTATION' ? Math.round(18 * 1.1) : 30;
                currentY += baseSpacing;
              } else if (isNameLine(line, index)) {
                // Linha com o nome da pessoa
                doc.setFont("Times", "bold");
                fontSize = certificateData.certType === 'PRESENTATION' ? 18 : 28;
                doc.setFontSize(fontSize);
                fontWeight = "bold";
                baseSpacing = certificateData.certType === 'PRESENTATION' ? Math.round(18 * 1.1) : 35;
                currentY += baseSpacing;
              } else {
                // Linhas de conteúdo (aumento de 10% no espaçamento)
                doc.setFont("Times", "normal");
                fontSize = 18;
                doc.setFontSize(fontSize);
                fontWeight = "normal";
                baseSpacing = Math.round(18 * 1.1); // Aumento de 10%
                currentY += baseSpacing;
              }

              // Calcular quantas linhas o texto irá ocupar
              const maxWidth = 700;
              const { linesCount, extraSpacing } = calculateTextLines(doc, line, maxWidth, fontSize);

              // Se o texto não quebra, renderizar normalmente
              if (linesCount === 1) {
                doc.text(line, centerX, currentY, {
                  align: "center",
                  maxWidth: maxWidth
                });
              } else {
                // Se o texto quebra em múltiplas linhas, renderizar linha por linha com espaçamento
                const words = line.split(' ');
                let currentLineText = '';
                let lineIndex = 0;
                const lineSpacing = fontSize * 1.22; // 22% a mais entre linhas quebradas

                words.forEach((word, wordIndex) => {
                  const testLine = currentLineText ? `${currentLineText} ${word}` : word;
                  const testWidth = doc.getTextWidth(testLine);

                  if (testWidth > maxWidth && currentLineText) {
                    // Renderizar a linha atual
                    doc.text(currentLineText, centerX, currentY + (lineIndex * lineSpacing), {
                      align: "center"
                    });
                    lineIndex++;
                    currentLineText = word;
                  } else {
                    currentLineText = testLine;
                  }

                  // Se é a última palavra, renderizar a linha final
                  if (wordIndex === words.length - 1) {
                    doc.text(currentLineText, centerX, currentY + (lineIndex * lineSpacing), {
                      align: "center"
                    });
                  }
                });

                // Ajustar currentY para as linhas adicionais
                currentY += (linesCount - 1) * lineSpacing;
              }

              // Adicionar espaço extra após a linha do nome
              if (isNameLine(line, index)) {
                currentY += 15; // Espaço extra após o nome
              }
            });

            currentY += 30;
            doc.setFont("times", "normal");
            doc.setFontSize(18);
            doc.text(localAndDate, centerX, currentY, { align: "center" });

            // Código de autenticação
            currentY += 40;
            doc.setFont("Times", "normal");
            doc.setFontSize(12);
            doc.text(`Código de autenticação: ${code}`, centerX, currentY, { align: "center" });

            // QR Code pequeno no canto
            doc.addImage(qrDataUrl, 'PNG', 727, 150, 50, 50);

            // Segunda página (fundo branco)
            doc.addPage([842, 595], 'landscape');
            let y = 120;

            // Título da segunda página
            doc.setFont("Times", "bold");
            doc.setFontSize(22);
            doc.text("QR Code para Validação", centerX, y, { align: "center" });
            y += 40;

            // QR Code grande centralizado
            doc.addImage(qrDataUrl, 'PNG', 371, y, 100, 100);
            y += 140;

//             // Informações do certificado
//             doc.setFont("Times", "bold");
//             doc.setFontSize(16);
//             doc.text(`Tipo: ${templateTitle}`, centerX, y, { align: "center" });
//             y += 25;
//
//             doc.setFont("Times", "normal");
//             doc.setFontSize(14);
//             doc.text(`Modalidade: ${userType} - ${certType}`, centerX, y, { align: "center" });
//             y += 25;

            // Código de autenticação
            doc.setFontSize(16);
            doc.text(`Código de autenticação: ${code}`, centerX, y, { align: "center" });
            y += 20;

            // Link para validação
            doc.setFont("Times", "normal");
            doc.setFontSize(14);
            doc.text(`Valide em: ${qrUrl}`, centerX, y, { align: "center", maxWidth: 700 });
            y += 20;

            // Data de criação do certificado
            doc.text(`Data de emissão: ${new Date().toLocaleString('pt-BR')}`, centerX, y, { align: "center" });
            y += 50;

            // NOTA LEGAL
            doc.setFontSize(18);
            doc.setFont("Times", "bold");
            doc.text("NOTA LEGAL:", centerX, y, { align: "center" });
            y += 30;

            doc.setFontSize(12);
            doc.setFont("Times", "normal");
            const notaLegal = [
              "O certificado é um documento de comprovação da sua atividade científica no evento.",
              "Sua adulteração e uso indevido é ilegal e está sujeita às penas da lei.",
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
                return;
              }
              doc.text(line, centerX, y + i * 15, { align: "center", maxWidth: 400 });
            });

            // Nome do arquivo baseado no template e participante
            const safeName = participantName.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_-]/g, "");
            const templateName = certificateData?.template?.metadata?.template || certType || 'certificado';
            const fileName = `${templateName}-${safeName}-${code}.pdf`;

            // Salvar arquivo
            doc.save(fileName);

            resolve();

          } catch (error) {
            console.error('Erro ao processar imagem e gerar PDF:', error);
            reject(error);
          }
        };

        img.onerror = () => {
          console.warn('Não foi possível carregar a imagem do certificado, gerando PDF apenas com texto');

          try {
            // Se não conseguir carregar a imagem, gerar PDF sem ela
            // Gerar PDF apenas com texto
            doc.setFont("Times", "bold");
            doc.setFontSize(24);
            doc.text(templateTitle, 421, 100, { align: "center" });

            const textLines = getDisplayLines();
            let currentY = 150;

            textLines.forEach((line, index) => {
              if (!line || line.trim() === '') return;

              // Definir estilos e espaçamento baseado no contexto da linha
              let fontSize, baseSpacing, fontWeight;
              if (index === 0) {
                fontWeight = certificateData.certType === 'PRESENTATION' ? "normal" : "bold";

                // Aplicar fonte usando método mais direto
                if (certificateData.certType === 'PRESENTATION') {
                  doc.setFont("times", "normal");
                } else {
                  doc.setFont("times", "bold");
                }

                fontSize = certificateData.certType === 'PRESENTATION' ? 16 : 22;
                doc.setFontSize(fontSize);
                baseSpacing = certificateData.certType === 'PRESENTATION' ? Math.round(18 * 1.1) : 30;
                currentY += baseSpacing;
              } else if (isNameLine(line, index)) {
                doc.setFont("Times", "bold");
                fontSize = certificateData.certType === 'PRESENTATION' ? 16 : 20;
                doc.setFontSize(fontSize);
                baseSpacing = 30;
                currentY += baseSpacing;
              } else {
                doc.setFont("Times", "normal");
                fontSize = 16;
                doc.setFontSize(fontSize);
                baseSpacing = Math.round(16 * 1.1); // Aumento de 10%
                currentY += baseSpacing;
              }

              // Calcular quebras de linha para ajustar espaçamento
              const maxWidth = 700;
              const { linesCount, extraSpacing } = calculateTextLines(doc, line, maxWidth, fontSize);

              // Se o texto não quebra, renderizar normalmente
              if (linesCount === 1) {
                doc.text(line, 421, currentY, { align: "center", maxWidth: 700 });
              } else {
                // Se o texto quebra em múltiplas linhas, renderizar linha por linha com espaçamento
                const words = line.split(' ');
                let currentLineText = '';
                let lineIndex = 0;
                const lineSpacing = fontSize * 1.22; // 22% a mais entre linhas quebradas

                words.forEach((word, wordIndex) => {
                  const testLine = currentLineText ? `${currentLineText} ${word}` : word;
                  const testWidth = doc.getTextWidth(testLine);

                  if (testWidth > maxWidth && currentLineText) {
                    // Renderizar a linha atual
                    doc.text(currentLineText, 421, currentY + (lineIndex * lineSpacing), {
                      align: "center"
                    });
                    lineIndex++;
                    currentLineText = word;
                  } else {
                    currentLineText = testLine;
                  }

                  // Se é a última palavra, renderizar a linha final
                  if (wordIndex === words.length - 1) {
                    doc.text(currentLineText, 421, currentY + (lineIndex * lineSpacing), {
                      align: "center"
                    });
                  }
                });

                // Ajustar currentY para as linhas adicionais
                currentY += (linesCount - 1) * lineSpacing;
              }

              // Adicionar espaço extra após a linha do nome
              if (isNameLine(line, index)) {
                currentY += 20; // Espaço extra após o nome
              }
            });

            currentY += 15;
            doc.setFont("times", "normal");
            doc.setFontSize(18);
            doc.text(localAndDate, centerX, currentY, { align: "center" });

            currentY += 50;
            doc.setFont("Times", "normal");
            doc.setFontSize(12);
            doc.text(`Código de autenticação: ${code}`, 421, currentY, { align: "center" });

            // Adicionar QR Code mesmo sem imagem de fundo
            doc.addImage(qrDataUrl, 'PNG', 371, currentY + 30, 100, 100);

            const safeName = participantName.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_-]/g, "");
            const templateName = certificateData?.template?.metadata?.template || certType || 'certificado';
            const fileName = `${templateName}-${safeName}-${code}.pdf`;

            doc.save(fileName);
            resolve();

          } catch (error) {
            console.error('Erro ao gerar PDF sem imagem:', error);
            reject(error);
          }
        };
      } catch (qrError) {
        console.error('Erro ao gerar QR Code:', qrError);
        reject(qrError);
      }
    } catch (error) {
      console.error('Erro geral na função:', error);
      reject(error);
    }
  });
}

// Exportação explícita
export { generateCertificatePDF };

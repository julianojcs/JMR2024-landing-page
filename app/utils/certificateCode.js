import crypto from "crypto";

/**
 * Gera um código determinístico para o certificado baseado em nome, cpf, evento e tipo.
 * @param {string} name
 * @param {string} cpf
 * @param {string} eventCode
 * @param {string} userType
 * @returns {string} Código de 12 caracteres (MD5, maiúsculo)
 */
export function generateCertificateCode({ name, cpf, eventCode, userType }) {
  const input = `${name.trim().toUpperCase()}|${cpf.trim()}|${eventCode.trim().toUpperCase()}|${userType.trim().toUpperCase()}`;
  const hash = crypto.createHash("md5").update(input).digest("hex");
  return hash.slice(0, 12).toUpperCase();
}

export const validateCPF = (cpf) => {
  cpf = cpf.replace(/[^\d]/g, '');

  if (cpf.length !== 11) return false;

  // Verifica CPFs com todos os dígitos iguais
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  let sum = 0;
  let remainder;

  // Primeiro dígito verificador
  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(9, 10))) return false;

  // Segundo dígito verificador
  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(10, 11))) return false;

  return true;
};
export function formatPhone(value) {
  if (!value) return value;

  const phoneNumber = value.replace(/\D/g, '');

  if (phoneNumber.length <= 11) {
    return phoneNumber
      .replace(/^(\d{2})/, '($1)')
      .replace(/(\(\d{2}\))(\d{5})/, '$1$2-')
      .replace(/(-\d{4})\d+?$/, '$1');
  }

  return value.slice(0, 14);
}
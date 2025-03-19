export const formatCPF = (cpf) => {
  // Remove any non-digit characters
  const cleaned = cpf.replace(/\D/g, '')

  // Format as CPF: XXX.XXX.XXX-XX
  return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

export const validateCPF = (cpf) => {
  // Remove any non-digit characters
  cpf = cpf.replace(/\D/g, '')

  // Check if it has 11 digits
  if (cpf.length !== 11) return false

  // Check if all digits are the same
  if (/^(\d)\1{10}$/.test(cpf)) return false

  // Validate first digit
  let sum = 0
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i)
  }
  let digit = 11 - (sum % 11)
  if (digit > 9) digit = 0
  if (digit !== parseInt(cpf.charAt(9))) return false

  // Validate second digit
  sum = 0
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i)
  }
  digit = 11 - (sum % 11)
  if (digit > 9) digit = 0
  if (digit !== parseInt(cpf.charAt(10))) return false

  return true
}

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
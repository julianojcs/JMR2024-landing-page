import { join } from 'path'

// export const formatCPF = (cpf) => {
//   // Remove any non-digit characters
//   const cleaned = cpf.replace(/\D/g, '')
//
//   // Format as CPF: XXX.XXX.XXX-XX
//   return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
// }

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

// export function formatPhone(value) {
//   if (!value) return value;
//
//   const phoneNumber = value.replace(/\D/g, '');
//
//   if (phoneNumber.length <= 11) {
//     return phoneNumber
//       .replace(/^(\d{2})/, '($1)')
//       .replace(/(\(\d{2}\))(\d{5})/, '$1$2-')
//       .replace(/(-\d{4})\d+?$/, '$1');
//   }
//
//   return value.slice(0, 14);
// }

// export function verifyDate(ddmmaaaa) {
//   // Extrair o dia, mês e ano da string DDMMAAAA
//   const dia = parseInt(ddmmaaaa.slice(0, 2), 10)
//   const mes = parseInt(ddmmaaaa.slice(2, 4), 10) - 1 // Meses em JavaScript começam do 0
//   const ano = parseInt(ddmmaaaa.slice(4), 10)
//
//   // Criar um objeto Date com a data informada
//   const dataInformada = new Date(ano, mes, dia)
//
//   // Obter a data de hoje, sem horas, minutos e segundos
//   const hoje = new Date()
//   hoje.setHours(0, 0, 0, 0)
//
//   // Comparar a data informada com a data de hoje
//   return dataInformada >= hoje
// }

export function verifyDate(dateString, currentYear = new Date().getFullYear()) {
  // Adicionar logs para debug
  console.log(`Verificando data: ${dateString}, ano: ${currentYear}`);

  try {
    // Extrair dia e mês da string (formato DD/MM)
    const [day, month] = dateString.split('/').map(num => parseInt(num, 10));

    // Se o mês ou dia forem inválidos, retornar false
    if (isNaN(day) || isNaN(month) || day < 1 || day > 31 || month < 1 || month > 12) {
      console.warn(`Data inválida: ${dateString}`);
      return false;
    }

    // Criar objeto de data para a data especificada
    const specifiedDate = new Date(currentYear, month - 1, day);
    specifiedDate.setHours(0, 0, 0, 0);

    // Obter data atual e zerar hora
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    // Comparar se a data especificada é maior ou igual à atual
    const isValid = specifiedDate >= currentDate;

    console.log(`Data atual: ${currentDate.toLocaleDateString()}`);
    console.log(`Data especificada: ${specifiedDate.toLocaleDateString()}`);
    console.log(`A data ${dateString}/${currentYear} ${isValid ? 'é válida' : 'não é válida (tachada)'}`);

    return isValid;
  } catch (error) {
    console.error(`Erro ao verificar data ${dateString}:`, error);
    return false;
  }
}

const prepositions = ['de', 'da', 'do', 'das', 'dos', 'e', 'a', 'o', 'as', 'os'];

export const formatName = (name) => {
  if (!name) return '';

  // Trim whitespace from beginning and end
  const trimmedName = name.trim();

  return trimmedName.split(' ').map((word, index) => {
    // Check if word is a single letter (abbreviation)
    if (word.length === 1) {
      return `${word.toUpperCase()}.`;
    }

    // Convert prepositions to lowercase unless it's the first word
    if (index > 0 && prepositions.includes(word.toLowerCase())) {
      return word.toLowerCase();
    }

    // Capitalize first letter, rest lowercase
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
};

export const formatCPF = (value) => {
  if (!value) return '';
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

export const formatPhone = (value) => {
  if (!value) return '';
  const numbers = value.replace(/\D/g, '');
  if (numbers.length === 11) {
    return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1)$2-$3');
  }
  return numbers.replace(/(\d{2})(\d{4})(\d{4})/, '($1)$2-$3');
};

export const formatCEP = (value) => {
  if (!value) return '';
  return value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1');
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Normaliza um nome removendo caracteres especiais e substituindo espaços por hífens
 * @param {string} name - Nome a ser normalizado
 * @returns {string} Nome normalizado
 */
export const normalizeFileName = (name) => {
  return name
    .normalize('NFD')
    .replace(/[^\w\s]/gi, '')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase();
};
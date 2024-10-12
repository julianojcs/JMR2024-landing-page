export function verificarData(ddmmaaaa) {
  // Extrair o dia, mês e ano da string DDMMAAAA
  const dia = parseInt(ddmmaaaa.slice(0, 2), 10)
  const mes = parseInt(ddmmaaaa.slice(2, 4), 10) - 1 // Meses em JavaScript começam do 0
  const ano = parseInt(ddmmaaaa.slice(4), 10)

  // Criar um objeto Date com a data informada
  const dataInformada = new Date(ano, mes, dia)

  // Obter a data de hoje, sem horas, minutos e segundos
  const hoje = new Date()
  hoje.setHours(0, 0, 0, 0)

  // Comparar a data informada com a data de hoje
  return dataInformada >= hoje
}

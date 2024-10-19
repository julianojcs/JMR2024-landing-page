import { existsSync, lstatSync, readdirSync } from 'fs'
import { join, extname } from 'path'

export function verifyDate(ddmmaaaa) {
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

export function loadImagesFromFolders(folderPath) {
  const result = {}

  if (!existsSync(folderPath) || !lstatSync(folderPath).isDirectory()) {
    throw new Error('Invalid folder path')
  }

  const subfolders = readdirSync(folderPath).filter((subfolder) => {
    return lstatSync(join(folderPath, subfolder)).isDirectory()
  })

  subfolders.forEach((subfolder) => {
    const subfolderPath = join(folderPath, subfolder)
    const imageFiles = readdirSync(subfolderPath).filter((file) => {
      return ['.jpeg', '.jpg', '.png'].includes(extname(file).toLowerCase())
    })

    result[subfolder] = imageFiles.map((file) => {
      const imagePath = join(subfolderPath, file)
        .replace('public', '') // Remove a pasta public
        .replace(/\\/g, '/') // Corrige o caminho para usar barras
      const name = file.replace(extname(file), '').replace(/_/g, ' ')
      // .replace(/^\w/, (char) => char.toUpperCase())

      return { imagePath: imagePath, name: name, fileName: file }
    })
  })

  return result
}
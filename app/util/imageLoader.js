import { existsSync, lstatSync, readdirSync } from 'fs'
import { join, extname } from 'path'

function loadImagesFromFolders(folderPath) {
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
      const name = file.replace(extname(file), '').replace(/-/g, ' ')
      // .replace(/^\w/, (char) => char.toUpperCase())

      return { imagePath: imagePath, name: name, fileName: file }
    })
  })

  return result
}

export { loadImagesFromFolders }

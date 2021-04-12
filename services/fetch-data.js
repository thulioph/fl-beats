import { getFilesByDir, readYamlFiles } from './file-manager'

const sortById = (array) => array.sort((a, b) => b.id - a.id)

export const getBeats = () => {
  try {
    const directory = 'public/beats'
    const files = getFilesByDir(directory)
    const data = readYamlFiles(files)

    return sortById(data)
  } catch (error) {
    console.error('Houston, we have a problem!', error)
  }
}
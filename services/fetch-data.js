import { getFilesByDir, readYamlFiles } from './file-manager'

export const getBeats = () => {
  try {
    const directory = 'public/beats'
    const files = getFilesByDir(directory)
    const data = readYamlFiles(files)

    return data
  } catch (error) {
    console.error('Houston, we have a problem!', error)
  }
}
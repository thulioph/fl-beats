import { getFilesByDir, readYamlFiles } from '../../services/file-manager'

const getEverythingWeNeed = () => {
  try {
    const directory = 'public/beats'
    const files = getFilesByDir(directory)
    const data = readYamlFiles(files)

    return data
  } catch (error) {
    console.error('Houston, we have a problem!', error)
  }
}

export default (req, res) => {
  const data = getEverythingWeNeed()

  res.status(200).json(data)
}

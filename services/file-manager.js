import path from 'path'
import { readFileSync, readdirSync } from 'fs'
import yaml from 'js-yaml'

const filterFiles = (fileName, extension) => {
	return fileName && fileName.includes(extension)
}

export const getFilesByDir = (dir) => {
	const allFiles = []
	const files = readdirSync(dir)

	files.forEach((fileName) => {
		const isValidFile = filterFiles(fileName, '.yml')

		if (isValidFile) {
			const filePath = path.resolve(dir, fileName)
			allFiles.push(filePath)
		}
	})

	return allFiles
}

export const readYamlFiles = (files) => {
	const allData = []

	files.forEach((file) => {
		const beat = readFileSync(file, 'utf-8')
		const data = yaml.load(beat)

		allData.push(data)
	})

	return allData
}
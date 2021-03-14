const getUrl = (env) => {
  if (env !== 'production') {
    return 'http://localhost:3000/api/hello'
  }

  return 'http://localhost:8000' // prod URL
}

export const getBeats = async () => {
  const apiUrl = getUrl('dev')

  const res = await fetch(apiUrl)
  const data = await res.json()

  if (!data) return []

  return data
}
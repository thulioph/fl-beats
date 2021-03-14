const getUrl = (env) => {
  if (env !== 'production') {
    return 'http://localhost:3000/api/hello'
  }

  return 'https://fl-beats-laf3hgl3j-thulioph.vercel.app/api/hello'
}

export const getBeats = async () => {
  const apiUrl = getUrl(process.env.NODE_ENV)

  const res = await fetch(apiUrl)
  const data = await res.json()

  if (!data) return []

  return data
}
import { configFile } from './../.config/config'

export const fetchHygraphQuery = async <T>(
  query: any,
  revalidate?: number,
): Promise<T> => {
  const response = await fetch(configFile.hygraph_url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${configFile.hygraph_token}`,
      'Cache-Control': revalidate ? `max-age=${revalidate}` : 'no-cache',
    },
    body: JSON.stringify({
      query,
    }),
  })

  const { data } = await response.json()

  return data
}

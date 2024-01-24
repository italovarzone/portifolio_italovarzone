export const fetchHygraphQuery = async <T>(
  query: any,
  revalidate?: number,
): Promise<T> => {
  const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_URL!, {
    cache: 'no-store',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
      'Cache-Control': revalidate ? `max-age=${revalidate}` : 'no-cache',
    },
    body: JSON.stringify({
      query,
    }),
  })

  const { data } = await response.json()

  return data
}

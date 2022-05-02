export async function useFetcher(path: RequestInfo): Promise<any> {
  const res = await fetch(path, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    throw error;
  }

  return res.json();
}

export async function fetchPets(category) {
  const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');
  let url = `${apiBaseUrl}/sunga/api/v1/pets`;
  if (category && category !== 'ALL') {
    url += `?category=${category}`;
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch pets');
  if (res.status === 204) return [];
  return res.json();
}

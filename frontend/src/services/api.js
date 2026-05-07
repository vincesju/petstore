export async function fetchPets(category) {
  let url = '/sunga/api/v1/pets';
  if (category && category !== 'ALL') {
    url += `?category=${category}`;
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch pets');
  return res.json();
}

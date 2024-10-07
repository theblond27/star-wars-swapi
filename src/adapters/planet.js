const PLANET_URI = import.meta.env.VITE_API_URL + 'planets'

async function listPlanets(currentPage) {
  const response = await fetch(`${PLANET_URI}/?page=${currentPage}`, { method: 'GET' })
  return await response.json();
}

export {
  listPlanets,
}
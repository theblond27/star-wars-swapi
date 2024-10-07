const STARSHIP_URI = import.meta.env.VITE_API_URL + '/starships'

async function list(currentPage) {
  const response = await fetch(`${STARSHIP_URI}/?page=${currentPage}`, { method: 'GET' })
  return await response.json();
}

export {
  list
}

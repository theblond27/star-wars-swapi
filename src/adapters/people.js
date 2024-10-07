const PEOPLE_URI = import.meta.env.VITE_API_URL + 'people'

async function retrieve(pilotsUrl) {
  const pilots = await Promise.all(
    pilotsUrl.map(async (url) => {
      const response = await fetch(url, { method: 'GET' });
      return await response.json();
    })
  );

  return pilots;
}

async function getPilot(pilotId) {
  const response = await fetch(`${PEOPLE_URI}/${pilotId}`, { method: 'GET' });
  return await response.json();
}

async function listPeoples(currentPage) {
  const response = await fetch(`${PEOPLE_URI}/?page=${currentPage}`, { method: 'GET' })
  return await response.json();
}

export {
  retrieve,
  getPilot,
  listPeoples,
}
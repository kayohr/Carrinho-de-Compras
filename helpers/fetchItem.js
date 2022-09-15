const fetchItem = async (id) => {
  try { 
  const url = `https://api.mercadolibre.com/items/${id}`; 
  const request = await fetch(url);
  const response = await request.json();
  return response;
  } catch (error) {
  return error;
}
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}

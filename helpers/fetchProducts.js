const fetchProducts = async (e) => {
try { 
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${e}`; 
const request = await fetch(url);
const response = await request.json();
return response.results;
} catch (error) {
return error;
}
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

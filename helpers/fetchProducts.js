const fetchProducts = async () => {
const url = `https://api.mercadolibre.com/sites/MLB/search?q=${''}`;
const n = await fetch(url)
.then((response) => response.json())
.then((e) => e.response)
.catch((error) => error.toString());
return n;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

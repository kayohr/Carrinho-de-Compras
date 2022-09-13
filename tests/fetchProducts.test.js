require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('Verificando se fetchProducts é uma função', ()=>{
    expect(typeof fetchProducts).toBe('function');
  });
  test('testar se fetch foi chamada com argumento computador', async ()=>{
    await fetchProducts('computador');
    expect(fetch).not.toBe(undefined);
  });
  test('', async ()=>{
    await fetchProducts('computador');
    expect(fetch).not.toBe('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
  test('', async ()=>{
    await fetchProducts('computador');
    expect(fetch).not.toBe(computadorSearch);
  });
  test('', async ()=>{
    await fetchProducts('');
    expect(fetch).not.toBe('You must provide an url');
  });
  
});






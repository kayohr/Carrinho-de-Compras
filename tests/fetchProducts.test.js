require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('Verificando se fetchProducts é uma função', ()=>{
    expect(typeof fetchProducts).toBe('function');
  });
  test('testar se fetch foi chamada com argumento computador', async ()=>{
     fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  test('', async ()=>{
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
  test('', async ()=>{
    const result = await fetchProducts('computador');
    expect(result).toEqual(computadorSearch);
  });
  test('', async ()=>{
    const result = await fetchProducts();
    expect(result).toEqual(new Error('You must provide an url'));
  });
  
});






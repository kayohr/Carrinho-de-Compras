require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('Verificando se fetchProducts é uma função', ()=>{
    expect(typeof fetchItem).toBe('function');
  });
  test('', async ()=>{
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  test('', async ()=>{
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  test('', async ()=>{
    const result = await fetchItem('MLB1615760527');
    expect(result).toEqual(item);
  });
  test('', async ()=>{
    const result = await fetchItem();
    expect(() => (result).toThrowError('You must provide an url'));
  });
});

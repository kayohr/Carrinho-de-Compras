const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  test('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado', ()=>{
    expect(getSavedCartItems()).toBe(localStorage.getItem());
  });
  
  test('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o "cartItems" como parâmetro', ()=>{
    expect(getSavedCartItems()).toBe(localStorage.getItem('cartItems'));
  });
});

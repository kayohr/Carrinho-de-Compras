const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  test('Teste se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado', ()=>{
    expect(saveCartItems('cartItem')).toBe(localStorage.setItem());
  });
  
  test('', ()=>{
    expect(saveCartItems('cartItem')).toBe(localStorage.setItem('cartItems', 'saveCartItems'));
  });
});

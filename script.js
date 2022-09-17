// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// const getSavedCartItems = require('./helpers/getSavedCartItems');

// const { fetchItem } = require("./helpers/fetchItem");

// const { forEach } = require("cypress/types/lodash");

// const { fetchProducts } = require('./helpers/fetchProducts');

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
 // const getIdFromProductItem = (product) => product.querySelector('span.item_id').innerText;

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */

  async function removingItems(event) {
    return event.target.remove(); // https://pt.stackoverflow.com/questions/4605/remover-elemento-da-p%C3%A1gina-com-javascript
  }
  
  const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', removingItems);
  return li;
};

async function returnedProducts() {
  const products = await fetchProducts('computador');
  const items = document.querySelector('.items');
  products.forEach((element) => items.appendChild(createProductItemElement(element)));
}

async function itemsCart() {
  const cartItem = document.querySelector('.cart__items');
  const addItem = document.querySelectorAll('.item__add');
  // addItem.addEventListener('click', cartItem);
  addItem.forEach((element) => element.addEventListener('click', async () => {
     // console.log(element.parentNode);
    // const id = document.querySelector('span.item_id');
    const id = element.parentNode.firstChild.innerText;
   // console.log(id);
    const e = await fetchItem(id);
    // console.log(e);
    const test = createCartItemElement(e);
    cartItem.appendChild(test);
    saveCartItems(cartItem.innerHTML);
    }));
}

async function saved() { 
  const cartItem = document.querySelector('.cart__items');
  const savedItems = getSavedCartItems('cartItems');
  cartItem.innerHTML = savedItems;
  // console.log(savedItems);
  const array = [...cartItem.children]; // https://stackoverflow.com/questions/222841/most-efficient-way-to-convert-an-htmlcollection-to-an-array
  console.log(array);
  array.forEach((element) => element.addEventListener('click', removingItems));
  // console.log(cartItem.children);
  return cartItem;
}

window.onload = async () => { 
  await returnedProducts();
  await itemsCart();
  await saved();
};

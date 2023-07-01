import products from './product.js';
import { addToCart, clearCart, getCartItems, calculateTotal } from './cart.js';


const productListElement = document.getElementById('product-list');
const shoppingCartElement = document.getElementById('add-to-cart');
const clearCartButton = document.getElementById('clear-cart');

// Display product list
for (const product of products) {
  const productElement = document.createElement('div');
  productElement.className = 'product-item';
  productElement.innerHTML = `
  <img src="${product.img}"></img>
    <h3>${product.name}</h3>
    <p>Price: $${product.price}</p>
    <button class="btn btn-primary fw-bold add-to-cart" data-product-id="${product.id}">Add to Cart</button>
  `;
  productListElement.appendChild(productElement);
}

// Add event listener to "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
for (const button of addToCartButtons) {
  button.addEventListener('click', (event) => {
    const productId = parseInt(event.target.dataset.productId);
    const selectedProduct = products.find(product => product.id === productId);
    const quantity = parseInt(prompt('Enter the quantity:', '1'));
    addToCart(selectedProduct, quantity);
    displayCartItems();
  });
}


// Display cart items
function displayCartItems() {
  shoppingCartElement.innerHTML = '';
  const cartItems = getCartItems();
  for (const item of cartItems) {
    const itemElement = document.createElement('tr');
    itemElement.className = 'cart-item';
    itemElement.innerHTML = `
    <td>${item.name}</td>
    <td>$${item.price}</td>
    <td>${item.quantity}</td>
    <td>$${(item.price* item.quantity).toFixed(2)}</td>
    `;
    shoppingCartElement.appendChild(itemElement);
  }
  const total = calculateTotal();
  let fainalTotal = total.toFixed(2);
  const totalElement = document.createElement('h4');
  totalElement.className = 'total';
  totalElement.innerHTML = `Total Amount: $${fainalTotal}`;
  shoppingCartElement.appendChild(totalElement);
}

// Add event listener to "Clear Cart" button
clearCartButton.addEventListener('click', () => {
  clearCart();
  displayCartItems();
});

// Initial display of cart items
displayCartItems();






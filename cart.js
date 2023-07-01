const cartItems = [];

export function addToCart(product, quantity) {
  const cartItem = {
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: quantity
  };
  cartItems.push(cartItem);
}

export function clearCart() {
  cartItems.length = 0;
}

export function getCartItems() {
  return cartItems;
}

export function calculateTotal() {
  let total = 0;
  for (const item of cartItems) {
    total += item.price * item.quantity;
  }
  return total;
}

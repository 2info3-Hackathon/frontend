/*import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', () => {
  const showCart = ref(false);

  const cart = ref({
    items: [],
    total: 0,
  });

  function decrementProdutoToCart(produto) {
    const existingCart = cart.value.items.find((item) => item.id === produto.id);
    if (existingCart.quantity === 1) {
      cart.value.items = cart.value.items.filter((item) => item.id !== produto.id);
    } else {
      existingCart.quantity--;
    }
    cart.value.total -= produto.price;
  }

  function incrementProdutoToCart(produto) {
    const existingCart = cart.value.items.find((item) => item.id === produto.id);
    existingCart.quantity++;
    cart.value.total += produto.price;
  }

  function addToCart(produto) {
    const existingCart = cart.value.items.find((item) => item.id === produto.id);
    if (existingCart) {
      existingCart.quantity++;
    } else {
      cart.value.items.push({ ...produto, quantity: 1 });
    }
    cart.value.total += produto.price;
    alert(`Adicionado ${produto.title} ao cart!`);
  }

  return {
    showCart,
    cart,
    incrementProdutoToCart,
    decrementProdutoToCart,
    addToCart,
  };
});*/

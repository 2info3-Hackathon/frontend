import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    showCart: false,
    cart: {
      items: [],
      total: 0,
    }
  }),

  actions: {
    addToCart(produto) {
      const existingProduto = this.cart.items.find((item) => item.id === produto.id)
      if (existingProduto) {
        existingProduto.quantity++
      } else {
        this.cart.items.push({ ...produto, quantity: 1 })
      }
      this.cart.total += produto.preco
      alert(`Adicionado ${produto.nome} ao carrinho!`)
    },

    incrementProdutoToCart(produto) {
      const existingProduto = this.cart.items.find((item) => item.id === produto.id)
      if (existingProduto) {
        existingProduto.quantity++
        this.cart.total += produto.preco
      }
    },

    decrementProdutoToCart(produto) {
      const existingProduto = this.cart.items.find((item) => item.id === produto.id)
      if (!existingProduto) return

      if (existingProduto.quantity === 1) {
        this.cart.items = this.cart.items.filter((item) => item.id !== produto.id)
      } else {
        existingProduto.quantity--
      }
      this.cart.total -= produto.preco
    },

    toggleCart() {
      this.showCart = !this.showCart
    }
  }
})


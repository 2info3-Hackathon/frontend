import { defineStore } from 'pinia'

export const useProdutosStore = defineStore('produtos', {
  state: () => ({
    produtosAgro1: [
      { id: 1,
        nome: 'Produto Tipo 1A', 
        preco: 100, 
        local: 'B3',
        vendedor: 'Kauan',
        imagem: 'https://compremais.vtexassets.com/unsafe/fit-in/568x568/center/middle/https%3A%2F%2Fcompremais.vtexassets.com%2Farquivos%2Fids%2F422428%2FBarra-de-Chocolate-ao-Leite-Lacta-Pacote165g.jpg%3Fv%3D638686805480530000' 
      },

      { id: 2,
        nome: 'Produto Tipo 1B', 
        preco: 150, 
        vendedor: 'Kauan', 
        local: 'B3',
        imagem: 'https://compremais.vtexassets.com/unsafe/fit-in/568x568/center/middle/https%3A%2F%2Fcompremais.vtexassets.com%2Farquivos%2Fids%2F422428%2FBarra-de-Chocolate-ao-Leite-Lacta-Pacote165g.jpg%3Fv%3D638686805480530000' 
      },
        
      { id: 3,
        nome: 'Produto Tipo 1C', 
        preco: 200, 
        vendedor: 'Kauan', 
        local: 'B3', 
        imagem: 'https://compremais.vtexassets.com/unsafe/fit-in/568x568/center/middle/https%3A%2F%2Fcompremais.vtexassets.com%2Farquivos%2Fids%2F422428%2FBarra-de-Chocolate-ao-Leite-Lacta-Pacote165g.jpg%3Fv%3D638686805480530000' 
      },

    ],
    produtosAgro2: [
      { id: 1, nome: 'Produto Tipo 1A', preco: 100, local: 'B3', vendedor: 'Kauan',
        imagem: 'https://compremais.vtexassets.com/...jpg' },
      { id: 2, nome: 'Produto Tipo 1B', preco: 150, local: 'B3', vendedor: 'Kauan',
        imagem: 'https://compremais.vtexassets.com/...jpg' },
      { id: 3, nome: 'Produto Tipo 1C', preco: 200, local: 'B3', vendedor: 'Kauan',
        imagem: 'https://compremais.vtexassets.com/...jpg' },
    ],
    produtosAgro3: [
      { id: 1, nome: 'Produto Tipo 1A', preco: 100, local: 'B3', vendedor: 'Kauan',
        imagem: 'https://compremais.vtexassets.com/...jpg' },
      { id: 2, nome: 'Produto Tipo 1B', preco: 150, vendedor: 'Kauan', local: 'B3' },
      { id: 3, nome: 'Produto Tipo 1C', preco: 200, vendedor: 'Kauan', local: 'B3' },
    ],
    produtosInfo1: [
      { id: 1, nome: 'Produto Tipo 1A', preco: 100, local: 'B3', vendedor: 'Kauan',
        imagem: 'https://compremais.vtexassets.com/...jpg' },
      { id: 2, nome: 'Produto Tipo 1B', preco: 150, local: 'B3', vendedor: 'Kauan',
        imagem: 'https://compremais.vtexassets.com/...jpg' },
      { id: 3, nome: 'Produto Tipo 1C', preco: 200, local: 'B3', vendedor: 'Kauan',
        imagem: 'https://compremais.vtexassets.com/...jpg' },
    ],
    produtosInfo2: [
      { id: 1, nome: 'Produto Tipo 1A', preco: 100, local: 'B3', vendedor: 'Kauan',
        imagem: 'https://compremais.vtexassets.com/...jpg' },
      { id: 2, nome: 'Produto Tipo 1B', preco: 150, vendedor: 'Kauan', local: 'B3' },
      { id: 3, nome: 'Produto Tipo 1C', preco: 200, vendedor: 'Kauan', local: 'B3' },
    ],
    produtosInfo3: [
      { id: 1, nome: 'Produto Tipo 1A', preco: 100, local: 'B3', vendedor: 'Kauan',
        imagem: 'https://compremais.vtexassets.com/...jpg' },
      { id: 2, nome: 'Produto Tipo 1B', preco: 150, local: 'B3', vendedor: 'Kauan',
        imagem: 'https://compremais.vtexassets.com/...jpg' },
      { id: 3, nome: 'Produto Tipo 1C', preco: 200, local: 'B3', vendedor: 'Kauan',
        imagem: 'https://compremais.vtexassets.com/...jpg' },
    ],
    produtosQuimi: [
      { id: 1, nome: 'Produto Tipo 1A', preco: 100, local: 'B3', vendedor: 'Kauan',
        imagem: 'https://compremais.vtexassets.com/...jpg' },
      { id: 2, nome: 'Produto Tipo 1B', preco: 150, vendedor: 'Kauan', local: 'B3' },
      { id: 3, nome: 'Produto Tipo 1C', preco: 200, vendedor: 'Kauan', local: 'B3' },
    ],

    cart: [],              // carrinho
    isCartVisible: false    // visibilidade (se quiser abrir/fechar carrinho)
  }),

  getters: {
    getProdutosAgro1: (state) => state.produtosAgro1,
    getProdutosAgro2: (state) => state.produtosAgro2,
    getProdutosAgro3: (state) => state.produtosAgro3,
    getProdutosInfo1: (state) => state.produtosInfo1,
    getProdutosInfo2: (state) => state.produtosInfo2,
    getProdutosInfo3: (state) => state.produtosInfo3,
    getProdutosQuimi: (state) => state.produtosQuimi,

    getCart: (state) => state.cart,
    getTotalCart: (state) => state.cart.reduce((total, produto) => total + produto.preco, 0),
    getIsCartVisible: (state) => state.isCartVisible,
  },

  actions: {
    addToCart(produto) {
      const exists = this.cart.find(p => p.id === produto.id)
      if (!exists) {
        this.cart.push(produto)
      }
    },
    removeFromCart(produtoId) {
      this.cart = this.cart.filter(p => p.id !== produtoId)
    },
    clearCart() {
      this.cart = []
    },
    toggleCart() {
      this.isCartVisible = !this.isCartVisible
    }
  }
})






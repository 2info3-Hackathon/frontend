import { defineStore } from 'pinia';


export const useProdutosStore = defineStore('produtos', {
  state: () => ({

    produtosAgro1: [
      { id: 1,
        nome: 'Produto Tipo 1A',
        preco: 100,
        local: 'B3',
        vendedor: 'Kauan',
         imagem: 'https://compremais.vtexassets.com/unsafe/fit-in/568x568/center/middle/https%3A%2F%2Fcompremais.vtexassets.com%2Farquivos%2Fids%2F422428%2FBarra-de-Chocolate-ao-Leite-Lacta-Pacote165g.jpg%3Fv%3D638686805480530000',
      },
      { id: 2,
        nome: 'Produto Tipo 1B',
        preco: 150,
        vendedor: 'Kauan',
        local: 'B3',
      },
      { id: 3,
        nome: 'Produto Tipo 1C',
        preco: 200,
        vendedor: 'Kauan',
        local: 'B3',
      },
    ],

   produtosAgro2: [
      { id: 1,
        nome: 'Produto Tipo 1A',
        preco: 100,
        local: 'B3',
        vendedor: 'Kauan',
        imagem: 'https://compremais.vtexassets.com/unsafe/fit-in/568x568/center/middle/https%3A%2F%2Fcompremais.vtexassets.com%2Farquivos%2Fids%2F422428%2FBarra-de-Chocolate-ao-Leite-Lacta-Pacote165g.jpg%3Fv%3D638686805480530000',
      },
      { id: 2,
        nome: 'Produto Tipo 1B',
        preco: 150,
        local: 'B3',
        vendedor: 'Kauan',
        imagem: 'https://compremais.vtexassets.com/unsafe/fit-in/568x568/center/middle/https%3A%2F%2Fcompremais.vtexassets.com%2Farquivos%2Fids%2F422428%2FBarra-de-Chocolate-ao-Leite-Lacta-Pacote165g.jpg%3Fv%3D638686805480530000',
      },
      { id: 3,
        nome: 'Produto Tipo 1C',
        preco: 200,
        local: 'B3',
        vendedor: 'Kauan',
        imagem: 'https://compremais.vtexassets.com/unsafe/fit-in/568x568/center/middle/https%3A%2F%2Fcompremais.vtexassets.com%2Farquivos%2Fids%2F422428%2FBarra-de-Chocolate-ao-Leite-Lacta-Pacote165g.jpg%3Fv%3D638686805480530000',
      },
    ],

     produtosAgro3: [
      { id: 1,
        nome: 'Produto Tipo 1A',
        preco: 100,
        local: 'B3',
        vendedor: 'Kauan',
         imagem: 'https://compremais.vtexassets.com/unsafe/fit-in/568x568/center/middle/https%3A%2F%2Fcompremais.vtexassets.com%2Farquivos%2Fids%2F422428%2FBarra-de-Chocolate-ao-Leite-Lacta-Pacote165g.jpg%3Fv%3D638686805480530000',
      },
      { id: 2,
        nome: 'Produto Tipo 1B',
        preco: 150,
        vendedor: 'Kauan',
        local: 'B3',
      },
      { id: 3,
        nome: 'Produto Tipo 1C',
        preco: 200,
        vendedor: 'Kauan',
        local: 'B3',
      },
    ],

   produtosInfo1: [
      { id: 1,
        nome: 'Produto Tipo 1A',
        preco: 100,
        local: 'B3',
        vendedor: 'Kauan',
        imagem: 'https://compremais.vtexassets.com/unsafe/fit-in/568x568/center/middle/https%3A%2F%2Fcompremais.vtexassets.com%2Farquivos%2Fids%2F422428%2FBarra-de-Chocolate-ao-Leite-Lacta-Pacote165g.jpg%3Fv%3D638686805480530000',
      },
      { id: 2,
        nome: 'Produto Tipo 1B',
        preco: 150,
        local: 'B3',
        vendedor: 'Kauan',
        imagem: 'https://compremais.vtexassets.com/unsafe/fit-in/568x568/center/middle/https%3A%2F%2Fcompremais.vtexassets.com%2Farquivos%2Fids%2F422428%2FBarra-de-Chocolate-ao-Leite-Lacta-Pacote165g.jpg%3Fv%3D638686805480530000',
      },
      { id: 3,
        nome: 'Produto Tipo 1C',
        preco: 200,
        local: 'B3',
        vendedor: 'Kauan',
        imagem: 'https://compremais.vtexassets.com/unsafe/fit-in/568x568/center/middle/https%3A%2F%2Fcompremais.vtexassets.com%2Farquivos%2Fids%2F422428%2FBarra-de-Chocolate-ao-Leite-Lacta-Pacote165g.jpg%3Fv%3D638686805480530000',
      },
    ],

     produtosInfo2: [
      { id: 1,
        nome: 'Produto Tipo 1A',
        preco: 100,
        local: 'B3',
        vendedor: 'Kauan',
         imagem: 'https://compremais.vtexassets.com/unsafe/fit-in/568x568/center/middle/https%3A%2F%2Fcompremais.vtexassets.com%2Farquivos%2Fids%2F422428%2FBarra-de-Chocolate-ao-Leite-Lacta-Pacote165g.jpg%3Fv%3D638686805480530000',
      },
      { id: 2,
        nome: 'Produto Tipo 1B',
        preco: 150,
        vendedor: 'Kauan',
        local: 'B3',
      },
      { id: 3,
        nome: 'Produto Tipo 1C',
        preco: 200,
        vendedor: 'Kauan',
        local: 'B3',
      },
    ],

   produtosInfo3: [
      { id: 1,
        nome: 'Produto Tipo 1A',
        preco: 100,
        local: 'B3',
        vendedor: 'Kauan',
        imagem: 'https://compremais.vtexassets.com/unsafe/fit-in/568x568/center/middle/https%3A%2F%2Fcompremais.vtexassets.com%2Farquivos%2Fids%2F422428%2FBarra-de-Chocolate-ao-Leite-Lacta-Pacote165g.jpg%3Fv%3D638686805480530000',
      },
      { id: 2,
        nome: 'Produto Tipo 1B',
        preco: 150,
        local: 'B3',
        vendedor: 'Kauan',
        imagem: 'https://compremais.vtexassets.com/unsafe/fit-in/568x568/center/middle/https%3A%2F%2Fcompremais.vtexassets.com%2Farquivos%2Fids%2F422428%2FBarra-de-Chocolate-ao-Leite-Lacta-Pacote165g.jpg%3Fv%3D638686805480530000',
      },
      { id: 3,
        nome: 'Produto Tipo 1C',
        preco: 200,
        local: 'B3',
        vendedor: 'Kauan',
        imagem: 'https://compremais.vtexassets.com/unsafe/fit-in/568x568/center/middle/https%3A%2F%2Fcompremais.vtexassets.com%2Farquivos%2Fids%2F422428%2FBarra-de-Chocolate-ao-Leite-Lacta-Pacote165g.jpg%3Fv%3D638686805480530000',
      },
    ],

     produtosQuimi: [
      { id: 1,
        nome: 'Produto Tipo 1A',
        preco: 100,
        local: 'B3',
        vendedor: 'Kauan',
         imagem: 'https://compremais.vtexassets.com/unsafe/fit-in/568x568/center/middle/https%3A%2F%2Fcompremais.vtexassets.com%2Farquivos%2Fids%2F422428%2FBarra-de-Chocolate-ao-Leite-Lacta-Pacote165g.jpg%3Fv%3D638686805480530000',
      },
      { id: 2,
        nome: 'Produto Tipo 1B',
        preco: 150,
        vendedor: 'Kauan',
        local: 'B3',
      },
      { id: 3,
        nome: 'Produto Tipo 1C',
        preco: 200,
        vendedor: 'Kauan',
        local: 'B3',
      },
    ],

  }),





  getters: {
    getProdutosAgro1(state) {
      return state.produtosAgro1
    },
    getProdutosAgro2(state) {
      return state.produtosAgro2
    },
    getProdutosAgro3(state) {
      return state.produtosAgro3
    },
    getProdutosInfo1(state) {
      return state.produtosInfo1
    },
    getProdutosInfo2(state) {
      return state.produtosInfo2
    },
    getProdutosInfo3(state) {
      return state.produtosInfo3
    },
    getProdutosquimi(state) {
      return state.produtosQuimi
    },
    getCart(state) {
      return state.carrinho
    },
    getTotalCart(state) {
      return state.carrinho.reduce((total, produto) => total + produto.preco, 0)
    },
    getIsCartVisible(state) {
      return state.isCartVisible
    }
  },
  },
)



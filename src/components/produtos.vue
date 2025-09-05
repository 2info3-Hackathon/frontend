<script setup>
import { ref } from 'vue';

const showCart = ref(false);
const cart = ref({
  items: [],
  total: 0,
});
const carrinho = ref([]);

const info1 = ref([
  {
    id: 1,
    nome:'chocolate',
    preco: '5,00',
    descricao: 'marca Garoto',
    local: 'bloco E, cantina',
    imagem: 'https://compremais.vtexassets.com/unsafe/fit-in/568x568/center/middle/https%3A%2F%2Fcompremais.vtexassets.com%2Farquivos%2Fids%2F422428%2FBarra-de-Chocolate-ao-Leite-Lacta-Pacote165g.jpg%3Fv%3D638686805480530000',
  },
   {
    id: 2,
    nome:'chocolate',
    preco: '5,00',
    descricao: 'marca Garoto',
    local: 'bloco E, cantina',
    imagem: 'https://compremais.vtexassets.com/unsafe/fit-in/568x568/center/middle/https%3A%2F%2Fcompremais.vtexassets.com%2Farquivos%2Fids%2F422428%2FBarra-de-Chocolate-ao-Leite-Lacta-Pacote165g.jpg%3Fv%3D638686805480530000',
  },
   {
    id: 3,
    nome:'chocolate',
    preco: '5,00',
    descricao: 'marca Garoto',
    local: 'bloco E, cantina',
    imagem: 'https://compremais.vtexassets.com/unsafe/fit-in/568x568/center/middle/https%3A%2F%2Fcompremais.vtexassets.com%2Farquivos%2Fids%2F422428%2FBarra-de-Chocolate-ao-Leite-Lacta-Pacote165g.jpg%3Fv%3D638686805480530000',
  },
   {
    id: 4,
    nome:'chocolate',
    preco: '5,00',
    descricao: 'marca Garoto',
    local: 'bloco E, cantina',
    imagem: 'https://compremais.vtexassets.com/unsafe/fit-in/568x568/center/middle/https%3A%2F%2Fcompremais.vtexassets.com%2Farquivos%2Fids%2F422428%2FBarra-de-Chocolate-ao-Leite-Lacta-Pacote165g.jpg%3Fv%3D638686805480530000',
  },
]);

function adicionarProduto(prod) {
  const existente = carrinho.value.find((p) => p.id === prod.id);
  if (existente) {
    existente.quantidade++;
  } else {
    carrinho.value.push({ ...prod, quantidade: 1 });
  }
}


</script>
<template>


  <p @click="showCart = !showCart">abrir carrinho</p>

    <section class="info1">
       <img src="/public/Banner3Info1.png" alt="" width="1834" height="">

         <div>
    <ul>
      <li v-for="produto in info1" :key="produto.id">
        <p><img :src="produto.imagem" alt="" width="200" height="200"></p>
        <p class="imagem">{{ imagem }}</p>
        <p class="nome"> {{ produto.nome }}</p>

        <p v-for="preco in info1" :key="preco.id"></p>
        <p class="preco"> R${{ produto.preco }}</p>

        <p v-for="local in info1" :key="local.id"></p>
        <p class="local"> {{ produto.local }}</p>

        <div v-if="carrinho.find(p => p.id === livro.id)">
          <button class="botao"> <a class="fa-solid fa-square-plus"></a> Comprado</button>
        </div>

        <div v-else>
          <button class="comprar" @click="adicionarProduto(livro)"><a class="fa-solid fa-square-plus"></a> Comprar</button>

        </div>


        </li>
    </ul>
   </div>

    </section>
    <main v-if="showCart">
  <section class="cart">
    <h2>Carrinho</h2>
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="produto in cart.items" :key="produto.id">
          <td class="cart-item">
            <img :src="produto.nome" :alt="produto.nome" />
            <div class="cart-item-info">
              <p class="cart-item-title">{{ produto.nome }}</p>
              <p class="cart-item-author">{{ produto.preco }}</p>
              <p class="cart-item-price">R$ {{ produto.local }}</p>
            </div>
          </td>
          <td>
            <div class="cart-item-quantity">
              <button class="plain">
                <span class="mdi mdi-minus" />
              </button>
              {{ book.quantity }}
              <button class="plain">
                <span class="mdi mdi-plus" />
              </button>
            </div>
          </td>
          <td class="cart-item-subtotal">
            R$ {{ book.price * book.quantity }}
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="showCart = false" class="outlined">Voltar para loja</button>
    <div class="cart-summary">
      <div class="cupom">
        <input type="text" placeholder="Código do cupom" />
        <button>Inserir cupom</button>
      </div>
      <div class="summary">
        <h2>Total da Compra</h2>
        <div class="summary-items">
          <span>Produtos</span> <span>R$ {{ cart.total.toFixed(2) }}</span>
          <span>Frete</span> <span> Grátis</span> <span>Total</span>
          <span>R$ {{ cart.total.toFixed(2) }}</span>
        </div>
        <button>Ir para pagamento</button>
      </div>
    </div>
  </section>
</main>
<main v-else>


</template>

<style scoped>
section.info1 ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 2vw;
}

section.info1 li {
  box-sizing: border-box;
  width: 20%;
  margin: 6vw 1vw 0 0;
  padding: 0 1vw;
  white-space: nowrap;
  list-style: none;
}
section.info1 div p.nome {
  margin: 0 0 0.2vw 0;
  font-family: bold;
  font-size: 1.6vw;
}
section.info1 div p.local {
  font-family: bold;
  font-size: 1.4vw;
}
section.info1 div p.preco {
  font-family: bold;
  font-size: 1.2vw;
}
section.info1 div button.comprar {
  font-size: 1vw;
  font-weight: bold;
  color: white;
  margin: 0.6vw 0 0 0;
  padding: 1vw 4vw 1vw 4vw;
  background-color: #5BA3CF;
  border-color: #5BA3CF;
  border-radius: 0.4vw;
  cursor: pointer;
  transition: all 0.3s ease;
}
section.info1 div button.comprar:hover {
  background-color: #1e88e5;
    transform: scale(1.2);
    border-color: #1e88e5;
}
hr {
  margin: 2vw 0 0 0;
  height: 0.2vw;
  background-color: #5BA3CF;
}

</style>

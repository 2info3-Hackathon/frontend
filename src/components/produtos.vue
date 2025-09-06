<script setup>
import { ref } from 'vue'


const showCart = ref(false)
const cart = ref({
  items: [],
  total: 0,
})

function decrementProdutoToCart(produto) {
  const existingProduto = cart.value.items.find((item) => item.id === produto.id)
  if (existingProduto.quantity === 1) {
    cart.value.items = cart.value.items.filter((item) => item.id !== produto.id)
  } else {
    existingProduto.quantity--
  }
  cart.value.total -= produto.preco
}

function incrementProdutoToCart(produto) {
  const existingProduto = cart.value.items.find((item) => item.id === produto.id)
  existingProduto.quantity++
  cart.value.total += produto.preco
}

function addToCart(produto) {
  const existingProduto = cart.value.items.find((item) => item.id === produto.id)
  if (existingProduto) {
    existingProduto.quantity++
  } else {
    cart.value.items.push({ ...produto, quantity: 1 })
  }
  cart.value.total += produto.preco
  alert(`Adicionado ${produto.nome} ao carrinho!`)
}

</script>

<template>
   <li @click="showCart = !showCart"><span class="mdi mdi-cart"></span></li>
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
              <img :src="produto.local" :alt="produto.nome" />
              <div>
                <p>{{ produto.nome }}</p>
                <p>{{ produto.vendedor }}</p>
                <p>R$ {{ produto.preco.toFixed(2) }}</p>
              </div>
            </td>
            <td>
              <div>
                <button @click="decrementProdutoToCart(produto)" class="plain">
                  <span class="mdi mdi-minus" />
                </button>
                {{ produto.quantity }}
                <button @click="incrementProdutoToCart(produto)" class="plain">
                  <span class="mdi mdi-plus" />
                </button>
              </div>
            </td>
            <td class="cart-item-subtotal">R$ {{ produto.preco * produto.quantity }}</td>
          </tr>
        </tbody>
      </table>
      <button @click="showCart = false" class="outlined">Voltar para loja</button>
      <div class="cart-summary">
        <div class="summary">
          <h2>Total da Compra</h2>
          <div class="summary-items">
            <span>Produtos</span> <span>R$ {{ cart.total.toFixed(2) }}</span> <span>Frete</span>
            <span> Grátis</span> <span>Total</span> <span>R$ {{ cart.total.toFixed(2) }}</span>
          </div>
          <button>Ir para pagamento</button>
        </div>
      </div>
    </section>
  </main>
  <main v-else>
    <section class="info1">
      <article class="produto" v-for="produto in info1" :key="produto.id">
        <img :src="produto.local" :alt="produto.nome" />
        <h2>{{ produto.nome }}</h2>
        <p class="produto-vendedor">{{ produto.vendedor }}</p>
        <span class="preco-and-like">
          <p class="produto-preco">R$ {{ produto.preco.toFixed(2) }}</p>
          <span class="mdi mdi-heart-outline"></span>
        </span>
        <button @click="addToCart(produto)"><span class="mdi mdi-cart"></span>Comprar</button>
      </article>
    </section>
  </main>

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

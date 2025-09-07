<script setup>
import { ref } from 'vue'


const showCart = ref(false)
const cart = ref({
  items: [],
  total: 0,
})



</script>

<template>
   <li @click="showCart = !showCart"><span class="mdi mdi-cart"></span></li>
  <main v-if="showCart">
    <section class="cartCompras">
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
    <section class="lista">
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

</style>

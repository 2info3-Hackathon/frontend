<script setup>
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()

</script>

<template>
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
          <tr v-for="produto in cartStore.cart.items" :key="produto.id">
            <td class="cart-item">
              <img :src="produto.imagem" :alt="produto.nome" width="50" height="50"/>
              <div>
                <p>{{ produto.nome }}</p>
                <p>{{ produto.vendedor }}</p>
                <p>R$ {{ produto.preco.toFixed(2) }}</p>
              </div>
            </td>
            <td>
              <div>
                <button @click="cartStore.decrementProdutoToCart(produto)" class="plain">
                  <span class="mdi mdi-minus" />
                </button>
                {{ produto.quantity }}
                <button @click="cartStore.incrementProdutoToCart(produto)" class="plain">
                  <span class="mdi mdi-plus" />
                </button>
              </div>
            </td>
            <td class="cart-item-subtotal">
              R$ {{ (produto.preco * produto.quantity).toFixed(2) }}
            </td>
          </tr>
        </tbody>
      </table>

      <button @click="cartStore.toggleCart" class="outlined">
        Voltar para loja
      </button>

      <div class="cart-summary">
        <div class="summary">
          <h2>Total da Compra</h2>
          <div class="summary-items">
            <span>Produtos</span>
            <span>R$ {{ cartStore.cart.total.toFixed(2) }}</span>
            <span>Total</span>
            <span>R$ {{ cartStore.cart.total.toFixed(2) }}</span>
          </div>
          <button>Ir para reservar</button>
        </div>
      </div>
      <button @click="fecharCarrinho" class="outlined">
      Voltar
    </button>
    </section>

</template>

<style scoped>

</style>
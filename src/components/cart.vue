<script setup>
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()


</script>

<template>
        <section class="cartCompras">
      <h1>Carrinho</h1>
      <table>
        <thead>
          <tr>
            <th>Produtos </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="produto in cartStore.cart.items" :key="produto.id">
            <td class="cart-item">
              <img :src="produto.imagem" :alt="produto.nome" width="200" height="200"/>
              <div>
                <p class="nome">{{ produto.nome }}</p>
                <p class="preco">R$ {{ produto.preco.toFixed(2) }}</p>
                <p class="data"> {{ produto.data }} </p>
                <p class="hora"> {{ produto.hora }} </p>
                <p class="local"> {{ produto.local }}</p>
                <p class="vendedor">{{ produto.vendedor }}</p>

              </div>
            </td>
            <td>
              <div class="quantidade">
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

      

      <div class="cart-final">
        <div class="final">
          <h2>Total da Compra</h2>
          <div class="final-items">
            <span>Produtos</span>
            <span>R$ {{ cartStore.cart.total.toFixed(2) }}</span>
            <span>Total</span>
            <span>R$ {{ cartStore.cart.total.toFixed(2) }}</span>
          </div>
          <button>Ir para reservar</button>
        </div>
      </div>
     <button @click="cartStore.toggleCart" class="outlined">
        Voltar para loja
      </button>
    </section>

</template>

<style scoped>
section.cartCompras h1 {
  display: flex;
  justify-content: center;
  font-size: 3rem;
}
section.cartCompras th {
  font-size: 2rem;
  padding: 5vw 0 3vw 6vw;
}
section.cartCompras td img {
  margin: 0 0 3vw 6vw;
}
p.nome {
    margin:0 0 0 6vw;
  font-family: bold;
  font-size: 1.6vw;
}
p.preco {
  margin: 0 0 0 6vw;
  font-family: bold;
  font-size: 1.2vw;
}
p.local {
  margin: 0 0 0 6vw;
  font-family: bold;
  font-size: 1.4vw;
}
p.vendedor {
  margin: 0 0 0 6vw;
}
div.quantidade {
  margin: 10vw 0 0 0;
}
div.quantidade button {
  padding:  4px 12px 4px 12px;
  font-size: 1vw;
  font-weight: bold;
  color: white;
  background-color: #5BA3CF;
  border-color: #5BA3CF;
  border-radius: 0.4vw;
  cursor: pointer;
  transition: all 0.3s ease;
}
div.quantidade button:hover {
  background-color: #1e88e5;
  transform: scale(1.2);
  border-color: #1e88e5;
}
div.cart-final {
  margin: 0 13vw 20vw 0 ;
  display: flex;
  justify-content: right;   

}
/*position: fixed;    fixa o elemento na tela 
  top: 6vw;             encosta no topo 
  left: 4vw;            começa do lado esquerdo 
  width: 100%; 
*/
</style>

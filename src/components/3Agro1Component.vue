<script setup>
import { useProdutosStore } from '@/stores/produtos'
import { useCartStore } from '@/stores/cartStore';
const cartStore = useCartStore()
const store = useProdutosStore();
const agro1 = store.agro1

console.log('Produtos carregados:', agro1);

</script>

<template>


  <section >
    <img src="/public/3Agro1.png" alt="3Agro1" height="497" width="">
    <div class="aviso" v-if="!agro1 || agro1.length === 0">Nenhum produto foi adicionado no momento  </div>

    <article v-for="produto in agro1" :key="produto.id">
      <div v-if="produto.imagem">
        <img :src="produto.imagem" alt="Produto" width="200" height="200" class="w-32 h-32 object-cover"/>
      </div>

      <p class="nome"> {{ produto.nomeProduto }}</p> 
      <p class="preco">R$ {{ produto.preco }}</p>
      <p class="local">{{ produto.local }}</p>
      <p class="horas">{{ produto.hora }}</p>
      <p class="data">{{ produto.data }}</p>
      <p>{{ produto.descricao }}</p>

      <button class="reservar" @click="cartStore.addToCart(produto)">
        <span class="mdi mdi-cart"></span> Reservar
      </button>
    </article>

   
  </section>
</template>
<style scoped>
div.aviso {
  display: flex;
  justify-content: center;
  margin: 14vw;
  font-size: 2.5rem;
  color: #1e88e5;
}

</style>

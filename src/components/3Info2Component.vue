<script setup>
import { useProdutosStore } from '@/stores/produtos'

const store = useProdutosStore();
const info2 = store.info2

console.log('Produtos carregados:', info2);

</script>

<template>


  <section >
    <img src="/public/3Info2.png" alt="3Info2" height="497" width="">
    <div v-if="!info2 || info2.length === 0">Nenhum produto encontrado.</div>

    <article v-for="produto in info2" :key="produto.id">
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


</style>

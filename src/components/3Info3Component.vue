<script setup>
import { useProdutosStore } from '@/stores/produtos'

const store = useProdutosStore();
const info3 = store.info3

console.log('Produtos carregados:', info3);

</script>

<template>


  <section >
    <img src="/public/3Info3.png" alt="3Info3" height="500" width="100%">
    <div v-if="!info3 || info3.length === 0">Nenhum produto encontrado.</div>

    <article v-for="produto in info3" :key="produto.id">
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
.produto{
  margin: 5vw 5vw;
  display: flex;
}

article{
  padding: 0 2vw;
}

button {
  background: linear-gradient(135deg, #1f68c7, #42a5f5);
  color: white;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
  border-radius: 5px;
  padding: 8px 5px;
  font-size: calc(1rem);
  margin: 4px 0 0 0;
}

button:hover {
  background: linear-gradient(135deg, #02367a, #1e88e5);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  transform: scale(1.05);
}
</style>

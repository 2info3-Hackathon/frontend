<script setup>
import { useProdutosStore } from '@/stores/produtos'
import { useCartStore } from '@/stores/cartStore';
const cartStore = useCartStore()
const store = useProdutosStore();
const agro3 = store.agro3

console.log('Produtos carregados:', agro3);

</script>

<template>


<img src="/public/agro3.png" alt="agro3" width="100%" height="500">
  <section class="produto">
    <div class="aviso" v-if="!agro3 || agro3.length === 0">Nenhum produto foi adicionado no momento  </div>


    <article v-for="produto in agro3" :key="produto.id">
      <div v-if="produto.imagem">
        <img :src="produto.imagem" alt="Produto" width="200" height="200" class="w-32 h-32 object-cover"/>
      </div>
      <div class="produtos">
        <ul>
      <li><p class="nome"> {{ produto.nomeProduto }}</p> </li>
      <li> <p class="preco">R$ {{ produto.preco }}</p></li>
     <li> <p class="local">{{ produto.local }}</p></li>
     <li> <p class="horas">{{ produto.hora }}</p></li>
     <li> <p class="data">{{ produto.data }}</p></li>
      <li><p>{{ produto.descricao }}</p></li>
      </ul>
      </div>

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
  flex: 0 1 220px;
  box-sizing: border-box;
  border: 1px solid #1e88e5;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
article img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
}
div.aviso {
  display: flex;
  justify-content: center;
   margin: 10vw 0 10vw 24vw;
  font-size: 2.5rem;
  color: #1e88e5;
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
.produto {
  margin: 5vw 5vw;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
}


div.produtos ul {
  display: block;
  padding: 0;
  margin: 0;
}
div.produtos li {
  width: 100%;
  padding: 2px 0;
  white-space: normal;
  list-style: none;
}
</style>

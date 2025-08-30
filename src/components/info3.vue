<script setup>
import { ref } from 'vue';

const mostrarTexto = ref(false);
const carrinho = ref([]);

const info3 = ref([
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

function alternarTexto(){
  mostrarTexto.value = !mostrarTexto.value;
}
</script>
<template>

    <section class="info3">
         <img src="/public/Banner3Info3.png" alt="" width="1324" height="">

         <div>
    <ul>
      <li v-for="produto in info3" :key="produto.id">
        <p><img :src="produto.imagem" alt="" width="200" height="200"></p>
        <p class="imagem">{{ imagem }}</p>
        <p class="nome"> {{ produto.nome }}</p>

        <p v-for="preco in info3" :key="preco.id"></p>
        <p class="preco"> R${{ produto.preco }}</p>

        <p v-for="local in info3" :key="local.id"></p>
        <p class="local"> {{ produto.local }}</p>

        <div v-if="carrinho.find(p => p.id === livro.id)">
          <button class="botao"> <a class="fa-solid fa-square-plus"></a> Reservado</button>
        </div>

        <div v-else>
          <button class="comprar" @click="adicionarProduto(livro)"><a class="fa-solid fa-square-plus"></a> Reservar</button>
          
        </div>
        

        </li>
    </ul>
   </div>

    </section>
    <hr>
    
</template>

<style scoped>
section.info3 ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 2vw;
}

section.info3 li {
  box-sizing: border-box;
  width: 20%;
  margin: 6vw 1vw 0 0;
  padding: 0 1vw;
  white-space: nowrap;
  list-style: none;
}
section.info3 div p.nome {
  margin: 0 0 0.2vw 0;
  font-family: bold;
  font-size: 1.6vw;
}
section.info3 div p.local {
  font-family: bold;
  font-size: 1.4vw;
}
section.info3 div button.comprar {
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
section.info3 div button.comprar:hover {
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
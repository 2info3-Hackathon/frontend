<script setup>
import { ref } from 'vue';

const mostrarTexto = ref(false);
const carrinho = ref([]);

const agro3 = ref([
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



</template>

<style scoped>


</style>

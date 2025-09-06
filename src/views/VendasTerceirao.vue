<script setup>
import { useRouter } from 'vue-router'
import { useProdutosStore } from '@/stores/produtosStore'

import produtos from '@/components/produtos.vue'


const produtosStore = useProdutosStore()

const produtosAgro1 = produtosStore.getProdutosAgro1
const produtosAgro2 = produtosStore.getProdutosAgro2




const router = useRouter()

function irPara3Agro1(){
    router.push('/3Agro1')
}
function irPara3Agro2(){
    router.push('/3Agro2')
}
function irPara3Agro3(){
    router.push('/3Agro3')
}
function irPara3Info1(){
    router.push('/3Info1')
}
function irPara3Info2(){
    router.push('/3Info2')
}
function irPara3Info3(){
    router.push('/3Info3')
}
function irPara3Quimi(){
    router.push('/3Quimi')
}


</script>

<template>
        <div class="tudo">

        <button @click="irParaCarrinhoView">carrinho</button>
    <h2>
        Turmas
    </h2>
    <section class="turmas">

        <div class="agro">
            <button @click="irPara3Agro1"> 3Agro1 </button>
            <button @click="irPara3Agro2"> 3Agro2 </button>
            <button @click="irPara3Agro3"> 3Agro3 </button>

        </div>
        <div class="info">
            <button @click="irPara3Info1"> 3Info1 </button>
            <button @click="irPara3Info2"> 3Info2 </button>
            <button @click="irPara3Info3"> 3Info3 </button>
        </div>

    </section>
     <div class="quimi">
             <button @click="irPara3Quimi"> 3Quimi </button>
        </div>
        </div>
   <button @click="irParaProduto">Adicionar Produto</button>

    <ul>
        <li v-for="produto in produtosAgro1" :key="produto.id">
          {{ produto.nome }} - R$ {{ produto.preco }} <p><img :src="produto.imagem" alt="" width="200" height="200"></p>
        <p class="imagem">{{ produto.imagem }}</p>
        </li>
      </ul>
       <ul>
        <li v-for="produto in produtosAgro2" :key="produto.id">
          {{ produto.nome }} -
          R$ {{ produto.preco }}
           <p><img :src="produto.imagem" alt="" width="200" height="200"></p>
        <p class="imagem">{{ produto.imagem }}</p>
        </li>
      </ul>
       <li @click="showCart = !showCart"><span class="mdi mdi-cart"></span></li>


       <produtos />







</template>
<style scoped>
h2 {
    display: flex;
    justify-content: center;
    margin: 0 33vw 0 33vw;
    background-color: white;
    padding: 10px 10px 10px 10px;
    border-radius: 60px;
    font-size: 30px;
    color: black;
}
div.tudo {
    background:  linear-gradient(135deg, #1e88e5, #42a5f5);
    margin: 4vw 10vw 4vw 10vw;
    padding: 2vw 0 3vw 0;
    border-radius: 7vw;
}
section.turmas {
    margin: 50px 300px 50px 150px;
    padding: 0 150px 0 150px;
    display: flex;


}
section.turmas button {
    padding: 14px 60px 14px 60px;
    margin: 40px 120px 40px 120px;
    background-color: white;
    color: black;
    border: 2px solid #1e88e5;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;

}
section.turmas button:hover {
    background-color: #1e88e5;
    transform: scale(1.2);
    border-color: #1e88e5;
    color: white;

}
section.turmas div.agro {
    background-color: white;
    margin: 0 30px 0 0;
    border-radius: 60px;
}
section.turmas div.info {
    background-color: white;
    margin: 0 0 0 30px;
    border-radius: 60px;
}
div.quimi {
    text-align: center;
    background-color: white;
    border-radius: 60px;
    font-size: 30px;
    margin: 0 30vw 0 30vw;

}
div.quimi button {
    padding: 14px 60px 14px 60px;
    margin: 20px 40px 20px 40px;
    background-color: white;
    color: black;
    border: 2px solid #1e88e5;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;
}
div.quimi button:hover {
    background-color: #1e88e5;
    transform: scale(1.2);
    border-color: #1e88e5;
    color: white;

}
</style>

<script setup>
import { useRouter } from 'vue-router'

import { useCartStore } from '@/stores/cartStore'
import cart from '@/components/cartComponent.vue'

import Agro1Component from '@/components/3Agro1Component.vue';
import Agro2Component from '@/components/3Agro2Component.vue';
import Agro3Component from '@/components/3Agro3Component.vue';
import Info1Component from '@/components/3Info1Component.vue';
import Info2Component from '@/components/3Info2Component.vue';
import Info3Component from '@/components/3Info3Component.vue';
import QuimiComponent from '@/components/3QuimiComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

const cartStore = useCartStore()

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
function irParaAdicionarProdutos() {
    router.push('adicionarProdutos')
}
function irParaReservados() {
  router.push('/reservados')
}
function voltar() {
    router.push('/')
}
</script>

<template>
     
    <div class="minhas-compras">
        <button class="colorido" @click="irParaReservados">Suas reservas feitas </button>

        <div class="carrinho-colorido" @click="cartStore.toggleCart">
            <span class="mdi mdi-cart-outline"></span>
        </div> 
    </div>
        <cart v-if="cartStore.showCart" />

        <div class="lista" v-else>
        <button class="colorido" @click="irParaAdicionarProdutos"> Adicionar Produtos </button>
            
    <div class="tudo">
    <h1>
        Turmas
    </h1>
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
       <agro1-component />
       <agro2-component />
       <agro3-component />
       <info1-component />
       <info2-component />
       <info3-component />
       <quimi-component />
       <button class="turmas" @click="voltar">← Voltar</button>
        </div>
        <FooterComponent/>
</template>

<style scoped>
h1 {
    margin: 0 33vw 0 33vw;
    background-color: white;
    padding: 10px 10px 10px 10px;
    border-radius: 20px;
    color: #1C72D3;
    text-align: center;
    font-size: calc(2.5rem);
    font-weight: bolder;
}

div.tudo {
    background: linear-gradient(135deg, #1f68c7, #42a5f5);
    margin: 4vw 4vw 4vw 4vw;
    padding: 2vw 0 3vw 0;
    border-radius: 40px;
}

section.turmas {
    margin: 50px 150px 50px 115px;
    display: flex;
}

section.turmas button {
    padding: 14px 60px 14px 60px;
    margin: 40px 120px 40px 120px;
    background-color: white;
    color: #1C72D3;
    border: 2px solid #1e88e5;
    cursor: pointer;
    transition: transform 0.2s;
    border-radius: 8px;
    font-size: calc(1.2rem);
}

section.turmas button:hover {
    background: linear-gradient(135deg, #1f68c7, #42a5f5);
    transform: scale(1.2);
    color: white;
}

section.turmas div.agro {
    background-color: white;
    margin: 0 11vw 0 1vw;
    border-radius: 50px;
}

section.turmas div.info {
    background-color: white;
    margin: 0 15vw 0 0;
    border-radius: 50px;
}
div.quimi {
    text-align: center;
    background-color: white;
    border-radius: 30px;
    font-size: 30px;
    margin: 0 30vw 0 30vw;

}
div.quimi button {
    padding: 14px 60px 14px 60px;
    margin: 20px 40px 20px 40px;
    background-color: white;
    color: #1C72D3;
    border: 2px solid #1e88e5;
    cursor: pointer;
    transition: transform 0.2s;
    border-radius: 8px;
    font-size: calc(1.2rem)
}
div.quimi button:hover {
    background: linear-gradient(135deg, #1f68c7, #42a5f5);
    transform: scale(1.2);
    color: white;
}

.colorido{
    border: none;
    cursor: pointer;
    transition: transform 0.2s;
    padding: 8px 5px;
    font-size: calc(1rem);
    margin: 0.5vw 3vw 0 4vw;
    cursor: pointer;
    background-color: white;
    color: #1C72D3;
    border: 2px solid #1e88e5;
    border-radius: 8px;
}

.colorido:hover {
  background: linear-gradient(135deg, #1f68c7, #42a5f5);
    transform: scale(1.2);
    color: white;
}

.carrinho-colorido{
    cursor: pointer;
    transition: transform 0.2s;
    padding: 8px 5px;
    font-size: calc(1rem);
    margin: 0.5vw 0 0 0;
    background-color: white;
    color: #1C72D3;
    border: 2px solid #1e88e5;
    border-radius: 8px;
}

.carrinho-colorido:hover {
  background: linear-gradient(135deg, #1f68c7, #42a5f5);
    transform: scale(1.2);
    color: white;
}

.minhas-compras{
    display: flex;
}
button{
    background-color: #1C72D3;
    color: white;
    border-radius: 5px;
    padding: 10px 30px ;
    border: none;
    font-size: 1.2rem;
    margin-left: 3vw;
    cursor: pointer;
    transition: transform 0.2s;
    margin-bottom: 3vw;
    margin-top: 5vw;
}

button:hover {
    transform: scale(1.05);
}
</style>

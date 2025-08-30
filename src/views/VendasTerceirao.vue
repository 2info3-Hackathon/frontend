<script setup>
import { useRouter } from 'vue-router'

import agro1Component from '@/components/agro1.vue';
import agro2Component from '@/components/agro2.vue';
import agro3Component from '@/components/agro3.vue';
import info1Component from '@/components/info1.vue';
import info2Component from '@/components/info2.vue';
import info3Component from '@/components/info3.vue';
import quimiComponent from '@/components/quimi.vue';

const router = useRouter()

function irPara3Agro1(){
    router.push('/Botao3Agro1')
}
function irPara3Agro2(){
    router.push('/Botao3Agro2')
}
function irPara3Agro3(){
    router.push('/Botao3Agro3')
}
function irPara3Info1(){
    router.push('/Botao3Info1')
}
function irPara3Info2(){
    router.push('/Botao3Info2')
}
function irPara3Info3(){
    router.push('/Botao3Info3')
}
function irPara3Quimi(){
    router.push('/Botao3Quimi')
}
function irParaProduto() {
    router.push('/BotaoAdicionarProduto')
}
</script>

<template>
    <main>
        <div class="tudo">

        
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
   </main>
   <button @click="irParaProduto">Adicionar Produto</button>

   <agro1-component />
   <agro2-component />
   <agro3-component />
   <info1-component />
   <info2-component />
   <info3-component />
   <quimi-component />

</template>
<style scoped>
h2 {
    display: flex;
    justify-content: center;
    margin: 0 40vw 0 40vw;
    background-color: white;
    border-radius: 60px;
    font-size: 30px;
}
div.tudo {
    background:  linear-gradient(135deg, #1e88e5, #42a5f5);
    margin: 4vw;
    padding: 2vw 0 0 0;
    border-radius: 10vw;
}
section.turmas {
    margin: 50px 300px 50px 150px;
    padding: 0 150px 0 150px;
    display: flex;
    
    
}
section.turmas button {
    padding: 10px 60px 10px 60px;
    margin: 40px 80px 40px 80px;
    background-color: white;   
    color: black;     
    border: 2px solid #1e88e5; 
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;

}
section.turmas button:hover {
    background-color: #1e88e5; /* muda a cor ao passar o mouse */
    transform: scale(1.2); /* aumenta o tamanho */
    border-color: #1e88e5; 
    color: white;

}
section.turmas div.agro {
    background-color: white;
    margin: 30px;
    border-radius: 60px;
}
section.turmas div.info {
    background-color: white;
    margin: 30px;
    border-radius: 60px;
}
div.quimi {
    text-align: center;
    background-color: white;
    border-radius: 60px;
    font-size: 30px;
    margin: 0 37vw 0 37vw;
    
}
div.quimi button {
    padding: 10px 60px 10px 60px;
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
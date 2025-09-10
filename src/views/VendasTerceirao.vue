<script setup>
import { useRouter } from 'vue-router'
import { useProdutosStore } from '@/stores/produtosStore'
import { useCartStore } from '@/stores/cartStore'
import cart from '@/components/cart.vue'


const produtosStore = useProdutosStore()
const cartStore = useCartStore()
const router = useRouter()

const produtosAgro1 = produtosStore.getProdutosAgro1
const produtosAgro2 = produtosStore.getProdutosAgro2
const produtosAgro3 = produtosStore.getProdutosAgro3
const produtosInfo1 = produtosStore.getProdutosInfo1
const produtosInfo2 = produtosStore.getProdutosInfo2
const produtosInfo3 = produtosStore.getProdutosInfo3
const produtosQuimi = produtosStore.getProdutosQuimi

function irPara3Agro1(){
    router.push('/3Agro1View')
}
function irPara3Agro2(){
    router.push('/3Agro2View')
}
function irPara3Agro3(){
    router.push('/3Agro3View')
}
function irPara3Info1(){
    router.push('/3Info1View')
}
function irPara3Info2(){
    router.push('/3Info2View')
}
function irPara3Info3(){
    router.push('/3Info3View')
}
function irPara3Quimi(){
    router.push('/3QuimiView')
}
function irParaAdicionarProdutos() {
    router.push('adicionarProdutosView')
}

</script>

<template>

  <li @click="cartStore.toggleCart">
    <span class="mdi mdi-cart"></span>
  </li>

   <cart v-if="cartStore.showCart" />



      <div class="lista" v-else>
 <button @click="irParaAdicionarProdutos"> Adicionar Produtos </button>

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
        <ul>
        <li v-for="produtos in produtosAgro1" :key="produtos.id">

          <p><img :src="produtos.imagem" alt="" width="200" height="200"></p>
         <p v-for="preco in produtosAgro1" :key="preco.id"></p>
         <p class="nome"> {{ produtos.nome }}</p>
        <p class="preco"> R${{ produtos.preco }}</p>

        <p v-for="local in produtosAgro1" :key="local.id"></p>
        <p class="local"> {{ produtos.local }}</p>
        <p class="vendedor"> {{ produtos.vendedor }}</p>
            <button class="reservar" @click="cartStore.addToCart(produtos)"><span class="mdi mdi-cart"></span>reservar</button>
        </li>
        </ul>

      <ul>
        <li v-for="produto in produtosAgro2" :key="produto.id">

          <p><img :src="produto.imagem" alt="" width="200" height="200"></p>
         <p v-for="preco in produtoAgro2" :key="preco.id"></p>
         <p class="nome"> {{ produto.nome }}</p>
        <p class="preco"> R${{ produto.preco }}</p>

        <p v-for="local in produtoAgro2" :key="local.id"></p>
        <p class="local"> {{ produto.local }}</p>
        <p class="vendedor"> {{ produto.vendedor }}</p>
            <button class="reservar" @click="cartStore.addToCart(produto)"><span class="mdi mdi-cart"></span>reservar</button>
        </li>
        </ul>

        <ul>
        <li v-for="produtos in produtosAgro3" :key="produtos.id">

          <p><img :src="produtos.imagem" alt="" width="200" height="200"></p>
         <p v-for="preco in produtosAgro3" :key="preco.id"></p>
         <p class="nome"> {{ produtos.nome }}</p>
        <p class="preco"> R${{ produtos.preco }}</p>

        <p v-for="local in produtosAgro3" :key="local.id"></p>
        <p class="local"> {{ produtos.local }}</p>
        <p class="vendedor"> {{ produtos.vendedor }}</p>
            <button class="reservar" @click="cartStore.addToCart(produtos)"><span class="mdi mdi-cart"></span>reservar</button>
        </li>
        </ul>

      <ul>
        <li v-for="produto in produtosInfo1" :key="produto.id">

          <p><img :src="produto.imagem" alt="" width="200" height="200"></p>
         <p v-for="preco in produtosInfo1" :key="preco.id"></p>
         <p class="nome"> {{ produto.nome }}</p>
        <p class="preco"> R${{ produto.preco }}</p>

        <p v-for="local in produtosInfo1" :key="local.id"></p>
        <p class="local"> {{ produto.local }}</p>
        <p class="vendedor"> {{ produto.vendedor }}</p>
            <button class="reservar" @click="cartStore.addToCart(produto)"><span class="mdi mdi-cart"></span>reservar</button>
        </li>
        </ul>

        <ul>
        <li v-for="produtos in produtosInfo2" :key="produtos.id">

          <p><img :src="produtos.imagem" alt="" width="200" height="200"></p>
         <p v-for="preco in produtosInfo2" :key="preco.id"></p>
         <p class="nome"> {{ produtos.nome }}</p>
        <p class="preco"> R${{ produtos.preco }}</p>

        <p v-for="local in produtosInfo2" :key="local.id"></p>
        <p class="local"> {{ produtos.local }}</p>
        <p class="vendedor"> {{ produtos.vendedor }}</p>
            <button class="reservar" @click="cartStore.addToCart(produtos)"><span class="mdi mdi-cart"></span>reservar</button>
        </li>
        </ul>

      <ul>
        <li v-for="produto in produtosInfo3" :key="produto.id">

          <p><img :src="produto.imagem" alt="" width="200" height="200"></p>
         <p v-for="preco in produtosInfo3" :key="preco.id"></p>
         <p class="nome"> {{ produto.nome }}</p>
        <p class="preco"> R${{ produto.preco }}</p>


        <p v-for="local in produtosInfo3" :key="local.id"></p>
        <p class="local"> {{ produto.local }}</p>
        <p class="vendedor"> {{ produto.vendedor }}</p>
            <button class="reservar" @click="cartStore.addToCart(produto)"><span class="mdi mdi-cart"></span>reservar</button>
        </li>
        </ul>
        <img src="/public/3Quimi.png" width="1750" height="" alt="">
        <ul>

        <li v-for="produto in produtosQuimi" :key="produto.id">

          <p><img :src="produto.imagem" alt="" width="200" height="200"></p>
         <p v-for="preco in produtosQuimi" :key="preco.id"></p>
         <p class="nome"> {{ produto.nome }}</p>
        <p class="preco"> R${{ produto.preco }}</p>


        <p v-for="local in produtosQuimi" :key="local.id"></p>
        <p class="local"> {{ produto.local }}</p>
        <p class="vendedor"> {{ produto.vendedor }}</p>
            <button class="reservar" @click="cartStore.addToCart(produto)"><span class="mdi mdi-cart"></span>reservar</button>
        </li>
        </ul>

      </div>








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

/*===============================================================================================================================================================*/


</style>

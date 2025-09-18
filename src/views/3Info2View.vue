<script setup>
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'
import Info2Component from '@/components/3Info2Component.vue'
import Cart from '@/components/cartComponent.vue'

const cartStore = useCartStore()
const router = useRouter()

function voltar() {
    router.push('/terceirao')
}
</script>

<template>
    <body>
        <p @click="cartStore.toggleCart" class="carrinho-colorido">
    <span class="mdi mdi-cart">Carrinho</span>
   </p>
  <Cart v-if="cartStore.showCart" />
<Info2Component />
<button class="turmas" @click="voltar">← Voltar</button>
    </body>
</template>

<style scoped>
body{
  margin-bottom: -20vw;
}
.carrinho-colorido{
    cursor: pointer;
    transition: transform 0.2s;
    padding: 8px 5px;
    font-size: calc(1rem);
    margin: 1.5vw 91vw 1.5vw 15px;
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
}

button:hover {
    transform: scale(1.05);
}
</style>

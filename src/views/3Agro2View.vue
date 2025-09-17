<script setup>
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'
import Agro2Component from '@/components/3Agro2Component.vue';
import Cart from '@/components/cartComponent.vue'

const cartStore = useCartStore()
const router = useRouter()

function voltar() {
    router.push('/terceirao')
}
</script>

<template>
   <p @click="cartStore.toggleCart">
    <span class="mdi mdi-cart"></span>
   </p>
  <Cart v-if="cartStore.showCart" />
<Agro2Component v-else/>
 <button class="turmas" @click="voltar">← Voltar</button>
</template>

<style scoped>
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

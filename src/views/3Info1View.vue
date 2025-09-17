<script setup>
 import Info1Component from '@/components/3Info1Component.vue';
import { useCartStore } from '@/stores/cartStore'
import { useRouter } from 'vue-router'
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
<Info1Component />
<button class="turmas" @click="voltar">← Voltar</button>
<!--<div v-if="mostrarAviso" class="aviso">
        ✅ Produto adicionado com sucesso!
      </div>-->
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

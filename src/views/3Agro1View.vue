<script setup>
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'
import Agro1Component from '@/components/3Agro1Component.vue';
import Cart from '@/components/cart.vue'

const cartStore = useCartStore()
const router = useRouter()

function voltar() {
    router.push('/')
}
</script>

<template>
   <p @click="cartStore.toggleCart">
    <span class="mdi mdi-cart"></span>
   </p>
  <Cart v-if="cartStore.showCart" />
<Agro1Component v-else/>
 <button class="turmas" @click="voltar">Voltar</button>
</template>
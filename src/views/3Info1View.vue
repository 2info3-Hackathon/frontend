<script setup>
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'
import Info1Component from '@/components/3Info1Component.vue';
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
<Info1Component v-else/>
 <button class="turmas" @click="voltar">Voltar</button>
</template>
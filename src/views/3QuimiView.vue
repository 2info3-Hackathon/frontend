<script setup>
<<<<<<< HEAD
import QuimiComponent from '@/components/3QuimiComponent.vue'; 
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'
=======
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'
import QuimiComponent from '@/components/3QuimiComponent.vue';
>>>>>>> 1e805e5812ae0b93fdb655650a69afcdf48ba75b
import Cart from '@/components/cart.vue'

const cartStore = useCartStore()
const router = useRouter()

function voltar() {
    router.push('/')
}
</script>

<template>
<<<<<<< HEAD
    <p @click="cartStore.toggleCart">
    <span class="mdi mdi-cart"></span>
   </p>
  <Cart v-if="cartStore.showCart" />
<QuimiComponent />
<button class="turmas" @click="voltar">← Voltar</button>
</template>

<style scoped>
button {
  background: linear-gradient(135deg, #1f68c7, #42a5f5);
  color: white;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
  border-radius: 5px;
  padding: 20px 20px 20px 20px;
  font-size: calc(1.2rem);
  margin-left: 2vw;
}

button:hover {
  background: linear-gradient(135deg, #02367a, #1e88e5);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  transform: scale(1.05);
}
</style>
=======
   <p @click="cartStore.toggleCart">
    <span class="mdi mdi-cart"></span>
   </p>
  <Cart v-if="cartStore.showCart" />
<QuimiComponent v-else/>
 <button class="turmas" @click="voltar">Voltar</button>
</template>
>>>>>>> 1e805e5812ae0b93fdb655650a69afcdf48ba75b

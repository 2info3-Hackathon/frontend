<script setup>
 import Info1Component from '@/components/3Info1Component.vue';
import { useCartStore } from '@/stores/cartStore'
import { useRouter } from 'vue-router'
import Cart from '@/components/cartComponent.vue'

const cartStore = useCartStore()
const router = useRouter()
//const mostrarAviso = ref(false);


function voltar() {
    router.push('/')
}
 //setTimeout(() => {
  //  mostrarAviso.value = false;
  //}, 3000);

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
.aviso {
  position: fixed;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, #1B5299, #42a5f5);
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: aparecer 0.3s ease;
}

@keyframes aparecer {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

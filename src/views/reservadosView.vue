<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
import { useReservadosStore } from "@/stores/reservados";

const reservadosStore = useReservadosStore()

function voltar() {
    router.push('/')
}
</script>

<template>

{{ reservadosStore.reservados }}

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

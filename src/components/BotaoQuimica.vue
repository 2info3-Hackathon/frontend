<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function voltar() {
  router.push('/')
}
</script>

<template>
  <div>
    <h2>Grupo de Estudos de Química</h2>
    <button @click="voltar">Voltar</button>
  </div>
</template>

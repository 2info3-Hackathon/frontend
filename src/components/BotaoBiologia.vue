<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function voltar() {
  router.push('/')
}
</script>

<template>
  <section>
    <h1>Grupo de Estudos de Biologia</h1>

    <div>
        <h2>
          Monitor:
        </h2>
        
    </div>

    <button @click="voltar">Voltar</button>
  </section>
</template>

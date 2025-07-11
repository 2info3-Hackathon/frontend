<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()


function irParaBiologia() {
  router.push('/BotaoBiologia')
}
</script>

<template>
  <main>
  <h1>
    Grupo de Estudos
  </h1>

  <section class="botoes">
    <div class="primeiralinha">
      <button @click="irParaBiologia">Biologia</button>
      <button>Filosofia</button>
      <button>Física</button>
    </div>

    <div class="segundalinha">
      <button>Geografia</button>
      <button>História</button>
      <button>Matemática</button>
    </div>

    <div class="terceiralinha">
      <button>Português</button>
      <button>Química</button>
      <button>Sociologia</button>
    </div>
  </section>
  </main>
</template>

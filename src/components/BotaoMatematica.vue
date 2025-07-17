<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function voltar() {
  router.push('/')
}
</script>

<template>
  <div class="fundo">
    <h1>Grupo de Estudos de Matemática</h1>

    <div class="informacoes">
        <h2>
          Monitor Responsável:
        </h2>
        <p>Nome: ??</p>
        <p>Sala: ??</p>
        <p>Horário disponível:??</p>

        <h2>
          Horário:
        </h2>
        <p>??</p>

        <h2>
          Sala:
        </h2>
        <p>??</p>
    </div>

    <button @click="voltar">Voltar</button>
  </div>
</template>

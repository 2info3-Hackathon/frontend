<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()


function irParaBiologia(){
  router.push('/BotaoBiologia')
}

function irParaFilosofia(){
  router.push('/BotaoFilosofia')
}

function irParaFisica(){
  router.push('/BotaoFisica')
}

function irParaGeografia(){
  router.push('/BotaoGeografia')
}

function irParaHistoria(){
  router.push('/BotaoHistoria')
}

function irParaMatematica(){
  router.push('/BotaoMatematica')
}

function irParaPortugues(){
  router.push('/BotaoPortugues')
}

function irParaQuimica(){
  router.push('/BotaoQuimica')
}

function irParaSociologia(){
  router.push('/BotaoSociologia')
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
      <button @click="irParaFilosofia">Filosofia</button>
      <button @click="irParaFisica">Física</button>
    </div>

    <div class="segundalinha">
      <button @click="irParaGeografia">Geografia</button>
      <button @click="irParaHistoria">História</button>
      <button @click="irParaMatematica">Matemática</button>
    </div>

    <div class="terceiralinha">
      <button @click="irParaPortugues">Português</button>
      <button @click="irParaQuimica">Química</button>
      <button @click="irParaSociologia">Sociologia</button>
    </div>
  </section>
  </main>
</template>

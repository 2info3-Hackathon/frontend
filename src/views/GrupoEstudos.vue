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

function adicionar(){
  router.push('/AdicionarGrupo')
}
</script>

<template>
  <main>
    <img src="/public/banner.png" alt="banner" height="600" width="1834">

  <h1>
    Grupo de Estudos
  </h1>

  <section class="botoes">
    <div class="primeiracoluna">
      <button class="biologia" @click="irParaBiologia">Biologia</button>
      <button @click="irParaGeografia">Geografia</button>
      <button @click="irParaPortugues">Português</button>
    </div>

    <div class="segundacoluna">
      <button @click="irParaFilosofia">Filosofia</button>
      <button @click="irParaHistoria">História</button>
      <button @click="irParaQuimica">Química</button>
    </div>

    <div class="terceiracoluna">
      <button class="fisica" @click="irParaFisica">Física</button>
      <button @click="irParaMatematica">Matemática</button>
      <button class="soci" @click="irParaSociologia">Sociologia</button>

      <button class="adicionargp" @click="adicionar">Adicionar <br> Grupo</button>
    </div>
  </section>
  </main>
</template>

<style scoped>
main{
  background-color: #5BA3CF;
}

h1{
  color: white;
  text-align: center;
  padding: 30px 60px 30px 60px;
  margin: 0 150px 50px 150px;
  font-size: 45px;
  font-weight: bolder;
}

.botoes{
  margin: 50px 150px 50px 150px;
  padding: 0 150px 0 150px;
  display: flex;
  border-radius: 5px;
}

button{
  margin: 50px 80px 50px 80px;
  padding: 10px 70px 10px 70px;
  font-size: 20px;
}

.primeiracoluna{
  text-align: left;
}

.segundacoluna{
  text-align: center
}

.terceiracoluna{
  text-align: right;
}

.biologia{
  padding: 10px 77px 10px 77px;
}

.fisica{
  padding: 10px 100px 10px 100px;
}

.soci{
  padding: 10px 77px 10px 77px;
}

.adicionargp{
  margin: 120px 80px 100px 0;
  padding: 6px 79px 6px 81px;
}
</style>

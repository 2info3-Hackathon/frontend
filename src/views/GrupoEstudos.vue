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
    <div class="imagem">
      <img src="/public//imagem/banner.png" alt="banner" height="600" width="100%">
      <img src="/public/imagem/banner_lateral.png" alt="banner_lateral" class="banner">
    </div>

  <h1>
    Grupo de Estudos
  </h1>

  <section class="conteudo">
    <p>Os Grupos de Estudos têm a intenção de praticar e auxiliar em matérias do ensino médio e técnico integrado para alunos com dificuldades.</p>
    <p>Em nossa sala de estudos sempre há um monitor responsável por ajudar os alunos interessados, seja em tirar dúvidas sobre as matérias ou até mesmo sobre os grupos.</p>
    <p>Caso seja um professor ou um monitor cadastrado e deseja adicionar um novo grupo de estudos, <a @click="adicionar">clique aqui</a></p>
  </section>

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
    </div>
  </section>
  </main>
</template>

<style scoped>
main {
  margin: 0;
  padding: 0;
}

.imagem {
  position: relative; /* precisa disso pra usar absolute dentro */
  display: inline-block; /* ajusta ao tamanho do conteúdo */
}

.imagem img {
  display: block;
}

.banner {
  position: absolute;
  top: 0;   /* você ajusta a posição */
  left: 0;  /* pode trocar por right, bottom etc */
  width: 50%;/* tamanho do banner */
  height: 81vh;
  opacity: 10%;
}
h1{
  color: #1C72D3;
  text-align: center;
  padding: 40px 60px 5px 60px;
  margin: 0 150px 50px 150px;
  font-size: 45px;
  font-weight: bolder;
}
.conteudo {
  background-image: url(/public//imagem/Group65.png);
  width: 100%;
  height: 70vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: block;
}

p{
  color: white;
  font-size: 2rem;
  text-align: center;
  margin: 0 12vw 0 12vw;
  padding: 3vw 0 2.5vw 0;
}

.botoes{
  padding: 80px 150px 0 150px;
  display: flex;
  border-radius: 30px;
}

button {
  background: linear-gradient(135deg, #1976d2, #42a5f5);
  color: white;
  border: none;
  padding: 40px 60px 40px 60px;
  margin: 50px 20px 50px 20px;
  font-size: 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s ease;
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
  padding: 40px 67px 40px 67px;
}

.fisica{
  padding: 40px 90px 40px 90px;
}

.soci{
  padding: 40px 67px 40px 67px;
}

.adicionargp{
  margin: 120px 80px 100px 0;
  padding: 6px 79px 6px 81px;
}
</style>

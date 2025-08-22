<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()


function irParaBiologia(){
  router.push('/BiologiaView')
}

function irParaFilosofia(){
  router.push('/FilosofiaView')
}

function irParaFisica(){
  router.push('/FisicaView')
}

function irParaGeografia(){
  router.push('/GeografiaView')
}

function irParaHistoria(){
  router.push('/HistoriaView')
}

function irParaMatematica(){
  router.push('/MatematicaView')
}

function irParaPortugues(){
  router.push('/PortuguesView')
}

function irParaQuimica(){
  router.push('/QuimicaView')
}

function irParaSociologia(){
  router.push('/SociologiaView')
}

</script>

<template>
  <main>
    <div class="imagem">
      <img src="/public//imagem/banner.png" alt="banner" height="600" width="100%">
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
    <button @click="irParaBiologia">Biologia</button>
    <button @click="irParaGeografia">Geografia</button>
    <button @click="irParaPortugues">Português</button>
    <button @click="irParaFilosofia">Filosofia</button>
    <button @click="irParaHistoria">História</button>
    <button @click="irParaQuimica">Química</button>
    <button @click="irParaFisica">Física</button>
    <button @click="irParaMatematica">Matemática</button>
    <button @click="irParaSociologia">Sociologia</button>
  </section>
  </main>
</template>

<style scoped>
main {
  margin: 0;
  padding: 0;
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

.botoes {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas iguais */
  gap: 20px; /* espaço entre os botões */
  max-width: 800px; /* opcional, controla a largura total */
  margin: 0 auto; /* centraliza o grid */
}

.botoes button {
  background: linear-gradient(135deg, #1e88e5, #42a5f5);
  color: white;
  font-size: 16px;
  padding: 15px 20px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.2s;
}

.botoes button:hover {
  transform: scale(1.05);
}
</style>

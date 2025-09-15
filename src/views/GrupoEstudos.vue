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
    <p>Há também regras dos grupos de estudos:</p>
    <ul>
      <li>
        - Mantenha o local limpo;
      </li>

      <li>
      - Janelas e cortinas abertas;
      </li>

      <li>
      - Luzes acesas;
      </li>

      <li>
      - Não mexa nos móveis;
      </li>

      <li>
      - Ao sair, desligue as luzes;
      </li>

      <li>
      - Sujou? Limpe;
      </li>

      <li>
      - Devolver a chave no SISAE até as 16h50.
      </li>
    </ul>
    <p>Para ver os horários livres dos laboratórios de informática, <a href="https://www.canva.com/design/DAGm-Zn1wkM/nityHiEms_2zAhY1L7DN1A/edit">clique aqui!</a>
    </p>
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
  font-size: calc(2.5rem);
  font-weight: bolder;
  margin-top: 3vw;
  margin-bottom: 3vw;
}

.conteudo {
  background-image: url('data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%201440%20320%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20fill%3D%27%23ffffff%27%20d%3D%27M0%2C288L30%2C261.3C60%2C235%2C120%2C181%2C180%2C165.3C240%2C149%2C300%2C171%2C360%2C181.3C420%2C192%2C480%2C181%2C540%2C170.7C600%2C160%2C660%2C150%2C720%2C154.7C780%2C160%2C840%2C181%2C900%2C192C960%2C203%2C1020%2C213%2C1080%2C208C1140%2C203%2C1200%2C171%2C1260%2C181.3C1320%2C192%2C1380%2C235%2C1410%2C261.3L1440%2C288L1440%2C320L1410%2C320C1380%2C320%2C1320%2C320%2C1260%2C320C1200%2C320%2C1140%2C320%2C1080%2C320C1020%2C320%2C960%2C320%2C900%2C320C840%2C320%2C780%2C320%2C720%2C320C660%2C320%2C600%2C320%2C540%2C320C480%2C320%2C420%2C320%2C360%2C320C300%2C320%2C240%2C320%2C180%2C320C120%2C320%2C60%2C320%2C30%2C320L0%2C320Z%27%2F%3E%3C%2Fsvg%3E');
  background-size: cover; /* Para garantir que cubra toda a área da div */
  background-position: bottom; /* Ajusta a posição da onda para o fundo */
  background-repeat: no-repeat; /* Impede que a imagem de fundo se repita */
  width: 95.995%;
  height: 150vh; /* Ajuste conforme a necessidade */
  background-color: #1C72D3;
  display: block;
  color: aliceblue;
  font-size: calc(1.3rem);
  padding: 1vw 2vw 1vw 2vw;
  margin-bottom: -30vw;
}

p{
  color: white;
  font-size: calc(1.5rem);
  text-align: center;
  margin: 0 17vw 0 17vw;
  padding: 1vw 0 1vw 0;
}

ul{
  color: white;
  font-size: calc(1.5rem);
  text-align: left;
  margin: 0 17vw 0 35vw;
  padding: 1vw 0 1vw 0;
}

li{
  padding: 0.3vw 0 0.3vw 0;
}

a{
  color: #bfc5ff;
  cursor: pointer;
  transition: color 0.3s;
  text-decoration: none;
}

a:hover{
  color: #063770;
  text-decoration: underline;
}

.botoes {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas iguais */
  gap: 100px; /* espaço entre os botões */
  max-width: 1000px; /* opcional, controla a largura total */
  margin: 0px auto; /* centraliza o grid */
}

.botoes button {
  background: linear-gradient(135deg, #1f68c7, #42a5f5);
  color: white;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;
  border-radius: 10px;
  padding: 20px 20px 20px 20px;
  font-size: calc(1.2rem);
  margin-left: 2vw;
}

.botoes button:hover {
  background: linear-gradient(135deg, #02367a, #1e88e5);
  box-shadow: 0 6px 12px rgba(0,0,0,0.25);
  transform: scale(1.05);
}
</style>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const showSummary = ref(true)
const route = useRoute()
const router = useRouter()

watch(
  () => route.fullPath,
  (newPath) => {
    showSummary.value = newPath === '/'
  },
  { immediate: true }
)

function voltarAoinicio() {
  router.push('/')
}
</script>

<template>
    <main>
       <section class="img">
    <img src="/public/imagem/Rectangle 43.png" alt="imagem-if" height="700" width="1820">
  </section>
        <section class="lista">
            <h1>Conheça Nossas Comissões</h1>
            <div class="azul">
                <h2>Comissão de Eventos :</h2>
                <p>
                     A Comissão de Eventos do Campus é responsável pela organização dos eventos institucionais do campus, <br>desde a fase de planejamento até a avaliação,juntamente ao setor demandante do evento.A Comissão de Eventos dos campi,<br> criada por portaria específica, apoiará o trabalho realizado pela comissão organizadora de cada evento e deverá <br> entrar em contato com a Comissão de Eventos da Reitoria quando necessário.
                </p>
            </div>
            <div class="branco">
                <h2>Comissão Própria de Avaliação – CPA :</h2>
                <p>
                     A CPA Promover a participação de toda a comunidade no processo de avaliação institucional.<br> Socializar as informações e recolher sugestões para subsidiar a tomada de decisões nas Unidades de Ensino. <br>Identificar as potencialidades e as limitações da Instituição em suas políticas e suas práticas,<br> em relação ao ensino, à pesquisa e à extensão, observando as dez dimensões do SINAES.
                </p>
            </div>
            <div class="azul">
                <h2> Comissão Interna de Supervisão – CIS :</h2>
                <p>
                    A Comissão Interna de Supervisão do Plano de Carreira dos Cargos Técnico-administrativos em Educação (CIS),<br> vinculada a Comissão Nacional de Supervisão do Ministério da Educação, composta servidores integrantes do <br> Plano de Carreira dos Cargos Técnico-Administrativos em Educação – PCCTAE, com a finalidade de acompanhar,<br> orientar, fiscalizar e avaliar a sua implementação no âmbito do Instituto Federal Catarinense e propor à <br> Comissão Nacional de Supervisão as alterações necessárias para seu aprimoramento.
                </p>
            </div>
            <div v-if="!showSummary" class="voltar">
      <button @click="voltarAoinicio">← Voltar </button>
      </div>
        </section>
    </main>
</template>

<style scoped >
img {
    margin-left: -20px;
}
section.lista div.azul{
  background-image: url('data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%201440%20320%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20fill%3D%27%23ffffff%27%20d%3D%27M0%2C288L30%2C261.3C60%2C235%2C120%2C181%2C180%2C165.3C240%2C149%2C300%2C171%2C360%2C181.3C420%2C192%2C480%2C181%2C540%2C170.7C600%2C160%2C660%2C150%2C720%2C154.7C780%2C160%2C840%2C181%2C900%2C192C960%2C203%2C1020%2C213%2C1080%2C208C1140%2C203%2C1200%2C171%2C1260%2C181.3C1320%2C192%2C1380%2C235%2C1410%2C261.3L1440%2C288L1440%2C320L1410%2C320C1380%2C320%2C1320%2C320%2C1260%2C320C1200%2C320%2C1140%2C320%2C1080%2C320C1020%2C320%2C960%2C320%2C900%2C320C840%2C320%2C780%2C320%2C720%2C320C660%2C320%2C600%2C320%2C540%2C320C480%2C320%2C420%2C320%2C360%2C320C300%2C320%2C240%2C320%2C180%2C320C120%2C320%2C60%2C320%2C30%2C320L0%2C320Z%27%2F%3E%3C%2Fsvg%3E');
  background-size: cover; /* Para garantir que cubra toda a área da div */
  background-position: bottom; /* Ajusta a posição da onda para o fundo */
  background-repeat: no-repeat; /* Impede que a imagem de fundo se repita */
  width: 100%;
  height: 70vh; /* Ajuste conforme a necessidade */
  background-color: #1C72D3;
  display: block;
  margin-left: -20px;
  color: aliceblue;
  font-size: 1.5rem;
  padding: 1vw 2vw 1vw 2vw;
  margin-bottom: -16vw;
}
div.branco{
   margin-top: -12vw;
    margin-bottom: 2vw;
    font-size: 1.5rem;
    padding: 1vw 2vw 1vw 2vw;
}
h1{
    text-align: center;
    font-size: calc(2.3rem + 0.390625vw);
    margin-top: 3vw;
    margin-bottom: 3vw;
}
div{
    padding-top: 10px;
}
div h2{
    text-align: center;
}
div p {
   text-align: center;
  
}
button{
   background-color: #1C72D3;
    color: aliceblue;
    border-radius: 5px;
    padding: 10px 30px;
    border: none;
    font-size: 22px;
    margin-left: 2vw;
    margin-top: 5vw;
    cursor: pointer;
    transition: transform 0.2s;
}
button:hover{
  transform: scale(1.05);
}

</style>
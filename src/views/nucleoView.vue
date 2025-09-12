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
  router.push('/inicio')

}
</script>

<template>
  <main>
    <section class="img">
      <img src="/public/imagem/Rectangle 43.png" alt="imagem-if" height="700" width="1845">
    </section>
    <section class="corpo">
      <h1>Conheça nosso Núcleos</h1>
      <div class="azul1">
        <ul>
          <h2>Núcleo de Acessibilidade às Pessoas com Necessidades Específicas - NAPNE</h2>
          <li>Implementar políticas de inclusão nas esferas municipal, estadual e federal;</li>

          <li>Promover a equidade e proteção dos direitos das pessoas com deficiências ou necessidades específicas;</li>

          <li>Estimular debates, vivências e reflexões sobre inclusão, por meio de atividades de ensino, pesquisa e
            extensão;</li>

          <li>Favorecer a eliminação de barreiras, sejam elas físicas ou atitudinais;</li>

          <li>Possibilitar o diálogo permanente com fóruns, organizações, associações, representações <br> da sociedade
            civil e movimentos sociais envolvidos com a inclusão;</li>

          <li>Assessorar instâncias e setores do IFC Araquari;</li>

          <li>Promover ações em parceria com outros núcleos relacionados à promoção da inclusão, diversidade e o
            respeito aos direitos humanos;</li>

          <li>Propor programas de formação continuada para a comunidade e servidores do IFC Araquari;</li>

          <li>Assessorar a aquisição de materiais diversos sobre a inclusão de pessoas com deficiência e necessidades
            específicas, que respeitem, valorizem e promovam a diversidade cultural;</li>

          <li>Realizar intercâmbio com os demais campi, escolas públicas e privadas e outras instituições;</li>

          <li>Propor políticas de acesso, permanência e êxito, de modo a atender, aconselhar e acompanhar, de forma
            transversal e interdisciplinar, pessoas com deficiência e necessidades específicas <br> que se encontrem em
            vulnerabilidade;</li>

          <li>Participar dos processos de construção dos Projetos Pedagógicos de Cursos (PPC) do IFC Araquari, a fim de
            garantir que a temática da inclusão de pessoas com deficiência e necessidades específicas seja contemplada.
          </li>
        </ul>
      </div>
      <div class="branco">
        <h2>Núcleo de Estudos Afro-brasileiros e Indígenas - NEABI</h2>
        <p>As principais atribuições do NEABI do IFC Campus Araquari são:</p>
        <ul>
          <li>Assegurar o cumprimento de legislação que inclui no currículo a História e Cultura Afro-Brasileira e
            Indígena;</li>

          <li>Articular e promover ações referentes à proteção dos direitos de pessoas e grupos étnicos atingidos por
            atos discricionários;</li>

          <li>Sensibilizar a comunidade por meio de espaços de debates, vivências e reflexões;</li>

          <li>Disponibilizar, estimular a produção e demandar a aquisição de materiais diversos;</li>

          <li>Contribuir para o desenvolvimento de práticas pedagógicas reflexivas, participativas e interdisciplinares,
            que possibilitem o entendimento de nossa estrutura social desigual;</li>

          <li>Propor políticas de acesso, permanência e êxito, de modo a atender pessoas que se encontrem em
            vulnerabilidade social, cultural e/ou educacional;</li>

          <li>Fazer intercâmbio com os demais campi e escolas da rede pública e privada, comunidades e povos
            tradicionais.</li>
        </ul>
      </div>
      <div class="azul2">
        <h2>Núcleo de Estudos de Gênero e Sexualidade - NEGES</h2>
        <p>Realizar estudos e pesquisas sobre as relações sociais de sexualidade e gênero em suas inter-relações <br>
          com as questões de classe social, processo de aprendizagem, formação de professores, relações etnico-raciais,
          entre outros. </p>
      </div>
      <div class="branco2">
        <h2>Núcleo de Gestão Ambiental - NGA</h2>
        <p>Desde o início, o NGA possui inúmeras atribuições, buscando discutir, formular e implantar a Política
          Ambiental do IFC,<br> vinculando o princípio da sustentabilidade socioambiental em nosso Instituto, tornando o
          valor fundamental <br>para a comunidade escolar e buscando o cumprimento da legislação ambiental.</p>
      </div>
    </section>
    <section> 
      <div v-if="!showSummary" class="voltar">
        <button @click="voltarAoinicio">← Voltar </button>
      </div>

    </section>
  </main>
</template>

<style scoped>
img {
  margin-left: -20px;
}
section.corpo h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-top: 3vw;
  margin-bottom: 3vw;
}

h2 {
  text-align: center;
}

div.azul1 {
  background-image: url('data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%201440%20320%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20fill%3D%27%23ffffff%27%20d%3D%27M0%2C288L30%2C261.3C60%2C235%2C120%2C181%2C180%2C165.3C240%2C149%2C300%2C171%2C360%2C181.3C420%2C192%2C480%2C181%2C540%2C170.7C600%2C160%2C660%2C150%2C720%2C154.7C780%2C160%2C840%2C181%2C900%2C192C960%2C203%2C1020%2C213%2C1080%2C208C1140%2C203%2C1200%2C171%2C1260%2C181.3C1320%2C192%2C1380%2C235%2C1410%2C261.3L1440%2C288L1440%2C320L1410%2C320C1380%2C320%2C1320%2C320%2C1260%2C320C1200%2C320%2C1140%2C320%2C1080%2C320C1020%2C320%2C960%2C320%2C900%2C320C840%2C320%2C780%2C320%2C720%2C320C660%2C320%2C600%2C320%2C540%2C320C480%2C320%2C420%2C320%2C360%2C320C300%2C320%2C240%2C320%2C180%2C320C120%2C320%2C60%2C320%2C30%2C320L0%2C320Z%27%2F%3E%3C%2Fsvg%3E');
  background-size: cover;
  /* Para garantir que cubra toda a área da div */
  background-position: bottom;
  /* Ajusta a posição da onda para o fundo */
  background-repeat: no-repeat;
  /* Impede que a imagem de fundo se repita */
  width: 100%;
  height: 170vh;
  /* Ajuste conforme a necessidade */
  background-color: #1C72D3;
  display: block;
  margin-left: -20px;
  color: aliceblue;
  font-size: 1.5rem;
  padding: 1vw 2vw 1vw 2vw;
  margin-bottom: -35vw;
}

div.azul2 {
  background-image: url('data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%201440%20320%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20fill%3D%27%23ffffff%27%20d%3D%27M0%2C288L30%2C261.3C60%2C235%2C120%2C181%2C180%2C165.3C240%2C149%2C300%2C171%2C360%2C181.3C420%2C192%2C480%2C181%2C540%2C170.7C600%2C160%2C660%2C150%2C720%2C154.7C780%2C160%2C840%2C181%2C900%2C192C960%2C203%2C1020%2C213%2C1080%2C208C1140%2C203%2C1200%2C171%2C1260%2C181.3C1320%2C192%2C1380%2C235%2C1410%2C261.3L1440%2C288L1440%2C320L1410%2C320C1380%2C320%2C1320%2C320%2C1260%2C320C1200%2C320%2C1140%2C320%2C1080%2C320C1020%2C320%2C960%2C320%2C900%2C320C840%2C320%2C780%2C320%2C720%2C320C660%2C320%2C600%2C320%2C540%2C320C480%2C320%2C420%2C320%2C360%2C320C300%2C320%2C240%2C320%2C180%2C320C120%2C320%2C60%2C320%2C30%2C320L0%2C320Z%27%2F%3E%3C%2Fsvg%3E');
  background-size: cover;
  /* Para garantir que cubra toda a área da div */
  background-position: bottom;
  /* Ajusta a posição da onda para o fundo */
  background-repeat: no-repeat;
  /* Impede que a imagem de fundo se repita */
  width: 100%;
  height: 70vh;
  /* Ajuste conforme a necessidade */
  background-color: #1C72D3;
  display: block;
  margin-left: -20px;
  color: aliceblue;
  font-size: 1.5rem;
  padding: 1vw 2vw 1vw 2vw;
  text-align: center;
}

div.branco {
  font-size: 1.5rem;
  padding: 1vw 4vw 1vw 4vw;
  margin-bottom: 3vw;
}

div.branco2 {
  font-size: 1.5rem;
  text-align: center;
  padding: 1vw 2vw 1vw 2vw;
  margin: -12vw; 
}

div li {
  margin-left: 4vw;
  margin-right: 4vw;
  padding-top: 10px;
}

.voltar {
  position: relative;
  margin-top: 240px;
  margin-bottom: 50px;
}


.voltar button {
  background-color: #1C72D3;
  color: aliceblue;
  border-radius: 5px;
  padding: 10px 30px;
  margin-left:2vw ;
  border: none;
  font-size: 22px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
button:hover{
  transform: scale(1.05);
}
</style>
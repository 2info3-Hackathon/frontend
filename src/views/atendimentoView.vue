<script setup>
import FooterComponent from '@/components/FooterComponent.vue'
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

function voltarAoSumario() {
   router.push('/informacoes-importantes')
}
</script>

<template>

   <body>
      <div class="ondas"></div>


      <section>
         <h1>Atendimentos</h1>
         <div class="listas">
            <ul class="esquerda">

               <li><a
                     href="https://docs.google.com/spreadsheets/d/1F3bxvUCqRZ-5Pj_YdhJyi3dh7gs3dh73RwX2cIeKnSs/edit?gid=0#gid=0">Alessandra
                     Klug</a></li>

               <li><a
                     href="https://docs.google.com/spreadsheets/d/1F3bxvUCqRZ-5Pj_YdhJyi3dh7gs3dh73RwX2cIeKnSs/edit?gid=609294266#gid=609294266">Daniel
                     dos Santos Jr.</a></li>

               <li><a href="">Denise Moreira Gasparotto</a></li>

               <li><a href="">Eduardo da Silva</a></li>

               <li><a href="">Edvanderson Ramalho dos Santos</a></li>

               <li><a href="">Élder Mantovani Lopes</a></li>

               <li><a href="">Fábio Longo de Moura</a></li>

               <li><a href="">Suelen Cristine Fruneaux</a></li>


            </ul>
            <ul class="direita">

               <li><a
                     href="https://docs.google.com/spreadsheets/d/1F3bxvUCqRZ-5Pj_YdhJyi3dh7gs3dh73RwX2cIeKnSs/edit?gid=898234625#gid=898234625">Greice
                     Ane Barbieri</a></li>

               <li><a href="">Ivo Marcos Riegel</a></li>

               <li><a href="">Jonathan Ache Dias</a></li>

               <li><a
                     href="https://docs.google.com/spreadsheets/d/1F3bxvUCqRZ-5Pj_YdhJyi3dh7gs3dh73RwX2cIeKnSs/edit?gid=1464446756#gid=1464446756">Katia
                     Hardt Siewert</a></li>

               <li><a href="">Marco Antonio Torrez Rojas</a></li>

               <li><a
                     href="https://docs.google.com/spreadsheets/d/1F3bxvUCqRZ-5Pj_YdhJyi3dh7gs3dh73RwX2cIeKnSs/edit?gid=946501609#gid=946501609">Raffael
                     Marcos Tófoli</a></li>

               <li><a href="">Rafaela Moraes dos Santos Francisco</a></li>


            </ul>
         </div>
         <p>
            Marcar atendimento pelo email que constar na página do respectivo professor(a)!
         </p>
      </section>
      <div v-if="!showSummary" class="voltar">
         <button @click="voltarAoSumario">← Voltar</button>
      </div>
   </body>
   <FooterComponent/>
</template>

<style scoped>
section {
   max-width: 80%;
   background: linear-gradient(135deg, #1f68c7, #42a5f5);
   border-radius: 1rem;
   padding: 30px;
  margin : 0 auto;
  margin-top: 8vw;
   text-align: center
}

section h1 {
   color: white;
   text-align: center;
   font-size: calc(1.5rem + 0.390625vw);
   padding: 4vw 2vw 0 0;
}

section div {
   color: white;
   display: flex;
   justify-content: center;
   gap: 40px;
   margin-top: 20px;
}

a {
   text-decoration: none;
   color: white;
   font-size: 1.5rem;
}

section div ul.esquerda {
   border-right: solid 1px white;
   width: 30%;
   text-align: left;
   list-style-type: disc;
   padding-left: 4%;
   font-size: calc(1.5rem + 0.390625vw);
}

section div ul.direita {
   width: 30%;
   text-align: left;
   list-style-type: disc;
   padding-left: 4%;
   font-size: calc(1.5rem + 0.390625vw);
}

section p {
   color: white;
   font-size: 1.5rem;
   justify-content: center;
   padding: 2vw 1vw 3.5vw 0;
}

section div.listas ul li a {
   cursor: pointer;
   transition: all 0.3 ease;
   color: white;
}

section div.listas ul li a:hover {
   transform: scale(1.2);
   color: #184374;
}

.voltar button {
   background-color: #1C72D3;
   color: white;
   border-radius: 5px;
   padding: 10px 30px;
   border: none;
   font-size: 1.2rem;
   margin-left: 3vw;
   margin-top: 3vw;
   cursor: pointer;
   transition: transform 0.2s;
}
button:hover {
    transform: scale(1.05);
}
</style>

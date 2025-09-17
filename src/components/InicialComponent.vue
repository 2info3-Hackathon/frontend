<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { ref, watch } from 'vue'

const showSummary = ref(true)
const route = useRoute()

watch(
    () => route.fullPath,
    (newPath) => {
        showSummary.value = newPath === '/'
    },
    { immediate: true }
)
</script>

<template>
<header>
        <nav>
         
        </nav>
        </header>
        <main>
     <section class="imagem-if">
        <div class="banner">
            <img src="https://noticias.memoria.araquari.ifc.edu.br/wp-content/uploads/sites/11/2017/02/IMG_5786.jpg" alt="banner" width="100%" height="700">
        </div>
     </section>
         <section class="corpo">
          <h1>Bem Vindo ao IFC </h1>
     <div class="tudo-texto">
        <p>Fizemos esse site, no intuito de <br>facilitar a vida do estudante do IFC. </p>
        <p>
          Nesse site, apresentamos <br> informações como Horário dos professores, <br> Vendas Terceirão,Eventos ifc, e muito mais. 
        </p>
        </div>
        <div class="lista">
          <ul>
            <li> 
              <RouterLink to="/nucleos" class="link"> <h2>Núcleos </h2></RouterLink>
            </li>
            <li>
             <RouterLink to="/terceirao" class="link"> <h2>Vendas Terceirão</h2> </RouterLink>
            
            </li>
             <li>
              <RouterLink to="/inicio" class="link"><h2>Cômites e Comissões</h2></RouterLink>
            </li>
            <li>
              <RouterLink to="/grupo-estudos" class="link"><h2>Grupo de Estudo</h2></RouterLink>
            </li>
            <li>
              <RouterLink to="/eventos" class="link"><h2>Eventos</h2></RouterLink>
            </li>
            <li>
             <RouterLink to="/informacoes-importantes" class="link"> <h2>Informações Importantes</h2></RouterLink>
            </li>
          </ul>
        </div>
      </section>
      </main>
</template>

<style scoped>
section.corpo{
  text-align: center;
}
h1{
  font-size: 2.5rem;
  margin: 2vw;
}
 div.tudo-texto {
  background-image: url('data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%201440%20320%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20fill%3D%27%23ffffff%27%20d%3D%27M0%2C288L30%2C261.3C60%2C235%2C120%2C181%2C180%2C165.3C240%2C149%2C300%2C171%2C360%2C181.3C420%2C192%2C480%2C181%2C540%2C170.7C600%2C160%2C660%2C150%2C720%2C154.7C780%2C160%2C840%2C181%2C900%2C192C960%2C203%2C1020%2C213%2C1080%2C208C1140%2C203%2C1200%2C171%2C1260%2C181.3C1320%2C192%2C1380%2C235%2C1410%2C261.3L1440%2C288L1440%2C320L1410%2C320C1380%2C320%2C1320%2C320%2C1260%2C320C1200%2C320%2C1140%2C320%2C1080%2C320C1020%2C320%2C960%2C320%2C900%2C320C840%2C320%2C780%2C320%2C720%2C320C660%2C320%2C600%2C320%2C540%2C320C480%2C320%2C420%2C320%2C360%2C320C300%2C320%2C240%2C320%2C180%2C320C120%2C320%2C60%2C320%2C30%2C320L0%2C320Z%27%2F%3E%3C%2Fsvg%3E');
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  width: 100%;
  height: 90vh;
  background-color: #1C72D3;
}
p{
  font-size: 1.5rem;
  color: white;
  padding: 2.9vw;
}
div.lista{
  margin-top: -10vw;
  margin-bottom: -27vw;
}
div.lista ul {
display: flex;
justify-content: space-between;
list-style: none;
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 100px;
max-width: 800px;
margin: 80px auto;
width: 100%;
margin-bottom: 10vw;
}
li{
cursor: pointer;
transition: transform 0.2s;
border-radius: 10px;
background:  #1C72D3;
color: white;
padding: 10px;
font-size: 1.5rem;
}
li:hover{
  box-shadow: 0 6px 12px rgba(0,0,0,0.25);
  transform: scale(1.2);
}
.link {
  color: white;
  text-decoration: none;
}
</style>
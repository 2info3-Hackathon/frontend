<script setup>
import App from '@/App.vue';
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
        <p class="azul">Fizemos esse site, no intuito de <br>facilitar a vida do estudante do IFC. </p>
        <p class="azul">
          Nesse site, apresentamos <br> informações como Horário dos professores, <br> Vendas Terceirão,Eventos ifc, e muito mais. 
        </p>
        </div>
        <div class="lista">
          <ul class="cima">
            <li>
              <h1>nucleu</h1>
              <p>lsls</p>
            </li>
             <li>
              <h1>comissao</h1>
              <p>dkdkkdk</p>
            </li>
             <li>
              <h1>cokte</h1>
              <p>lslskslk</p>
            </li>
          </ul>
          <ul class="baixo">
            <li>
              <h1>nucleu</h1>
              <p>lsls</p>
            </li>
            <li>
              <h1>nucleu</h1>
              <p>lsls</p>
            </li>
            <li>
              <h1>nucleu</h1>
              <p>lsls</p>
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
  font-size: 3rem;
}
 div.tudo-texto {
  background-image: url('data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%201440%20320%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20fill%3D%27%23ffffff%27%20d%3D%27M0%2C288L30%2C261.3C60%2C235%2C120%2C181%2C180%2C165.3C240%2C149%2C300%2C171%2C360%2C181.3C420%2C192%2C480%2C181%2C540%2C170.7C600%2C160%2C660%2C150%2C720%2C154.7C780%2C160%2C840%2C181%2C900%2C192C960%2C203%2C1020%2C213%2C1080%2C208C1140%2C203%2C1200%2C171%2C1260%2C181.3C1320%2C192%2C1380%2C235%2C1410%2C261.3L1440%2C288L1440%2C320L1410%2C320C1380%2C320%2C1320%2C320%2C1260%2C320C1200%2C320%2C1140%2C320%2C1080%2C320C1020%2C320%2C960%2C320%2C900%2C320C840%2C320%2C780%2C320%2C720%2C320C660%2C320%2C600%2C320%2C540%2C320C480%2C320%2C420%2C320%2C360%2C320C300%2C320%2C240%2C320%2C180%2C320C120%2C320%2C60%2C320%2C30%2C320L0%2C320Z%27%2F%3E%3C%2Fsvg%3E');
  background-size: cover; /* Para garantir que cubra toda a área da div */
  background-position: bottom; /* Ajusta a posição da onda para o fundo */
  background-repeat: no-repeat; /* Impede que a imagem de fundo se repita */
  width: 100%;
  height: 70vh; /* Ajuste conforme a necessidade */
  background-color: #1C72D3;
}
p.azul {
  padding-top: 50px;
  font-size: 1.5rem;
  color: aliceblue;
}
div.lista ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
}
li{
border-radius: 10px;
background:  #1C72D3;
margin: 5px 5px 5px 5px;
padding: 5px 5px 5px 5px;
color: aliceblue;
}
</style>
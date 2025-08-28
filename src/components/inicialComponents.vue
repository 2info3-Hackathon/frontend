<script setup>
import App from '@/App.vue';
</script>

<template>
<header>
        <nav>
         
        </nav>
        </header>
     <section class="imagem-if">
        <div class="banner">
            <img src="https://noticias.memoria.araquari.ifc.edu.br/wp-content/uploads/sites/11/2017/02/IMG_5786.jpg" alt="banner" width="1900" height="900">
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
</template>

<style scoped>
section.corpo{
  text-align: center;
}
h1{
  font-size: 3rem;
}
div.tudo-texto {
  background-image: url(/public/imagem/Group69.png);
  width: 100%;
  height: 40vh; 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: block;
}
p.azul {
  padding-top: 50px;
  font-size: 1.3rem;
  color: aliceblue;
}
div.lista ul {
  display: flex;
   justify-content: space-between;
   	list-style: none;
  
}
li{
border-radius: 20px;
background: linear-gradient(#2495FF,#1C72D3);
margin: 10px 10px 10px 10px;
padding: 10px 10px 10px 10px;
color: aliceblue;
}

</style>
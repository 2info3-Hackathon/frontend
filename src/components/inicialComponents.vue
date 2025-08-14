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
        <p>Fizemos esse site, no intuito de <br>facilitar a vida do estudante do IFC. </p>
        <p>
          Nesse site, apresentamos <br> informações como Horário dos professores, <br> Vendas Terceirão,Eventos ifc, e muito mais. 
        </p>
        </div>
        <div class="lista">
        </div>
      </section>
</template>

<style scoped>
section.corpo{
  text-align: center;
}
& h1{
  font-size: 3rem;
}
& div.tudo-texto {
  background-image: url(/public/imagem/onda.png);
  min-height: 50vh; /* Garante que o elemento tenha altura */
  min-width: 100vw; /* Deve usar 100vw (largura da tela) ao invés de 100vb */
  background-size: contain; /* Ajusta a imagem para caber dentro do div sem cortar */
  background-position: center; /* Centraliza a imagem de fundo */
  background-repeat: no-repeat; /* Evita que a imagem se repita */
}
& p {
  padding-top: 50px;
  font-size: 2.5rem;
  color: aliceblue;
}

</style>
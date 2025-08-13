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
        <div class="imagem"></div>
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
& div.imagem {
   min-height: 100vh;            /* o elemento precisa TER altura */
  background: url('/public/imagem/Union.png') center / cover no-repeat;
  font-size: 2rem;
}
</style>
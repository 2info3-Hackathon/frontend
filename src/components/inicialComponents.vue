<script setup>
import App from '@/App.vue';
</script>

<template>
<header>
        <nav>
          <div class="topo">
            <p><img src="/public/imagem/Group 6.png" alt="if"></p>
            <div class="pesquisa">
                <input type="text" class="search" placeholder="Buscar..." />
            </div>
          <ul>
          <li><img class="if" src="/public/imagem/Group 40@2x.png" alt="user"></li>
          <li><img src="/public/imagem/Group 1.png" alt="trasinhos"></li>
          </ul>
        </div>
        </nav>
        </header>
     <section class="imagem-if">
        <div class="banner">
            <img src="/public/imagem/image 3.png" alt="banner" width="1700" height="300">
        </div>
     </section>
         <section class="corpo">
          <div class="tudo-texto">
        <div class="texto">
          <h1>Bem Vindo ao Site do IFC </h1>
          <p>Aqui nós temos informações sobre :  </p>
            </div>
        <div class="lista">
          <ul>
            <li>Vendas terceirão </li>
            <li>Núcleos Estudantis, Comissão e Comitês </li>
            <li>Grupos Estudantis </li>
            <li>Eventos ifc </li>
            </ul>
            <ul>
            <li>Atestados e Declarações </li>
            <li>Atendimentos</li>
            <li>CLIFC</li>
            <li>Contatos Importantes </li>
          </ul>
        </div>
        </div>
      </section>
</template>

<style scoped>
header nav div.topo{
  display: flex;
  background-color: rgba(236, 237, 238, 1);
  justify-content: space-between;
}
& nav div.pesquisa input{
  margin: 30px 40px 0px 20px;
  border-radius: 10px;
  color: rgba(91, 163, 207, 1);
}
& nav div.topo ul {
  display: flex;
  list-style-type: none;
}
& nav div.topo ul li img{
  margin: 0px 20px 0px 20px;
}
& div.banner img {
    align-items: center;
}
section.corpo {
  background-color:rgba(91, 163, 207, 1) ;
  padding: 1vw 1vw 1vw 1vw;
}
section.corpo div.tudo-texto {
  background-color: white;
  border-radius: 20px;
  margin: 2vw 2vw 2vw 2vw;
}
section.corpo div.texto {
  font-size: 1.5vw;
  text-align: center;
}
& h1{
  padding: 2vw 0vw 0vw 0vw;
}
section.corpo div.lista {
  display: flex;
  margin: 1vw 5vw 2vw 5vw;
  justify-content: space-between;
  font-size: 1.5vw;
  color: rgba(47, 100, 132, 1);
}
& ul li {
  padding: 10px 10px 10px 10px;
}
</style>
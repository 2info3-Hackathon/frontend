<script setup>
import App from '@/App.vue';
</script>

<template>
<header>
        <nav>
          <h1>
            <RouterLink to ="/">
              IF
            </RouterLink>
          </h1>
          <div class="search-wrapper">
            <input type="text" class="search" placeholder="Buscar..." />
          </div class="icons">
          <ul>
          <li><img src="" alt=""></li>
          <li><img src="" alt=""></li>
          </ul>
        </nav>
        <div class="banner">
            <img src="/public/imagem/image 3.png" alt="banner" width="1000" height="200">
        </div>
      <section>
        <div>
          <ul>
            <li>Vendas terceirão </li>
            <li>Núcleos Estudantis, Comissão e Comitês </li>
            <li>Grupos Estudantis </li>
            <li>Eventos ifc </li>
            <li>Atestados e Declarações </li>
            <li>Atendimentos</li>
            <li>CLIFC</li>
            <li>Contatos Importantes </li>
          </ul>
        </div>
      </section>
</header>
</template>

<style scoped>
header {
display: flex;

& nav {

}
& ul {
  
  display: flex;
}

& div.banner img {
  margin: auto;
}
}

</style>
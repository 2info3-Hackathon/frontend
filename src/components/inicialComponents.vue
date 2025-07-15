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
            <img src="" alt="">
        </div>
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
      </header>
</template>

<style scoped>
header nav{
display: flex;
& ul {
  display: flex;
}
}

</style>
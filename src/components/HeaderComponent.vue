<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router'

const showDropdown = ref(false);
const router = useRouter();

function irParaInicio(){
  router.push('/')
}
</script>

<template>
  <header>
    <nav>
      <div class="logo" @click="irParaInicio">
        <h1>
            IFC
        </h1>
        <span class="logo-title">Campus Araquari</span>
      </div>

      <div class="barra">
        <input type="text" class="search" placeholder="Buscar..." />
      </div>

      <!-- Menu principal -->
      <ul class="menu">
        <i class="fas fa-user-circle"></i>

        <li class="dropdown" @click="showDropdown = !showDropdown">
          <i class="fas fa-bars"></i>
          <ul v-if="showDropdown" class="submenu">
            <li><RouterLink to="/">Núcleos, Comitês e Comissões</RouterLink></li>
            <li><RouterLink to="/">Informações Importantes</RouterLink></li>
            <li><RouterLink to="/">Grupo de Estudos</RouterLink></li>
            <li><RouterLink to="/">Vendas Terceirões</RouterLink></li>
            <li><RouterLink to="/">Eventos</RouterLink></li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vh 8vw;
  background-color: #1c72d3;
  color: white;
}

.logo{
  display: flex;
  cursor: pointer;
}

.logo h1{
  color: white;
  border-right: 1px solid white;
  padding: 0 1vw 0 0;
  font-size: 2vw;
  font-weight: bolder;
}

.logo span{
  padding: 0.1vw 0 0 1vw;
  font-size: 1vw;
}

input {
  width: 400px;
  height: 30px;
  border-radius: 40px;
  font-size: 1rem;
  border: 0;
  background-color: #f1f1f1;
  padding: 5px;
}

.barra::before {
  font-size: 1.2rem;
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translate(-50%);
  pointer-events: none;
}

.barra {
  padding-left: 15vw;
}

.menu {
  display: flex;
  list-style: none;
  margin: 0 0 0 40vw;
  padding: 0;
}

.menu > li {
  margin: 0 15px;
  position: relative;
  cursor: pointer;
}

.menu span {
  text-decoration: none;
  color: white;
  font-weight: 500;
}

.submenu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  list-style: none;
  margin: 0;
  padding: 8px 0;
  border-radius: 6px;
  min-width: 180px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.submenu li {
  padding: 8px 15px;
}

.submenu li a {
  color: #333;
  display: block;
  text-decoration: none;
}

.submenu li a:hover {
  background: #f1f1f1;
  color: black;
}

i.fas.fa-user-circle{
  margin: 0 0 0 -10vw;
  font-size: 2rem;
}

i.fas.fa-bars{
  margin: 0 -5vw 0 2vw;
  font-size: 2rem;
}
</style>

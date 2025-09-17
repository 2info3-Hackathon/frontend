<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router'

const showDropdown = ref(false);
const router = useRouter();

function irParaInicio(){
  router.push('/inicio')
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
       
        <!-- Dropdown -->
        <li class="dropdown" @click="showDropdown = !showDropdown">
          <span>Serviços ▾</span>
          <ul v-if="showDropdown" class="submenu">
            <li><RouterLink to="/desenvolvimento">Desenvolvimento</RouterLink></li>
            <li><RouterLink to="/design">Design</RouterLink></li>
            <li><RouterLink to="/marketing">Marketing</RouterLink></li>
          </ul>
        </li>
      </ul>

      <!-- Ícones -->
      <ul class="icons">
        <li @click="cartStore.showCart = !cartStore.showCart">
          <span class="mdi mdi-cart"></span>
        </li>
        <li><span class="mdi mdi-heart"></span></li>
        <li><span class="mdi mdi-account"></span></li>
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
  padding: 0.4vw 0 0 1vw;
  font-size: 1.2vw;
}

input {
  width: 400px;
  height: 40px;
  border-radius: 5px;
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
  transform: translateY(-50%);
  pointer-events: none;
}
  
.barra {
  padding-right: 2rem;
}

.menu {
  display: flex;
  list-style: none;
  margin: 0;
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
}

.submenu li a:hover {
  background: #f1f1f1;
}
</style>

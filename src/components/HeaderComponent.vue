<script setup>
import { ref } from "vue";

const showDropdown = ref(false);
</script>

<template>
  <header>
    <nav>
      <!-- Logo -->
      <h1>
        <RouterLink to="/">
          IFC
          <span class="logo-title">Campus Araquari</span>
        </RouterLink>
      </h1>

      <!-- Campo de busca -->
      <div class="search-wrapper">
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

/* ---------------- Menu ---------------- */
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

.menu a,
.menu span {
  text-decoration: none;
  color: white;
  font-weight: 500;
}

/* ---------------- Dropdown ---------------- */
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

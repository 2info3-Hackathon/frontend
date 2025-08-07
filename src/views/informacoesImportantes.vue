<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const showSummary = ref(true)
const route = useRoute()

watch(
  () => route.fullPath,
  (newPath) => {
    showSummary.value = newPath === '/'
  },
  { immediate: true }
)
</script>

<template>
    <body>
         <div>
    <main v-if="showSummary">
      <h1>Sumário</h1>
      <div class="menu">
        <ul>
          <li>
            <RouterLink to="/contatosImportantes" class="link">
              Contatos Importantes
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/AtestadosDeclaracoes" class="link">
              Atestados e Declarações
            </RouterLink>
          </li>
        </ul>
        <ul>
          <li>
            <RouterLink to="/atendimentos" class="link">
              Atendimentos
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/clifc" class="link">
              CLIFC
            </RouterLink>
          </li>
        </ul>
      </div>
    </main>
    <router-view />
  </div>
    </body>
</template>

<style scoped>
main {
  background-color: white;
  padding: 4vw;
  border-radius: 10px;
}

h1 {
  text-align: center;
  color: #477A9A;
  font-weight: bold;
}

.menu {
  display: flex;
  justify-content: center;
  gap: 4vw;
}

ul {
  color: #477A9A;
}

li {
  margin: 3vw;
  font-size: 1.4rem;
  cursor: pointer;
}

.link {
  color: #5BA3CF;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

body {
  background: #5BA3CF;
  padding: 7vw;
}
</style>

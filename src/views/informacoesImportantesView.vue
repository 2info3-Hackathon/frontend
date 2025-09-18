<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const showSummary = ref(true)
const route = useRoute()
const router = useRouter()

watch(
  () => route.fullPath,
  (newPath) => {
    showSummary.value = newPath === '/'
  },
  { immediate: true }
)

function voltarAoInicial() {
  router.push('/')

}
</script>

<template>

  <body>
    <div>
      <main>
        <h1>Sumário</h1>
        <div class="menu">
          <ul>
            <li>
              <RouterLink to="/contatos-importantes" class="link">
                Contatos Importantes
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/atestados-declaracoes" class="link">
                Atestados e Declarações
              </RouterLink>
            </li>
          </ul>
          <ul>
            <li>
              <RouterLink to="/atendimento" class="link">
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
        <div v-if="!showSummary" class="voltar">
          <button @click="voltarAoInicial">← Voltar </button>
        </div>
      </main>
      <router-view />
    </div>
  </body>
</template>

<style scoped>
body{
  margin-bottom: -39vw;
}
h1 {
  text-align: center;
  color: #1C72D3;
  font-weight: bold;
  font-size: 2.5rem;
  margin-top: 8vw;
}

.menu {
  display: flex;
  justify-content: center;
  gap: 4vw;
}

ul {
  color: #1C72D3;
  margin: 2vw 2vw 8vw 2vw;
  margin-bottom: 4vw;
}

ul ::marker {
  font-size: 1.3em;
}

li {
  margin: 3vw 3vw 0 3vw;
  font-size: 1.5rem;
  cursor: pointer;
}

.link {
  color: black;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s;
}

.link:hover {
  text-decoration: underline;
  color: #2c71c0;
}

button {
    background-color: #1C72D3;
    color: white;
    border-radius: 5px;
    padding: 10px 30px ;
    border: none;
    font-size: 1.2rem;
    margin-left: 5vw;
    margin-top: 3vw;
    cursor: pointer;
    transition: transform 0.2s;
}

button:hover {
    transform: scale(1.05);
}

</style>
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
    <div class="ondas"></div>
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
    <div class="girada"></div>
  </body>
</template>

<style scoped>
.ondas {
  background-image: url('data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%201440%20320%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20fill%3D%27%23ffffff%27%20d%3D%27M0%2C288L30%2C261.3C60%2C235%2C120%2C181%2C180%2C165.3C240%2C149%2C300%2C171%2C360%2C181.3C420%2C192%2C480%2C181%2C540%2C170.7C600%2C160%2C660%2C150%2C720%2C154.7C780%2C160%2C840%2C181%2C900%2C192C960%2C203%2C1020%2C213%2C1080%2C208C1140%2C203%2C1200%2C171%2C1260%2C181.3C1320%2C192%2C1380%2C235%2C1410%2C261.3L1440%2C288L1440%2C320L1410%2C320C1380%2C320%2C1320%2C320%2C1260%2C320C1200%2C320%2C1140%2C320%2C1080%2C320C1020%2C320%2C960%2C320%2C900%2C320C840%2C320%2C780%2C320%2C720%2C320C660%2C320%2C600%2C320%2C540%2C320C480%2C320%2C420%2C320%2C360%2C320C300%2C320%2C240%2C320%2C180%2C320C120%2C320%2C60%2C320%2C30%2C320L0%2C320Z%27%2F%3E%3C%2Fsvg%3E');
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  width: 102%;
  height: 60vh;
  background-color: #1c7ed4;
  display: block;
  margin-left: -20px;
  margin-top: -30px;
}

h1 {
  text-align: center;
  color: #1C72D3;
  font-weight: bold;
  font-size: 2.5rem;
  margin-top: -50px;
}

.menu {
  display: flex;
  justify-content: center;
  gap: 4vw;
  margin-bottom: -8vw;
}

ul {
  color: #1C72D3;
  ;
  margin: 2vw 2vw 6vw 2vw;
}

ul ::marker {
  font-size: 1.3em;
}

li {
  margin: 3vw;
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
  text-decoration: underline;
}

button {
    font-size: 22px;
    padding: 10px 30px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: transform 0.2s;
    margin: 1vw 2vw 1vw 2vw;
}

button:hover {
    transform: scale(1.05);
}

.voltar button {
    margin: 0 5vw 5vw 5vw;
    background:#1c7ed4;
    color: white;
    border-radius: 5px;
 }

.girada {
  background-image: url('data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%201440%20320%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20fill%3D%27%23ffffff%27%20d%3D%27M0%2C288L30%2C261.3C60%2C235%2C120%2C181%2C180%2C165.3C240%2C149%2C300%2C171%2C360%2C181.3C420%2C192%2C480%2C181%2C540%2C170.7C600%2C160%2C660%2C150%2C720%2C154.7C780%2C160%2C840%2C181%2C900%2C192C960%2C203%2C1020%2C213%2C1080%2C208C1140%2C203%2C1200%2C171%2C1260%2C181.3C1320%2C192%2C1380%2C235%2C1410%2C261.3L1440%2C288L1440%2C320L1410%2C320C1380%2C320%2C1320%2C320%2C1260%2C320C1200%2C320%2C1140%2C320%2C1080%2C320C1020%2C320%2C960%2C320%2C900%2C320C840%2C320%2C780%2C320%2C720%2C320C660%2C320%2C600%2C320%2C540%2C320C480%2C320%2C420%2C320%2C360%2C320C300%2C320%2C240%2C320%2C180%2C320C120%2C320%2C60%2C320%2C30%2C320L0%2C320Z%27%2F%3E%3C%2Fsvg%3E');
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  width: 102%;
  height: 60vh;
  background-color: #1c7ed4;
  display: block;
  margin-left: -20px;
  margin-bottom: -80px;
  transform: rotate(180deg);
  margin-top: -100px;
}
</style>
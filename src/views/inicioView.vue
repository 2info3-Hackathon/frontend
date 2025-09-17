<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import FooterComponent from '@/components/FooterComponent.vue';

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
    <div>
      <main>
        <h1>Sumário</h1>
        <div class="menu">
          <ul>
            <li>
              <RouterLink to="/nucleos" class="link">
               Núcleos
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/comissao" class="link">
                Comissões
              </RouterLink>
            </li>
          </ul>
          <ul>
            <li>
              <RouterLink to="/comite" class="link">
                Cômites
              </RouterLink>
            </li>
          </ul>
        </div>
          <div v-if="!showSummary" class="voltar">
        <button @click="voltarAoInicial">← Voltar </button>
      </div>
      </main>
      <router-view/>
       <FooterComponent />
    </div>
</template>
<style scoped>
h1 {
  text-align: center;
  color: #2D86FB;
  font-weight: bold;
  font-size: 2.5rem;
  margin-top: 8vw;

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
button{
    background-color: #1C72D3;
    color: white;
    border-radius: 5px;
    padding: 10px 30px ;
    border: none;
    font-size: 1.2rem;
    margin-left: 3vw;
    cursor: pointer;
    transition: transform 0.2s;
}

button:hover {
    transform: scale(1.05);
}
</style>
<script setup>
import { useRoute} from 'vue-router'
import { computed, ref } from 'vue'
import router from '@/router'

const route = useRoute()
const pesquisa = ref("")
const indexAtivo = ref(-1)

function irParaInicio(){
  router.push('/')
}
function irParaLogin(){
  router.push('/login')
}

const navegacao = ref([
  { id: "1", nome: "Informações importantes", rota: '/informacoes-importantes' },
  { id: "2", nome: "Grupo de estudos ", rota: '/grupo-estudos' },
  {id:"3", nome:"Vendas terceirão", rota:'/terceirao'},
  {id: "4", nome: "Biologia" , rota: '/biologia'},
  {id: "5", nome: "Filosofia" , rota: '/filosofia'},
  {id: "6", nome: "Física" , rota: '/fisica'},
  {id: "7", nome: "Geografia" , rota: '/geografia'},
  {id: "8", nome: "Hiostoria" , rota: '/historia'},
  {id: "9", nome: "Matemática" , rota: '/matematica'},
  {id: "10", nome: "Português" , rota: '/portugues'},
  {id: "11", nome: "Química" , rota: '/quimica'},
  {id: "12", nome: "Sociologia" , rota: '/sociologia'},
  {id: "13", nome: "Núcleos" , rota: '/nucleos'},
  {id: "14", nome: "Comissão" , rota: '/comissao'},
  {id: "15", nome: "Cômite" , rota: '/comite'},
  {id: "16", nome: "Atendimentos" , rota: '/atendimento'},
  {id: "17", nome: "Contatos importantes" , rota: '/contatos-importantes'},
  {id: "18", nome: "Atestados e declações" , rota: '/atestados-declaracoes'},
  {id: "19", nome: "Clifc" , rota: '/clifc'},
])

const resultados = computed(() => {
  const termo = pesquisa.value.trim().toLowerCase()

  if (!termo) return []
  return navegacao.value.filter(o =>
    o.nome.toLowerCase().includes(termo)
  )
})
function abrirNavegacao(navegacao){
  if (!navegacao) return
  router.push(navegacao.rota)
  pesquisa.value = ""
  indexAtivo.value = -1
}
function navegar(e) {
  if (e.key === "ArrowDown") {
    e.preventDefault()
    indexAtivo.value = (indexAtivo.value + 1) % resultados.value.length
  } else if (e.key === "ArrowUp") {
    e.preventDefault()
    indexAtivo.value = (indexAtivo.value - 1 + resultados.value.length) % resultados.value.length
  } else if (e.key === "Enter") {
    e.preventDefault()
    if (indexAtivo.value >= 0) {
      abrirNavegacao(resultados.value[indexAtivo.value])
    } else if (resultados.value.length > 0) {
      abrirNavegacao(resultados.value[0])
    }
  }
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
   <div class="pesquisa">
        <i class="bi bi-search"></i>
      <input type="text"
      v-model="pesquisa"
      placeholder="Pesquisar..."
      @keydown="navegar"/>
      <div class="resultados" v-if="resultados.length">
  <ul>
    <li v-for="(item, index) in resultados"
        :key="item.id"
        :class="{ ativo: index === indexAtivo }"
        @click="abrirNavegacao(item)">
      {{ item.nome }}
    </li>
  </ul>
</div>
    </div>
      <ul class="menu">
        <span class="mdi mdi-account" @click="irParaLogin"></span>

        <li class="dropdown" @click="showDropdown = !showDropdown">
         <span class="mdi mdi-menu" ></span>
          <ul v-if="showDropdown" class="submenu">
            <li><RouterLink to="/inicio">Núcleos, Comitês e Comissões</RouterLink></li>
            <li><RouterLink to="/informacoes-importantes">Informações Importantes</RouterLink></li>
            <li><RouterLink to="/grupo-estudos">Grupo de Estudos</RouterLink></li>
            <li><RouterLink to="/terceirao">Vendas Terceirões</RouterLink></li>
            <li><RouterLink to="/eventos">Eventos</RouterLink></li>
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
.pesquisa{
margin-left:45vw;
margin-right:-17vw;
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
.resultados {
  position: absolute;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 15.9vw;
  margin-left: 8px;
  z-index: 999;
  background-color: #f1f1f1;
}

.resultados ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.resultados li {
  padding: 8px 12px;
  cursor: pointer;
  color: black
}

.resultados li:hover,
.resultados li.ativo {
  background-color: #0090E3;
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

span.mdi.mdi-account{
  margin: 0 0 0 -20vw;
  font-size: 2rem;
}

span.mdi.mdi-menu{
  margin: 0 2vw 0 2vw;
  font-size: 2rem;
}
</style>

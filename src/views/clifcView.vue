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

function voltarAoSumario() {
   router.push('/informacoes-importantes')
}
</script>

<template>
<body>
    <section>

<h1>CLIFC - Centro de Línguas</h1>

<p>Escaneie o QRCode e tire suas dúvidas:</p>

<img src="/imagem/QrCode-CLIFC.png" alt="QrCode-CLIFC">

<p class="email">clifc.araquari@ifc.edu.br</p>

</section>
 <div v-if="!showSummary" class="voltar">
         <button @click="voltarAoSumario">← Voltar</button>
      </div>
</body>
</template>

<style scoped>
body{
    margin-bottom: -18vw;
}
section{
    background: linear-gradient(135deg, #1c7ed4, #42a5f5);
    margin: 8vw 15vw 6vw 15vw;
    border-radius: 20px;
}

section h1{
    color: white;
    text-align: center;
    font-size: 2.5rem;
    padding: 4vw 0 0 0;
}

section p{
    color: white;
    font-size: 1.5rem;
    text-align: center;
    padding: 2vw 0 1.5vw 0;
}

section img {
    width: 20%;
    margin: 2vw;
    display: block;
    margin: 0 auto;
}

section p.email{
    padding: 0.2vw 0vw 5vw 0vw;
    cursor: pointer;
    font-weight: bold;
}

p.email:hover{
     text-decoration: underline;
}
.voltar button {
     background-color: #1C72D3;
    color: white;
    border-radius: 5px;
    padding: 10px 30px ;
    border: none;
    font-size: 1.2rem;
    margin-left: 3vw;
    margin-bottom: 3vw;
    cursor: pointer;
    transition: transform 0.2s;
 }
 button:hover {
    transform: scale(1.05);
}
</style>
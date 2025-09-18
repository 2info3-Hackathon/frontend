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
        <h1>Contatos Importantes</h1>
        <div>
            <ul>
            <li>
                <p>
                    Curso Técnico em Informática para Internet Integrado ao Ensino Médio <br>
                     Email: <span>informatica.tec.araquari@ifc.edu.br</span><br>
                     Docente Responsável: Daniel dos Santos Jr.
                </p>
            </li>
            <li>
                <p>
                    Curso Técnico em Agropecuária Integrado ao Ensino Médio <br>
                     Email: <span>agropecuaria.tec.araquari@ifc.edu.br</span><br>
                     Docente Responsável: Nelson Jorge da Silva.
                </p>
            </li>
            <li>
                <p>
                    Curso Técnico em Química Integrado ao Ensino Médio <br>
                     Email: <span>quimica.tec.araquari@ifc.edu.br</span><br>
                     Docente Responsável: Mateus Santos Carapiá.
                </p>
            </li>
        </ul>
        </div>
    </section>
    <div v-if="!showSummary" class="voltar">
            <button @click="voltarAoSumario">← Voltar</button>
        </div>
</body>
</template>

<style scoped>
body{
    margin-bottom: -24vw;
}
h1 {
    margin: 4vw 0 0 0;
    color: black;
    display: flex;
    font-size: 2.5rem;
    justify-content: center;
}

ul {
  color: #1C72D3;
  margin: 4vw 19vw;
}

ul ::marker {
    font-size: 1.3em;
}

li {
    margin: 3vw;
    font-size: 1.5rem;
    cursor: pointer;
    letter-spacing: 1px;
}

ul li p {
    color: black;
    font-size: 1.5rem;
}

ul li p span{
    color: #1C7ED4;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s;
}

span:hover {
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
    margin-bottom: -3vw;
    cursor: pointer;
    transition: transform 0.2s;
 }
 button:hover {
    transform: scale(1.05);
}


</style>
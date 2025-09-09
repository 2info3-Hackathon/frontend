<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const showSummary = ref(true)
const textoAtivo = ref('')
const route = useRoute()
const router = useRouter()

function mostrarTexto(id) {
    textoAtivo.value = textoAtivo.value === id ? '' : id
}

watch(
    () => route.fullPath,
    (newPath) => {
        showSummary.value = newPath === '/'
    },
    { immediate: true }
)

function voltarAoSumario() {
    router.push('/')
}
</script>

<template>

    <body>
        <main>
            <h1>Faltei, e agora?</h1>
            <p><span>Apresentar Justificativa ao SISAE</span> enviando sua documentação (atestados, declarações,
                outros):</p>
            <img src="/imagens/QrCode-Atestados_e_Declarações.png" alt="QrCode">
            <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeeUKe0cKL_MQkgGSqf9xZNKbeInX_6sRj4vfXM5o75R4JCTg/viewform">Clique aqui!
            </a>
            <h2>Teve atividade avaliativa no dia? </h2>
            <div class="botoes">
                <button @click="mostrarTexto('texto1')">Sim</button>
                <button @click="mostrarTexto('texto2')">Não</button>
            </div>
            <div v-if="textoAtivo === 'texto1'" class="texto">
                <p>Preencha o formulário de pedido de uma nova avaliação:</p>
                <img src="/imagens/QrCode-Nova_Avaliação.png" alt="QrCode">
                <a href="https://bit.ly/nova-avalia%C3%A7%C3%A3o?r=qr">Clique aqui!
                </a>
                <p>Faça o requerimento de nova avaliação, até 72h após a falta.</p>
                <img src="/imagens/QrCode-Requerimento.png" alt="QrCode">
                <a href="https://bit.ly/requerimentos2025?r=qr">Clique aqui!
                </a>
            </div>
            <div v-if="textoAtivo === 'texto2'" class="texto">
                <p><span>Ok! É apenas isso.</span> <br> Só mantenha sua atenção no número <br> de faltas e fale com o
                    SISAE.</p>
            </div>
        </main>
        <div v-if="!showSummary" class="voltar">
            <button @click="voltarAoSumario">← Voltar ao Sumário</button>
        </div>
    </body>
</template>

<style scoped>

main {
    background: #1C72D3;
    border-radius: 5px;
    margin: 0 15vw 8vw 15vw;
    padding: 0 6vw 3vw 6vw;
}

h1 {
    padding: 3vw;
    text-align: center;
    color: white;
    font-weight: bold;
}

p {
    text-align: center;
    color: white;
    font-size: 1.3rem;
}

span {
    font-weight: bold;
}

h2 {
    text-align: center;
    color: white;
}

.botoes {
    display: flex;
    justify-content: center;
    align-items: center;
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

a {
    display: block;     /* transforma em bloco */
    text-align: center; /* centraliza o texto dentro do link */
    margin: 0 auto;     /* centraliza se tiver largura definida */
    width: fit-content; /* largura mínima necessária */
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s;
    color: white;
    padding: 1vw;
    font-size: 1.3rem;
}

a:hover {
  text-decoration: underline;
  color: #184374;
}

img{
    width: 20%;
    margin: 2vw;
    display: block;
    margin: 0 auto;
}

.voltar button {
    margin: 0 5vw 5vw 5vw;
    background-color: #1C72D3;;
    color: white;
    border-radius: 5px;
}
</style>
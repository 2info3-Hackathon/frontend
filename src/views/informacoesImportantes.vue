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
        <img src="/imagens/Group65.png" alt="ondas-header">
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
        <img src="/imagens/Group65.png" class="girada" alt="ondas-footer">
    </body>
</template>

<style scoped>
body img {
    width: 102.39%;
    /* largura visível */
    height: 200px;
    overflow: hidden;
    /* esconde o que passa */
    margin-top: -50px;
    /* sobe a imagem para cortar a parte de cima */
    margin-left: -20px;
    /* empurra pra esquerda */
}

h1 {
    text-align: center;
    color: #2D86FB;
    font-weight: bold;
    font-size: 2.5rem;
    margin: 4vw 0 0 0;
}

.menu {
    display: flex;
    justify-content: center;
    gap: 4vw;
}

ul {
    color: #2D86FB;
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

.girada {
    width: 102.39%;
    /* largura visível */
    height: 180px;
    overflow: hidden;
    /* esconde o que passa */
    margin-left: -20px;
    /* empurra pra esquerda */
    transform: rotate(180deg);
    /* gira 45 graus */
}
</style>

<script setup>
import { ref} from 'vue'
import { useRoute } from 'vue-router'

const showSummary = ref(true)
const route = useRoute()

</script>

<template>
        <div>
            <main v-if="showSummary">
                <h1>Sumário</h1>
                <div class="menu">
                    <ul>
                        <li>
                            <RouterLink to="/comissao" class="link">
                               Comissão
                            </RouterLink>
                        </li>
                       
                        <li>
                            <RouterLink to="/nucleos" class="link">
                              Núcleo
                            </RouterLink>
                        </li>
                   
                        <li>
                            <RouterLink to="/comite" class="link">
                                Comitê
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
</template>
<style scoped>
h1 {
    text-align: center;
    color: #2D86FB;
    font-weight: bold;
    font-size: 2.5rem;
    margin: 4vw 0 0 0;
}
.menu {
    justify-content: center;
}
ul {
    color:aliceblue;
    margin: 2vw 2vw 6vw 2vw;
    background-color:#2c71c0;
    border-radius: 10px;
    display: flex;
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
    color:aliceblue;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s;
}
.link:hover {
    text-decoration: underline;
    color: aliceblue;
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
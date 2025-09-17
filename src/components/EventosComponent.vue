<script setup>
import { useEventStore } from '@/stores/event';
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'


const store = useEventStore();
const events = store.events;
const showSummary = ref(true)
const route = useRoute()
const router = useRouter()

console.log('Eventos carregados:', events);

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
    <section>
        <h1>
            Eventos
        </h1>
        <div class="eventos">
            <div v-if=" !events || events.length === 0">Nenhum evento encontrado.</div>
        <article v-for="evento in events" :key="evento.id">
            <div class="events">
                <h2 class="name">
                    {{ evento.nomeEvento }}
                </h2>
                <ul>
                    <li>
                        <h2>
                            Organizador:
                        </h2>
                        <p>
                            
                        </p>
                    </li>
                    <li>
                        <h2>
                            Email:
                        </h2>
                        <p>
                            
                        </p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h2>
                            Hora:
                        </h2>
                        <p>
                            {{ evento.hora }}
                        </p>
                    </li>
                    <li>
                        <h2>
                            Data:
                        </h2>
                        <p>
                            {{ evento.data }}
                        </p>
                    </li>
                </ul>
                <div>
                    <h2>
                        Descrição:
                    </h2>
                    <p>
                        {{ evento.descricao }}
                    </p>
                </div>
            </div>
        </article>
        </div>  
    </section>
     <div v-if="!showSummary" class="voltar">
        <button @click="voltarAoInicial">← Voltar </button>
      </div>
     <div class="girada"></div>
</template>

<style scoped>
section {
    margin: 0 2vw;
    text-align: center;
    align-items: center;

     & h1 {
        margin-top: 8vw;
        color: #1c7ed4;
        padding: 1vw 2vw;
        display: inline-block;
        font-size: calc(2.5rem + 0.390625vw);
        font-weight: bold;
    }

    & div.eventos {
        background: linear-gradient(135deg, #1c7ed4, #42a5f5);
        padding: 2vw;
        margin: 6vw 8vw;
        border-radius: 20px;

        & div {
            color: white;
            font-size: calc(1.3rem + 0.390625vw);
            padding: 4px;
        }
    }


    & article {
        font-size: calc(1.3rem + 0.390625vw);
       
        

        & .events {
            border-radius: 20px;
            margin: 4vw 5vw 4vw 5vw;
            padding: 3vw 3vw 5vw 3vw;
            background-color: white;

            & .name {
                color: #1c7ed4;
                padding: 1vw 4vw;
                border-radius: 5px;
                margin: 1.5vw 0 1.5vw 0;
                display: inline-block;
            }

            & ul {
                display: flex;
                justify-content: space-between;

                & li {
                    display: flex;

                    & h2 {
                        display: inline-block;
                        color: #1c7ed4;
                        margin: 1.5vw 0vw 1vw 0vw;
                    }

                    & p {
                        color: black;
                        margin: 1.9vw 0 0 0;
                        padding: 0.5vw 2vw;
                        border-radius: 5px;
                    }
                }
            }

            & div {
                display: flex;

                & h2 {
                    display: inline-block;
                    color: #1c7ed4;
                    margin: 1.5vw 0vw 0 3vw;
                }

                & p {
                    color: black;
                    margin: 1.9vw 0 0 0;
                    padding: 0.5vw 2vw;
                    border-radius: 5px;
                }
            }
        }
    }
} 
   & button {
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

& button:hover {
    transform: scale(1.05);
}

& .voltar button {
    margin: 5vw 5vw 7vw 5vw;
    background:#1c7ed4;
    color: white;
    border-radius: 5px;
}
</style>
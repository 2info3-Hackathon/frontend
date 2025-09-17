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
  router.push('/pag-inicial')

}
</script>

<template>
    <div class="ondas"></div>
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
  margin-top: -10px;
}
section {
    margin: 0 2vw;
    text-align: center;
    align-items: center;

     & h1 {
        margin: -10vw 0 0 0;
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
    font-size: 22px;
    padding: 20px 30px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.2s;
    margin: 1vw 2vw 1vw 2vw;
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
.girada {
  background-image: url('data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%201440%20320%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20fill%3D%27%23ffffff%27%20d%3D%27M0%2C288L30%2C261.3C60%2C235%2C120%2C181%2C180%2C165.3C240%2C149%2C300%2C171%2C360%2C181.3C420%2C192%2C480%2C181%2C540%2C170.7C600%2C160%2C660%2C150%2C720%2C154.7C780%2C160%2C840%2C181%2C900%2C192C960%2C203%2C1020%2C213%2C1080%2C208C1140%2C203%2C1200%2C171%2C1260%2C181.3C1320%2C192%2C1380%2C235%2C1410%2C261.3L1440%2C288L1440%2C320L1410%2C320C1380%2C320%2C1320%2C320%2C1260%2C320C1200%2C320%2C1140%2C320%2C1080%2C320C1020%2C320%2C960%2C320%2C900%2C320C840%2C320%2C780%2C320%2C720%2C320C660%2C320%2C600%2C320%2C540%2C320C480%2C320%2C420%2C320%2C360%2C320C300%2C320%2C240%2C320%2C180%2C320C120%2C320%2C60%2C320%2C30%2C320L0%2C320Z%27%2F%3E%3C%2Fsvg%3E');
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  width: 107%;
  height: 60vh;
  background-color: #1c7ed4;
  display: block;
  margin-left: -50px;
  margin-bottom: -80px;
  transform: rotate(180deg);
  margin-top: -100px;
};
</style>
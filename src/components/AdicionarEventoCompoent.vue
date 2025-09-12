<script setup>
import { useRouter } from 'vue-router'
import { useEventStore } from '@/stores/event';
import { ref } from 'vue'

let router = useRouter();
let nomeEvento = ref('');
let data = ref('');
let hora = ref('');
let desc = ref('');

let eventStore = useEventStore();

function addEvent() {
    eventStore.newEvent(nomeEvento.value, data.value, hora.value, desc.value);

    nomeEvento.value = '';
    data.value = '';
    hora.value = '';
    desc.value = ''

    router.push({ name: 'Eventos' });
}
</script>

<template>
    <main>
        <section>
            <h1>Adicionar Evento</h1>
            <div class="adicionar">
                <form @submit.prevent="addEvent">
                <div>
                    <label for="nomeEvento">
                        Nome do Evento:
                    </label>
                    <input type="text" v-model="nomeEvento" id="nomeEvento">
                </div>
                <div class="data-hora">
                    <div>
                        <label for="data">
                            Data:
                        </label>
                        <input type="date" v-model="data" id="data">
                    </div>
                    <div>
                        <label for="hora">
                            Hora:
                        </label>
                        <input type="time" id="time" v-model="hora" />
                    </div>
                </div>
                <div>
                    <label for="desc">
                        Descrição do Evento:
                    </label>
                    <textarea v-model="desc" id="desc" rows="5" cols="33"></textarea>
                </div>
                <div class="final">
                    <input type="reset" value="Limpar">
                    <input type="submit" value="Enviar">
                </div>
            </form>
            </div>
        </section>
    </main>
</template>


<style scoped>
h1 {
    margin: 6vw 0 0 0vw;
    color: #1c7ed4;
    padding: 1vw 2vw;
    font-size: calc(2.5rem + 0.390625vw);
    font-weight: bold;
    text-align: center;
}

div.adicionar {
    background: linear-gradient(135deg, #1c7ed4, #42a5f5);
    padding: 35px 95px 35px 95px;
    border-radius: 20px;
    margin: 5vw 15vw;
}

form {
    margin: 6vw;
    background: white;
    padding: 6vw 7vw 6vw 5vw;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    color: black;
    font-size: calc(1.3rem + 0.390625vw);

    & .data-hora {
        display: flex;
        justify-content: space-between;
        padding: 4vw 0;
    }

    & input {
        font-size: calc(1.3rem + 0.390625vw);
        border-radius: 5px;
        border: solid black 1px;
        margin: 0.5vw 0 0 1vw;
        padding: 10px 15px;
    }

    & textarea {
        font-size: calc(1.3rem + 0.390625vw);
        border-radius: 5px;
        border: solid black 1px;
        margin: 0.5vw 0 2vw 1vw;
    }

    & .final {
        text-align: center;

        & input {
            background: linear-gradient(135deg, #1c7ed4, #42a5f5);
            color: white;
            font-size: calc(1.3rem + 0.390625vw);
            padding: 10px 25px;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: transform 0.2s;
            margin: 0 2vw 0 4vw;
        }

        & input:hover {
            transform: scale(1.05);
        }
    }
}
</style>

<script setup>

import { addEvent } from '@/stores/event';

const UseAddEvent = addEvent();

</script>

<template>
    <section>
        <form @submit.prevent="UseAddEvent">
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
                <div>
                    <label for="desc">
                        Descrição do Evento:
                    </label>
                </div>
                <textarea v-model="desc" id="desc" rows="5" cols="45"></textarea>
            </div>

            <div class="final">
                <input type="reset" value="Voltar">
                <input type="submit" value="Enviar">
            </div>
        </form>
    </section>
</template>

<style scoped>
section{
    margin: 6vw;
    background: linear-gradient(45deg, #1B5299, #2D88FF);
    padding: 4vw;
    border-radius: 10px;
    color: white;
    font-size: calc(1.75vw + 0.390625vw);

    & .data-hora{
        display: flex;
        justify-content: space-between;
        padding: 2vw 0;
        width: 70%;
    }

    & input{
        font-size: calc(1.75vw + 0.390625vw);
        border-radius: 5px;
        border: solid black ;
        margin: 0 0 0 1vw;
        padding: 10px;
    }

    & textarea{
        font-size: calc(1.75vw + 0.390625vw);
        border-radius: 5px;
        border: solid black ;
        margin: 2vw 0;
    }

    & .final {

        text-align: center;

        & input{
            font-size: calc(1.75vw + 0.390625vw);
            border-radius: 5px;
            border: solid black ;
            color: #1B5299;
            margin: 0 3vw 0 0 ;
            padding: 1vw;

            &:last-child{
                margin: 0 0 0 3vw;
            }
        }

    }
}
</style>
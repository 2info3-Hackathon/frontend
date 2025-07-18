<script setup>

import { useEventStore } from '@/stores/event';
const store = useEventStore();

const eventos = store.events

</script>

<template>
    <section>
        <h1>
            Eventos
        </h1>
        <article v-for="event in eventos" :key="event.id">
            <div class="events">
                <h2 class="name">
                    {{ event.nome }}
                </h2>
                <ul>
                    <li>
                        <h2>
                            Hora:
                        </h2>
                        <p>
                            {{ event.hora }}
                        </p>
                    </li>
                    <li>
                        <h2>
                            Data:
                        </h2>
                        <p>
                            {{ event.data }}
                        </p>
                    </li>
                    <li>
                        <h2>
                            Tema:
                        </h2>
                        <p>
                            {{ event.tema }}
                        </p>
                    </li>
                </ul>
                <div>
                    <h2>
                        Descrição:
                    </h2>
                    <p>
                        {{ event.descricao }}
                    </p>
                </div>
            </div>
        </article>

    </section>
</template>

<style scoped>
section {
    margin: 0 2vw;
    text-align: center;
    align-items: center;

    & h1 {
        margin: 1vw 0;
        background-color: white;
        color: #5BA3CF;
        text-align: center;
        padding: 1vw 2vw;
        display: inline-block;
        border-radius: 5px;
        font-size: 2vw;
    }

    & article {
        font-size: 1.5vw;

        & .events {
            background-color: white;
            border-radius: 5px;
            margin: 4vw 5vw;
            padding: 1vw 5vw 3vw 5vw;

            & .name {
                background-color: #5BA3CF;
                color: white;
                padding: 1vw 4vw;
                border-radius: 5px;
                margin: 1.5vw 0;
                display: inline-block;
            }

            & ul {
                display: flex;
                justify-content: space-between;

                & li {
                    display: flex;

                    & h2 {
                        display: inline-block;
                        color: #5BA3CF;
                        margin: 1.5vw 2vw 1vw 0;
                    }

                    & p {
                        background-color: #5BA3CF;
                        color: white;
                        margin: 1vw 0;
                        padding: 0.5vw 2vw;
                        border-radius: 5px;
                    }
                }
            }

            & div {
                display: flex;

                & h2 {
                    display: inline-block;
                    color: #5BA3CF;
                    margin: 1.5vw 1vw 0 0;
                }

                & p {
                    background-color: #5BA3CF;
                    color: white;
                    margin: 1vw 0;
                    padding: 0.5vw 2vw;
                    border-radius: 5px;
                }
            }
        }
    }


}
</style>
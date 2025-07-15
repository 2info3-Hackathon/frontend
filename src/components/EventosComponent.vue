<script setup>

defineProps(['events'])

</script>
<template>
    <section>
        <h1>
            Eventos
        </h1>
        <article v-for="event in events" :key="event.id">
            <div>
                <h2>
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
<style scoped></style>
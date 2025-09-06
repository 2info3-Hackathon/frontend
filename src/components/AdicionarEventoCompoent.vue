<script setup>

</script>

<template>
    <section>
        <form action="" method="post">
            <div>
                <label for="nomeEvento">
                    Nome do Evento:
                </label>
                <input type="text" v-model="nomeEvento" id="nomeEvento">
            </div>
            <div>
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
                <div>
                    <label for="tema">
                        Tema:
                    </label>
                    <select name="tema" id="tema">
                        <option value="1"></option>
                    </select>
                </div>
            </div>
            <div>
                <div>
                    <label for="desc">
                        Descrição do Evento:
                    </label>
                </div>
                <textarea name="desc" id="desc" rows="10" cols="90"></textarea>
            </div>
        </form>
    </section>
</template>

<style scoped>

</style>
<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const showSummary = ref(true)
const route = useRoute()
const router = useRouter()

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
    <main>
        <h1>oi</h1>
        <div v-if="!showSummary" class="voltar">
            <button @click="voltarAoSumario">← Voltar ao Sumário</button>
        </div>
    </main>
</template>

<style scoped>
h1 {
    margin: 5vw;
}

div {
    margin: 6vw;
}
</style>
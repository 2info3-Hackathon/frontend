<script>
import { useRouter } from 'vue-router'

const router = useRouter()

function voltar() {
    router.push('/')
}
</script>

<template>

<button class="turmas" @click="voltar">← Voltar</button>

</template>


<style scoped>

</style>

<script setup>
import { useRouter } from 'vue-router'
import produtos from '@/components/produtos.vue'

const router = useRouter()

function voltar() {
    router.push('/')
}


</script>
<template>
    <produtos />
    <button class="turmas" @click="voltar">Voltar</button>
</template>
<style scoped>


</style>

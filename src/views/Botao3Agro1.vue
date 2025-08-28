<script setup>
import { useRouter } from 'vue-router'
import agro1Component from '@/components/agro1.vue'

const router = useRouter()

function voltar() {
    router.push('/')
}


</script>
<template>
    <agro1-component />
    <button class="turmas" @click="voltar">Voltar</button>
</template>
<style scoped>


</style>
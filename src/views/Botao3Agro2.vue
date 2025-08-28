<script setup>
import { useRouter } from 'vue-router'
import agro2Component from '@/components/agro2.vue'

const router = useRouter()

function voltar() {
    router.push('/')
}


</script>
<template>
    <agro2-component />
    <button class="turmas" @click="voltar">Voltar</button>
</template>
<style scoped>


</style>
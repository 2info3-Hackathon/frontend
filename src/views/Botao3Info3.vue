<script setup>
import { useRouter } from 'vue-router'
import info3Component from '@/components/info3.vue'

const router = useRouter()
function voltar() {
    router.push('/')
}
</script>
<template>
    <info3-component />
    <button class="turmas" @click="voltar">Voltar</button>
</template>
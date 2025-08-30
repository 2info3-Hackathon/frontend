<script setup>
import { useRouter } from 'vue-router'
import info1Component from '@/components/info1.vue'
const router = useRouter()

function voltar() {
    router.push('/')
}
</script>
<template>
    <info1-component />
    <button class="turmas" @click="voltar">Voltar</button>
</template>
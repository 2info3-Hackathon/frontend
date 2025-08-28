<script setup>
import { useRouter } from 'vue-router'
import info2Component from '@/components/info2.vue'

const router = useRouter()
function voltar() {
    router.push('/')
}
</script>
<template>
    <info2-component />
    <button class="turmas" @click="voltar">Voltar</button>
</template>
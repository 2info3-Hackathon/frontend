<script setup>
import { useRouter } from 'vue-router'
import quimiComponent from '@/components/quimi.vue' 

const router = useRouter()

function voltar() {
    router.push('/')
}


</script>
<template>
    <quimi-component />
    <button class="turmas" @click="voltar">Voltar</button>
</template>
<script setup>
import { useRouter } from 'vue-router'
import agro3Component from '@/components/agro3.vue'

const router = useRouter()

function voltar() {
    router.push('/')
}
</script>
<template>
    <agro3-component />
   <button class="turmas" @click="voltar">Voltar</button> 
</template>

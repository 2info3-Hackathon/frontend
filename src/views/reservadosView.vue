<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
import { useReservadosStore } from "@/stores/reservados";

const reservadosStore = useReservadosStore()

function voltar() {
    router.push('/')
}
</script>

<template>

{{ reservadosStore.reservados }}

<button class="turmas" @click="voltar">← Voltar</button>



</template>


<style scoped>

</style>

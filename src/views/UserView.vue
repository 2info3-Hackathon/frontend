<script setup>
import AdminComponent from '@/components/AdminComponent.vue';
import AlunoComponent from '@/components/AlunoComponent.vue';
import ProfessorComponent from '@/components/ProfessorComponent.vue';
import TerceiraoComponent from '@/components/TerceiraoComponent.vue';
import { ref, onMounted, computed } from 'vue'

const user = ref(null)

const tipoUserMap = {
    1: 'Admin',
    2: 'Professor',
    3: 'Terceirao',
    4: 'Aluno'
}

const userType = computed(() => {
    if (!user.value || !user.value.tipo_user) return null
    return tipoUserMap[user.value.tipo_user] || 'Aluno'
})

const currentComponent = computed(() => {
    if (!userType.value) return null

    return {
        'Admin': AdminComponent,
        'Professor': ProfessorComponent,
        'Terceirao': TerceiraoComponent,
        'Aluno': AlunoComponent
    }[userType.value]
})

onMounted(() => {
    const userData = localStorage.getItem('user_info')
    if (userData) {
        user.value = JSON.parse(userData)
        console.log("Usuário carregado:", user.value)
    }
})


</script>

<template>

    <section v-if="currentComponent">
        <component :is="currentComponent" />
    </section>
    <p v-else>Carregando...</p>

</template>

<style scoped></style>
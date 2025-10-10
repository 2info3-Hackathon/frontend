<script setup>
import AdminComponent from '@/components/AdminComponent.vue';
import AlunoComponent from '@/components/AlunoComponent.vue';
import ProfessorComponent from '@/components/ProfessorComponent.vue';
import TerceiraoComponent from '@/components/TerceiraoComponent.vue';
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const user = ref(null)

const tipoUserMap = {
    1: 'Admin',
    2: 'Professor',
    3: 'Terceirao',
    4: 'Aluno'
}

const userType = computed(() => {
    if (!user.value || !user.value.tipo_user) return null
    return tipoUserMap[user.value.tipo_user] || null
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

const isValidTipoUser = tipo => [1, 2, 3, 4].includes(tipo)

onMounted(() => {
  try {
    const userData = localStorage.getItem('user_info')
    if (userData) {
      const parsedUser = JSON.parse(userData)
      if (isValidTipoUser(parsedUser.tipo_user)) {
        user.value = parsedUser
        console.log("Usuário carregado:", user.value)
      } else {
        console.warn("Tipo de usuário inválido:", parsedUser.tipo_user)
        router.push('/login')
      }
    } else {
      router.push('/login')
    }
  } catch (e) {
    console.error("Erro ao carregar user_info:", e)
    router.push('/login')
  }
})

</script>

<template>

    <section v-if="currentComponent">
        <component :is="currentComponent" />
    </section>

</template>

<style scoped></style>
<script setup>
import AdminComponent from '@/components/AdminComponent.vue';
import AlunoComponent from '@/components/AlunoComponent.vue';
import ProfessorComponent from '@/components/ProfessorComponent.vue';
import TerceiraoComponent from '@/components/TerceiraoComponent.vue';
import { reactive, ref } from 'vue'

const user = reactive({
  username: 'admin',
  password: 'admin'
})

const tipo = ref('não logado')

</script>

<template>
    {{ tipo }}
    <section v-if="user.tipo === 'Admin'">
            <AdminComponent />
    </section>
    <section v-else-if="user.tipo === 'Professor'">
        <ProfessorComponent />
    </section>
    <section v-else-if="user.tipo === 'Terceirao'">
        <TerceiraoComponent />
    </section>
    <section v-else>
        <AlunoComponent />
    </section>

</template>

<style scoped>
</style>
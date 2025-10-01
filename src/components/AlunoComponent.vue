<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function logout() {
  localStorage.removeItem('token')
  localStorage.removeItem('user_info')
  router.push('/') }

</script>

<template>
    <section>
        <div>
            <ul>
                <li>
                    <RouterLink to="/" class="link">
                        Inicio
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/reservados" class="link">
                        Verificar Reservas
                    </RouterLink>
                </li>
            </ul>
        </div>
        <div>
            <button @click="logout">
                Deslogar
            </button>
        </div>
    </section>
</template>

<style scoped></style>
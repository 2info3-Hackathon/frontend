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
                    <RouterLink to="/adicionar-evento" class="link">
                        Adicionar Evento
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/adicionar-grupo" class="link">
                        Adicionar Grupo de Estudo
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/adicionar-nucleo" class="link">
                        Adicionar Núcleo
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/adicionar-comite" class="link">
                        Adicionar Comite
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/adicionar-comissao" class="link">
                        Adicionar Comissao
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/adicionar-venda" class="link">
                        Adicionar Venda
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
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Grupo Estudos',
        component: () => import('@/views/GrupoEstudos.vue'),
    },
    {
      path: '/BotaoBiologia',
      component: () => import('@/components/BotaoBiologia.vue'),
    }
]

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes,
})

export default router

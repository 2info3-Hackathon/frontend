import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import('@/views/LoginView.vue'),
    },
    {
        path: '/cadastro-discente',
        name: 'Discente',
        component: () => import('@/views/DiscenteView.vue'),
    },
    {
        path: '/cadastro-docente',
        name: 'Docente',
        component: () => import('@/views/DocenteView.vue'),
    },
    {
        path: '/cadastro-terceirao',
        name: 'Terceirao',
        component: () => import('@/views/TerceiraoView.vue'),
    },
]

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes,
})

export default router

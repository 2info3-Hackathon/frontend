import { createWebHistory, createRouter } from "vue-router";

const router = createRouter 
({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/eventos',
            name: 'Eventos',
            component: () => import('@/view/EventosView.vue'),
        },
        {
            path: '/',
            name: 'Adicionar Evento',
            component: () => import('@/view/AdicionarEventoView.vue')
        }
    ],
})

export default router
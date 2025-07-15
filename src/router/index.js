import { createWebHistory, createRouter } from "vue-router";

const router = createRouter 
({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Eventos',
            component: () => import('@/view/EventosView.vue'),
        }
    ],
})

export default router
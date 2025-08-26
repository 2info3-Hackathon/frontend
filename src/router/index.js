import { createWebHistory, createRouter } from "vue-router";

const router = createRouter
({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Atendimentos',
            component: () => import('@/view/AtendimentosView.vue'),
        }
    ],
})

export default router
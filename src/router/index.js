import { createWebHistory, createHouter } from "vue-router";

const router = createHouter
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
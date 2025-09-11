import { createWebHistory, createRouter } from "vue-router";

const router = createRouter 
({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Inicial',
            component: () => import('@/view/inicialView.vue'),
        }
    ],
})

export default router
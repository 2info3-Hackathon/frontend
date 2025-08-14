import { createWebHistory, createRouter } from "vue-router";

const router = createRouter 
({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/', 
            name: 'CLIFC',
            component: () => import('@/view/ClifcView.vue'),
        }
    ],
})

export default router

// "path: '/clifc'" (Último commit)
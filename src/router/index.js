import {createRouter , createWebHistory} from 'vue-router'

const routes = [
    {
        Path: '/',
        name: 'Vendas Terceirao',
        component: () => import('@/views/VendasTerceirao.vue'),
    },
    {
        path: '/turmasComponentView',
        name: 'turmas',
        component: () => import('@/components/turmas.vue'),
    },
    {
        path: '/3Agro1View',
        name: '3Agro1',
        component: () => import('@/views/3Agro1.vue'),
    },
    {
        path: '/3Agro2View',
        name: '3Agro2',
        component: () => import('@/views/3Agro2.vue'),
    },
    {
        path: '/3Agro3View',
        name: '3Agro3',
        component: () => import('@/views/3Agro3.vue'),
    },
    {
        path: '/3Info1View',
        name: '3Info1',
        component: () => import('@/views/3Info1.vue'),
    },
    {
        path: '/3Info2View',
        name: '3Info2',
        component: () => import('@/views/3Info2.vue'),
    },
    {
        path: '/3Info3View',
        name: '3Info3',
        component: () => import('@/views/3Info3.vue'),
    },
    {
        path: '/3QuimiView',
        name: '3Quimi',
        component: () => import('@/views/3Quimi.vue'),
    },

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router

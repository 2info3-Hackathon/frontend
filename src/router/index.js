import {createRouter , createWebHistory} from 'vue-router'

const routes = [
    {
        Path: '/',
        name: 'Vendas Terceirao',
        component: () => import('@/views/VendasTerceiraoView.vue'),
    },
    {
        path: '/turmasComponent',
        name: 'turmas',
        component: () => import('@/components/turmas.vue'),
    },
    {
        path: '/3Agro1',
        name: '3Agro1',
        component: () => import('@/views/3Agro1View.vue'),
    },
    {
        path: '/3Agro2',
        name: '3Agro2',
        component: () => import('@/views/3Agro2View.vue'),
    },
    {
        path: '/3Agro3',
        name: '3Agro3',
        component: () => import('@/views/3Agro3View.vue'),
    },
    {
        path: '/3Info1',
        name: '3Info1',
        component: () => import('@/views/3Info1View.vue'),
    },
    {
        path: '/3Info2',
        name: '3Info2',
        component: () => import('@/views/3Info2View.vue'),
    },
    {
        path: '/3Info3',
        name: '3Info3',
        component: () => import('@/views/3Info3View.vue'),
    },
    {
        path: '/3Quimi',
        name: '3Quimi',
        component: () => import('@/views/3QuimiView.vue'),
    },
    {
        path: '/adicionarProdutos',
        name: 'adicionarEventos',
        component: () => import('@/views/adicionarProdutosView.vue')
    }

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router

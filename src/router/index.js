import {createRouter , createWebHistory} from 'vue-router'

const routes = [
    {
        Path: '/',
        name: 'Vendas Terceirao',
        component: () => import('@/views/VendasTerceirao.vue'),
    },
    {
        path: '/turmasComponent',
        name: 'turmas',
        component: () => import('@/components/turmas.vue'),
    },
    {
        path: '/Botao3Agro1',
        name: '3Agro1',
        componet: () => import('@/views/Botao3Agro1.vue'),
    },
    {
        path: '/Botao3Agro2',
        name: '3Agro2',
        component: () => import('@/views/Botao3Agro2.vue'),
    },
    {
        path: '/Botao3Agro3',
        name: '3Agro3',
        component: () => import('@/views/Botao3Agro3.vue'),
    },
    {
        path: '/Botao3Info1',
        name: '3Info1',
        component: () => import('@/views/Botao3Info1.vue'),
    },
    {
        path: '/Botao3Info2',
        name: '3Info2',
        component: () => import('@/views/Botao3Info2.vue'),
    },
    {
        path: '/Botao3Info3',
        name: '3Info3',
        component: () => import('@/views/Botao3Info3.vue'),
    },
    {
        path: '/Botao3Quimi',
        name: '3Quimi',
        component: () => import('@/views/Botao3Quimi.vue'),
    },
    {   path: '/BotaoAdicionarProduto',
        name: 'Produto',
        //component: () => import('@/views/botaoAdicionarProduto.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
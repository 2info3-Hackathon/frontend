import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Grupo Estudos',
        component: () => import('@/views/GrupoEstudos.vue'),
    },
    {
      path: '/HeaderComponent',
      name: 'Header',
      component: () => import('@/components/HeaderComponent.vue'),
    },
    {
      path: '/BiologiaView',
      name: 'Biologia',
      component: () => import('@/views/BiologiaView.vue'),
    },
    {
      path: '/FilosofiaView',
      name: 'Filosofia',
      component: () => import('@/views/FilosofiaView.vue'),
    },
    {
      path: '/FisicaView',
      name: 'Fisica',
      component: () => import('@/views/FisicaView.vue'),
    },
    {
      path: '/GeografiaView',
      name: 'Geografia',
      component: () => import('@/views/GeografiaView.vue'),
    },
    {
      path: '/HistoriaView',
      name: 'Historia',
      component: () => import('@/views/HistoriaView.vue'),
    },
    {
      path: '/MatematicaView',
      name: 'Matematica',
      component: () => import('@/views/MatematicaView.vue'),
    },
    {
      path: '/PortuguesView',
      name: 'Portugues',
      component: () => import('@/views/PortuguesView.vue'),
    },
    {
      path: '/QuimicaView',
      name: 'Quimica',
      component: () => import('@/views/QuimicaView.vue'),
    },
    {
      path: '/SociologiaView',
      name: 'Sociologia',
      component: () => import('@/views/SociologiaView.vue'),
    },
    {
      path: '/AdicionarGrupo',
      name: 'Adicionar Grupo',
      component: () => import('@/views/AdicionarGrupo.vue')
    },
]

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes,
})

export default router

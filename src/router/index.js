import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Grupo Estudos',
        component: () => import('@/views/GrupoEstudos.vue'),
    },
    {
      path: '/InicialGrupoEstudos',
      name: 'Inicial Grupo Estudos',
      component: () => import('@/components/InicialGrupoEstudos.vue'),
    },
    {
      path: '/BotaoBiologia',
      name: 'Biologia',
      component: () => import('@/components/BotaoBiologia.vue'),
    },
    {
      path: '/BotaoFilosofia',
      name: 'Filosofia',
      component: () => import('@/components/BotaoFilosofia.vue'),
    },
    {
      path: '/BotaoFisica',
      name: 'Fisica',
      component: () => import('@/components/BotaoFisica.vue'),
    },
    {
      path: '/BotaoGeografia',
      name: 'Geografia',
      component: () => import('@/components/BotaoGeografia.vue'),
    },
    {
      path: '/BotaoHistoria',
      name: 'Historia',
      component: () => import('@/components/BotaoHistoria.vue'),
    },
    {
      path: '/BotaoMatematica',
      name: 'Matematica',
      component: () => import('@/components/BotaoMatematica.vue'),
    },
    {
      path: '/BotaoPortugues',
      name: 'Portugues',
      component: () => import('@/components/BotaoPortugues.vue'),
    },
    {
      path: '/BotaoQuimica',
      name: 'Quimica',
      component: () => import('@/components/BotaoQuimica.vue'),
    },
    {
      path: '/BotaoSociologia',
      name: 'Sociologia',
      component: () => import('@/components/BotaoSociologia.vue'),
    },
]

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes,
})

export default router

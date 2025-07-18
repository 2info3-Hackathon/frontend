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
      path: '/BotaoBiologia',
      name: 'Biologia',
      component: () => import('@/views/BotaoBiologia.vue'),
    },
    {
      path: '/BotaoFilosofia',
      name: 'Filosofia',
      component: () => import('@/views/BotaoFilosofia.vue'),
    },
    {
      path: '/BotaoFisica',
      name: 'Fisica',
      component: () => import('@/views/BotaoFisica.vue'),
    },
    {
      path: '/BotaoGeografia',
      name: 'Geografia',
      component: () => import('@/views/BotaoGeografia.vue'),
    },
    {
      path: '/BotaoHistoria',
      name: 'Historia',
      component: () => import('@/views/BotaoHistoria.vue'),
    },
    {
      path: '/BotaoMatematica',
      name: 'Matematica',
      component: () => import('@/views/BotaoMatematica.vue'),
    },
    {
      path: '/BotaoPortugues',
      name: 'Portugues',
      component: () => import('@/views/BotaoPortugues.vue'),
    },
    {
      path: '/BotaoQuimica',
      name: 'Quimica',
      component: () => import('@/views/BotaoQuimica.vue'),
    },
    {
      path: '/BotaoSociologia',
      name: 'Sociologia',
      component: () => import('@/views/BotaoSociologia.vue'),
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

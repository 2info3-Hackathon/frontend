import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: '/nucleos',
    name: 'nucleos',
    component: () => import(`@/views/nucleoView.vue`),
  },
  {
    path: '/comissao',
    name: 'comissao',
    component: () => import(`@/views/comissaoView.vue`),
  },
  {
    path: '/comite',
    name: 'comite',
    component: () => import(`@/views/comiteView.vue`),
  },
  {
    path: '/inicio',
    name: 'inicio',
    component: () => import(`@/views/inicioViews.vue`),
  },
  {
    path: '/',
    name: 'inicial',
    component: () => import(`@/views/inicialView.vue`),
  },
  {
    path: '/informacoes-importantes',
    name: 'Informações Importantes',
    component: () => import('@/views/informacoesImportantesView.vue'),
  },
  {
    path: '/contatos-importantes',
    name: 'Contatos Importantes',
    component: () => import('@/views/contatosImportantesView.vue'),
  },
  {
    path: '/atestados-declaracoes',
    name: 'Atestados e Declarações',
    component: () => import('@/views/atestadosDeclaracoesView.vue')
  },
  {
    path: '/eventos',
    name: 'Eventos',
    component: () => import('@/views/EventosView.vue'),
  },
  {
    path: '/adicionar-evento',
    name: 'Adicionar Evento',
    component: () => import('@/views/AdicionarEventoView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), routes,
  routes,
})

export default router

  
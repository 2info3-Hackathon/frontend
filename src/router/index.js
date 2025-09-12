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
    path: '/',
    name: 'inicio',
    component: () => import(`@/views/inicioViews.vue`),
  },
  {
    path: '/informacoesImportantes',
    name: 'Informações Importantes',
    component: () => import('@/views/informacoesImportantes.vue'),
  },
  {
    path: '/contatosImportantes',
    name: 'Contatos Importantes',
    component: () => import('@/views/contatosImportantes.vue'),
  },
  {
    path: '/atestadosDeclaracoes',
    name: 'Atestados e Declarações',
    component: () => import('@/views/atestadosDeclaracoes.vue')
  },
  {
    path: '/eventos',
    name: 'Eventos',
    component: () => import('@/view/EventosView.vue'),
  },
  {
    path: '/adicionar-evento',
    name: 'Adicionar Evento',
    component: () => import('@/view/AdicionarEventoView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), routes,
  routes,
})

export default router

  
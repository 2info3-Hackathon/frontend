import { createRouter, createWebHistory } from 'vue-router'

const routes = [
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
    },
    {
         path: '/',
         name: 'Inicial',
         component: () => import('@/view/inicialView.vue'),
    }
 ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/LoginView.vue'),
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: () => import('@/views/CadastroView.vue'),
  },
  {
    path: '/usuario',
    name: 'Usuário',
    component: () => import('@/views/UserView.vue'),
  },
  {
    path: '/grupo-estudos',
    name: 'Grupo Estudos',
    component: () => import('@/views/GrupoEstudos.vue'),
  },
  {
    path: '/header-component',
    name: 'Header',
    component: () => import('@/components/HeaderComponent.vue'),
  },
  {
    path: '/biologia',
    name: 'Biologia',
    component: () => import('@/views/BiologiaView.vue'),
  },
  {
    path: '/filosofia',
    name: 'Filosofia',
    component: () => import('@/views/FilosofiaView.vue'),
  },
  {
    path: '/fisica',
    name: 'Fisica',
    component: () => import('@/views/FisicaView.vue'),
  },
  {
    path: '/geografia',
    name: 'Geografia',
    component: () => import('@/views/GeografiaView.vue'),
  },
  {
    path: '/historia',
    name: 'Historia',
    component: () => import('@/views/HistoriaView.vue'),
  },
  {
    path: '/matematica',
    name: 'Matematica',
    component: () => import('@/views/MatematicaView.vue'),
  },
  {
    path: '/portugues',
    name: 'Portugues',
    component: () => import('@/views/PortuguesView.vue'),
  },
  {
    path: '/quimica',
    name: 'Quimica',
    component: () => import('@/views/QuimicaView.vue'),
  },
  {
    path: '/sociologia',
    name: 'Sociologia',
    component: () => import('@/views/SociologiaView.vue'),
  },
  {
    path: '/adicionar-grupo',
    name: 'Adicionar Grupo',
    component: () => import('@/views/AdicionarGrupo.vue'),
  },

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
    component: () => import(`@/views/inicioView.vue`),
  },
  {
    path: '/pag-inicial',
    name: 'inicial',
    component: () => import(`@/views/inicialView.vue`),
  },
  {
    path: '/informacoes-importantes',
    name: 'Informações Importantes',
    component: () => import('@/views/informacoesImportantesView.vue'),
  },
  {
    path: '/atendimento',
    name: 'Atendimentos',
    component: () => import('@/views/atendimentoView.vue'),
  },
  {
    path: '/contatos-importantes',
    name: 'Contatos Importantes',
    component: () => import('@/views/contatosImportantesView.vue'),
  },
  {
    path: '/atestados-declaracoes',
    name: 'Atestados e Declarações',
    component: () => import('@/views/atestadosDeclaracoesView.vue'),
  },
  {
    path: '/clifc',
    name: 'CLIFC',
    component: () => import('@/views/clifcView.vue'),
  },
  {
    path: '/eventos',
    name: 'Eventos',
    component: () => import('@/views/eventosView.vue'),
  },
  {
    path: '/adicionar-evento',
    name: 'Adicionar Evento',
    component: () => import('@/views/adicionarEventoView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
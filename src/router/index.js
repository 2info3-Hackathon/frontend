import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import('@/views/LoginView.vue'),
    },
    {
        path: '/cadastro-discente',
        name: 'Discente',
        component: () => import('@/views/DiscenteView.vue'),
    },
    {
        path: '/cadastro-docente',
        name: 'Docente',
        component: () => import('@/views/DocenteView.vue'),
    },
    {
        path: '/cadastro-terceirao',
        name: 'Terceirao',
        component: () => import('@/views/TerceiraoView.vue'),
    },
     {
    path: '/grupo-estudos',
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
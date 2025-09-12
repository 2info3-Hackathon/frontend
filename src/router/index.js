import { createWebHistory, createRouter } from "vue-router";


const router = createRouter
({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
       {
           path: '/atendimento',
           name: 'Atendimentos',
           component: () => import('@/views/AtendimentoView.vue'),
       }
   ],
})


export default router

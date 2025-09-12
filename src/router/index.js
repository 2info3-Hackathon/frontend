import { createWebHistory, createRouter } from "vue-router";


const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
       {
           path: '/contatos-importantes',
           name: 'ContatosImportantes',
           component: () => import('@/views/ContatosImportantesView.vue'),
       }
   ],
})


export default router
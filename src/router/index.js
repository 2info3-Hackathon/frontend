import { createRouter, createWebHistory } from "vue-router"

const routes = [
        {
            path: '/nucleos' ,
            name: 'nucleos' ,
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
            name: 'inicio' ,
            component: () => import(`@/views/inicioViews.vue`),
          },
        ];
        const router= createRouter({
            history: createWebHistory(import.meta.env.BASE_URL),routes,
        })

        export default router

     /*

const router = createRouter({
  history: createWebHistory(),
  routes,
}); */
import { createRouter, createWebHistory } from "vue-router"

const routes = [
        {
            path: '/' ,
            name: 'nucleos' ,
            component: () => import(`@/views/nucleo-infor.vue`),
          },
           {
      path: '/comissao',
      name: 'Comissão',
      component: () => import('@/views/comissao.vue'),
    },
        ]
        const router= createRouter({
            history: createWebHistory(import.meta.env.BASE_URL),routes,
        })

        export default router
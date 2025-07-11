import { createRouter, createWebHistory } from "vue-router"

const routes = [
        {
            path: '/' ,
            name: 'nucleos' ,
            component: () => import(`@/views/nucleo-infor.vue`),
          }
        ]
        const router= createRouter({
            history: createWebHistory(import.meta.env.BASE_URL),routes,
        })

        export default router
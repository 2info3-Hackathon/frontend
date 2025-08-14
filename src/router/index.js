import { createRouter, createWebHistory } from "vue-router"

const routes = [
        {
            path: '/' ,
            name: 'inicial' ,
            component: () => import(`@/views/inicialViews.vue`),
          }
        ]
        const router= createRouter({
            history: createWebHistory(import.meta.env.BASE_URL),routes,
        })
         export default router
         
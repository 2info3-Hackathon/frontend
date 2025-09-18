import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'
import App from './App.vue'

import UserAPI from './api/user';

export const userAPI = new UserAPI();

const pinia = createPinia()
const app = createApp(App)
createApp(App).mount('#app')

app.use(pinia)
app.use(router)
app.mount('#app')
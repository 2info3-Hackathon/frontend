import './assets/main.css';
import '@mdi/font/css/materialdesignicons.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia';

import router from './router'
import App from './App.vue'

import UserAPI from './api/user';

export const userAPI = new UserAPI();

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia);
app.mount('#app')

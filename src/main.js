import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia';
import '@mdi/font/css/materialdesignicons.css';

import router from './router'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)
const pinia = createPinia();


app.use(router)
app.use(pinia);
app.mount('#app')

createApp(App).mount('#app')


import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
// import router from './router'
import store from './store'

createApp(App).use(store).mount('#app') // .use(router)

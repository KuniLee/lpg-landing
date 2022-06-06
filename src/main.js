import '@/assets/styles/index.scss'
import 'bootstrap/scss/bootstrap.scss'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

createApp(App).use(store).use(router).mount('#app')
//import 'bootstrap/dist/js/bootstrap.bundle.min'

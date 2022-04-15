import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/styles/index.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min'

createApp(App).use(store).use(router).mount('#app')

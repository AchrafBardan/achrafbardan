import { createApp } from 'vue'
import App from './App.vue'
import './css/app.css'
import './assets/tailwind.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App)
.use(VueAxios, axios)
.mount('#app')

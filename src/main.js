import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//routes
import router from './router'

//store
import store from './store'

createApp(App).use(router).use(store).mount('#app')

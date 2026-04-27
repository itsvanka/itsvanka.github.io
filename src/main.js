import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

const url = new URL(window.location.href)
const redirect = url.searchParams.get('redirect')

if (redirect) {
  router.push(redirect)
}
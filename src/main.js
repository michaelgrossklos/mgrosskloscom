import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Screencasts from './components/Screencasts.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/screencasts', name: 'screencasts', component: Screencasts },
    { path: '/', name: 'home', component: Home },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  },
})

createApp(App).use(router).mount('#app')
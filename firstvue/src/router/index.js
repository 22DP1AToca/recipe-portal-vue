import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import uhm from '../views/uhm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/uhm',
      name: 'uhm',
      component: uhm,
    },
  ],
})

export default router

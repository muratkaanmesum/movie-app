import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/tv-shows',
      name: 'TV Shows',
      component: HomeView,
    },
    {
      path: '/people',
      name: 'People',
      component: HomeView,
    },
    {
      path: '/more',
      name: 'More',
      component: HomeView,
    },
  ],
})

export default router

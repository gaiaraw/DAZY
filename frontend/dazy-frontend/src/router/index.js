import { createRouter, createWebHistory } from 'vue-router'
import dazy from '../components/Dazy.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/dazy',
      name : 'dazy',
      component : dazy,
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Dazy from '@/components/Dazy.vue'
import NewD from '@/components/NewD.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/dazy',
      name : 'dazy',
      component : Dazy,
    },
    {
      path : '/new',
      name : 'new',
      component : NewD,
    },
  ]
})

export default router

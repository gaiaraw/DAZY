import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Dazy from '../components/Dazy.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/dazy',
      name : 'dazy',
      component : Dazy,
    },
    {
      path : '/hello',
      name : 'hello',
      component : HelloWorld,
    }
  ]
})

export default router

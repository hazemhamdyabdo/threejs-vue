import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Cube',
      component: () => import('../views/CubeExample.vue'),
    },
    {
      path: '/line',
      name: 'Line',
      component: () => import('../views/LineExample.vue'),
    },
    {
      path: '/journey',
      name: 'Journey',
      component: () => import('../views/ThreeJsJourney.vue'),
    },
  ],
})

export default router

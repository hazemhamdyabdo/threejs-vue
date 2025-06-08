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
  ],
})

export default router

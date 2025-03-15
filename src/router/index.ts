import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'

import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        name: 'Home',
      },
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        name: 'About',
        title: 'About',
      },
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      meta: {
        name: 'Projects',
        title: 'Projects',
      },

      component: () => import('@/views/ProjectsView.vue'),
    },
    {
      path: '/skills',
      name: 'skills',
      meta: {
        name: 'Skills',
        title: 'Skills',
      },
      component: () => import('@/views/SkillsView.vue'),
    },
  ],
})

/*
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Articles', path: '/articles' },
*/

router.afterEach((to, _) => {
  nextTick(() => {
    document.title = to.meta.title ? `Rareș Andrei Vanca • ${to.meta.title}` : 'Rareș Andrei Vanca'
  })
})

export default router

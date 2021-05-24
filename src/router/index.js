import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/project-one',
    name: 'project-one',
    component: () => import('../views/project-one.vue'),
    meta: {
      prev:'Home',
      next: 'project-two',
      
    }
  },
  {
    path: '/project-two',
    name: 'project-two',
    component: () => import('../views/project-two.vue'),
    meta: {
      prev:'project-one',
      next: 'project-three',
      
    }
  },
  {
    path: '/project-three',
    name: 'project-three',
    component: () => import('../views/project-three.vue'),
    meta: {
      prev:'project-two',
      next: 'Developer',
      
    }
  },
  {
    path: '/developer',
    name: 'Developer',
    component: () => import('../views/Developer.vue'),
    meta: {
      prev:'project-three',
      next: 'Illustrations',
      
    }
  },
  {
    path: '/illustrations',
    name: 'Illustrations',
    component: () => import('../views/Illustrations.vue'),
    meta: {
      prev:'Developer',
      next: 'project-one',
      
    }
  },
 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

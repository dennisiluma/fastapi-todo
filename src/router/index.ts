import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    
    {
      path: '/',
      name: 'home',
      component: Home,
    },

    {
      path: '/home',
      name: 'homeB',
      component: () => import('../views/Home.vue'),
    },

    {
      path: '/todos',
      name: 'todos',
      component: () => import('../views/Todos.vue'),
    },

    {
      path: '/add',
      name: 'add todo',
      component: () => import('../views/AddTodo.vue'),
    },

    {
      path: '/todos/:id/edit',
      name: 'edit todo',
      component: () => import('../views/EditTodo.vue'),
    },

    //wildcard


    {
      path: '/:pathMatch(.*)*',
      name: 'wild card',
      component: () => import('../views/Home.vue'),
    },


  ],
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: StartView
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/coaching/HomeView.vue')
    },
    {
      path: '/about-grieder-homes-immobilienbewirtschaftung',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/coaching/AboutView.vue')
    },
    {
      path: '/properties-around-Liestal',
      name: 'property',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/landlord/PropertyView.vue')
    },
    {
      path: '/services-and-products',
      name: 'service',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/landlord/ServiceView.vue')
    },
    {
      path: '/underConstruction',
      name: 'underConstruction',
      component: () => import('../views/UnderConstructionView.vue')
    },
    {
      path: '/datenschutz',
      name: 'datenschutz',
      component: () => import('../views/DatenschutzView.vue')
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: () => import('../views/ImpressumView.vue')
    }
  ]
})

export default router

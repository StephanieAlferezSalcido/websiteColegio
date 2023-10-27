import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProgramView from '../views/ProgramView.vue'
import FacilitiesView from '../views/FacilitiesView.vue'
import UbicationView from '../views/UbicationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/programas',
      name: 'programas',
      component: ProgramView
    },
    {
      path: '/instalaciones',
      name: 'instalaciones',
      component: FacilitiesView
    },
    {
    path: '/ubicacion',
    name: 'ubicacion',
    component: UbicationView
  }



  ]
})

export default router

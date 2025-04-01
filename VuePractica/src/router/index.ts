import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import ProveedorPage from '../views/ProveedorPage.vue'
import ClientePage from '@/views/ClientePage.vue';
import EmpleadoPage from '@/views/EmpleadoPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/empleado'
  },
  {
    path: '/empleado',
    name: 'Empleado',
    component: EmpleadoPage
  },
  {
    path: '/cliente',
    name: 'Cliente',
    component: ClientePage
  },
  {
    path: '/proveedor',
    name: 'Proveedor',
    component: ProveedorPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

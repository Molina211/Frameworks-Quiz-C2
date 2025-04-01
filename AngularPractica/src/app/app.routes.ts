import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'proveedor',
    loadComponent: () => import('./proveedor/proveedor.page').then( m => m.ProveedorPage)
  },

  {path: '',  redirectTo: 'home', pathMatch: 'full',},
  {
    path: 'cliente',
    loadComponent: () => import('./cliente/cliente.page').then( m => m.ClientePage)
  },
  {
    path: 'empleado',
    loadComponent: () => import('./empleado/empleado.page').then( m => m.EmpleadoPage)
  },
  
];

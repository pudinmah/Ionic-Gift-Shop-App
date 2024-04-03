import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    children: [
      {
        path: '',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage)
      },
      {
        path: 'gifts/:id',
        loadComponent: () => import('./home/item-detail/item-detail.page').then( m => m.ItemDetailPage)
      },
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'sheet',
    loadComponent: () => import('./sheet/sheet.page').then((m) => m.SheetPage),
  },
];

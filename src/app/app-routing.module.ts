import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/homepage/homepage.component').then((x) => x.HomepageComponent),
  },
  {
    path: 'defer',
    loadComponent: () => import('./components/homepage/homepage.component').then((x) => x.HomepageComponent),
  },
  {
    path: 'control-flow',
    loadComponent: () => import('./components/control-flow/control-flow.component').then((x) => x.ControlFlowComponent),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

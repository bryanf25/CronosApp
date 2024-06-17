import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CronosComponent } from './cronos.component';

const routes: Routes = [
  {
    path: '',
    component: CronosComponent,
    children: [
      {
        path: 'visacion',
        loadChildren:  () => import('./pages/visacion/visacion.module').then(m => m.VisacionModule)
      },
      {
        path: 'administracion',
        loadChildren:  () => import('./pages/administracion/administracion.module').then(m => m.AdministracionModule)
      },
      {
        path: '**',
        redirectTo: '',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CronosRoutingModule { }

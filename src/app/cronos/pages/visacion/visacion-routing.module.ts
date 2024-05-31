import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChequesFueraRangoComponent } from './consulta/cheques-fuera-rango/cheques-fuera-rango.component';
import { DevolucionEnviadaTotalComponent } from './consulta/devolucion-enviada-total/devolucion-enviada-total.component';

const routes: Routes = [

  {
    path: 'cheques-fuera-rango',
    component: ChequesFueraRangoComponent
  },
  {
    path: 'devolucion-enviada-total',
    component: DevolucionEnviadaTotalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisacionRoutingModule { }

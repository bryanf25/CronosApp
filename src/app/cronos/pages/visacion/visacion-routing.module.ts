import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChequesFueraRangoComponent } from './consulta/cheques-fuera-rango/cheques-fuera-rango.component';
import { DevolucionEnviadaTotalComponent } from './consulta/devolucion-enviada-total/devolucion-enviada-total.component';
import { DevolucionRecibidaTotalComponent } from './consulta/devolucion-recibida-total/devolucion-recibida-total.component';
import { RechazosVisacionYaPagadosComponent } from './consulta/rechazos-visacion-ya-pagados/rechazos-visacion-ya-pagados.component';

const routes: Routes = [

  {
    path: 'cheques-fuera-rango',
    component: ChequesFueraRangoComponent
  },
  {
    path: 'devolucion-enviada-total',
    component: DevolucionEnviadaTotalComponent
  },
  {
    path: 'devolucion-recibida-total',
    component: DevolucionRecibidaTotalComponent
  },
  {
    path: 'rechazos-visacion-ya-pagados',
    component: RechazosVisacionYaPagadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisacionRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisacionRoutingModule } from './visacion-routing.module';
import { ChequesFueraRangoComponent } from './consulta/cheques-fuera-rango/cheques-fuera-rango.component';
import { DevolucionEnviadaTotalComponent } from './consulta/devolucion-enviada-total/devolucion-enviada-total.component';


@NgModule({
  declarations: [
    ChequesFueraRangoComponent,
    DevolucionEnviadaTotalComponent
  ],
  imports: [
    CommonModule,
    VisacionRoutingModule
  ]
})
export class VisacionModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisacionRoutingModule } from './visacion-routing.module';
import { ChequesFueraRangoComponent } from './consulta/cheques-fuera-rango/cheques-fuera-rango.component';
import { DevolucionEnviadaTotalComponent } from './consulta/devolucion-enviada-total/devolucion-enviada-total.component';
import { RechazosVisacionYaPagadosComponent } from './consulta/rechazos-visacion-ya-pagados/rechazos-visacion-ya-pagados.component';
import { DevolucionRecibidaTotalComponent } from './consulta/devolucion-recibida-total/devolucion-recibida-total.component';
import { PrimengModule } from '../../../primeng/primeng.module';
import { SharedModule } from '../../../shared/shared.module'


@NgModule({
  declarations: [
    ChequesFueraRangoComponent,
    DevolucionEnviadaTotalComponent,
    RechazosVisacionYaPagadosComponent,
    DevolucionRecibidaTotalComponent
  ],
  imports: [
    CommonModule,
    VisacionRoutingModule,
    PrimengModule,
    SharedModule,
  ]
})
export class VisacionModule { }

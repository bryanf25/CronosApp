import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronosRoutingModule } from './cronos-routing.module';
import { CronosComponent } from './cronos.component';



@NgModule({
  declarations: [
    CronosComponent,
  ],
  imports: [
    CommonModule,
    CronosRoutingModule
  ],
  exports:[
    CronosComponent,
    
  ]
})
export class CronosModule { }

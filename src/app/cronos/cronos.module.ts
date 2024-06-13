import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronosRoutingModule } from './cronos-routing.module';
import { CronosComponent } from './cronos.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CronosComponent,
  ],
  imports: [
    CommonModule,
    CronosRoutingModule,
    HttpClientModule
  ],
  exports:[
    CronosComponent,
  ]
})
export class CronosModule { }

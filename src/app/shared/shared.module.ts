import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarmenuComponent } from './components/navbarmenu/navbarmenu.component';
import { PrimengModule } from '../primeng/primeng.module';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [
    NavbarmenuComponent,
    HeaderComponent,
    TableComponent
    ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports:[
    NavbarmenuComponent,
    HeaderComponent,
    TableComponent
  ]
})
export class SharedModule { }

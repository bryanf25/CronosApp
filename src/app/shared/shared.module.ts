import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarmenuComponent } from './components/navbarmenu/navbarmenu.component';
import { PrimengModule } from '../primeng/primeng.module';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    NavbarmenuComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports:[
    NavbarmenuComponent,
    HeaderComponent
  ]
})
export class SharedModule { }

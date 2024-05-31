import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule  } from 'primeng/button'
import { MegaMenuModule  } from 'primeng/megamenu'
import { CardModule  } from 'primeng/card'



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MegaMenuModule,
    CardModule
  ],
  exports: [
    ButtonModule,
    MegaMenuModule,
    CardModule
  ]
})
export class PrimengModule { }

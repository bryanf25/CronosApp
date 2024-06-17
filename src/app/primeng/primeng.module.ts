import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule  } from 'primeng/button'
import { MegaMenuModule  } from 'primeng/megamenu'
import { CardModule  } from 'primeng/card'
import { AccordionModule  } from 'primeng/accordion'
import { SelectButtonModule  } from 'primeng/selectbutton'
import { DropdownModule  } from 'primeng/dropdown'
import { TableModule  } from 'primeng/table'



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MegaMenuModule,
    CardModule,
    AccordionModule,
    SelectButtonModule,
    DropdownModule,
    TableModule
  ],
  exports: [
    ButtonModule,
    MegaMenuModule,
    CardModule,
    AccordionModule,
    SelectButtonModule,
    DropdownModule,
    TableModule
  ]
})
export class PrimengModule { }

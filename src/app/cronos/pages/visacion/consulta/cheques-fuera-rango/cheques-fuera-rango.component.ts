import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';

@Component({
  selector: 'app-cheques-fuera-rango',
  templateUrl: './cheques-fuera-rango.component.html',
  styleUrl: './cheques-fuera-rango.component.scss'
})
export class ChequesFueraRangoComponent implements OnInit {
  fechaProceso: Date = new Date();
  fechaProcesoString: string = ''
  
  ngOnInit(): void {
    this.fechaProcesoString = format(this.fechaProceso, 'dd/MM/yyyy')
  }
}

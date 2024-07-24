import { Component } from '@angular/core';
import { Oficina } from '../../../../interfaces/consultas/oficina.interface';
import { CentroCanje } from '../../../../interfaces/consultas/centros-canje.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChequeFueraRango } from '../../../../interfaces/cheque-fuera-rango.interface';
import { VistasService } from '../../../../services/vistas.service';
import { CentroCanjeService } from '../../../../services/centro-canje.service';
import { OficinaService } from '../../../../services/oficina.service';
import { ColumnTable } from '../../../../interfaces/column-table.interface';

@Component({
  selector: 'app-cheques-fuera-rango',
  templateUrl: './cheques-fuera-rango.component.html',
  styleUrl: './cheques-fuera-rango.component.scss'
})
export class ChequesFueraRangoComponent  {

  chequeFueraRangoForm!: FormGroup;
  centrosDeCanje!: CentroCanje[];
  oficinas!: Oficina[];
  fechaProceso: Date = new Date();
  fechaProcesoString: string = ''

  columns: ColumnTable[] = [
    { field: 'oficinaCeo', header: 'Oficina/CEO', type: 'text' },
    { field: 'cuenta', header: 'Cuenta', type: 'text' },
    { field: 'transaccion', header: 'Transaccion', type: 'text' },
    { field: 'chequera', header: 'Chequera', type: 'text' },
    { field: 'documento', header: 'Documento', type: 'text' },
    { field: 'valor', header: 'Valor', type: 'text' },
    { field: 'razon', header: 'Razon', type: 'text' },
    { field: 'cabeceraCentroCanje', header: 'Cabecera Centro Canje', type: 'text' },
    { field: 'centroCanje', header: 'Centro Canje', type: 'text' },
  ];;
  
  data: ChequeFueraRango[] = [];


  constructor(
    private fb: FormBuilder,
    private vistasService: VistasService,
    private centroCanjeService: CentroCanjeService,
    private oficinasService: OficinaService
  ) { }
  
}

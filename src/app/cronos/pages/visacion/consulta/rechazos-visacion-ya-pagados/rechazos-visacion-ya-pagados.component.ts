import { Component } from '@angular/core';
import { ColumnTable } from '../../../../interfaces/column-table.interface';
import { RechazosVisacion } from '../../../../interfaces/rechazos-visacion.interface';
import { VistasService } from '../../../../services/vistas.service';
import { CentroCanjeService } from '../../../../services/centro-canje.service';
import { OficinaService } from '../../../../services/oficina.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CentroCanje } from '../../../../interfaces/consultas/centros-canje.interface';
import { Oficina } from '../../../../interfaces/consultas/oficina.interface';


@Component({
  selector: 'app-rechazos-visacion-ya-pagados',
  templateUrl: './rechazos-visacion-ya-pagados.component.html',
  styleUrl: './rechazos-visacion-ya-pagados.component.scss'
})
export class RechazosVisacionYaPagadosComponent  {

  rechazosVisacionYaForm!: FormGroup;
  fechaProceso: Date = new Date();
  centrosDeCanje!: CentroCanje[];
  oficinas!: Oficina[];
  fechaProcesoString: string = ''
  
  columns: ColumnTable[] = [
    { field: 'tipoOperacion', header: 'Tipo Operación', type: 'text' },
    { field: 'cencje', header: 'Cencje', type: 'text' },
    { field: 'oficina', header: 'Oficina', type: 'text' },
    { field: 'cuenta', header: 'Cuenta', type: 'text' },
    { field: 'bancoReceptor', header: 'Banco Receptor', type: 'text' },
    { field: 'chequera', header: 'Chequera', type: 'text' },
    { field: 'numeroCheque', header: 'No. Cheque', type: 'text' },
    { field: 'nombreTitular', header: 'Nombre Titular', type: 'text' },
    { field: 'valor', header: 'Valor', type: 'text' },
    { field: 'motivoRechazo', header: 'Motivo Rechazo', type: 'text' },
    { field: 'causaDev1', header: 'CausaDev1', type: 'text' },
    { field: 'causaDev2', header: 'CausaDev2', type: 'text' }
  ];;

  data: RechazosVisacion[] = [];

  constructor(
    private fb: FormBuilder,
    private vistasService: VistasService,
    private centroCanjeService: CentroCanjeService,
    private oficinasService: OficinaService
  ) { }

 





}

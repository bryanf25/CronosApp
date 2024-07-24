import { Component } from '@angular/core';
import { Oficina } from '../../../../interfaces/consultas/oficina.interface';
import { CentroCanje } from '../../../../interfaces/consultas/centros-canje.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DevolucionEnviada } from '../../../../interfaces/devolucion-enviada.interface';
import { ColumnTable } from '../../../../interfaces/column-table.interface';
import { VistasService } from '../../../../services/vistas.service';
import { CentroCanjeService } from '../../../../services/centro-canje.service';
import { OficinaService } from '../../../../services/oficina.service';

@Component({
  selector: 'app-devolucion-enviada-total',
  templateUrl: './devolucion-enviada-total.component.html',
  styleUrl: './devolucion-enviada-total.component.scss'
})
export class DevolucionEnviadaTotalComponent {

  devolucionEnviadaForm!: FormGroup;
  centrosDeCanje!: CentroCanje[];
  oficinas!: Oficina[];
  fechaProceso: Date = new Date();
  fechaProcesoString: string = ''

  columns: ColumnTable[] = [
    { field: 'oficinaDestino', header: 'Oficina Destino', type: 'text' },
    { field: 'codigoCeo', header: 'Codigo Ceo', type: 'text' },
    { field: 'entidadDestino', header: 'Entidad Destino', type: 'text' },
    { field: 'numeroCuenta', header: 'Numero Cuenta', type: 'text' },
    { field: 'causalDevolucion1', header: 'Causal Devolucion 1', type: 'text' },
    { field: 'causalDevolucion2', header: 'Causal Devolucion 2', type: 'text' },
    { field: 'valorCheque', header: 'Valor Cheque', type: 'text' },
    { field: 'chequera', header: 'Chequera', type: 'text' },
    { field: 'numeroCheque', header: 'Numero Cheque', type: 'text' },
    { field: 'centralCanje', header: 'Central Canje', type: 'text' },
    { field: 'valorTotal', header: 'Valor Total', type: 'text' },
  ];;


  data: DevolucionEnviada[] = [];

  constructor(
    private fb: FormBuilder,
    private vistasService: VistasService,
    private centroCanjeService: CentroCanjeService,
    private oficinasService: OficinaService
  ) { }
  
  searchData() {
    this.vistasService.getDevolucionEnviada().subscribe(response => this.data = response)

  }
  
}

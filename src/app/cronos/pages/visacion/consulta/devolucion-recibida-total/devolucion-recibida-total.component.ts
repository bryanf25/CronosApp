import { Component, OnInit } from '@angular/core';
import { CentroCanje } from '../../../../interfaces/consultas/centros-canje.interface';
import { Oficina } from '../../../../interfaces/consultas/oficina.interface';
import { FormBuilder } from '@angular/forms';
import { VistasService } from '../../../../services/vistas.service';
import { CentroCanjeService } from '../../../../services/centro-canje.service';
import { OficinaService } from '../../../../services/oficina.service';
import { DevolucionRecibida } from '../../../../interfaces/devolucion-recibida.interface';
import { format } from 'date-fns';
import { ColumnTable } from '../../../../interfaces/column-table.interface';

@Component({
  selector: 'app-devolucion-recibida-total',
  templateUrl: './devolucion-recibida-total.component.html',
  styleUrl: './devolucion-recibida-total.component.scss'
})
export class DevolucionRecibidaTotalComponent  implements OnInit{
  centrosCanjeReceptor!: CentroCanje[];
  oficinas!: Oficina[];
  fechaProceso: Date = new Date();
  fechaProcesoString: string = ''

  data: DevolucionRecibida[] = [];



  columns: ColumnTable[] = [
    { field: 'oficinaRec', header: 'Oficina Rec', type: 'text' },
    { field: 'redAfectada', header: 'Red Afectada', type: 'text' },
    { field: 'oficinaAfectada', header: 'Oficina Afectada', type: 'text' },
    { field: 'oficinaEnvio', header: 'Oficina Envio', type: 'text' },
    { field: 'devEsp', header: 'Dev Esp', type: 'text' },
    { field: 'tipoProducto', header: 'Tipo Producto', type: 'text' },
    { field: 'productoAfectado', header: 'Producto Afectado', type: 'text' },
    { field: 'tipoCuentaRecaudo', header: 'Tipo Cuenta Recaudo', type: 'text' },
    { field: 'comprobante', header: 'Comprobante', type: 'text' },
    { field: 'chqBanco', header: 'CHQ-Banco', type: 'text' },
    { field: 'chqCuenta', header: 'CHQ-Cuenta', type: 'text' },
    { field: 'chqNum', header: 'CHQ-Num', type: 'text' },
    { field: 'chqValor', header: 'CHQ-Valor', type: 'text' },
    { field: 'causalDevolucion1', header: 'Causal Devolucion 1', type: 'text' },
    { field: 'causalDevolucionOri', header: 'Causal Devolucion Original', type: 'text' },
  ];;

  constructor(
    private fb: FormBuilder,
    private vistasService: VistasService,
    private centroCanjeService: CentroCanjeService,
    private oficinasService: OficinaService
  ) { }

  ngOnInit(): void {
    this.loadCentrosCanje();
    this.loadOficinas();
    this.fechaProcesoString = format(this.fechaProceso, 'dd/MM/yyyy') 
   }

   loadCentrosCanje() {
    this.centroCanjeService.getAll().subscribe(response =>{
      this.centrosCanjeReceptor = response
      this.centrosCanjeReceptor = this.centrosCanjeReceptor.map(centrocanje => ({
        ...centrocanje,
        displayName: `${centrocanje.id} - ${centrocanje.nombre}`
      }));
    }
    )
  }

  loadOficinas() {
    this.oficinasService.getAll().subscribe(response => {
      this.oficinas = response
      this.oficinas = this.oficinas.map(oficina => ({
        ...oficina,
        displayName: `${oficina.id} - ${oficina.nombre}`
      }));
    }
    )
  }



  searchData() {
    this.vistasService.getDevolucionRecibida().subscribe(response => this.data = response)

  }
}

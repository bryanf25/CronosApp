import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbarmenu',
  templateUrl: './navbarmenu.component.html',
  styleUrl: './navbarmenu.component.scss'
})
export class NavbarmenuComponent implements OnInit{
  
  items!: MegaMenuItem[]
  
  ngOnInit(): void {
    this.items =[
      {
        label: 'Administración del portal'
      },
      {
        label: 'Visación'
      },
      {
        label: 'Configuración nacional'
      },
      {
        label: 'Cerrar sesión'
      },
    ]
  }
}

import { Component, OnInit } from '@angular/core';
import { MegaMenuItem,PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-navbarmenu',
  templateUrl: './navbarmenu.component.html',
})
export class NavbarmenuComponent implements OnInit {

  items!: MegaMenuItem[]

  ngOnInit(): void {
    this.createMenu();
  }



  createMenu(){
    this.items = [
      {
        label: 'Administración del portal',
        icon: PrimeIcons.COG
      },
      {
        label: 'Visación',
        icon: PrimeIcons.FILE_CHECK,
        items: [
          [
            {
              label: 'Visación',
              items: [
                {
                  label: 'Visación Crediticia (GOF)',
                  routerLink: '/'
                },
                {
                  label: 'Visación Crediticia CCE',
                  routerLink: '/'
                },
                {
                  label: 'Visación Rechazos',
                  routerLink: '/'
                },
              ]
            },
            {
              label: 'Parametros',
              items: [
                {
                  label: 'Parametros Acceso Especial',
                  routerLink: '/'
                },
                {
                  label: 'Parametros Generales',
                  routerLink: '/'
                },
                {
                  label: 'Parametros Atribución',
                  routerLink: '/'
                },
                {
                  label: 'Parametros de acceso Especial ',
                  routerLink: '/'
                }
              ]
            }
          ],
          [
            {
              label: 'Consultas',
              items: [
                {
                  label: 'Cons.Dev. Remesas',
                  routerLink: '/'
                },
                {
                  label: "Cons.Dev.Nal.CEO's",
                  routerLink: '/'
                },
                {
                  label: 'Cons.Cierre',
                  routerLink: '/'
                },
                {
                  label: 'Cons. VP Comercial',
                  routerLink: '/'
                },
                {
                  label: 'Cons.Cant.OfCerradas',
                  routerLink: '/'
                },
                {
                  label: 'Cons.Revisiones',
                  routerLink: '/'
                },
                {
                  label: 'Cons.Dev.Rechazos.YaPagados',
                  routerLink: './visacion/rechazos-visacion-ya-pagados'
                },
                {
                  label: 'Cons.Control Ratif.',
                  routerLink: '/'
                },
                {
                  label: 'Cons. Cheques Fuera de Rango',
                  routerLink: './visacion/cheques-fuera-rango'
                },
                {
                  label: 'Cons.Dev. Nacional',
                  routerLink: '/'
                },
                {
                  label: 'Cons.Devueltos Cen.Cje',
                  routerLink: '/'
                },
                {
                  label: 'Cons. Control Aprobaciones',
                  routerLink: '/'
                },
                {
                  label: 'Consulta Devolucion Enviada Total',
                  routerLink: './visacion/devolucion-enviada-total'
                },
                {
                  label: 'Consulta Devolucion Recibiba Total',
                  routerLink: './visacion/devolucion-recibida-total'
                }
              ]
            }
          ],[
            {
              label: 'Otros',
              items: [
                {
                  label: 'Ratificación Crediticia (GZC)',
                  routerLink: '/'
                },
                {
                  label: 'Ratificación Crediticia (GZC)',
                  routerLink: '/'
                },
                {
                  label: 'Aprobación Crediticia (DR)',
                  routerLink: '/'
                },
              ]
            }
          ]
        ]
      },
      {
        label: 'Configuración nacional'
      },
      {
        icon: PrimeIcons.SIGN_OUT,
        label: 'Cerrar sesión'
      },
    ]

  }

}



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icono: 'ios-appstore',
      nombre: 'Action',
      link: '/alert'
    },
    {
      icono: 'appstore',
      nombre: 'Alert',
      link: '/alert'
    },

    {
      icono: 'appstore',
      nombre: 'Alert',
      link: '/alert'
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icono: string;
  nombre: string;
  link: string;
}

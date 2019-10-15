import { Injectable } from '@angular/core';
import { Registro } from '../models/registro';

import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

import { InAppBrowser  } from '@ionic-native/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  registrosGuardados: Registro[] = [];

  constructor(private storage: Storage,
              private navCtrl: NavController,
              private iabrowser: InAppBrowser
              ) {
    this.cargarRegistros();
  }

  async guardarRegistro(formato: string, texto: string) {

    await this.cargarRegistros(); // De esta manera nos aseguramos de primero leer los registros antes de intentar guardar el primero

    const nuevoRegistro = new Registro(formato, texto);
    this.registrosGuardados.unshift(nuevoRegistro);
    this.storage.set('registrosHistorial', this.registrosGuardados); // Reemplazamos siempre el valor de registrosHistorial

    this.abrirRegistro(nuevoRegistro); // Una vez que lo guardamos lo abrimos

  }

  async cargarRegistros() {
    this.storage.get('registrosHistorial') // El get nos devuelve una promesa, si lee joya se ejecuta el then
    .then(registrosLeidos => {
      this.registrosGuardados = registrosLeidos || []; // Si no trae nada, cargamos el array vacio
      console.log(registrosLeidos);
    });

    // Una forma optimizada seria la siguiente:
    this.registrosGuardados = (await this.storage.get('registrosHistorial')) || [];

  }

  abrirRegistro(registro: Registro) {
     this.navCtrl.navigateForward('/tabs/tab2');

     switch (registro.tipo) {
      case 'http':
        this.iabrowser.create(registro.texto, '_system');
        // El primer parametro es la URL y el segundo es para que lo abra en el navegador web por defecto
        break;
    }

  }

}

import { Component } from '@angular/core';
import { DataLocalService } from 'src/app/services/data-local.service';
import { Registro } from 'src/app/models/registro';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public dataLocal: DataLocalService) {}

  enviarCorreo() {
    console.log('enviando correro');
  }

  abrirRegistro(unRegistro: Registro) {
    this.dataLocal.abrirRegistro(unRegistro);
  }
}

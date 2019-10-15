import { Injectable } from '@angular/core';
import { Registro } from '../models/registro';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  registrosGuardados: Registro[] = [];

  constructor() { }

  guardarRegistro(formato: string, texto: string) {
    const nuevoRegistro = new Registro(formato, texto);
    this.registrosGuardados.unshift(nuevoRegistro);
  }


}

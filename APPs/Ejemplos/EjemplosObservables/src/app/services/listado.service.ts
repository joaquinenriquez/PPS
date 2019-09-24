import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  private items = new Array<{nombre: string}>();
  private itemsSubject = new Subject <Array<{nombre: string}>>();
  public itemsObservable$ = this.itemsSubject.asObservable();


  constructor() { }

  crearItem() {
    this.items.push({nombre: 'Ejemplo ' + this.items.length}); // Agregamos un item al Array
    this.itemsSubject.next(this.items); // E
  }

  eliminarItem(indice: number) {
    this.items.splice(indice, 1);
    this.itemsSubject.next(this.items);
  }
}

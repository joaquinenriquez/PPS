import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListadoService } from 'src/app/services/listado.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit, OnDestroy {

  public items = [];
  public subscripcion: Subscription;

  constructor(private listadoService: ListadoService) { }

  ngOnInit() {
    this.subscripcion = this.listadoService.itemsObservable$.subscribe((items: Array<{nombre: string}>) => {
      this.items = items;
    });
  }

  ngOnDestroy(): void {
    if (this.subscripcion) {
      this.subscripcion.unsubscribe();
    }
  }

  crearItem() {
    this.listadoService.crearItem();
  }

  eliminarItem(indice: number) {
    this.listadoService.eliminarItem(indice);
  }

}

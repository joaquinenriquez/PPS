import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListadoService } from 'src/app/services/listado.service';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit, OnDestroy {

  public contador = 0;
  public subscripcion: Subscription;

  constructor(private listadoService: ListadoService) { }

  ngOnInit() {
    this.subscripcion = this.listadoService.itemsObservable$.subscribe((items: Array<{nombre: string}>) => {
      this.contador = items.length;
    });
  }

  ngOnDestroy(): void {
    if (this.subscripcion) {
      this.subscripcion.unsubscribe();
    }
  }

}

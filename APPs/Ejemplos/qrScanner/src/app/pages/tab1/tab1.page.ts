import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  opcionesDelSlide = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

  constructor(private barcodeScanner: BarcodeScanner,
              private dataLocalService: DataLocalService) { }

  ionViewDidEnter() {

  }

  ionViewDidLeave() {

  }

  ionViewWillEnter() {
    this.escanear();
  }

  ionViewWillLeave() {
  }


  escanear() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);

      if (!barcodeData.cancelled) {
        this.dataLocalService.guardarRegistro(barcodeData.format, barcodeData.text);
      }

    }).catch(err => {
      console.log('Error', err);
      // Para probar en el navegdador
      this.dataLocalService.guardarRegistro('QR', 'http://www.google.com');
    });
  }

}

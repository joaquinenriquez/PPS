import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

/* #region  Atributos */
  public usuarioActual: any = false;
/* #endregion */

  constructor(private afAuth: AngularFireAuth) {
    // Si authState nos devuelve null entonces el usuario no esta logeado
    afAuth.authState.subscribe( usuario => (this.usuarioActual = usuario));
  }


}

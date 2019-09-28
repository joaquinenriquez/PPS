import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from '../shared/usuario';


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

  async onLogin(usuario: Usuario) {

    let mensajeError = '';

    try {
      return await this.afAuth.auth.signInWithEmailAndPassword(usuario.Email, usuario.Password);
    } catch (error) {

      switch (error.code) {
        case 'auth/user-not-found':
          mensajeError = 'El usuario no existe';
          break;
      }

      console.log(mensajeError, error);
    }
  }

  async onRegister(usuario: Usuario) {
    try {
      return await this.afAuth.auth.createUserWithEmailAndPassword(usuario.Email, usuario.Password);
    } catch (error) {
      console.log('Error al intentar crear el usuario', error);
    }
  }


}

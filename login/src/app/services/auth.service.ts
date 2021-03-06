import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../shared/user';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: any = false;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => this.isLogged = user);
  }

  async onLogin(user: User) {
    try {
      return await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    } catch (error) {
      console.log('Error en login', error);
    }
  }

  async onRegister(user: User,
                   user2: User) {
    try {

      return await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);

    } catch (error) {
      console.log('Error en el registro', error);
    }
  }


}

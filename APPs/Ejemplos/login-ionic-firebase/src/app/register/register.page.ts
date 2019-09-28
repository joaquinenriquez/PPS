import { Component, OnInit } from '@angular/core';
import { Usuario } from '../shared/usuario';

import {Router} from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  /* #region  Atributos */

  usuarioNuevo: Usuario = new Usuario();
  
  /* #endregion */


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async registrarse() {
    // Si el usuario se crea correctamente nos devuelve el usuario y sino nos devuelve null
    const usuario = await this.authService.onRegister(this.usuarioNuevo);
    
    if (usuario) {
        console.log('El usuario se creo correctamente');
        this.router.navigateByUrl('/');
    }
  }

}

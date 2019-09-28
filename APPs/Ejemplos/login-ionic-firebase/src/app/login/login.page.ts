import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Usuario } from '../shared/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  async iniciarSesion() {
    // Si el login es exitoso, entonces nos devuelve el usuario, caso contrario null
    const usuario = await this.authService.onLogin(this.usuario);
    if (usuario) {
      this.router.navigateByUrl('/');
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/services/login-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuario = '';
  sair = false;

  constructor(
    private loginService: LoginServiceService,
    private router: Router
    ) { }

  ngOnInit() {
    this.usuario = this.loginService.usuarioLogado();
  }

  abreDiv() {
    this.sair = !this.sair;
  }

  logout() {
    this.loginService.limpaUsuario();
    this.router.navigate(['/login']);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SubscriptionLoggable } from 'rxjs/internal/testing/SubscriptionLoggable';
import { ApiService } from 'src/services/api.service';
import { LoginServiceService } from 'src/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cpf = ''
  senha = ''
  logado = false;

  constructor(
    private api: ApiService,
    private router: Router,
    private loginService: LoginServiceService
    ) { }

  ngOnInit() {
    this.logado = this.loginService.autenticado();
  }

  fazerLogin() {
    let user = {
      nome: '',
      cpf: this.cpf,
      hash_senha: this.senha
    }

    if (this.cpf === '' && this.senha === '') {
      alert('Preencha os dados de login');
      return;
    }

    this.api.post('login/login', user).subscribe({
      next: dados => {
        this.logado = true;
        this.loginService.salvaUsuarioLogado(dados);
        this.router.navigate(['/principal']);
      },
      error: erro => {
        alert(erro.error);
      }
    })
  }
}

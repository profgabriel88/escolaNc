import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
  nome = '';
  unome = '';

  textoBotao = 'login';

  caminho = 'login/login';
  navegacao = '/principal';

  logado = false;
  pAcesso = false;

  constructor(
    private api: ApiService,
    private router: Router,
    private loginService: LoginServiceService,
    private viewContainer: ViewContainerRef
    ) { }

  ngOnInit() {
    this.logado = this.loginService.autenticado();
  }

  fazerLogin() {
    let user = {
      nome: this.nome,
      unome: this.unome,
      cpf: this.cpf,
      hash_senha: this.senha
    }

    if (this.cpf === '' && this.senha === '') {
      alert('Preencha os dados de login');
      return;
    }

    this.api.post(this.caminho, user).subscribe({
      next: dados => {
        this.logado = true;
        this.router.navigate([this.navegacao]);
        if (this.navegacao != '/principal' )
          alert('Usuário cadastrado com sucesso');

        if (this.navegacao == '/principal' )
          this.loginService.salvaUsuarioLogado(dados);
      },
      error: erro => {
        alert(erro.error);
      }
    })
  }

  acesso() {
    this.pAcesso = true;
    this.textoBotao = 'Enviar';
    this.caminho = 'login/cadastro';
    this.navegacao = '/login';
  }
}

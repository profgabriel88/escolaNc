import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/services/api.service';
import { UtilitariosService } from 'src/services/utilitarios.service';
// import {  }

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public nome: string = '';
  public idade: string = '';
  public cpf: string = '';
  public rg: string = '';
  public data_nasc: string = '';
  public endereco: string = '';
  public cidade: string = '';
  public usuarios = []

  public toastMsg = 'abacaxi';

  constructor(private api: ApiService, private util: UtilitariosService) { }

  ngOnInit() {

  }

  incluir() {
    let obj = {
      nome: this.nome,
      idade: parseInt(this.idade),
      cpf: this.util.removeMascara(this.cpf),
      rg: this.rg,
      data_nasc: this.data_nasc,
      endereco: this.endereco,
      cidade: this.cidade
    };

    this.api.post('usuarios/InsereUsuario', obj).subscribe(
      (dados: any) => {
        this.usuarios = dados;
      },
      (error: any) => {
        console.error(error);
        alert(error.error);
      }
    )
  }

  formataCampos() {
    if (this.data_nasc.length > 0)
      this.data_nasc = this.util.formataData(this.data_nasc);
    if (this.cpf.length > 0)
      this.cpf = this.util.formataCpf(this.cpf);
  }
}

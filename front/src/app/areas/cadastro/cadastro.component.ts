import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
  public dt_nasc: string = '';
  public endereco: string = '';
  public cidade: string = '';
  public usuarios = []

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('../usuarios.json').subscribe(data => {
      this.usuarios = data.usuarios;
      console.log(this.usuarios)
    });
  }

  salvar() {

  }
}

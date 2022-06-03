import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-contratacao',
  templateUrl: './contratacao.component.html',
  styleUrls: ['./contratacao.component.css']
})
export class ContratacaoComponent implements OnInit {

  form!: FormGroup;

  public retorno: any[] = [];
  public servicos: any[] = [];

  public nomeCliente: string = '';

  get f(): any {
    return this.form.controls;
  }

  constructor(
    private fb: FormBuilder,
    private api: ApiService) { }

  ngOnInit() {
    this.validaForm();
    this.carregaServicos();
  }

  private validaForm() {
    this.form = this.fb.group({
      cpf: ''
    })
  }

  public carregaServicos() {
    this.api.get(`contratacao/busca/servicos`).subscribe(
      (dados: any) => {
        this.servicos = dados;
      },
      (erro: any) => {
        alert(erro.error);
      }
    )
  }

  public buscaCpf() {
    let cpf = this.f.cpf.value;
    this.api.get(`contratacao/${cpf}`).subscribe(
      (dados: any) => {
        this.retorno = dados;
        this.nomeCliente = dados[0].nome;
        console.log(this.retorno);
      },
      (erro: any) => {
        alert(erro.error);
      });
  }

}

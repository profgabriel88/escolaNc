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
  public envio: any[] = []

  public retornou: boolean = false;
  public nomeCliente: string = '';
  public cpf: string = '';

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

  contrataServico() {
    if (this.envio.length == 0) {
      alert("Selecione ao menos um serviço");
      return;
    }
    this.api.post(`contratacao/contrata/servicos`, this.envio).subscribe(
      (dados: any) => {
        alert('Serviços contratados com sucesso.');
      },
      (erro: any) => {
        alert(erro.error);
      },
      () => {
        this.buscaCpf();
        this.envio = [];
      }
    )
  }

  insereServico(id: number) {
    this.envio.push({
      id_servico: id,
      cpf_usuario: this.cpf
    })

    console.log(this.envio);
  }

  public buscaCpf() {
    let cpf = this.f.cpf.value;
    this.api.get(`contratacao/${cpf}`).subscribe(
      (dados: any) => {
        this.retorno = dados;
        this.nomeCliente = dados[0].nome;
        this.cpf = dados[0].cpf_usuario;
        this.retornou = dados[0].descricao == null ? false : true;
      },
      (erro: any) => {
        alert(erro.error);
      });
  }

}

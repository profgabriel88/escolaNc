import { createInjectableDefinitionMap } from '@angular/compiler/src/render3/partial/injectable';
import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
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
  public retornoServicos: any[] = [];
  public servicosCheck: any[] = [];
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

  reset() {
    this.retorno = [];
    this.servicosCheck = [];
    this.envio = [];
    this.validaCheck();
    this.buscaCpf();
  }

  private validaForm() {
    this.form = this.fb.group({
      cpf: ''
    })
  }

  public validaCheck() {
    this.retornoServicos.forEach(servico => {
      servico.check = false;
      this.servicosCheck.push(servico);
    });
    console.table(this.servicosCheck);
  }

  public carregaServicos() {
    this.api.get(`contratacao/busca/servicos`).subscribe(
      (dados: any) => {
        this.retornoServicos = dados;
        this.validaCheck();
      },
      (erro: any) => {
        alert(erro.error);
      }
    )
  }

  contrataServico() {
    this.servicosCheck.forEach(servico => {
      if(servico.check)
        this.envio.push({
          id_servico: servico.id,
          cpf_usuario: this.cpf
        });
    })

    if (this.envio.length == 0) {
      alert('Selecione ao menos um serviço');
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
        this.reset();
      }
    )
  }

  insereServico(item: any) {
    item.check = !item.check;
    console.log(this.servicosCheck);
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

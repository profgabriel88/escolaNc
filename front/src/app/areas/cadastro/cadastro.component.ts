import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
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

  public form!: FormGroup;

  get f(): any {
    return this.form.controls;
  }

  public nome: string = '';
  public idade: string = '';
  public cpf: string = '';
  public rg: string = '';
  public data_nasc: string = '';
  public endereco: string = '';
  public cidade: string = '';
  public usuarios = []

  public toastMsg = 'abacaxi';

  constructor(
    private api: ApiService,
    private util: UtilitariosService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.validaForm();
  }

  private validaForm() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      idade: ['', [
        Validators.required,
        Validators.pattern('[0-9]*')
      ]],
      cpf: ['', [
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(14)]
      ],
      rg: ['', Validators.required],
      data_nasc: ['',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)]
      ],
      endereco: ['', Validators.required],
      cidade: ['', Validators.required],
    });
  }

  incluir() {
    let obj = {
      nome: this.f.nome.value,
      idade: parseInt(this.f.idade.value),
      cpf: this.util.removeMascara(this.f.cpf.value),
      rg: this.f.rg.value,
      data_nasc: this.f.data_nasc.value,
      endereco: this.f.endereco.value,
      cidade: this.f.cidade.value
    };

    this.api.post('usuarios/InsereUsuario', obj).subscribe(
      (dados: any) => {
        alert(`Cliente ${dados.nome} cadastrado com sucesso.`)
      },
      (error: any) => {
        console.error(error);
        alert(error.error);
      }
    )
  }

  formataCampos() {
    this.f.cpf.value = this.util.formataCpf(this.f.cpf.value);
    this.f.data_nasc.value = this.util.formataData(this.f.data_nasc.value);
  }
}

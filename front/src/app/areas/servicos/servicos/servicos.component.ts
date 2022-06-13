import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

  public servicos: any = [];
  public incluir: boolean = false;
  public caminho: string = '';

  public form!: FormGroup;

  get f(): any {
    return this.form.controls;
  }

  constructor(
    private api: ApiService,
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.iniciaPagina();
  }

  private iniciaPagina() {
    this.incluir = false;
    this.api.get('servicos').subscribe({
      next: dados => {
        this.servicos = dados;
      },
      error: erro => alert(erro.error)
    });
  }

  public validaForm() {
    this.form = this.fb.group({
      id: [0, Validators.required],
      descricao: ['', Validators.required],
      preco: ['', Validators.required]
    })
  }

  public excluir(id: string) {
    this.api.delete('servicos', id).subscribe({
      next: dados => {
        alert('Serviço excluído');
        this.iniciaPagina();
      },
      error: erro => alert(erro.error)
    })
  }

  public edita(item: any) {
    this.incluir = true;
    this.validaForm();
    this.f.id.value = item.id;
    this.f.descricao.value = item.descricao;
    this.f.preco.value = item.preco;
    this.caminho = 'atualiza'
  }

  public inclui(valor = 0) {
    if (valor == 0) {
      this.incluir = true;
      this.validaForm();
      this.caminho = 'inserir'
    }

    if (valor != 0) {
      this.api.post(`servicos/${this.caminho}`, this.form.value).subscribe({
        next: dados => {
          alert('Serviço cadatrado com sucesso');
          this.iniciaPagina();
        },
        error: erro => alert(erro.error)
      })
    }
  }
}

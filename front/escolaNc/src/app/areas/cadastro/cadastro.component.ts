import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/services/api.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public form!: FormGroup;

  // nome: string = '';
  // idade: number = 0;
  // cpf: string = '';
  // rg: string = '';
  // data_nasc: string = '';
  // endereco: string = '';
  // cidade: string = '';

  public salvo: boolean = false;

  get f(): any {
    return this.form.controls;
  }
  ngOnInit() {
    this.validaForm();
  }

  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }


  public validaForm() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      idade: ['', [
        Validators.required,
        Validators.pattern('[0-9]*')
      ]],
      cpf: ['', [
        Validators.required,
        ]
      ],
      rg: ['', Validators.required],
      data_nasc: ['', Validators.required],
      endereco: ['', Validators.required],
      cidade: ['', Validators.required]
    });
  }

  public incluir() {
    this.api.post('usuarios/inserir', this.form.value).subscribe(
      (dados: any) => {
        if(dados !== null || dados !== undefined) {
        alert(`Usuário ${dados.nome} cadastrado com sucesso`);
        }
      },
      (error: any) => {
        alert(error.error);
      }
    )
  }
}

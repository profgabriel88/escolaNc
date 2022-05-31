import { FormsModule } from '@angular/forms';
import { Component,  OnInit, } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  public edita: boolean = false;

  public nome = '';
  public idade = '';
  public cpf = '';
  public rg = '';
  public dt_nasc = '';
  public endereco = '';
  public cidade = '';

  public usuarios: Usuario[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('../usuarios.json').subscribe(data => {
      this.usuarios = data.usuarios;
      console.log(this.usuarios)
    });
  }

  public editar (item: any) {
    this.edita = !this.edita;
    this.nome = item.nome;
    this.idade = item.idade;
    this.cpf = item.cpf;
    this.rg = item.rg ;
    this.dt_nasc = item.data_nasc;
    this.endereco = item.endereco;
    this.cidade = item.cidade;
  }

  salvar() {
    let item = {
      nome: this.nome,
      idade: parseInt(this.idade),
      cpf: this.cpf,
      rg: this.rg,
      data_nasc: this.dt_nasc,
      endereco: this.endereco,
      cidade: this.cidade
    };

    let i = this.usuarios.findIndex(x => x.cpf == this.cpf);

    this.usuarios.splice(i, 1, item);

    this.escreverParaArquivo();

    this.edita = false;
  }

  escreverParaArquivo() {

  }

  public setCpf (item: any) {
    this.cpf = item.cpf;
    this.nome = item.nome;

  }

  public excluir () {
    let i = this.usuarios.findIndex(x => x.cpf == this.cpf);
    this.usuarios.splice(i, 1);
  }

  public imprimir(obj: string) {
    var elemento = document.getElementById(obj);
    var html = elemento?.innerHTML;
    var printWindow = window.open(
      "",
      "",
      "left=50000,top=0,width=1000px,height=0px,toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes"
    );

    var data = new Date;

    printWindow?.document.write("<html>");
    printWindow?.document.write("<head>");
    printWindow?.document.write('<style> * { font-size: 0.95rem; font-family: sans-serif; } table { border-spacing: 1em 0.2em; } thead { text-align: left; }</style>');
    printWindow?.document.write('<style>@page { size: A4;  margin: 5mm 5mm 5mm 5mm; } .printCpf { white-space: nowrap; } .printNone { display: none; }; #linha {display:contents;}</style>');
    printWindow?.document.write("</head>");
    printWindow?.document.write("<body>");
    printWindow?.document.write("<h2>Relação de Usuários Cadastrados - " + data.toLocaleString() + "</h2><hr>")
    printWindow?.document.write(html ? html : '');
    printWindow?.document.write("</body>");
    printWindow?.document.write("</html>");
    printWindow?.document.close();
    printWindow?.print();
  }
}

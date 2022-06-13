import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-rel-inadimplentes',
  templateUrl: './rel-inadimplentes.component.html',
  styleUrls: ['./rel-inadimplentes.component.css']
})
export class RelInadimplentesComponent implements OnInit {
  cpf = '';
  mostraTabela = false;
  retorno: any = [];
  constructor(private api: ApiService) { }

  ngOnInit() {

  }

  corrigePreco() {
    this.retorno.forEach((item: any, index: number) => {
      this.retorno[index].PRECO = parseFloat(item.PRECO).toFixed(2);
    });
  }

  pesquisa() {
    this.api.get(`relatorios/inadimplentes/${this.cpf.toString()}`).subscribe({
      next: dados => {
        this.retorno = dados;
        this.mostraTabela = true;
        this.corrigePreco();
      },
      error: erro => alert(erro.error)
    });
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
    printWindow?.document.write('<style>@page { size: A4;  margin: 10mm 10mm 10mm 10mm; } .printCpf { white-space: nowrap; } button { display: none; }; #linha {display:contents;}</style>');
    printWindow?.document.write("</head>");
    printWindow?.document.write("<body>");
    printWindow?.document.write("<h2>Relação de Usuários Inadimplentes - " + data.toLocaleString() + "</h2><hr>")
    printWindow?.document.write(html!);
    printWindow?.document.write("</body>");
    printWindow?.document.write("</html>");
    printWindow?.document.close();
    printWindow?.print();
  }

}

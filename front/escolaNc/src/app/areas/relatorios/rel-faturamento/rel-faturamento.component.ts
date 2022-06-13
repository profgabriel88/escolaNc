import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-rel-faturamento',
  templateUrl: './rel-faturamento.component.html',
  styleUrls: ['./rel-faturamento.component.css']
})
export class RelFaturamentoComponent implements OnInit {

  retorno: any = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.get('relatorios/faturamento').subscribe({
      next: dados => {
        this.retorno = dados;
      },
      error: erro => alert(erro.error)
    });
    console.table(this.retorno);
  }

}

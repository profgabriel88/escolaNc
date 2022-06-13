import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RelFaturamentoComponent } from './rel-faturamento/rel-faturamento.component';
import { RelInadimplentesComponent } from './rel-inadimplentes/rel-inadimplentes.component';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent implements OnInit {

  valor = 0;

  tipos = [
    {tipo: 'Faturamento', valor: 1},
    {tipo: 'Inadimplentes', valor: 2}
  ];

  // para instanciar um component a partir de outro
  constructor(
    private viewContainer: ViewContainerRef
  ) { }

  ngOnInit() {
  }

  criaComponent() {

    this.viewContainer.clear();
    if(this.valor == 1) {
      const component = this.viewContainer.createComponent(RelFaturamentoComponent);
    }
    if(this.valor == 2) {
      const component = this.viewContainer.createComponent(RelInadimplentesComponent);
    }
  }
}

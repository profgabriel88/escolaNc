import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { Servico } from 'src/app/models/Servico';


@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

  public servicos: Servico[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.get('servicos').subscribe(
      (dados: any) => {
        this.servicos = dados;
        console.log(this.servicos);
      },
      (error: any) => {
        alert(error.error);
      }
    );
  }

}

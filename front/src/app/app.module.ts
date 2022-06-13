import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './areas/cadastro/cadastro.component';
import { UsuarioComponent } from './areas/usuario/usuario.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ToastrModule } from 'ngx-toastr';
import { ServicosComponent } from './areas/servicos/servicos.component';
import { ContratacaoComponent } from './areas/contratacao/contratacao.component';
import { RelatoriosComponent } from './areas/relatorios/relatorios.component';
import { RelFaturamentoComponent } from './areas/relatorios/rel-faturamento/rel-faturamento.component';
import { RelInadimplentesComponent } from './areas/relatorios/rel-inadimplentes/rel-inadimplentes.component';
import { LoginComponent } from './areas/login/login.component';
import { PrincipalComponent } from './areas/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsuarioComponent,
    CadastroComponent,
    ServicosComponent,
    ContratacaoComponent,
    RelatoriosComponent,
    RelFaturamentoComponent,
    RelInadimplentesComponent,
    LoginComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

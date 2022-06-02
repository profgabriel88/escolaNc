import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CadastroComponent } from './areas/cadastro/cadastro.component';
import { UsuariosComponent } from './areas/usuarios/usuarios.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServicosComponent } from './areas/servicos/servicos.component';
import { ContratacaoComponent } from './areas/contratacao/contratacao.component';

@NgModule({
  declarations: [
    AppComponent,
      NavbarComponent,
      CadastroComponent,
      UsuariosComponent,
      ServicosComponent,
      ContratacaoComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

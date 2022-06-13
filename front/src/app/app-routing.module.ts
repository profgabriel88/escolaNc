import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './areas/cadastro/cadastro.component';
import { ContratacaoComponent } from './areas/contratacao/contratacao.component';
import { ServicosComponent } from './areas/servicos/servicos.component';
import { UsuariosComponent } from './areas/usuarios/usuarios.component';

const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent},
  { path: 'usuarios', component: UsuariosComponent},
  { path: 'servicos', component: ServicosComponent},
  { path: 'contratacao', component: ContratacaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

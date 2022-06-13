import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './areas/cadastro/cadastro.component';
import { ContratacaoComponent } from './areas/contratacao/contratacao.component';
import { RelatoriosComponent } from './areas/relatorios/relatorios.component';
import { ServicosComponent } from './areas/servicos/servicos/servicos.component';
import { UsuarioComponent } from './areas/usuario/usuario.component';

const routes: Routes = [
  {path: 'usuarios', component: UsuarioComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'servicos', component: ServicosComponent},
  {path: 'contratacao', component: ContratacaoComponent},
  {path: 'relatorios', component: RelatoriosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

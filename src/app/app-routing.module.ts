import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './areas/cadastro/cadastro.component';
import { UsuariosComponent } from './areas/usuarios/usuarios.component';

const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent},
  { path: 'usuarios', component: UsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

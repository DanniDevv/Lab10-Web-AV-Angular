import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  {path: 'formulario', component: FormularioComponent},
  {path: 'lista_usuarios', component: ListUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

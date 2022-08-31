import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//^as importações acima são obrigatórias

const routes: Routes = [
  //{path: '', component: *}
  //path:''--> é a representação em agular de '/'; 
  //* qualquer componente já criado de ser declarado para ser uma rota EX: first-component
  //lembre-se de importa cada componente que seja uma rota
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

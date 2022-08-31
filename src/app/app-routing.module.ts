import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './components/directives/directives.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { EventosComponent } from './components/eventos/eventos.component';
//^as importações acima são obrigatórias

import { FirstComponentComponent } from './components/first-component/first-component.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { PipesOepratorsComponent } from './components/pipes-oeprators/pipes-oeprators.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';

const routes: Routes = [
  //{path: '', component: *}
  //path:''--> é a representação em agular de '/'; 
  //* qualquer componente já criado de ser declarado para ser uma rota EX: first-component
  //lembre-se de importa cada componente que seja uma rota
  {path: 'Aula4', component: FirstComponentComponent},
  {path: 'Aula7', component: ParentDataComponent},
  {path: 'Aula8', component: DirectivesComponent},
  {path: 'Aula9', component: IfRenderComponent},
  {path: 'Aula10', component: EventosComponent},
  {path: 'Aula11', component: EmitterComponent},
  {path: 'Aula12-13-16', component: ListRenderComponent},
  {path: 'Aula14', component: PipesOepratorsComponent},
  {path: 'Aula15', component: TwoWayDataBindingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

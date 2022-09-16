import { BebidasComponent } from './../../../rotas-rotas-rotas/src/app/bebidas/bebidas.component';
import { TestesComponent } from './testes/testes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: TestesComponent
  },
  {
    path: 'bebidas', component: BebidasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

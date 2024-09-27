import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpregadoComponent } from './empregado/empregado.component';
import { DepartamentoComponent } from './departamento/departamento.component'; 

const routes: Routes = [
  { path: 'empregado', component: EmpregadoComponent },
  { path: 'departamento', component: DepartamentoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
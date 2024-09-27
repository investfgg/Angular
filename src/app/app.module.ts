import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { AddEditDepartamentoComponent } from './departamento/add-edit-departamento/add-edit-departamento.component';
import { ShowDepartamentoComponent } from './departamento/show-departamento/show-departamento.component';
import { EmpregadoComponent } from './empregado/empregado.component';
import { AddEditEmpregadoComponent } from './empregado/add-edit-empregado/add-edit-empregado.component';
import { ShowEmpregadoComponent } from './empregado/show-empregado/show-empregado.component';
import { ApiserviceService } from './apiservice.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DepartamentoComponent,
    AddEditDepartamentoComponent,
    ShowDepartamentoComponent,
    EmpregadoComponent,
    AddEditEmpregadoComponent,
    ShowEmpregadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiserviceService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

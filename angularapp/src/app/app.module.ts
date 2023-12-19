import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule, IMAGE_CONFIG } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ImcComponent } from './imc/imc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfodiabetesComponent } from './infodiabetes/infodiabetes.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { GraficosComponent } from 'src/app/imc/graficos/graficos.component';


const ROUTES: Routes = [
  //rutas xd
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'imc', component: ImcComponent
  },
  {
    path: 'info', component: InfodiabetesComponent
  },
  {
    path: 'usuario', component: UsuarioComponent
  },
  {
    path: 'graficos', component: GraficosComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ImcComponent,
    InfodiabetesComponent,
    UsuarioComponent,
    GraficosComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule, HttpClientModule, RouterModule, CommonModule, FormsModule, NgApexchartsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule, IMAGE_CONFIG } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ImcComponent } from './imc/imc.component';
import { FormsModule } from '@angular/forms';
import { InfodiabetesComponent } from './infodiabetes/infodiabetes.component';
import { UsuarioComponent } from './usuario/usuario.component';

const ROUTES: Routes = [
  //rutas xd
  {
    path: '', component: AppComponent
  },
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
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ImcComponent,
    InfodiabetesComponent,
    UsuarioComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule, HttpClientModule, RouterModule, CommonModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

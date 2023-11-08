import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  usuario = {
    nombre: '',
    edad: null,
    genero: 'masculino',
    diabetesGestacional: 'no',
    familiaresDiabetes: 'no',
    presionAlta: 'no',
    activoFisicamente: 'no',
  };

  submitForm() {
    console.log('Datos del usuario:', this.usuario);
  }



}

import { Component, Output, EventEmitter } from '@angular/core';
import { EnviardatosService } from 'src/app/enviardatos.service';
import { ContadorService } from 'src/app/contador.service';

@Component({
  selector: 'app-capturadatos',
  templateUrl: './capturadatos.component.html',
  styleUrls: ['./capturadatos.component.css']
})
export class CapturadatosComponent {

  constructor(private enviardatos: EnviardatosService, private contadorservicio: ContadorService) { }

  datos = {
    grupo: "",
    cuenta: "",
    nombre: "",
  }


  enviar() {
    this.enviardatos.enviarDatos(this.datos);
    console.log(this.datos);
    this.limpiarDatos();
    this.contador();
  }

  private limpiarDatos() {
    this.datos = {
      grupo: "",
      cuenta: "",
      nombre: "",
    };
  }

  private contador() {
    this.contadorservicio.incrementarContador(this.datos.grupo);
  }
}

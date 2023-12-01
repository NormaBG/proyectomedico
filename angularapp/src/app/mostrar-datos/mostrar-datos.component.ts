import {Component, Input} from '@angular/core';
import { EnviardatosService } from 'src/app/enviardatos.service';


@Component({
  selector: 'app-mostrar-datos',
  templateUrl: './mostrar-datos.component.html',
  styleUrls: ['./mostrar-datos.component.css']
})
export class MostrarDatosComponent {

  listadedatos: any[] = [];

  constructor(private enviardatos: EnviardatosService) { }

  ngOnInit() {
    this.enviardatos.datosActuales.subscribe((datos) => {
      this.listadedatos = datos;
    });
  }

  eliminar(datos: any) {

    const index = this.listadedatos.indexOf(datos);

    if (index !== -1) {
      this.listadedatos.splice(index, 1);

      this.enviardatos.enviarDatos([this.listadedatos]);
    }

  }

  editar() {

  }
}


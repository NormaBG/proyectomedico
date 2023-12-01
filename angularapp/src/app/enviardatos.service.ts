import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnviardatosService {

  constructor() { }

  private listadedatos: any[] = [];
  private datosa = new Subject<any>();

  datosActuales = this.datosa.asObservable();

  enviarDatos(datos: any) {
    this.listadedatos.push(datos);
    this.datosa.next(this.listadedatos);
  }
}

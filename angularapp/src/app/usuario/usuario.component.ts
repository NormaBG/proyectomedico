import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  constructor(private router: Router, private http: HttpClient) { }

  opcionSeleccionada: string = "";
  puntajeTotal: number = 0;
  riesgo: number = 0;
  interpretacion: string = "";
  mostrarPuntaje: boolean = false;
  nombre: string = "";
  apellido: string = "";

  pregunta1: number | any;
  pregunta2: number | any;
  pregunta3: number | any;
  pregunta4: number | any;
  pregunta5: number | any;
  pregunta6: number | any;
  pregunta7: number | any;
  pregunta8: number | any;

  preguntasbd = {
    "id": 0,
    "nombre": "",
    "apellidos": "",
    "genero": "",
    "pregunta1": 0,
    "pregunta2": 0,
    "pregunta3": 0,
    "pregunta4": 0,
    "pregunta5": 0,
    "pregunta6": 0,
    "pregunta7": 0,
    "pregunta8": 0,
    "puntajeTotal": 0,
    "riesgo": 0,
    "interpretacion": "string"
  }


  calculaImcPag() {
    this.router.navigate(['/imc'])
  }

  calcularPuntaje() {;

    this.puntajeTotal = parseInt(this.pregunta1) + parseInt(this.pregunta2) + parseInt(this.pregunta3) +
      parseInt(this.pregunta4) + parseInt(this.pregunta5) + parseInt(this.pregunta6) + parseInt(this.pregunta7) + parseInt(this.pregunta8);
      
    this.mostrarPuntaje = true;
    
    console.log(this.pregunta1);
    console.log(this.pregunta2);
    console.log(this.pregunta3);
    console.log(this.pregunta4);
    console.log(this.pregunta5);
    console.log(this.pregunta6);
    console.log(this.pregunta7);
    console.log(this.pregunta8);

    console.log('Puntaje total:', this.puntajeTotal);

    if (this.puntajeTotal < 7) {
      this.riesgo = 1;
      this.interpretacion = "Nivel de Riesgo muy bajo";
    } else if (this.puntajeTotal >= 7 && this.puntajeTotal <= 11) {
      this.riesgo = 4;
      this.interpretacion = "Nivel de Riesgo ligeramente elevado"
    } else if (this.puntajeTotal >= 12 && this.puntajeTotal <= 14) {
      this.riesgo = 17;
      this.interpretacion = "Nivel de riesgo moderado"
    } else if (this.puntajeTotal >= 15 && this.puntajeTotal <= 20) {
      this.riesgo = 33;
      this.interpretacion = "Nivel de riesgo alto";
    } else if (this.puntajeTotal > 20) {
      this.riesgo = 50;
      this.interpretacion = "Nivel de riesgo muy alto";
    }

    this.preguntasbd = {
      "id": 0,
      "nombre": this.nombre,
      "apellidos": this.apellido,
      "genero": this.opcionSeleccionada,
      "pregunta1": this.pregunta1,
      "pregunta2": this.pregunta2,
      "pregunta3": this.pregunta3,
      "pregunta4": this.pregunta4,
      "pregunta5": this.pregunta5,
      "pregunta6": this.pregunta6,
      "pregunta7": this.pregunta7,
      "pregunta8": this.pregunta8,
      "puntajeTotal": this.puntajeTotal,
      "riesgo": this.riesgo,
      "interpretacion": this.interpretacion
    };

    this.http.post('https://localhost:7003/api/DatosFindriscs', this.preguntasbd).subscribe(
      (response) => {
        console.log("datos registrados");
        console.log(this.preguntasbd);
      }
    )



  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent {

  weightt: number | undefined;
  heightt: number | undefined;
  imcValue: number | null = null;
  interpretacionIMC: string | null = null;

  calcularIMC() {
    if (this.weightt && this.heightt) {
      const imc = this.weightt / (this.heightt * this.heightt);
      this.imcValue = imc;

      if (imc < 18.5) {
        this.interpretacionIMC = 'Bajo peso';
      } else if (imc < 24.9) {
        this.interpretacionIMC = 'Peso saludable';
      } else if (imc < 29.9) {
        this.interpretacionIMC = 'Sobrepeso';
      } else {
        this.interpretacionIMC = 'Obesidad';
      }
    } else {
      this.imcValue = null;
      this.interpretacionIMC = null;
    }
  }
}

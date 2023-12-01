import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  constructor() { }

  cont1: number = 0;
  cont2: number = 0;
  cont3: number = 0;
  cont4: number = 0;

  incrementarContador(grupo: string) {
    switch (grupo) {
      case '101':
        this.cont1++;
        break;
      case '102':
        this.cont2++;
        break;
      case '103':
        this.cont3++;
        break;
      case '104':
        this.cont4++;
        break;
    }
  }

}

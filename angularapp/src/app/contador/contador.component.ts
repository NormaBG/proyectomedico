import { Component } from '@angular/core';
import { EnviardatosService } from 'src/app/enviardatos.service';
import { ContadorService } from 'src/app/contador.service';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  constructor(private enviardatos: EnviardatosService, public contadorService: ContadorService) { }

}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //recibir parametros para validacion del login

  Usuario1: string = "";
  Contrasena: string = "";
  credencialesincorrectas: boolean = false;
  idtipo: number = 0;

  constructor(private http: HttpClient, private router: Router) { }

  Validar() {
    const credenciales = {
      idUsuario: 0,
      usuario1: this.Usuario1,
      contrasena: this.Contrasena,
    };
    this.http.post('https://localhost:7003/api/Authentication/Validar', credenciales).subscribe(
      (response: any) => {
        //almacenar el tkoen JWT en el almacenamiento local
        localStorage.setItem('token', response.token);

        //redirigir a la pagina autorizada
        console.log('Redirigiendo a la página de dashboard...');
            this.router.navigate(['/graficos']);
            //this.usuarioservicio.setTipoDeUser(this.idtipo);
      }
    )

  }
}

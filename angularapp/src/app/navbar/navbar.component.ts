import { Component } from '@angular/core';
import { UsuariotokenService } from 'src/app/usuariotoken.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public UsuariotokenService: UsuariotokenService, private router: Router) { }

  onClickLogOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}

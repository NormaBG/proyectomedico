import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariotokenService {

  private baseURL = 'https://localhost:7003/api/Usuarios';

  private tipoDeUser: number = 999;

  constructor(private router: Router, private http: HttpClient) { }


  isLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}

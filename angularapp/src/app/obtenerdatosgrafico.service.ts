import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObtenerdatosgraficoService {

  private apiUrl = "https://localhost:7003/api/DatosFindriscs";
  private apitabla = "https://localhost:7003/api/DatosFindriscs";

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  datostabla(): Observable<any[]> {
    return this.http.get<any[]>(this.apitabla)
  }

}

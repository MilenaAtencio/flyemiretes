import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AeropuertoModelo } from '../modelos/aeropuerto.model';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class AeropuertoService {

  constructor(private http: HttpClient,
    private seguridadService: SeguridadService) { this.token = this.seguridadService.getToken();
    }
    url = "http://localhost:3000"
    token: string = ''

    store(aeropuerto: AeropuertoModelo): Observable<AeropuertoModelo> {
      return this.http.post<AeropuertoModelo>(`${this.url}/aeropuertos`, {
        nombre: aeropuerto.nombre,
        ciudad: aeropuerto.ciudad,
        pais: aeropuerto.pais,
        coordx: aeropuerto.coordx,
        coordy: aeropuerto.coordy,
        siglas: aeropuerto.siglas,
        tipo: aeropuerto.tipo
      });
    }
    getAll(): Observable<AeropuertoModelo[]>{
      return this.http.get<AeropuertoModelo[]>(`${this.url}/aeropuertos`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }
      update(aeropuerto: AeropuertoModelo): Observable<AeropuertoModelo> {
        return this.http.patch<AeropuertoModelo>(`${this.url}/aeropuertos/${aeropuerto.id}`, {
          nombre: aeropuerto.nombre,
          ciudad: aeropuerto.ciudad,
          pais: aeropuerto.pais,
          cordenada_x: aeropuerto.coordx,
          cordenada_y: aeropuerto.coordy,
          siglas: aeropuerto.siglas,
          tipo: aeropuerto.tipo   
        }, 
        {
          headers: new HttpHeaders({
            "Authorization": `Bearer ${this.token}`
          })
        });
      }   

      delete(id: string): Observable<AeropuertoModelo[]>{
        return this.http.delete<AeropuertoModelo[]>(`${this.url}/aeropuertos/${id}`, {
          headers: new HttpHeaders({
            "Authorization": `Bearer ${this.token}`
          })
        })
      }
      getWithId(id: string): Observable<AeropuertoModelo>{
        return this.http.get<AeropuertoModelo>(`${this.url}/aeropuertos/${id}`,{
          headers: new HttpHeaders({
            "Authorization": `Bearer ${this.token}`
          })
        })
      }
}  
    


    
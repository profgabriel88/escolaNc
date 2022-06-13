import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(private http: HttpClient) { }

public url = 'http://localhost:5000'

public get(caminho: string): Observable<any> {
  return this.http.get<any>(`${this.url}/${caminho}`);
}

public post(caminho: string, obj: any): Observable<any> {
  return this.http.post<any>(`${this.url}/${caminho}`, obj);
}

public delete(caminho: string, cpf: string): Observable<any> {
  return this.http.delete<boolean>(`${this.url}/${caminho}/${cpf}`);
}

}
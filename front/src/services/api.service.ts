import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(private http: HttpClient) { }

public url = 'http://localhost:5000'

public getUsers(): Observable<any> {
  return this.http.get<any>(`${this.url}/usuarios`);
}

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConexaoService {

constructor(private http: HttpClient) { }

public url = 'localhost:5000'

public getUsers(): any {
  this.http.get<any>(`${this.url}/usuarios`).subscribe(
    (data: any) => {return data},
    (error: any) => {return error}
  );
}

}

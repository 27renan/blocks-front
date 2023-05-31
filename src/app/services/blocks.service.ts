import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BlocksService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get<any>(`https://test-candidaturas-front-end.onrender.com/families?skip=0&take=10`);
  }

  newFind(skip: number): Observable<any> {
    return this.http.get<any>(`https://test-candidaturas-front-end.onrender.com/families?skip=${skip}&take=10`);
  }

}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConceptService {

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<string> {
    return this.http.get<string>("https://www.jumbo.com/producten/aardappelen,-groente-en-fruit/")
  }
  
}

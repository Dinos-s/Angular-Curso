import { Injectable } from '@angular/core';
import { IAnimal } from '../IAnimal';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals' // urlapi relacionada no db.json;

  constructor(private http: HttpClient) { }

  remove(animals: IAnimal[], animal: IAnimal){
    console.log("Service acionado");
    return animals.filter((a) => animal.name !== a.name); // só removerá o animal com o mesmo nome, e deixando o resto o mesmo;
  }

  getAll(): Observable<IAnimal[]>{
    return this.http.get<IAnimal[]>(this.apiUrl)
  } //--> observando a lista de animais;

  getItem(id: number): Observable<IAnimal>{
    return this.http.get<IAnimal>(`${this.apiUrl}/${id}`)
  }
}

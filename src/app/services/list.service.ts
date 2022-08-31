import { Injectable } from '@angular/core';
import { IAnimal } from '../IAnimal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals: IAnimal[], animal: IAnimal){
    console.log("Service acionado");
    return animals.filter((a) => animal.name !== a.name); // só removerá o animal com o mesmo nome, e deixando o resto o mesmo;
  }
}

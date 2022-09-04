import { Component, OnInit } from '@angular/core';
import { IAnimal } from 'src/app/IAnimal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: IAnimal[] = [
    // {name:'Trixy', type:'Golden-Fish', age: 2},
    // {name:'Brock', type:'Dog', age: 5},
    // {name:'Blim', type:'Cat', age: 6},
  ]

  animalDetails = '';

  constructor(private listService: ListService) {
    this.getAnimals()
   }

  ngOnInit(): void {}

  ageShow(animal: IAnimal){
    this.animalDetails = `${animal.name}, tem ${animal.age}`
  }

  delete(animal: IAnimal){
    console.log("removido");
    this.animals = this.animals.filter((a) => animal.name !== a.name); //excluido dados apens do fronte-end;
    this.listService.remove(animal.id).subscribe()//exclui o dado diretamente do db.json;
    //this.listService.remove(this.animals, animal)
  }

  getAnimals(): void{
    this.listService.getAll().subscribe((animals)=>(this.animals = animals))
  } // subscribe: o evento será realizado, para rea lizar outra ação;

}

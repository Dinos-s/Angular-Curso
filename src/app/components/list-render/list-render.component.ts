import { Component, OnInit } from '@angular/core';
import { IAnimal } from 'src/app/IAnimal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: IAnimal[] = [
    {name:'Trixy', type:'Golden-Fish', age: 2},
    {name:'Brock', type:'Dog', age: 5},
    {name:'Blim', type:'Cat', age: 6},
  ]

  animalDetails = '';

  constructor() { }

  ngOnInit(): void {
  }

  ageShow(animal: IAnimal){
    this.animalDetails = `${animal.name}, tem ${animal.age}`
  }

}

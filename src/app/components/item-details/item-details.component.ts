import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IAnimal } from "src/app/IAnimal";
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  animal?: IAnimal;

  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.getAnimal()
  }

  ngOnInit(): void {}

  getAnimal(){
    const id = Number(this.route.snapshot.paramMap.get('id')) //puxando o id e seu conteudo correspondente no bd;
    this.listService.getItem(id).subscribe((animal) => (this.animal = animal))
  }
}

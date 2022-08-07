import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals = [
    {name:'Trixy', type:'Golden-Fish'},
    {name:'Brock', type:'Dog'},
    {name:'Blim', type:'Cat'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-oeprators',
  templateUrl: './pipes-oeprators.component.html',
  styleUrls: ['./pipes-oeprators.component.css']
})
export class PipesOepratorsComponent implements OnInit {

  today = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}

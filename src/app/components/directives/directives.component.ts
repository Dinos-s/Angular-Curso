import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  classes = ['blue'] //variavel sendo chamado no arquivo directives.component.html
  //classe no estilo de css sendo chamada do arquivo directives.component.css

  constructor() { }

  ngOnInit(): void {
  }

}

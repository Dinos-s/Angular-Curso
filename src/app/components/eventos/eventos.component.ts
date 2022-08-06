import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  show: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  showMessage(): void{
    this.show = !this.show //togle, um estilo de envento onde, o valor a ser mostrado será o inverso, nesse caso true -> false e false -> true;
  }
}

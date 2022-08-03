import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  @Input() name: string = ''; //nesscesrio um inicializador para que não surja um erro;
  @Input() userData!: {email: string, role: string} //usando o sinal de '!', estamos garantindo que a variavel será inicializada, basta o programa esperar;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent implements OnInit {

  ventasNetas: number = 2587698.3556;
  porcentaje: number = 0.485689;

  constructor() { }

  ngOnInit(): void {
  }

}

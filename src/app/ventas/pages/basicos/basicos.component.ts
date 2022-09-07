import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower: string = 'victor';
  nombreUpper: string = 'VICTOR';
  nombreCompleto: string = 'Victor maNuel';

  fecha: Date = new Date;
  constructor() { }

  ngOnInit(): void {
  }

}

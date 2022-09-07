import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfases';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayusculas: boolean = false;
  ordenarPor: string = '';

heroe : Heroe[]= [
  {
    nombre: 'Superman',
    vuela: true,
    color: Color.azul
  },
  {
    nombre: 'Batman',
    vuela: false,
    color: Color.negro
  },
  {
    nombre: 'Robin',
    vuela: false,
    color: Color.rojo
  },
  {
    nombre: 'Dereveil',
    vuela: true,
    color: Color.verde
  },
  {
    nombre: 'Linterna Verse',
    vuela: true,
    color: Color.verde
  }
]
  cambiar(){
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

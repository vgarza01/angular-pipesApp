import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {
togg: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  //i18nSelect
  nombre : string = 'Susana';
  genero : string = 'femenino';
  invitacionMap = {
    'masculino': 'Invitarlo',
    'femenino': 'Invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria','Pedro','Juan','Alberto','Victor']
  ClientesMap= {
    '=0':'no tenemos ningun cliente esperando',
    '=1':'tenemos 2 cliente esperando',
    '=2':'tenemos 2 clientes esperando',
    'other':'tenemos # clientes esperando',
  }

  cambiarNombre() {
    if (this.genero === 'femenino')
    {
      this.nombre = 'Victor';
      this.genero = 'masculino';
    }
    else
    {
      this.nombre = 'Susana';
      this.genero = 'femenino';
    }

  }

  eliminarCliente() {
    this.clientes.shift();
  }

  //keyvalupipe
persona= {
  nombre: 'Fernando',
  edad:'35',
  Direccion:'Otawa Canada'
}

//jsonpipe
heroes =[
  {nombre:'Spider', vuale:false,},
  {nombre:'superman', vuale:true},
  {nombre:'Acuaman', vuale:false}
]

//async Pipe
miObserbable = interval(5000); //0,1,2,3,4,5

valorPromesa = new Promise( (resolve, reject) => {
  setTimeout(() => {
    resolve( 'Tenemos data de promesa');

  }, 3500);
})
}

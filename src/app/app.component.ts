import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private primengConfig: PrimeNGConfig){

  }

ngOnInit() {
    this.primengConfig.ripple = true;
  }

  title = 'pipesApp';
  nombre: string = 'Victor Villegas';
  valor: number = 1000;
  obj = {
    nombre: "fernando"
  }
  
mostrarNombre() {
  console.log( this.nombre );
  console.log( this.valor) ;
  console.log( this.obj )
}
}

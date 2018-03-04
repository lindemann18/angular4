import { Component } from '@angular/core';

@Component({
  selector: 'plantillas',
  templateUrl: './plantillas.component.html',
})
export class PlantillasComponent {
  public titulo:string;
  public administrador:any;
  public propiedad_uno:string;
  public propiedad_dos:string;
  public identity = {
    id: 1,
    web: 'ashernetz.com',
    tematica: 'web dev',
  }

  constructor() {
    this.titulo        = "Plantillas ngTemplate en Angular";
    this.administrador = true;
    this.propiedad_uno = 'valor de la propiedad uno en plantilas';
    this.propiedad_dos = 'VAlor de la propiedad DOS en plantillas';
  }

  recibirDatos(e:any){
    console.log(e);
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'plantillas',
  templateUrl: './plantillas.component.html',
})
export class PlantillasComponent {
  public titulo:string;
  public administrador:any;

  constructor() {
    this.titulo        = "Plantillas ngTemplate en Angular";
    this.administrador = true;
  }

}

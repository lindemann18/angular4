import { Component } from '@angular/core';
import { Coche } from './coches.model';

@Component({
  selector: 'coches',
  templateUrl: './coches.component.html',
})
export class CochesComponent {
  public coche:Coche;
  public coches:Array<Coche>;

  constructor() {
      this.coche = new Coche('','','');
      this.coches = [
        new Coche('Avenger','200','dark gray')
      ]
  }

  onSubmit() {
    this.coches.push(this.coche);
    this.coche = new Coche();
  }
}

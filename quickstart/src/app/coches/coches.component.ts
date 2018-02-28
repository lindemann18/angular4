import { Component } from '@angular/core';
import { Coche } from './coches.model';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'coches',
  templateUrl: './coches.component.html',
  providers: [PeticionesService],
})
export class CochesComponent {
  public coche:Coche;
  public coches:Array<Coche>;
  public articulos:any;

  constructor(private _peticionesService:PeticionesService) {
      this.coche = new Coche('','','');
      this.coches = [
        new Coche('Avenger','200','dark gray')
      ]
  }

  onSubmit() {
    this.coches.push(this.coche);
    this.coche = new Coche();
  }

  ngOnInit() {
    this._peticionesService.getArticulos().subscribe(
      result => {
        articulos = result;
      },
      error => {
        console.log(error);
      }
    );
  }
}

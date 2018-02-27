import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  providers: [RopaService],
})

export class HomeComponent {
  public titulo:string = 'Página Principal';
  public prueba:string;
  public listado_ropa:Array<string>;
  public prenda_seleccionada:string;

  constructor(private _ropaService:RopaService) {

  }

  ngOnInit() {
    console.log(this._ropaService.prueba('ftfm'));
    this._ropaService.addRopa("pantalones");
    this._ropaService.addRopa("blusas");
    this._ropaService.addRopa("flats");
    this.listado_ropa = this._ropaService.getRopa();
  }

  agregarPrenda() {
    this._ropaService.addRopa(this.prenda_seleccionada);
    this.prenda_seleccionada = "";
  }

  eliminarPrenda(index) {
    this._ropaService.deleteRopa(index);
  }
}

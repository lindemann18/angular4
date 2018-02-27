import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {
  public nombre_prenda = "Pantalones vaqueros";
  public coleccion_ropa:Array<any> = [];

    prueba(prenda) {
      return prenda;
    }

    addRopa(nombre_prenda):Array <string> {
      this.coleccion_ropa.push(nombre_prenda);
    }

    getRopa():Array <string>  {
      return this.coleccion_ropa;
    }

    deleteRopa(index:number) {
      this.coleccion_ropa.splice(index, 1);
      return this.getRopa();
    }

}

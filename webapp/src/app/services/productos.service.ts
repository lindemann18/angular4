import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Producto } from '../models/producto.model';
import { GLOBAL } from './global';

@Injectable()

export class ProductoService {
  public url:string;

  constructor(
    public _http: Http
  ) {
      this.url = GLOBAL.url;
    }

    getProductos() {
       console.log("Texto desde el servicio");
    }
}

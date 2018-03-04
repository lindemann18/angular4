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
       return this._http.get(this.url+"productos").map(res=>res.json())
    }

    addProducto(producto: Producto) {
      let productoJson = JSON.stringify(producto);
      let params = 'json='+productoJson;
      let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
      return this._http.post(this.url+'productos', params, {headers: headers})
      .map( res => res.json());
    }

    getProducto(id:number) {
      return this._http.get(this.url+"producto/"+id).map(res=>res.json());
    }

    editProducto(id:number, producto:Producto) {
      let json = JSON.stringify(producto);
      let params = "json="+json;
      let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
      return this._http.post(this.url+'update-producto/'+id, params, {headers: headers})
      .map( res => res.json());
    }

    deleteProducto(id:number) {
      return this._http.get(this.url+'delete-producto/'+id).map( res => res.json());
    }

    makeFileRequest(url:string, params: Array<string>, files: Array<File>) {
      console.log('wut');
      return new Promise((resolve, reject)=> {
          var formData: any = new FormData();
          var xhr = new XMLHttpRequest();

          for(var i =0; i< files.length; i++) {
            console.log(files[i]);
            formData.append('uploads[]',files[i],files[i].name);
          }

          xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
              if(xhr.status===200) {
                resolve(JSON.parse(xhr.response));
              }else {
                reject(xhr.response);
              }
            }
          };
          xhr.open('POST', url, true);
          xhr.send(formData);
      });
    }
}

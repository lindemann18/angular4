import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ProductoService } from '../../services/productos.service';
import { Producto } from '../../models/producto.model';
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls:['./producto-detail.component.css'],
  providers: [ProductoService],
})

export class ProductoDetailComponent {
  public producto:Producto;

  constructor(
    private _productoService:ProductoService,
    private _route: ActivatedRoute,
    private _router:Router) {

  }

  ngOnInit() {
    console.log("Componente producto-detail.component.ts");
    this.getProducto();
  }

  getProducto() {
    this._route.params.forEach((params:Params)=> {
      let id = params['id'];
      this._productoService.getProducto(id).subscribe(
        response => {
          if(response.code===200) {
            this.producto = response.data;
          } else {
            this._router.navigate(['/productos']);
          }
        },
        error => {
          console.log(error);
        }
      );
    })
  }
}

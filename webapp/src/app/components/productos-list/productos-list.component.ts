import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../../services/productos.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls:['./productos-list.component.css'],
  providers: [ProductoService]
})

export class ProductosListComponent {
  public titulo:string;
  public productos: Array<Producto>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productoService:ProductoService
  ) {
    this.titulo = "Listado de productos";
  }

  ngOnInit() {
    console.log("Componente productos-list.component.ts");
    this._productoService.getProductos().subscribe(
      result => {
        if (result.code === 200){
            this.productos = result.data;
            console.log(this.productos);
        }else {
          console.log("error");
        }
      },
      error =>{
          console.log(error);
      }
    );
  }
}

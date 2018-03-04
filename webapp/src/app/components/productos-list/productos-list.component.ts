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
  public confirmado:any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productoService:ProductoService
  ) {
    this.titulo = "Listado de productos";
  }

  ngOnInit() {
    console.log("Componente productos-list.component.ts");
    this.getProductos();
  }

  getProductos() {
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

  borrarConfirm(id) {
    this.confirmado = id;
  }

  cancelarConfirm() {
    this.confirmado = null;
  }

  borrarProducto(id:number) {
    this._productoService.deleteProducto(id).subscribe(
      result => {
        if (result.code === 200){
            this.getProductos();
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

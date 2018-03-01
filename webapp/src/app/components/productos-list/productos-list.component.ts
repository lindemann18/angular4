import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../../services/productos.service';

@Component({
  selector: 'productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls:['./productos-list.component.css'],
  providers: [ProductoService]
})

export class ProductosListComponent {
  public titulo:string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productoService:ProductoService
  ) {
    this.titulo = "Listado de productos";
  }

  ngOnInit() {
    console.log("Componente productos-list.component.ts");
    this._productoService.getProductos();
  }
}

import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ProductoService } from '../../services/productos.service';
import { Producto } from '../../models/producto.model';
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls:['./producto-detail.component.css']
})

export class ErrorComponent {
  public titulo:string;

  constructor(private _productoService:ProductoService, private _route: ActivatedRoute, private _router:Router) {
    this.titulo = "Detalle producto";
  }

  ngOnInit() {
    console.log("Componente error.component.ts");
  }
}

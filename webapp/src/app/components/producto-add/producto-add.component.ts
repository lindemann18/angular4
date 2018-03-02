import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { ProductoService } from '../../services/productos.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'producto-add',
  templateUrl: './producto-add.component.html',
  styleUrls:['./producto-add.component.css'],
  providers: [ProductoService],
})

export class ProductoAddComponent {
  public titulo:string;
  public producto:Producto;

  constructor() {
    this.titulo = "Crear un nuevo producto";
    this.producto = new Producto(0,'','',0,'');
  }

  ngOnInit() {
    console.log("Componente error.component.ts");
  }

  onSubmit(){
    console.log(this.producto);
  }
}

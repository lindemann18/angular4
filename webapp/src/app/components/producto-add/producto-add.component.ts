import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { ProductoService } from '../../services/productos.service';
import { Producto } from '../../models/producto.model';
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'producto-add',
  templateUrl: './producto-add.component.html',
  styleUrls:['./producto-add.component.css'],
  providers: [ProductoService],
})

export class ProductoAddComponent {
  public titulo:string;
  public producto:Producto;
  public filesToUpload:any;
  public resultUpload:any;

  constructor(private _productoService:ProductoService, private _route: ActivatedRoute, private _router:Router) {
    this.titulo = "Crear un nuevo producto";
    this.producto = new Producto(0,'','',0,'');
  }

  ngOnInit() {
    console.log("Componente error.component.ts");
  }

  onSubmit(){
    if(this.filesToUpload.length>=1) {
      this._productoService.makeFileRequest(GLOBAL.url+'upload-file',[],this.filesToUpload).then(result => {
        this.resultUpload = result;
        this.producto.imagen =   this.resultUpload.filename;
        this.saveProducto();
      }, (error)=> {
        console.log(error);
      });
    } else {
      this.saveProducto();
    }

  }

  saveProducto() {
    this._productoService.addProducto(this.producto).subscribe(
      response => {
        if(response.code===200) {
          this._router.navigate(['/home'])
        } else {
          console.log('error');
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  fileChangeEvent(fileInput:any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }
}

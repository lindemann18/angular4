import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { ProductoService } from '../../services/productos.service';
import { Producto }        from '../../models/producto.model';
import { GLOBAL }          from '../../services/global';

@Component({
  selector: 'producto-edit',
  templateUrl: '../producto-add/producto-add.component.html',
  styleUrls:['../producto-add/producto-add.component.css'],
  providers: [ProductoService],
})

export class ProductoEditComponent {
  public titulo:string;
  public producto:Producto;
  public filesToUpload:any;
  public resultUpload:any;
  public is_edit;
  public id:number;

  constructor(
    private _productoService:ProductoService,
    private _route: ActivatedRoute,
    private _router:Router
  ) {
    this.titulo = "Editando";
    this.producto = new Producto();
    this.is_edit = true;
  }

  ngOnInit() {
    console.log("Componente edit.component.ts");
    this.getProducto();
  }

  onSubmit() {
    if(this.filesToUpload && this.filesToUpload.length>=1) {
      this._productoService.makeFileRequest(GLOBAL.url+'upload-file',[],this.filesToUpload).then(result => {
        this.resultUpload = result;
        this.producto.imagen =   this.resultUpload.filename;
        this.EditProducto();
      }, (error)=> {
        console.log(error);
      });
    } else {
      this.EditProducto();
    }
  }

  EditProducto() {
    this._productoService.editProducto(this.id, this.producto).subscribe(
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

  getProducto() {
    this._route.params.forEach((params:Params)=> {
      this.id = params['id'];
      this._productoService.getProducto(this.id).subscribe(
        response => {
          if(response.code===200) {
            this.producto = response.data;
            console.log(this.producto);
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

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
})
export class ContactoComponent {
  public titulo:string = 'Página Contacto';
  public Parametro:any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {

  }


  ngOnInit() {
    this._route.params.forEach((params:Params)=>{
      this.Parametro = params['page'];
      console.log(params);
    });
  }

  redirigir() {
    this._router.navigate(['/contacto','perrilliou']);
  }
}

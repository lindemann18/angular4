import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html'
})

export class FrutaComponent  {
  public nombre_componente:string = 'componente de fruta';
  public listado_frutas:string    = 'Naranja, Manzana, demaś';

  constructor() {

  }

  ngOnInit() {
    this.despliega();
  }

  despliega() {
    console.log(this.listado_frutas);
  }


}

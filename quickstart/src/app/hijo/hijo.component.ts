import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'componente-hijo',
  templateUrl: './hijo.component.html',
})
export class HijoComponent {
  public titulo:string;
  @Input() propiedad_uno:string;
  @Input('texto') propiedad_dos:string;
  @Input('web') web:string;
  @Output()desde_el_hijo = new EventEmitter();


  constructor() {
    this.titulo        = "Componente Hijo";
  }

  enviar(e:any) {
    this.desde_el_hijo.emit({
      nombre: 'chuvakovich'
    });
  }

}

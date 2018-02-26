import { Component } from '@angular/core';
import {Empleado} from './empleado.model';

@Component({
  selector: 'empleado',
  templateUrl: './empleado.component.html',
  styleUrls:['./empleado.component.css']
})

export class EmpleadoComponent  {
  public titulo:string = "holis";
  public empleado:Empleado;
  public empleados:Array<Empleado>;

  constructor() {
    this.empleado = new Empleado("chuvakovich",29, "Associate Engineer",true);
    this.empleados = [
      new Empleado("Lizbeth",29, "chef",true),
      new Empleado("Vera",29, "Designer",true),
      new Empleado("Alissa",29, "Support",true),
    ];
  }

  ngOnInit() {

  }
}

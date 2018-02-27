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
  public trabajador_externo:boolean;
  public color:string;
  public color_seleccionado:string;

  constructor() {
    this.empleado = new Empleado("chuvakovich",29, "Associate Engineer",true);
    this.empleados = [
      new Empleado("Lizbeth",29, "chef",true),
      new Empleado("Vera",29, "Designer",true),
      new Empleado("Alissa",29, "Support",false),
    ];
    this.trabajador_externo = false;
    this.color = 'blue';
    this.color_seleccionado = '#ccc';
  }

  ngOnInit() {

  }

  cambiarExterno() {
    this.trabajador_externo = !this.trabajador_externo;
  }

  logColorSeleccionado() {
    console.log(this.color_seleccionado);
  }

}

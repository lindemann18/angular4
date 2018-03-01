import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.css'],
})

export class HomeComponent {
  public titulo:string;

  constructor() {
    this.titulo = 'WebApp de productos con angular 4';
  }

  ngOnInit() {
    console.log('se hac cargado el component home');
  }
}

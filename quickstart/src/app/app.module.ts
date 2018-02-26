import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}     from '@angular/forms';
import {HttpModule}      from '@angular/http';

import { AppComponent }  from './app.component';
import { FrutaComponent }  from './fruta/fruta.component';
import { EmpleadoComponent }  from './empleado/empleado.component';

@NgModule({
  imports:      [ BrowserModule , FormsModule, HttpModule],
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
  ],
  providers:[],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}     from '@angular/forms'; // two way data binding
import {HttpModule}      from '@angular/http';
import {routing, appRoutingProviders} from './app.routing';

import { AppComponent }  from './app.component';
import { FrutaComponent }  from './fruta/fruta.component';
import { EmpleadoComponent }  from './empleado/empleado.component';
import { ContactoComponent }  from './contacto/contacto.component';
import { HomeComponent }  from './home/home.component';
import {ConversorPipe} from './pipes/conversor.pipe';
import { CochesComponent }  from './coches/coches.component';
import { PlantillasComponent } from './plantillas/plantillas.component';
import { HijoComponent } from './hijo/hijo.component';

@NgModule({
  imports:      [ BrowserModule , FormsModule, HttpModule,routing],
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent,
    ConversorPipe,
    CochesComponent,
    PlantillasComponent,
    HijoComponent,
  ],
  providers:[appRoutingProviders],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

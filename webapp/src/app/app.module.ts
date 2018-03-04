import { BrowserModule }           from '@angular/platform-browser';
import { NgModule }                from '@angular/core';
import { FormsModule }             from '@angular/forms';
import { HttpModule }              from '@angular/http';

// Componentes
import { AppComponent }            from './app.component';
import { HomeComponent }           from  './components/home/home.component';
import { ErrorComponent }          from  './components/error/error.component';
import { ProductosListComponent }  from  './components/productos-list/productos-list.component';
import { ProductoAddComponent }    from './components/producto-add/producto-add.component';
import { ProductoDetailComponent } from './components/producto-detail/producto-detail.component';
import { ProductoEditComponent }   from './components/producto-edit/producto-edit.component';

// Rutas
import { routing, appRoutingProviders } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductosListComponent,
    ProductoAddComponent,
    ProductoDetailComponent,
    ProductoEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

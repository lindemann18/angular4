import { ModuleWithProviders }     from '@angular/core';
import { Routes, RouterModule }    from '@angular/router';

// components
import { HomeComponent }           from './components/home/home.component';
import { ErrorComponent }          from  './components/error/error.component';
import { ProductosListComponent }  from  './components/productos-list/productos-list.component';
import { ProductoAddComponent }    from './components/producto-add/producto-add.component';
import { ProductoDetailComponent } from './components/producto-detail/producto-detail.component';


const appRoutes: Routes = [
  {path:'',               component: HomeComponent},
  {path:'home',           component:HomeComponent},
  {path:'productos',      component:ProductosListComponent},
  {path:'crear-producto', component: ProductoAddComponent},
  {path:'producto/:id',    component: ProductoDetailComponent},
  {path:'**',             component:ErrorComponent},
];

export const appRoutingProviders: Array<any> = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

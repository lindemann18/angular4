import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from  './components/error/error.component';
import { ProductosListComponent } from  './components/productos-list/productos-list.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'productos', component:ProductosListComponent},
  {path:'**', component:ErrorComponent},
];

export const appRoutingProviders: Array<any> = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import { Routes } from '@angular/router';
import {ProductItemComponent} from "../product-item/product-item.component";
import {WwwComponent} from "../www/www.component";
import {NotFoundComponent} from "../not-found/not-found.component";

export const routes: Routes = [
  {path:'', redirectTo:'list',pathMatch:'full'},
  {path: 'list', component: ProductItemComponent,title: 'Home'},
  {path: 'www', component: WwwComponent},
  {path:'**', component:NotFoundComponent,title:'Not Found'}
];

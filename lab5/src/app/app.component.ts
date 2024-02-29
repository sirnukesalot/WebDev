import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ProductItemComponent} from "../product-item/product-item.component";
import {WwwComponent} from "../www/www.component";
import {ProductListComponent} from "../top-bar-categories/product-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductItemComponent, RouterLink, WwwComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'untitled';
}

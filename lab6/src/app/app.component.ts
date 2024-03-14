import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RouterModule} from "@angular/router";

import {AlbumsComponent} from "../albums/albums.component";
import {AlbumPhotosComponent} from "../album-photos/album-photos.component";
import {AlbumDetailComponent} from "../album-detail/album-detail.component";
import {AboutComponent} from "../about/about.component";
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule, AlbumsComponent, AlbumDetailComponent, AlbumPhotosComponent, AboutComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'untitled1';
}

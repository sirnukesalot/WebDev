import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {AlbumsComponent} from "../albums/albums.component";
import {AlbumPhotosComponent} from "../album-photos/album-photos.component";
import {AlbumDetailComponent} from "../album-detail/album-detail.component";
import {AboutComponent} from "../about/about.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,AlbumsComponent,AlbumPhotosComponent,AlbumDetailComponent,AboutComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

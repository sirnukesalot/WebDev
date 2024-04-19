import {Component, OnInit} from '@angular/core';
import {AlbumPhotos} from "../app/AlbumPhotos";
import {AlbumsService} from "../app/albums.service";
import {ActivatedRoute, RouterLink, RouterOutlet} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{
  albumPhotos!:AlbumPhotos[];
  loaded: boolean= false;

  constructor(private route:ActivatedRoute,private albumsService: AlbumsService) {

  }

  ngOnInit(): void {

    this.getPhotos()

  }
  getPhotos(){
    this.route.paramMap.subscribe((params)=>{
      const albumId = Number(params.get('albumId'));
      this.loaded=false;
      this.albumsService.getPhotos(albumId).subscribe((albumPhotos)=>{
        this.albumPhotos=albumPhotos
        this.loaded = true;
        console.log(2+'2')
      })
    })
  }
}

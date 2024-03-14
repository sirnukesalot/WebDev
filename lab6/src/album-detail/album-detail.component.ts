import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {Observable} from "rxjs";
import{Albums} from "../app/Albums";
import {AlbumsComponent} from "../albums/albums.component";
import {AlbumsService} from "../app/albums.service";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Location} from "@angular/common";



@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album!: Albums;
  loaded!: boolean;
  newTitle: string = '';

  constructor(private route: ActivatedRoute, private albumsService: AlbumsService,private location: Location) {

  }

  ngOnInit(): void {
    this.getPost()

  }

  getPost() {
    this.route.paramMap.subscribe((params) => {
      const albumId = Number(params.get('id'));
      this.loaded = false;
      this.albumsService.getPost(albumId).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      })
    })
  }
  back():void{
    this.location.back();
  }

  changeTitle(): void {
    this.route.paramMap.subscribe((params) => {
      const albumId = Number(params.get('id'))
      if (this.newTitle.trim() !== '') {
        this.albumsService.changeTitle(albumId, this.newTitle).subscribe((album) => {
          this.album.title=this.newTitle
          console.log('Album title changed:', album);

        });
      }
    })
  }
}


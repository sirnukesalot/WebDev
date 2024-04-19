import {Component, OnInit} from '@angular/core';
import {Albums} from "../app/Albums";
import {AlbumsService} from "../app/albums.service";
import {RouterLink} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NgIf,
    RouterModule,
    FormsModule
  ],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums!: Albums[];
  newAlbum: Albums;
  loaded: boolean= false;
  constructor(private albumsService: AlbumsService) {
    this.newAlbum ={
      id:101,
      title:'',
      userId:0,
    }
  }
  ngOnInit(): void {
    this.getPosts()

  }

  addAlbum(){
    this.albumsService.createAlbum(this.newAlbum).subscribe((album)=>{
      this.albums.push(album);
      alert('Album created');
      this.newAlbum ={} as Albums;

    })
  }
  getPosts(){
    this.loaded=false;
    this.albumsService.getPosts().subscribe((albums)=>{
      this.albums=albums;
      this.loaded = true;
    })
  }
  deletePost(id: number){
    this.albums = this.albums.filter((a)=>a.id!==id)
    this.albumsService.deletePost(id).subscribe(()=>{
      console.log('deleted')
    })
  }
}

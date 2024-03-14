import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Albums} from "./Albums";
import {Observable} from "rxjs";
import {AlbumPhotos} from "./AlbumPhotos";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  BASE_URL :string = 'https://jsonplaceholder.typicode.com'
  constructor(private client: HttpClient) { }

  getPosts() : Observable<Albums[]>{
    return this.client.get<Albums[]>(`${this.BASE_URL}/albums`)
  }

  getPost(id: number):Observable<Albums>{
    return this.client.get<Albums>(`${this.BASE_URL}/albums/${id}`)
  }
  createAlbum(newAlbum: Albums):Observable<Albums>{
    return this.client.post<Albums>(`${this.BASE_URL}/albums`, newAlbum)


  }
  deletePost(id: number) {
    return this.client.delete(`${this.BASE_URL}/albums/${id}`)
  }

  getPhotos(albumId: number):Observable<AlbumPhotos[]>{
    return this.client.get<AlbumPhotos[]>(`${this.BASE_URL}/albums/${albumId}/photos`)
  }
  changeTitle(id: number, newTitle: string): Observable<Albums> {
    const url = `${this.BASE_URL}/albums/${id}`;
    return this.client.patch<Albums>(url, { title: newTitle });
  }
}

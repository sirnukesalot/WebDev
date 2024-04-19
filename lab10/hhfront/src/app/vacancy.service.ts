import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Company} from "./models/Company";
import {Vacancy} from "./models/Vacancy";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private apiUrl = 'http://localhost:8000'

  constructor(private http:HttpClient) {

  }

  getVacancies(): Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(`${this.apiUrl}/vacancies`)
  }
}

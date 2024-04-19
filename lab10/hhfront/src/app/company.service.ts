import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Company} from "./models/Company";
import {Vacancy} from "./models/Vacancy";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = 'http://localhost:8000'
  constructor(private http:HttpClient) {}
  getCompanies(): Observable<Company[]>{
    return this.http.get<Company[]>(`${this.apiUrl}/companies`)
  }

  getVacanciesByCompany(companyId: number): Observable<Vacancy[]>{
    const url = `${this.apiUrl}/${companyId}/vacancies/`;
    return this.http.get<Vacancy[]>(url)

  }
}

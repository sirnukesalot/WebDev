import {Component, OnInit} from '@angular/core';
import {Company} from "../models/Company";
import {CompanyService} from "../company.service";
import {Vacancy} from "../models/Vacancy";
import {RouterLink} from "@angular/router";
import {RouterModule} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [
    RouterLink,
    RouterModule,
    NgForOf
  ],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit{
  companies!: Company[];
  vacancies!: Vacancy[];
  constructor(private companyService: CompanyService) {
  }
  ngOnInit(): void {
    this.getCompanies()
  }

  getCompanies() : void {
    this.companyService.getCompanies().subscribe((companies) => {
      this.companies = companies;
    })
  }

  loadVacancies(companyId: number): void{
    this.companyService.getVacanciesByCompany(companyId).subscribe(vacancies=>this.vacancies= vacancies)
  }

}

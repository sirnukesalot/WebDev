import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../models/Vacancy";
import {VacancyService} from "../vacancy.service";
import {NgForOf} from "@angular/common";
import {RouterLink, RouterModule} from "@angular/router";

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    RouterModule
  ],
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.css'
})
export class VacancyListComponent implements  OnInit{
  vacancies!: Vacancy[];

  constructor(private vacancyService: VacancyService ) {
  }
  ngOnInit(): void {
    this.getVacancies()
  }
  getVacancies() : void {
    this.vacancyService.getVacancies().subscribe((vacancies) => {
      this.vacancies = vacancies;
    })
  }
}

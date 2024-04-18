import { Routes } from '@angular/router';
import {VacancyListComponent} from "./vacancy-list/vacancy-list.component";
import {CompanyListComponent} from "./company-list/company-list.component";
import {AboutComponent} from "./about/about.component";

export const routes: Routes = [
  {path:'vacancies', component: VacancyListComponent},
  {path:'companies', component:CompanyListComponent},
  {path:'about', component:AboutComponent}
];

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyDTO } from './shared/domain/DTOs/company.dto';
import { CompaniesService } from './shared/services/companies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  companies = new Observable<CompanyDTO[]>();

  constructor(private readonly companiesService: CompaniesService) {}

  ngOnInit(): void {
    this.companies = this.companiesService.findAll();
  }
}

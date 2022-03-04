import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyDTO } from './shared/domain/DTOs/company.dto';
import { MockService } from './shared/services/companies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  companies = new Observable<CompanyDTO[]>();
  company = new Observable<CompanyDTO>();

  constructor(private readonly mockService: MockService) {}

  ngOnInit(): void {
    this.companies = this.companiesService.findAll();
    this.company = this.companiesService.findOne('001');
  }
}

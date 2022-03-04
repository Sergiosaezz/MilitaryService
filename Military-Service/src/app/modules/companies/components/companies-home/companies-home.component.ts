import { Component, OnInit } from '@angular/core';
import { CompanyDTO } from 'src/app/shared/domain/DTOs/company.dto';
import { CompaniesService } from 'src/app/shared/services/companies.service';

@Component({
  selector: 'app-companies-home',
  templateUrl: './companies-home.component.html',
  styleUrls: ['./companies-home.component.css'],
})
export class CompaniesHomeComponent implements OnInit {
  companies!: CompanyDTO[];

  constructor(private readonly companiesService: CompaniesService) {}

  ngOnInit(): void {
    this.companiesService
      .findAll()
      .subscribe((companiesData) => (this.companies = companiesData));
  }
}

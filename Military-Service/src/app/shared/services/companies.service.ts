import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CompanyDTO } from '../domain/DTOs/company.dto';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  constructor(private readonly http: HttpClient) {}

  findAll(): Observable<CompanyDTO[]> {
    return this.http
      .get<any>('assets/mock/companies.json')
      .pipe(map((data) => data.companies as CompanyDTO[]));
  }

  findOne() {
    return;
  }
}

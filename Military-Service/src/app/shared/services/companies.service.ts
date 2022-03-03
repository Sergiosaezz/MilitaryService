import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CompanyDTO } from '../domain/DTOs/company.dto';
import { DepartmentDTO } from '../domain/DTOs/department.dto';
import { ServiceDTO } from '../domain/DTOs/service.dto';

@Injectable({
  providedIn: 'root',
})
export class MockService {
  baseUrl = 'assets/mock/';

  constructor(private readonly http: HttpClient) {}

  loadCompanies(): Observable<CompanyDTO[]> {
    return this.http
      .get<any>(`${this.baseUrl}companies.json`)
      .pipe(map((data) => data.companies as CompanyDTO[]));
  }

  loadDepartments(): Observable<DepartmentDTO[]> {
    return this.http
      .get<any>(`${this.baseUrl}departments.json`)
      .pipe(map((data) => data.departments as DepartmentDTO[]));
  }

  loadServices(): Observable<ServiceDTO[]> {
    return this.http
      .get<any>(`${this.baseUrl}services.json`)
      .pipe(map((data) => data.services as ServiceDTO[]));
  }
}

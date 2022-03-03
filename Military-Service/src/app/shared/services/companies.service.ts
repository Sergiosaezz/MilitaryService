import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CompanyDTO } from '../domain/DTOs/company.dto';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  constructor(private readonly http: HttpClient) {}

  findAll(): Observable<CompanyDTO[]> {
    return this.http.get<CompanyDTO[]>('assets/mock/companies.json');
  }
}

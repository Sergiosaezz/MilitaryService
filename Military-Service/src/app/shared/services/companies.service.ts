import { Injectable } from '@angular/core';
import { liveQuery } from 'dexie';
import { CompanyDTO } from '../domain/DTOs/company.dto';
import { DexieService } from './dexie.service';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  constructor(private readonly dexieService: DexieService) {}

  add(company: CompanyDTO) {
    this.dexieService.companiesStore.add(company);
  }

  delete(id: string) {
    this.dexieService.companiesStore.delete(id);
  }

  edit(company: CompanyDTO) {
    this.dexieService.companiesStore.put(company, company.id);
  }

  findOne(id: string) {
    const company = this.dexieService.companiesStore.get(id);
    return company;
  }

  findAll() {
    return liveQuery(() => this.dexieService.companiesStore.toArray());
  }
}

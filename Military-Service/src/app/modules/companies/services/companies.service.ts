import { Injectable } from '@angular/core';
import { liveQuery } from 'dexie';
import { CompanyDTO } from '../../../shared/domain/DTOs/company.dto';
import { DexieService } from '../../../shared/services/dexie.service';

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

  addOrEditIfExist(company: CompanyDTO) {
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

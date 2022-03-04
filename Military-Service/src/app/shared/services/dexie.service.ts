import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';
import { BarrackDTO } from '../domain/DTOs/barrack.dto';
import { CompanyDTO } from '../domain/DTOs/company.dto';
import { DepartmentDTO } from '../domain/DTOs/department.dto';
import { ServiceDTO } from '../domain/DTOs/service.dto';
import { SoldierDTO } from '../domain/DTOs/soldier.dto';
import { MockService } from './mock.service';

@Injectable({
  providedIn: 'root',
})
export class DexieService extends Dexie {
  barracksStore!: Table<BarrackDTO>;
  companiesStore!: Table<CompanyDTO>;
  departmentsStore!: Table<DepartmentDTO>;
  servicesStore!: Table<ServiceDTO>;
  soldiersStore!: Table<SoldierDTO>;

  constructor(private readonly mockService: MockService) {
    super('Military_Service');
    this.version(2).stores({
      barracksStore: 'id, name',
      companiesStore: 'id, activity',
      departmentsStore: 'id, name',
      servicesStore: 'id, description',
      soldiersStore: 'id, name, company.id, department.id, barrack.id',
    });
  }

  loadData() {
    this.loadBarracks();
    this.loadCompanies();
    this.loadDepartments();
    this.loadServices();
    this.loadSoldiers();
  }

  loadBarracks() {
    this.mockService.loadBarracks().subscribe((barracks) => {
      for (let barrack of barracks) {
        this.barracksStore.add(barrack);
      }
    });
  }

  loadCompanies() {
    this.mockService.loadCompanies().subscribe((companies) => {
      for (let company of companies) {
        this.companiesStore.add(company);
      }
    });
  }

  loadDepartments() {
    this.mockService.loadDepartments().subscribe((departments) => {
      for (let department of departments) {
        this.departmentsStore.add(department);
      }
    });
  }

  loadServices() {
    this.mockService.loadServices().subscribe((services) => {
      for (let service of services) {
        this.servicesStore.add(service);
      }
    });
  }

  loadSoldiers() {
    this.mockService.loadSoldiers().subscribe((soldiers) => {
      for (let soldier of soldiers) {
        this.soldiersStore.add(soldier);
      }
    });
  }
}

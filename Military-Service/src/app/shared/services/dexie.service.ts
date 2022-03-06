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
    this.existBarracks().then((exist) => {
      if (!exist)
        this.mockService.loadBarracks().subscribe((barracks) => {
          this.barracksStore.bulkPut(barracks);
        });
    });
  }

  async existBarracks() {
    const barracks = await this.barracksStore.count();
    return barracks > 0 ? true : false;
  }

  loadCompanies() {
    this.existCompanies().then((exist) => {
      if (!exist)
        this.mockService.loadCompanies().subscribe((companies) => {
          this.companiesStore.bulkPut(companies);
        });
    });
  }

  async existCompanies() {
    const companies = await this.companiesStore.count();
    return companies > 0 ? true : false;
  }

  loadDepartments() {
    this.existDepartments().then((exist) => {
      if (!exist)
        this.mockService.loadDepartments().subscribe((departments) => {
          this.departmentsStore.bulkPut(departments);
        });
    });
  }

  async existDepartments() {
    const departments = await this.departmentsStore.count();
    return departments > 0 ? true : false;
  }

  loadServices() {
    this.existServices().then((exist) => {
      if (!exist)
        this.mockService.loadServices().subscribe((services) => {
          this.servicesStore.bulkPut(services);
        });
    });
  }

  async existServices() {
    const services = await this.servicesStore.count();
    return services > 0 ? true : false;
  }

  loadSoldiers() {
    this.existSoldiers().then((exist) => {
      if (!exist)
        this.mockService.loadSoldiers().subscribe((soldiers) => {
          this.soldiersStore.bulkPut(soldiers);
        });
    });
  }

  async existSoldiers() {
    const soldiers = await this.soldiersStore.count();
    return soldiers > 0 ? true : false;
  }
}

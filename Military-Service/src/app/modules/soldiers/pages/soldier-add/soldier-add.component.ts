import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarracksService } from 'src/app/modules/barracks/services/barracks.service';
import { CompaniesService } from 'src/app/modules/companies/services/companies.service';
import { DepartmentsService } from 'src/app/modules/departments/services/departments.service';
import { BarrackDTO } from 'src/app/shared/domain/DTOs/barrack.dto';
import { CompanyDTO } from 'src/app/shared/domain/DTOs/company.dto';
import { DepartmentDTO } from 'src/app/shared/domain/DTOs/department.dto';
import { SoldierDTO } from 'src/app/shared/domain/DTOs/soldier.dto';
import { SoldiersService } from '../../services/soldiers.service';
import * as uuid from 'uuid';
import { ADD_FORM } from 'src/app/common/constants';

@Component({
  selector: 'app-soldier-add',
  templateUrl: './soldier-add.component.html',
})
export class SoldierAddComponent implements OnInit {
  pageName = ADD_FORM;
  allBarracks!: BarrackDTO[];
  allCompanies!: CompanyDTO[];
  allDepartments!: DepartmentDTO[];
  soldierToCreate!: SoldierDTO;

  constructor(
    private readonly soldierService: SoldiersService,
    private readonly barrackService: BarracksService,
    private readonly companyService: CompaniesService,
    private readonly departmentService: DepartmentsService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loadFormData();
  }

  loadFormData() {
    this.barrackService
      .findAll()
      .subscribe((barracksData) => (this.allBarracks = barracksData));
    this.companyService
      .findAll()
      .subscribe((companiesData) => (this.allCompanies = companiesData));
    this.departmentService
      .findAll()
      .subscribe((departmentsData) => (this.allDepartments = departmentsData));
  }

  /*TODO: refactoring*/
  async createSoldier(soldier: SoldierDTO) {
    await this.setValuesToSoldier(soldier);
    this.soldierService.add(soldier);
    this.goToSoldiersPage();
  }

  async setValuesToSoldier(soldier: SoldierDTO) {
    soldier.id = uuid.v4();
    this.soldierToCreate = soldier;
    return new Promise((resolve, reject) => {
      this.setBarrack(soldier.barrack.id)
        .then(() => this.setCompany(soldier.company.id))
        .then(() => this.setDepartment(soldier.department.id))
        .then(() => resolve(true));
    });
  }

  async setBarrack(barrackId: string) {
    return this.barrackService
      .findOne(barrackId)
      .then(
        (barrack) => (this.soldierToCreate.barrack = barrack as BarrackDTO)
      );
  }

  async setCompany(companyId: string) {
    return this.companyService
      .findOne(companyId)
      .then(
        (company) => (this.soldierToCreate.company = company as CompanyDTO)
      );
  }

  async setDepartment(departmentId: string) {
    return this.departmentService
      .findOne(departmentId)
      .then(
        (department) =>
          (this.soldierToCreate.department = department as DepartmentDTO)
      );
  }

  goToSoldiersPage() {
    this.router.navigateByUrl('/soldiers');
  }
}

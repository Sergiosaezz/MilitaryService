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
  createSoldier(soldier: SoldierDTO) {
    this.setValuesToSoldier(soldier);
    setTimeout(() => {
      this.soldierService.add(soldier);
    }, 100);
    this.goToSoldiersPage();
  }

  setValuesToSoldier(soldier: SoldierDTO) {
    soldier.id = uuid.v4();
    this.soldierToCreate = soldier;
    this.setBarrack(soldier.barrack.id);
    this.setCompany(soldier.company.id);
    this.setDepartment(soldier.department.id);
  }

  setBarrack(barrackId: string) {
    this.barrackService
      .findOne(barrackId)
      .then(
        (barrack) => (this.soldierToCreate.barrack = barrack as BarrackDTO)
      );
  }

  setCompany(companyId: string) {
    this.companyService
      .findOne(companyId)
      .then(
        (company) => (this.soldierToCreate.company = company as CompanyDTO)
      );
  }

  setDepartment(departmentId: string) {
    this.departmentService
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EDIT_FORM } from 'src/app/common/constants';
import { BarracksService } from 'src/app/modules/barracks/services/barracks.service';
import { CompaniesService } from 'src/app/modules/companies/services/companies.service';
import { DepartmentsService } from 'src/app/modules/departments/services/departments.service';
import { BarrackDTO } from 'src/app/shared/domain/DTOs/barrack.dto';
import { CompanyDTO } from 'src/app/shared/domain/DTOs/company.dto';
import { DepartmentDTO } from 'src/app/shared/domain/DTOs/department.dto';
import { SoldierDTO } from 'src/app/shared/domain/DTOs/soldier.dto';
import { SoldiersService } from '../../services/soldiers.service';

@Component({
  selector: 'app-soldier-edit',
  templateUrl: './soldier-edit.component.html',
})
export class SoldierEditComponent implements OnInit {
  pageName = EDIT_FORM;
  allBarracks!: BarrackDTO[];
  allCompanies!: CompanyDTO[];
  allDepartments!: DepartmentDTO[];
  soldierToUpdate!: SoldierDTO;

  constructor(
    private readonly soldierService: SoldiersService,
    private readonly barrackService: BarracksService,
    private readonly companyService: CompaniesService,
    private readonly departmentService: DepartmentsService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    const soldierId = this.activatedRoute.snapshot.params.id as string;
    this.soldierService.findOne(soldierId).then((soldier) => {
      this.soldierToUpdate = soldier as SoldierDTO;
      console.log('1', this.soldierToUpdate);
    });
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
  updateSoldier(soldier: SoldierDTO) {
    this.setValuesToSoldier(soldier);
    setTimeout(() => {
      this.soldierService.addOrEditIfExists(this.soldierToUpdate);
    }, 100);
    this.goToSoldiersPage();
  }

  setValuesToSoldier(soldier: SoldierDTO) {
    soldier.id = this.soldierToUpdate.id;
    soldier.services = this.soldierToUpdate.services;
    this.soldierToUpdate = soldier;
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
        (barrack) => (this.soldierToUpdate.barrack = barrack as BarrackDTO)
      );
  }

  async setCompany(companyId: string) {
    return this.companyService
      .findOne(companyId)
      .then(
        (company) => (this.soldierToUpdate.company = company as CompanyDTO)
      );
  }

  async setDepartment(departmentId: string) {
    return this.departmentService
      .findOne(departmentId)
      .then(
        (department) =>
          (this.soldierToUpdate.department = department as DepartmentDTO)
      );
  }

  goToSoldiersPage() {
    this.router.navigateByUrl('/soldiers');
  }
}

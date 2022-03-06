import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { BarracksService } from 'src/app/modules/barracks/services/barracks.service';
import { CompaniesService } from 'src/app/modules/companies/services/companies.service';
import { DepartmentsService } from 'src/app/modules/departments/services/departments.service';
import { BarrackDTO } from 'src/app/shared/domain/DTOs/barrack.dto';
import { CompanyDTO } from 'src/app/shared/domain/DTOs/company.dto';
import { DepartmentDTO } from 'src/app/shared/domain/DTOs/department.dto';
import { SoldierDTO } from 'src/app/shared/domain/DTOs/soldier.dto';
import { SoldiersService } from '../../services/soldiers.service';

@Component({
  selector: 'app-soldier-add',
  templateUrl: './soldier-add.component.html',
  styleUrls: ['./soldier-add.component.css'],
})
export class SoldierAddComponent implements OnInit {
  pageName = 'Añadir';
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

  /*TODO: hay asincronismo que hay que corregir, se añade el soldado antes de que se seteen los valores.*/
  createSoldier(soldier: SoldierDTO) {
    this.setValuesToSoldier(soldier);
    this.soldierService.add(this.soldierToCreate);
    this.goToSoldiersPage();
  }

  setValuesToSoldier(soldier: SoldierDTO) {
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

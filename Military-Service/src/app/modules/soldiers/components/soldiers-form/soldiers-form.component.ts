import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BarracksService } from 'src/app/modules/barracks/services/barracks.service';
import { CompaniesService } from 'src/app/modules/companies/services/companies.service';
import { DepartmentsService } from 'src/app/modules/departments/services/departments.service';
import { BarrackDTO } from 'src/app/shared/domain/DTOs/barrack.dto';
import { CompanyDTO } from 'src/app/shared/domain/DTOs/company.dto';
import { DepartmentDTO } from 'src/app/shared/domain/DTOs/department.dto';
import { SoldierDTO } from 'src/app/shared/domain/DTOs/soldier.dto';

@Component({
  selector: 'app-soldiers-form',
  templateUrl: './soldiers-form.component.html',
  styleUrls: ['./soldiers-form.component.css'],
})
export class SoldiersFormComponent implements OnInit {
  @Input() pageType = '';
  @Input() soldierValue!: SoldierDTO;
  @Output() dataResult = new EventEmitter<SoldierDTO>();
  @Output() cancelAction = new EventEmitter<any>();
  formControl!: FormGroup;
  barracks!: BarrackDTO[];
  companies!: CompanyDTO[];
  departments!: DepartmentDTO[];

  constructor(
    private readonly fb: FormBuilder,
    private readonly barrackService: BarracksService,
    private readonly companyService: CompaniesService,
    private readonly departmentService: DepartmentsService
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.formControl = this.fb.group({
      name: [this.soldierValue.name, Validators.required],
      surname: [this.soldierValue.surname, Validators.required],
      rank: [this.soldierValue.rank, Validators.required],
      barrack: [this.soldierValue.barrack.name, Validators.required],
      company: [this.soldierValue.company.activity, Validators.required],
      department: [this.soldierValue.department.name, Validators.required],
    });
  }

  loadData() {
    this.barrackService
      .findAll()
      .subscribe((barracksData) => (this.barracks = barracksData));
    this.companyService
      .findAll()
      .subscribe((companiesData) => (this.companies = companiesData));
    this.departmentService
      .findAll()
      .subscribe((departmentsData) => (this.departments = departmentsData));
  }

  sendData() {
    this.dataResult.emit(this.soldierValue);
  }

  sendCancelAction() {
    this.cancelAction.emit();
  }
}

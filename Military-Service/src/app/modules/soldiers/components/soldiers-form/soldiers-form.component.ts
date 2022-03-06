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
  @Input() barracks!: BarrackDTO[];
  @Input() companies!: CompanyDTO[];
  @Input() departments!: DepartmentDTO[];
  @Output() dataResult = new EventEmitter<SoldierDTO>();
  @Output() cancelAction = new EventEmitter<any>();
  formControl!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.formControl = this.getFormControlWithoutValues();
    if (this.soldierValue) this.setSoldierValuesToFormControl();
  }

  getFormControlWithoutValues() {
    return this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      rank: ['', Validators.required],
      barrack: ['', Validators.required],
      department: ['', Validators.required],
      company: ['', Validators.required],
    });
  }

  setSoldierValuesToFormControl() {
    this.formControl.setValue({
      name: this.soldierValue.name,
      surname: this.soldierValue.surname,
      rank: this.soldierValue.rank,
      barrack: this.soldierValue.barrack.name,
      department: this.soldierValue.department.name,
      company: this.soldierValue.company.activity,
    });
  }

  sendData(soldier: SoldierDTO) {
    this.soldierValue = soldier;
    this.dataResult.emit(this.soldierValue);
  }

  sendCancelAction() {
    this.cancelAction.emit();
  }
}

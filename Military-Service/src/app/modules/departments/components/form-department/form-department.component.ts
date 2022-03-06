import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentDTO } from 'src/app/shared/domain/DTOs/department.dto';

@Component({
  selector: 'app-form-department',
  templateUrl: './form-department.component.html',
})
export class FormDepartmentComponent implements OnInit {
  @Input() pageType = '';
  @Input() departmentValue!: DepartmentDTO;
  @Output() dataResult = new EventEmitter<DepartmentDTO>();
  @Output() cancelAction = new EventEmitter<any>();
  formControl!: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.formControl = this.fb.group({
      name: [this.departmentValue.name, Validators.required],
    });
  }

  sendData(name: string) {
    this.departmentValue.name = name;
    this.dataResult.emit(this.departmentValue);
  }

  sendCancelAction() {
    this.cancelAction.emit();
  }
}

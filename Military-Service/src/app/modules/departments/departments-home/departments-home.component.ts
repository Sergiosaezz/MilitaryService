import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ADD_FORM, EDIT_FORM } from 'src/app/common/constants';
import { DepartmentDTO } from 'src/app/shared/domain/DTOs/department.dto';
import { DepartmentsService } from '../services/departments.service';
import { v4 as uuidv4 } from 'uuid';
import { DialogComponent } from '../../departments/components/dialog/dialog.component';

@Component({
  selector: 'app-departments-home',
  templateUrl: './departments-home.component.html',
})
export class DepartmentsHomeComponent implements OnInit {
  departments!: DepartmentDTO[];
  departmentToEdit!: DepartmentDTO;
  formType = '';
  isFormActive = false;

  constructor(
    private readonly departmentsService: DepartmentsService,
    private readonly deleteDialog: MatDialog,
    private snackMsg: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.departmentsService
      .findAll()
      .subscribe((departmentsData) => (this.departments = departmentsData));
  }

  activateAddForm() {
    this.closeForm();
    this.formType = ADD_FORM;
    this.departmentToEdit = { id: '', name: '' };
    this.openForm();
  }

  activateEditForm(department: DepartmentDTO) {
    this.closeForm();
    this.formType = EDIT_FORM;
    this.departmentToEdit = department;
    this.openForm();
  }

  addOrUpdateDepartment(company: DepartmentDTO) {
    if (this.formType === ADD_FORM) company.id = uuidv4();
    this.departmentsService.addOrEditIfExists(company);
    this.closeForm();
  }

  deleteDepartment(company: DepartmentDTO) {
    const dialogRef = this.deleteDialog
      .open(DialogComponent, {
        width: '350px',
        data: company,
      })
      .afterClosed()
      .subscribe((confirm) => {
        if (confirm) {
          this.departmentsService.delete(company.id);
          this.snackMsg.open('Cuerpo eliminado', undefined, {
            duration: 1000,
          });
        }
      });
  }

  openForm() {
    setTimeout(() => {
      this.isFormActive = true;
    }, 1);
  }

  closeForm() {
    this.isFormActive = false;
  }
}

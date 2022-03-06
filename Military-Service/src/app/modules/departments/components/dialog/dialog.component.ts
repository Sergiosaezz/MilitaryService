import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CompanyDTO } from 'src/app/shared/domain/DTOs/company.dto';
import { DepartmentDTO } from 'src/app/shared/domain/DTOs/department.dto';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public departmentToDelete: DepartmentDTO
  ) {}

  public deleteCDepartment() {
    this.dialogRef.close(true);
  }

  public cancelDelete() {
    this.dialogRef.close(false);
  }
}

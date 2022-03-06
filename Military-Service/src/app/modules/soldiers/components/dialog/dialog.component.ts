import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SoldierDTO } from 'src/app/shared/domain/DTOs/soldier.dto';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public soldierToDelete: SoldierDTO
  ) {}

  public deleteService() {
    this.dialogRef.close(true);
  }

  public cancelDelete() {
    this.dialogRef.close(false);
  }
}

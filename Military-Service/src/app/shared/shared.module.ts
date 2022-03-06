import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const MODULES = [
  ReactiveFormsModule,
  MatDialogModule,
  MatSnackBarModule,
  MatButtonModule,
  CommonModule,
];

@NgModule({
  exports: MODULES,
})
export class SharedModule {}

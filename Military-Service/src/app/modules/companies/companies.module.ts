import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesRouting } from './companies-routing.module';
import { CompaniesHomeComponent } from './companies-home/companies-home.component';
import { FormCompanyComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CompaniesHomeComponent, FormCompanyComponent, DialogComponent],
  imports: [
    CommonModule,
    CompaniesRouting,
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatButtonModule,
  ],
})
export class CompaniesModule {}

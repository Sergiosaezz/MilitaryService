import { NgModule } from '@angular/core';

import { DepartmentsRouting } from './departments-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DepartmentsHomeComponent } from './departments-home/departments-home.component';
import { FormDepartmentComponent } from './components/form-department/form-department.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [DepartmentsHomeComponent, FormDepartmentComponent, DialogComponent],
  imports: [SharedModule, DepartmentsRouting],
})
export class DepartmentsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsRouting } from './departments-routing.module';
import { DepartmentsHomeComponent } from './components/departments-home/departments-home.component';

@NgModule({
  declarations: [DepartmentsHomeComponent],
  imports: [CommonModule, DepartmentsRouting],
})
export class DepartmentsModule {}

import { NgModule } from '@angular/core';
import { DepartmentsRouting } from './departments-routing.module';
import { DepartmentsHomeComponent } from './components/departments-home/departments-home.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DepartmentsHomeComponent],
  imports: [SharedModule, DepartmentsRouting],
})
export class DepartmentsModule {}

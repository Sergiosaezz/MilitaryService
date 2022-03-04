import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsHomeComponent } from './components/departments-home/departments-home.component';

const routes: Routes = [{ path: '', component: DepartmentsHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentsRouting {}

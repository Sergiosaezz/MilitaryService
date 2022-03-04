import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesHomeComponent } from './components/services-home/services-home.component';

const routes: Routes = [{ path: '', component: ServicesHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRouting {}
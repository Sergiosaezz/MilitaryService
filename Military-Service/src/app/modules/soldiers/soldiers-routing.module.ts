import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoldiersHomeComponent } from './components/soldiers-home/soldiers-home.component';

const routes: Routes = [{ path: '', component: SoldiersHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoldiersRouting {}

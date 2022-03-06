import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoldierAddComponent } from './pages/soldier-add/soldier-add.component';
import { SoldierEditComponent } from './pages/soldier-edit/soldier-edit.component';
import { SoldiersHomeComponent } from './pages/soldiers-home/soldiers-home.component';

const routes: Routes = [
  { path: '', component: SoldiersHomeComponent },
  { path: 'add', component: SoldierAddComponent },
  { path: 'edit/:id', component: SoldierEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoldiersRouting {}

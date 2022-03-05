import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarracksAddComponent } from './components/barracks-add/barracks-add.component';
import { BarracksHomeComponent } from './components/barracks-home/barracks-home.component';

const routes: Routes = [{ path: '', component: BarracksHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarracksRouting {}

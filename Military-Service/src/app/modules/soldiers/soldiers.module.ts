import { NgModule } from '@angular/core';
import { SoldiersRouting } from './soldiers-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SoldiersFormComponent } from './components/soldiers-form/soldiers-form.component';
import { SoldierAddComponent } from './pages/soldier-add/soldier-add.component';
import { SoldierEditComponent } from './pages/soldier-edit/soldier-edit.component';
import { SoldiersHomeComponent } from './pages/soldiers-home/soldiers-home.component';

@NgModule({
  declarations: [
    SoldiersHomeComponent,
    SoldiersFormComponent,
    SoldierAddComponent,
    SoldierEditComponent,
  ],
  imports: [SharedModule, SoldiersRouting],
})
export class SoldiersModule {}

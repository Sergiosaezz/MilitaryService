import { NgModule } from '@angular/core';
import { BarracksRouting } from './barracks-routing.module';
import { BarracksHomeComponent } from './barracks-home/barracks-home.component';
import { BarracksFormComponent } from './components/form/barracks-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [BarracksHomeComponent, BarracksFormComponent, DialogComponent],
  imports: [SharedModule, BarracksRouting],
})
export class BarracksModule {}

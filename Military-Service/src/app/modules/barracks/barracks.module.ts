import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarracksRouting } from './barracks-routing.module';
import { BarracksHomeComponent } from './components/barracks-home/barracks-home.component';
import { BarracksAddComponent } from './components/barracks-add/barracks-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [BarracksHomeComponent, BarracksAddComponent],
  imports: [SharedModule, BarracksRouting],
})
export class BarracksModule {}

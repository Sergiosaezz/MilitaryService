import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarracksRouting } from './barracks-routing.module';
import { BarracksHomeComponent } from './components/barracks-home/barracks-home.component';
import { BarracksAddComponent } from './components/barracks-add/barracks-add.component';

@NgModule({
  declarations: [BarracksHomeComponent, BarracksAddComponent],
  imports: [CommonModule, BarracksRouting],
})
export class BarracksModule {}

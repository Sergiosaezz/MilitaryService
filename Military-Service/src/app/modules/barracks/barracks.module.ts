import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarracksRouting } from './barracks-routing.module';
import { BarracksHomeComponent } from './components/barracks-home/barracks-home.component';

@NgModule({
  declarations: [BarracksHomeComponent],
  imports: [CommonModule, BarracksRouting],
})
export class BarracksModule {}

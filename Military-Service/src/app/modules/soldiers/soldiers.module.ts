import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoldiersHomeComponent } from './components/soldiers-home/soldiers-home.component';
import { SoldiersRouting } from './soldiers-routing.module';

@NgModule({
  declarations: [SoldiersHomeComponent],
  imports: [CommonModule, SoldiersRouting],
})
export class SoldiersModule {}

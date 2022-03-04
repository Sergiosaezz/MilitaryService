import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesRouting } from './services-routing.module';
import { ServicesHomeComponent } from './components/services-home/services-home.component';

@NgModule({
  declarations: [ServicesHomeComponent],
  imports: [CommonModule, ServicesRouting],
})
export class ServicesModule {}

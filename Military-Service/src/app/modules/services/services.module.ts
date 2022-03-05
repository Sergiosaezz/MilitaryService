import { NgModule } from '@angular/core';
import { ServicesRouting } from './services-routing.module';
import { ServicesHomeComponent } from './components/services-home/services-home.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ServicesHomeComponent],
  imports: [SharedModule, ServicesRouting],
})
export class ServicesModule {}

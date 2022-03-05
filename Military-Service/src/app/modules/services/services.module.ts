import { NgModule } from '@angular/core';
import { ServicesRouting } from './services-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServicesHomeComponent } from './services-home/services-home.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { FormServicesComponent } from './components/form-services/form-services.component';

@NgModule({
  declarations: [ServicesHomeComponent, DialogComponent, FormServicesComponent],
  imports: [SharedModule, ServicesRouting],
})
export class ServicesModule {}

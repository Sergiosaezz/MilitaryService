import { NgModule } from '@angular/core';
import { CompaniesRouting } from './companies-routing.module';
import { CompaniesHomeComponent } from './companies-home/companies-home.component';
import { FormCompanyComponent } from './components/form/form.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CompaniesHomeComponent, FormCompanyComponent, DialogComponent],
  imports: [SharedModule, CompaniesRouting],
})
export class CompaniesModule {}

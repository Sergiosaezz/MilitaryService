import { NgModule } from '@angular/core';
import { CompaniesRouting } from './companies-routing.module';
import { CompaniesHomeComponent } from './companies-home/companies-home.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormCompanyComponent } from './components/form/form-company.component';

@NgModule({
  declarations: [CompaniesHomeComponent, FormCompanyComponent, DialogComponent],
  imports: [SharedModule, CompaniesRouting],
})
export class CompaniesModule {}

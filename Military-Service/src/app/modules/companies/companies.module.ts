import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesRouting } from './companies-routing.module';
import { CompaniesHomeComponent } from './components/companies-home/companies-home.component';
import { FormComponent } from './pages/form/form.component';

@NgModule({
  declarations: [CompaniesHomeComponent, FormComponent],
  imports: [CommonModule, CompaniesRouting],
})
export class CompaniesModule {}

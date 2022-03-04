import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesRouting } from './companies-routing.module';
import { CompaniesHomeComponent } from './components/companies-home/companies-home.component';

@NgModule({
  declarations: [CompaniesHomeComponent],
  imports: [CommonModule, CompaniesRouting],
})
export class CompaniesModule {}

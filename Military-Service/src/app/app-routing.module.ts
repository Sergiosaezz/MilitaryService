import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/components/home/home.component';

const routes: Routes = [
  {
    path: 'soldiers',
    loadChildren: () =>
      import('./modules/soldiers/soldiers.module').then(
        (m) => m.SoldiersModule
      ),
  },
  {
    path: 'barracks',
    loadChildren: () =>
      import('./modules/barracks/barracks.module').then(
        (m) => m.BarracksModule
      ),
  },
  {
    path: 'departments',
    loadChildren: () =>
      import('./modules/departments/departments.module').then(
        (m) => m.DepartmentsModule
      ),
  },
  {
    path: 'companies',
    loadChildren: () =>
      import('./modules/companies/companies.module').then(
        (m) => m.CompaniesModule
      ),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./modules/services/services.module').then(
        (m) => m.ServicesModule
      ),
  },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

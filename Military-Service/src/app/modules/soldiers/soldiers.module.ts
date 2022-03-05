import { NgModule } from '@angular/core';
import { SoldiersHomeComponent } from './components/soldiers-home/soldiers-home.component';
import { SoldiersRouting } from './soldiers-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SoldiersHomeComponent],
  imports: [SharedModule, SoldiersRouting],
})
export class SoldiersModule {}

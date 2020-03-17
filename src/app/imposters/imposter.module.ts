import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ImposterListComponent } from './imposter-list.component';


@NgModule({
  declarations: [ImposterListComponent],
  imports: [
    RouterModule.forChild([
      { path: 'imposters', component: ImposterListComponent }
    ]),
    SharedModule
  ]
})
export class ImposterModule { }

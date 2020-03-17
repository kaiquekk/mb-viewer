import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ImposterListComponent } from './imposter-list.component';
import { ImposterDetailComponent } from './imposter-detail.component';


@NgModule({
  declarations: [
    ImposterListComponent, 
    ImposterDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'imposters', component: ImposterListComponent },
      { path: 'imposters/:mbPort/:port', component: ImposterDetailComponent }
    ]),
    SharedModule
  ]
})
export class ImposterModule { }

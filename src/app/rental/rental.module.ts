import { UpperCasePipe } from './../common/pipes/uppercase.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NgModule} from '@angular/core'; 
import { CommonModule} from '@angular/common'
import {Routes, RouterModule } from '@angular/router';
import { NgPipesModule } from 'ngx-pipes';
import { MapModule} from '../common/map/map.module';


import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';

import { RentalService} from './shared/rental.service';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'angular-image-slider';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: 'rentals',
    component:RentalComponent,
  children:[
    {path: '', component:RentalListComponent},
    {path: ':rentalId', component:RentalDetailComponent}
  ]}
]

@NgModule({
    declarations: [
      RentalComponent,
      RentalListComponent,
      RentalListItemComponent,
      RentalDetailComponent,
      UpperCasePipe
    ],
    imports: [
      CommonModule,
     RouterModule.forChild(routes),
     HttpClientModule,
     NgPipesModule,
     MapModule,
     BrowserAnimationsModule,
     SliderModule,
     NgbModule
    ],
    providers: [RentalService,NgbCarouselConfig]
})
export class RentalModule {

}
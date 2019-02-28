import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { CommonModule} from '@angular/common'

import { MapComponent } from './map.component';
import { CamelizePipe } from 'ngx-pipes';
import { MapService } from './map.service';

import { MAP_API_KEY } from '../../../../server/config/config';

@NgModule({
  declarations: [
    MapComponent
   ],
   exports:[
    MapComponent
   ],
  imports: [
    AgmCoreModule.forRoot({
        apiKey: MAP_API_KEY
      }),
      CommonModule
   ],
  providers: [
    MapService,
    CamelizePipe
  ]
})
export class MapModule { }

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CamelizePipe } from 'ngx-pipes';
import { of } from 'rxjs';

@Injectable()
export class MapService{

    private geoCoder;
    private locationCache: any = {};

    constructor(private camelizePipe: CamelizePipe) {}

    private camelize(value: string) : string{
        return this.camelizePipe.transform(location);
    }

    private cacheLocation(location: string, coodinates:any){
        this.locationCache[this.camelize(location)] = coodinates;
    }

    private islocationCached(location): boolean{
        return this.locationCache[this.camelize(location)];
    }

    public geoCodeLocation(location:string): Observable<any>{
       if(!this.geoCoder) {this.geoCoder = new (<any>window).google.maps.Geocoder()} ;

        return new Observable((observer) => {

            if(this.islocationCached(location)){

                observer.next(this.locationCache[this.camelize(location)]);
            }else{
                this.geoCoder.geocode({ 'address': location}, (result, status) => {
                if(status = 'OK'){

                    const geometry = result[0].geometry.location;
                    const coodinates = {lat: geometry.lat(), lng: geometry.lng()};

                    this.cacheLocation(location, coodinates);
                    observer.next(coodinates);
                }else{
                    observer.error('Location could not be geocode');
                }
            })
            }

        })
    }


    public getGeoLocation(location:string): Observable<any>{
        
        if(this.islocationCached(location)){
            return of(this.locationCache[this.camelize(location)]);
        }else{
            return this.geoCodeLocation(location);
        }
    }
}
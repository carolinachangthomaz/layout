import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from './../shared/rental.service';
import { Rental } from './../shared/rental.model';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'airbnb-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class RentalDetailComponent implements OnInit {

  rental: Rental;
 
  constructor(private route: ActivatedRoute,
              private rentalService: RentalService,
              config: NgbCarouselConfig) {
                 // customize default values of carousels used by this component tree
                config.interval = 10000;
                config.wrap = false;
                config.keyboard = false;
                config.pauseOnHover = false;
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
          this. getRental(params['rentalId']);
      });

    }

  getRental(rentalId: string){
    this.rentalService.getRentalById(rentalId).subscribe((rental:Rental) => {
       this.rental = rental;
    });
  }

  }



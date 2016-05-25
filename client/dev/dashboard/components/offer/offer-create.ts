import { Component,Inject,Input } from 'angular2/core';

import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl  } from 'angular2/common';
import { OfferService } from '../../services/offers-service';

@Component({
  selector: 'offer-create',
  templateUrl: 'client/dev/dashboard/templates/request/offer-create.html',
  directives: [FORM_DIRECTIVES]
})
export class CreateOfferComponent {
   @Input('rid') rid: string;
   
   offerForm: ControlGroup;

   constructor(fb: FormBuilder, private _offerService: OfferService) {
    this.offerForm = fb.group({
      "price": [""],
      "numberOfLecture": [""],
      "requestId": [""],
      "message": [""] 
    });
  }
  
  //RequestService requestServiceObject = new RequestService();
  addOffer(offer) {
    this._offerService.addOffer(offer).subscribe((offer)=> {
      console.log('success');
    },
    (error) => {
      console.log(error.text());
    }
    );
    
    window.location.reload();
  }
  
}

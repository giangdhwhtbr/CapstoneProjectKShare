import { Component,Inject,Input } from '@angular/core';

import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl  } from '@angular/common';
import { OfferService } from '../../../services/request-offer';

@Component({
  selector: 'offer-create',
  templateUrl: 'client/dev/app/components/front-end/offer/templates/offer-create.html',
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

import { Component,Inject,Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from'@angular/router';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl  } from '@angular/common';
import { OfferService } from '../../services/offers-service';
import { AuthService } from '../../../dashboard/services/auth-services';

@Component({
  selector: 'offer-create',
  templateUrl: 'client/dev/dashboard/templates/request/offer-create.html',
  directives: [FORM_DIRECTIVES]
})
export class CreateOfferComponent {
   user:string;
   @Input('rid') rid: string;

   offerForm: ControlGroup;

   constructor(@Inject(FormBuilder) fb: FormBuilder, private _offerService: OfferService,
                                private _authService: AuthService) {
    this.user = localStorage.getItem('username');
    
    this.offerForm = fb.group({
      "price": [""],
      "numberOfLecture": [""],
      "requestId": [""],
      "message": [""],
      "user": [""]
    });
  }

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

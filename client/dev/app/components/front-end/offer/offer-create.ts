import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl  } from '@angular/common';

import { OfferService } from '../../../services/request-offer';
import { AuthService} from '../../../services/auth';
import { RequestService } from '../../../services/requests';
import { NotificationService } from '../../../services/notification';
import {PrivateChatComponent} from '../../shared/private-chat';
declare var $: any;
@Component({
  selector: 'offer-create',
  templateUrl: 'client/dev/app/components/front-end/offer/templates/offer-create.html',
  directives: [FORM_DIRECTIVES,PrivateChatComponent]
})

export class CreateOfferComponent {
  user: string;
  @Input('rid') rid: string;
  @Output() sendDataToP: EventEmitter<string> = new EventEmitter<string>();

  offerForm: ControlGroup;

  constructor(fb: FormBuilder, private _offerService: OfferService,
    private _authService: AuthService, private _noti: NotificationService, private _requestService: RequestService) {
    this.user = localStorage.getItem('username');

    this.offerForm = fb.group({
      "requestId": [""],
      "message": [""],
      "user": [""]
    });
  }

  addOffer(offer) {
    this._offerService.addOffer(offer).subscribe((offer) => {
      console.log('success');
      this._requestService.getRequestById(offer.requestId).subscribe((request) => {

        //call function using socket io to send notification realtime
        var title = this.user + ' đã gửi một offer';
        var link = '/requests/' + request._id + '/info';
        this._noti.alertNotification(title, request.user, link);
        //save notification to database
        this._noti.createNotification(title, request.user, link).subscribe(
          (notification) => {
            console.log(notification);
            this.sendDataToP.emit('new-offer');     
            $('#modalOfferRequest').closeModal();      
          });

      })
    },
      (error) => {
        console.log(error.text());
      }
    );
  }

}

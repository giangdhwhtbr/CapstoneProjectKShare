import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Request } from '../../interface/request';
import { RequestService } from '../../services/requests-service';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control } from '@angular/common';
import { CreateOfferComponent  } from '../../components/offer/offer-create';
import { UpdateRequestComponent } from '../../components/request/request-update';

import { AuthService} from '../../services/auth-services';
import { CreateRequestComponent } from '../../components/request/request-create';
import { OfferService } from '../../services/offers-service';

@Component({
  selector: 'request-list',
  templateUrl: 'client/dev/dashboard/templates/request/request-list.html',
  styleUrls:
  ['client/dev/dashboard/styles/request-list.css',
    'client/dev/dashboard/styles/styles.css'],
  directives: [CreateOfferComponent,
              UpdateRequestComponent,
              CreateRequestComponent,
              CreateOfferComponent,
              ROUTER_DIRECTIVES]
})

export class RequestListComponent {
  pageTitle: string = 'Request List';
  errorMessage: string;

  requests: Request[];

  constructor(private _requestService: RequestService, private _auth: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    this._requestService.getAllRequests().subscribe((requests) => {
      var formatDate = function (date){
        if(date) {
          var newDate, day, month, year;
          year = date.substr(0, 4);
          month = date.substr(5, 2);
          day = date.substr(8, 2);
          return newDate = day + '/' + month + '/' + year;
        }
      }
      for (var i = 0; i < requests.length; i++) {
        requests[i].createdAt = formatDate(requests[i].createdAt);
        requests[i].modifiedDate = formatDate(requests[i].modifiedDate);
      }
      this.requests = requests;
    });
  }

  deleteRequest(request: Request) {
    console.log(request);
    this._requestService
      .deleteRequest(request)
      .subscribe(() => {
        console.log("delete successful");
      })

    //refresh page
    this._requestService.getAllRequests().subscribe((requests) => {
      var formatDate = function (date) {
        if (date) {
          var newDate, day, month, year;
          year = date.substr(0, 4);
          month = date.substr(5, 2);
          day = date.substr(8, 2);
          return newDate = day + '/' + month + '/' + year;
        }
      }
      for (var i = 0; i < requests.length; i++) {
        requests[i].createdAt = formatDate(requests[i].createdAt);
        requests[i].modifiedDate = formatDate(requests[i].modifiedDate);
      }
      this.requests = requests;
    });

  }

}

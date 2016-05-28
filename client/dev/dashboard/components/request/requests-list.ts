import  { Component,OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import  { Request } from '../../interface/request';
import  { RequestService } from '../../services/requests-service';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control } from 'angular2/common';
import  { CreateOfferComponent  } from '../../components/offer/offer-create';
import  { UpdateRequestComponent } from '../../components/request/request-update';
import  { OfferService } from '../../services/offers-service';


@Component({
  selector: 'request-list',
  templateUrl: 'client/dev/dashboard/templates/request/request-list.html',
  styleUrls: ['client/dev/dashboard/styles/request-list.css'],
  directives: [CreateOfferComponent, UpdateRequestComponent],
  providers: [OfferService]
})

export class RequestListComponent {
  pageTitle: string = 'Request List';
  errorMessage: string;

  requests: Request[];

  constructor(private _requestService: RequestService){

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
          console.log("123");
        })
   //refresh page
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


}

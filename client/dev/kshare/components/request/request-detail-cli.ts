import { Component, OnInit } from 'angular2/core';
import { Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteParams} from'angular2/router';

import { Request } from '../../../dashboard/interface/request';
import { Offer } from '../../../dashboard/interface/offer';
import { RequestService } from '../../../dashboard/services/requests-service';
import { OfferService } from '../../../dashboard/services/offers-service';
import { HeaderComponent } from '../shared/header';
import { FooterComponent } from '../shared/footer';
import { SideBarComponent } from '../shared/sidebar';
import { FriendListComponent} from '../shared/friend-list';

import { CreateOfferComponent } from '../../../dashboard/components/offer/offer-create';

@Component({
  selector: 'request-detail-cli',
  templateUrl: 'client/dev/kshare/templates/request-cli/request-detail-cli.html',
  styleUrls: [],
  directives: [
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    FriendListComponent,
    ROUTER_DIRECTIVES,
    CreateOfferComponent]
})

export class RequestDetailClientComponent {
  pageTitle: string = 'Welcome to Knowledge Sharing Network';

  constructor(private _requestService: RequestService, private _offerService: OfferService, public router: Router, rParam: RouteParams) {
    this.id = rParam.get('id');
  }

  id: string;

  request: Request;
  _id: string;
  title: string;
  description: string;
  status: string;
  createdAt: string;
  knowledgeId: string;
  offers: Offer[];

  ngOnInit(): void {
    //get request when load the page
    this._requestService.getRequestById(this.id).subscribe(
      (request) => {
        var formatDate = function (date) {
          if (date) {
            var newDate, day, month, year;
            year = date.substr(0, 4);
            month = date.substr(5, 2);
            day = date.substr(8, 2);
            return newDate = day + '/' + month + '/' + year;
          }
        }
        this.knowledgeId = request.knowledgeId;
        this.request = request;
        this.title = request.title;
        this.description = request.description;
        this._id = request._id;
        this.status = request.status;
        this.createdAt = formatDate(request.createdAt);
      },
      (error) => {
        console.log(error.text());
      }
    );

    //get offer of the request when load the page
    this._offerService.getOfferByRequestId(this.id).subscribe(
      (offers) => {
        var formatDate = function (date) {
          if (date) {
            var newDate, day, month, year;
            year = date.substr(0, 4);
            month = date.substr(5, 2);
            day = date.substr(8, 2);
            return newDate = day + '/' + month + '/' + year;
          }
        }

        for (var i = 0; i < offers.length; i++) {
          offers[i].createdAt = formatDate(offers[i].createdAt);
        }
        this.offers = offers;
      },
      (error) => {
        console.log(error.text());
      }
    );
    //console offers
    console.log(this.offers);
  }

  deleteRequest(id: String) {
    console.log(id);
    this._requestService
      .deleteRequestById(this.id)
      .subscribe(() => {
        console.log("delete sucess");
      })
    window.location.href = '/requests';
  }
}
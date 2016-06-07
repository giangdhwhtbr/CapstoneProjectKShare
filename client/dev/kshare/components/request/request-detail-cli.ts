import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes, RouteSegment} from'@angular/router';

import { Request } from '../../../dashboard/interface/request';
import { Offer } from '../../../dashboard/interface/offer';
import { Knowledge } from '../../../dashboard/interface/knowledge';
import { RequestService } from '../../../dashboard/services/requests-service';
import { OfferService } from '../../../dashboard/services/offers-service';
import { KnowledgeService } from '../../../dashboard/services/knowledge-service';

import { HeaderComponent } from '../shared/header';
import { FooterComponent } from '../shared/footer';
import { SideBarComponent } from '../shared/sidebar';
import { FriendListComponent} from '../shared/friend-list';

import { CreateOfferComponent } from '../../../dashboard/components/offer/offer-create';

@Component({
    selector: 'request-detail-cli',
    templateUrl: 'client/dev/kshare/templates/request-cli/request-detail-cli.html',
    styleUrls:  ['client/dev/kshare/styles/request-list-cli.css'],
    directives: [ROUTER_DIRECTIVES,
                 CreateOfferComponent]
})


export class RequestDetailClientComponent {

  pageTitle:string = 'Welcome to Knowledge Sharing Network';

  constructor(private _requestService:RequestService, private _offerService:OfferService, public router:Router,
              private _knowledgeService:KnowledgeService, rParam:RouteSegment) {
    this.id = rParam.getParam('id');
  }

  id:string;

  knowledge:Knowledge;
  knowledgeName:string;

  request:Request;
  _id:string;
  title:string;
  description:string;
  status:string;
  createdAt:string;
  knowledgeId:string;
  user:string;

  offers:Offer[];

  ngOnInit():void {
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
        this.user = request.user;
        this.createdAt = formatDate(request.createdAt);

        //get knowledge name by knowledgeId
        this._knowledgeService.findKnowledgeById(this.knowledgeId).subscribe(
          (knowledge) => {
            this.knowledge = knowledge;
            this.knowledgeName = this.knowledge.name;

          },
          (error) => {
            console.log(error);
          }
        );

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
  }

  deleteRequest(id:String) {
    console.log(id);
    this._requestService
      .deleteRequestById(this.id)
      .subscribe(() => {
        console.log("delete sucess");
      })
    window.location.href = '/requests';
  }

}


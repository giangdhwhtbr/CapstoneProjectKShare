import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes, RouteSegment} from'@angular/router';

import { Request } from '../../../interface/request';
import { KSpace } from '../../../interface/kspace.ts';
import { Offer } from '../../../interface/offer';
import { Knowledge } from '../../../interface/knowledge';

import { RequestService } from '../../../services/requests';
import { OfferService } from '../../../services/request-offer';
import { KnowledgeService } from '../../../services/knowledge';
import { KSpaceService } from '../../../services/kspace';
import { AuthService } from '../../../services/auth';
import { ChatService } from '../../../services/chat';

import { HeaderComponent } from '../shared/header';
import { FooterComponent } from '../shared/footer';
import { SideBarComponent } from '../shared/side-bar';
import { FriendListComponent} from '../shared/friend-list';

import { CreateOfferComponent } from '../offer/offer-create';

@Component({
  selector: 'request-detail-cli',
  templateUrl: 'client/dev/app/components/front-end/request/templates/request-detail.html',
  styleUrls: ['client/dev/app/components/front-end/request/styles/request.css'],
  directives: [
    ROUTER_DIRECTIVES,
    CreateOfferComponent
  ]
})


export class RequestDetailClientComponent {

  pageTitle: string = 'Welcome to Knowledge Sharing Network';

  constructor(private _requestService: RequestService, private _offerService: OfferService, public router: Router,
    private _knowledgeService: KnowledgeService, rParam: RouteSegment, private _kspaceService: KSpaceService,
    private _auth: AuthService, private _chatService: ChatService) {
    this.id = rParam.getParam('id');
    this.roleToken = localStorage.getItem('role');
    this.userToken = localStorage.getItem('username');
  }

  id: string;
  rid: string;

  roleToken: string;
  userToken: string;

  knowledge: Knowledge;
  knowledgeName: string;

  request: Request;
  _id: string;
  title: string;
  description: string;
  status: string;
  createdAt: string;
  knowledgeId: string;
  user: string;
  subcribers: string[];

  //varialbe check to hide button when the status is deactive
  checkDeactive: boolean;

  //variable check to hide button, user can't front.offer their of templates
  checkCreatedUser: boolean;

  //variable check to hide button, user can't subcribe twice in a templates
  checkSubcribedUser: boolean;

  offers: Offer[];

  ngOnInit(): void {
    //get templates when load the page
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
        this.subcribers = request.subcribers;

        if (this.status === "deactive") {
          this.checkDeactive = true;
        }

        if (this.user === this.userToken) {
          this.checkCreatedUser = true;
        }

        for (var i = 0; i < this.subcribers.length; i++) {
          if (this.userToken === this.subcribers[i]) {
            this.checkSubcribedUser = true;
            console.log(this.checkSubcribedUser + " " + i);
            break;
          }
        }

        //get back.knowledge name by knowledgeId
        this._knowledgeService.findKnowledgeById(this.knowledgeId).subscribe(
          (knowledge) => {
            this.knowledge = knowledge;
            this.knowledgeName = this.knowledge.name;
          },
          (error) => {
            console.log(error);
          });
      },
      (error) => {
        console.log(error.text());
      }
    );

    //get front.offer of the templates when load the page
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

  deactivateRequest(id: String) {
    var r = confirm("Bạn có muốn kết thúc yêu cầu này?");
    if (r == true) {
      this._requestService
        .changeStatusRequest(this.id)
        .subscribe((r) => {
          console.log("deactivate sucess");
          this.router.navigateByUrl('/kshare/requests/');
        })
    }

  }

  addKshare(learner: string, lecturer: string, requestId: string, offerId: string): void {
    this._kspaceService
      .addKSpace(learner, lecturer, requestId, offerId)
      .subscribe((r) => {

        this._chatService.addChatRoom(r._id)
          .subscribe((c) => {
            this.rid = c._id;
            console.log("add chat room successfull");
            this.router.navigateByUrl('/kshare/front.kspace/' + r._id + '/' + this.rid);
          });
      })
  }

  addSubcriber(id: string): void {
    if (this.checkSubcribedUser == true) {
      alert('Bạn đã theo dõi vài viết này');
    } else {
      this._requestService
        .updateSubcriber(id, this.userToken)
        .subscribe((r) => {
          console.log(r);
          console.log("add subcriber successfull");
          this.checkSubcribedUser = true;
        })
      this._requestService.getRequestById(this.id).subscribe(
        (request) => {
          this.subcribers = request.subcribers;
        }
      );
    }

  }

}


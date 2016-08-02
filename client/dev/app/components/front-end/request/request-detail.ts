import {
  Component,
  OnInit,
  Pipe,
  PipeTransform,
  Inject
} from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute} from'@angular/router';

import { Request } from '../../../interface/request';
import { KSpace } from '../../../interface/kspace.ts';
import { Offer } from '../../../interface/offer';
import { Knowledge } from '../../../interface/knowledge';

import { RequestService } from '../../../services/requests';
import { OfferService } from '../../../services/request-offer';
import { KnowledgeService } from '../../../services/knowledge';
import { KSpaceService } from '../../../services/kspace';

import { HeaderComponent } from '../shared/header';
import { FooterComponent } from '../shared/footer';
import { SideBarComponent } from '../shared/side-bar';
import { FriendListComponent} from '../shared/friend-list';

import { CreateOfferComponent } from '../offer/offer-create';
import { ReportComponent } from '../report/report';

@Component({
  selector: 'request-detail-cli',
  templateUrl: 'client/dev/app/components/front-end/request/templates/request-detail.html',
  styleUrls: ['client/dev/app/components/front-end/request/styles/request.css'],
  directives: [
    ROUTER_DIRECTIVES,
    CreateOfferComponent,
    ReportComponent
  ]
})


export class RequestDetailClientComponent {

  pageTitle: string = 'Welcome to Knowledge Sharing Network';

  id: string;
  _id: string;
  updateLink: string;
  rid: string;
  roleToken: string;
  userToken: string;
  knowledge: Knowledge;
  request: Request;
  user: string;
  knowledgeId: string;
  subscribers: string[];
  offerinfo: Offer;

  //varialbe check to hide button when the status is deactive
  checkDeactive: boolean;

  //check if request is accepted
  checkIsAcceped: boolean = false;

  //variable check to hide button, user can't offer their of templates
  checkCreatedUser: boolean;

  //variable check to hide button, user can't subcribe twice in a templates
  checkSubcribedUser: boolean;
  offers: Offer[];

  constructor(private _requestService: RequestService, private _offerService: OfferService, public router: Router,
    private _knowledgeService: KnowledgeService, private _kspaceService: KSpaceService, private route: ActivatedRoute) {
    this.route
      .params
      .subscribe(params => {
        this.id = params['id'];
      });
    this.roleToken = localStorage.getItem('userrole');
    this.userToken = localStorage.getItem('username');
  }
  ngOnInit(): void {
    //get templates when load the page
    this._requestService.getRequestById(this.id)
      .subscribe(request => {

        request.createdAt = new Date(request.createdAt);

        if (request.status === 'accepted') {
          request.status = 'Đã được chấp nhận';
          this.checkIsAcceped = true;
        } else {
          request.status = 'Đang chờ';
        }

        request.userlink = '/user/' + request.user;
        this._id = request._id;
        this.updateLink = '/requests/' + request._id + '/update';

        this.knowledgeId = request.knowledgeId;
        this.subscribers = request.subcribers;

        if (request.status === "deactive") {
          this.checkDeactive = true;
        }

        if (request.user === this.userToken) {
          this.checkCreatedUser = true;
        }

        for (var i = 0; i < this.subscribers.length; i++) {
          if (this.userToken === this.subscribers[i]) {
            this.checkSubcribedUser = true;
            break;
          }
        }
        this.request = request;

        //get back.knowledge name by knowledgeId
        this._knowledgeService.findKnowledgeById(this.knowledgeId)
          .subscribe(
          knowledge => {
            this.knowledge = knowledge;
            //this.knowledgeName = this.knowledge.name;
          },
          error => {
            console.log(error);
          }
          );
      }, error => console.log(error));
      this.getOfferByRequestId();
  }

  getOfferByRequestId() {
    //get front.offer of the templates when load the page
    this._offerService.getOfferByRequestId(this.id).subscribe(
      (offers) => {

        for (var i = 0; i < offers.length; i++) {
          offers[i].createdAt = new Date(offers[i].createdAt);
          if (offers[i].status === 'pending') {
            offers[i].status = 'Đang chờ';
          } else {
            offers[i].status = 'Được chấp nhận';
          }
        }
        this.offers = offers;
      },
      (error) => {
        console.log(error);
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

  addKshare(learner: string, lecturer: string, requestId: string, requestTitle: string, offerId: string): void {
    this._kspaceService
      .addKSpace(learner, lecturer, requestId, requestTitle, offerId)
      .subscribe((r) => {
        console.log('create kspace successfull');
        //update offer status
        this._offerService.updateOffer(offerId, 'accepted')
          .subscribe((c) => {
            console.log('change status offer successfull');
          });
        this.request.status = 'accepted';
        //update request status
        this._requestService.updateRequest(this.request)
          .subscribe((c) => {
            console.log(this.request);
            console.log('change status request successfull');
          });
        this.checkIsAcceped = true;
        window.location.reload();
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
        });
      this._requestService.getRequestById(this.id).subscribe(
        (request) => {
          this.subscribers = request.subcribers;
        }
      );
    }

  }

}


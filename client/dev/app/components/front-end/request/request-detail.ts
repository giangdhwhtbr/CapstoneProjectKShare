import {
  Component,
  OnInit,
  Pipe,
  PipeTransform,
  Inject,
  OnDestroy,
  Output,
  EventEmitter
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

import { CreateOfferComponent } from '../offer/offer-create';
import { ReportComponent } from '../report/report';
import { PrivateChatComponent } from './../../shared/private-chat';

import { Subscription } from 'rxjs/Subscription';
declare var $: any;

@Component({
  selector: 'request-detail-cli',
  templateUrl: 'client/dev/app/components/front-end/request/templates/request-detail.html',
  styleUrls: ['client/dev/app/components/front-end/request/styles/request.css'],
  directives: [
    ROUTER_DIRECTIVES,
    CreateOfferComponent,
    ReportComponent,
    PrivateChatComponent
  ]
})


export class RequestDetailClientComponent implements AfterViewChecked {

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
  num: any = 5;
  private sub: Subscription;
  height: number = 400;
  //varialbe check to hide button when the status is deactive
  checkDeactive: boolean;
  //check if request is accepted
  checkIsAcceped: boolean = false;
  //variable check to hide button, user can't offer their of templates
  checkCreatedUser: boolean;
  //variable check to hide button, user can't subcribe twice in a templates
  checkSubcribedUser: boolean;
  offers: Offer[] = [];
  kspace: KSpace;

  constructor(private _requestService: RequestService, private _offerService: OfferService, public router: Router,
    private _knowledgeService: KnowledgeService, private _kspaceService: KSpaceService, private route: ActivatedRoute) {
    this.roleToken = localStorage.getItem('userrole');
    this.userToken = localStorage.getItem('username');
  }

  ngOnInit(): void {
    this.route
      .params
      .subscribe(params => {
        this.id = params['id'];
        //get templates when load the page
        this._requestService.getRequestById(this.id)
          .subscribe(request => {
            //translate status
            if (request.status === 'accepted') {
              request.status = 'Đã được chấp nhận';
              this.checkIsAcceped = true;
            } else if (request.status === 'deactive' || request.status === undefined) {
              request.status = 'Đã kết thúc';
              this.checkDeactive = true;
            } else {
              request.status = 'Đang chờ';
            }

            request.userlink = '/user/' + request.user;
            this._id = request._id;
            this.updateLink = '/requests/' + request._id + '/update';
            this.knowledgeId = request.knowledgeId;
            this.subscribers = request.subscribers;

            //check if user is created user
            if (request.user === this.userToken) {
              this.checkCreatedUser = true;
            }

            //check if user already subcribed
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

        $(window).on("scroll", () => {
          var scrollHeight = $(document).height();
          var scrollPosition = $(window).height() + $(window).scrollTop();
          if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
            setTimeout(() => {
              this.seeMore();
            }, 1000);
            this.height += 30;
          }
        });
      });
  }

  seeMore() {
    this.num = this.num + 5;
    this.getOfferByRequestId();
  }

  openModal() {
    $('#modalOfferRequest').openModal();
  }

  ngAfterViewChecked() {
    if (this.request != undefined) {
      $('#bodyReq').html(this.request.description);
    }
  }

  action(data) {
    if (data === 'new-offer') {
      this.offers = [];
      this.getOfferByRequestId();
    }
  }

  getOfferByRequestId() {
    //get front.offer of the templates when load the page
    this._offerService.getOfferByRequestId(this.id, this.num).subscribe(
      (offers) => {
        for (var i = 0; i < offers.length; i++) {
          if (offers[i].status === 'pending') {
            offers[i].status = 'Đang chờ';
          } else {
            offers[i].status = 'Được chấp nhận';
          }
          this.offers.push(offers[i]);
        }
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
          this.router.navigateByUrl('/requests');
        })
    }
  }

  addKshare(lecturer: string, offerId: string) {
    this.kspace = {};
    this.kspace.learners = [];
    this.kspace.learners.push(this.request.user);
    this.kspace.lecturer = lecturer;
    this.kspace.requestId = this._id;
    this.kspace.requestTitle = this.request.title;
    this.kspace.offerId = offerId;
    this.kspace.tags = this.request.tags;
    for (var i = 0; i < this.request.subscribers.length; i++) {
      this.kspace.learners.push(this.request.subscribers[i]);
    }
    console.log(this.kspace);

    this._kspaceService
      .addKSpace(this.kspace)
      .subscribe((r) => {
        console.log(r);
        console.log('create kspace successfull');
        //update offer status
        this._offerService.updateOffer(offerId, 'accepted')
          .subscribe((c) => {
            console.log('change status offer successfull');
          });
        this.request.status = 'accepted';

        //update request status
        this._requestService.updateRequest(this.request, this.request.tags, [])
          .subscribe((c) => {
            console.log('change status request successfull');
          });
        this.checkIsAcceped = true;


        this.router.navigate(['/kspace/info/' + r._id + '/' + lecturer]);
      });
  }

  addSubcriber(id: string): void {
    if (this.checkSubcribedUser == true) {
      alert('Bạn đã theo dõi vài viết này');
    } else {
      this._requestService
        .updateSubcriber(id, this.userToken)
        .subscribe((r) => {
          console.log("add subcriber successfull");
          this.checkSubcribedUser = true;
          this._requestService.getRequestById(this.id).subscribe(
            (request) => {
              this.subscribers = request.subscribers;
            });
        });
    }
  }

  removeSubscriber(): void {
    console.log(this.request.subscribers);
    var index = this.request.subscribers.indexOf(this.userToken);
    if (index > -1) {
      this.request.subscribers.splice(index, 1);
    }
    console.log(this.request.subscribers);
    this._requestService.updateRequest(this.request, this.request.tags, []).subscribe((request) => {
      //reload request
      this._requestService.getRequestById(this.id).subscribe(
        (request) => {
          console.log(request);
          this.subscribers = request.subscribers;
          this.checkSubcribedUser = false;
        });
    })
  }

}


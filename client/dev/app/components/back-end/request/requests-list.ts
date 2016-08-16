import {
  Component,
  OnInit,
  Pipe,
  PipeTransform,
  Inject,
  AfterViewChecked
} from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import {FORM_DIRECTIVES, ControlGroup, Control } from '@angular/common';


import { Request } from '../../../interface/request';
import { KnowledgeService } from '../../../services/knowledge';
import { RequestService} from '../../../services/requests';
import { Knowledge } from '../../../interface/knowledge';
import { AuthService} from '../../../services/auth';
import { PagerService} from '../../../services/pager';
import { OfferService } from '../../../services/request-offer';

import { CreateRequestComponent } from './request-create';
import { CreateOfferComponent  } from '../../front-end/offer/offer-create';
import { UpdateRequestComponent } from './request-update';
import { StringFilterPipe } from '../shared/filter';
import { Paginator } from 'primeng/primeng';

@Component({
  selector: 'request-list',
  templateUrl: 'client/dev/app/components/back-end/request/templates/request-list.html',
  directives: [UpdateRequestComponent, ROUTER_DIRECTIVES, FORM_DIRECTIVES, Paginator],
  providers: [RequestService, PagerService],
  pipes: [StringFilterPipe]
})

export class RequestListComponent implements AfterViewChecked {
  pageTitle: string = 'Request List';
  errorMessage: string;
  user: string;
  roleToken: string;
  requestForm: ControlGroup;
  public filter: string = '';

  knowledges: Knowledge[];

  deactiveRequests: Request[];
  activeRequests: Request[];
  acceptepRequests: Request[];

  totalActive: any = 0;
  totalDeac: any = 0;
  totalAccepted: any = 0;

  firstPage1:any=0;
  firstPage2:any=0;
  firstPage3:any=0;

  constructor(private _requestService: RequestService,
    private _knowledgeService: KnowledgeService,
    private _pagerService: PagerService,
    private _authService: AuthService) {
    this.user = localStorage.getItem('username');
    this.roleToken = localStorage.getItem('userrole');

    this._knowledgeService.getAllKnowledges().subscribe((knowledges) => {
      this.knowledges = this._knowledgeService.getChildFromParent(knowledges);
    });
  }

  ngOnInit(): void {
    this.getAllRequest();
  }

  openRequest(requestId: string): void {
    var specs = 'width=1200,height=1200';
    var url = '/requests/' + requestId + '/info';
    window.open(url, '', specs);
  }

  deactivateRequest(id: string) {
    this._requestService
      .changeStatusRequest(id)
      .subscribe((r) => {
        console.log("deactivate sucess");
        this.getActiveList();
        this.getDeactiveList();
      })
  }

  activateRequest(request: Request) {
    request.status = 'pending';
    this._requestService
      .updateRequest(request, request.tags, [])
      .subscribe((r) => {
        this.getActiveList();
        this.getDeactiveList();
      })
  }

  getActiveList(){
    this._pagerService.getAPage("request", this.firstPage1, "pending").subscribe((reqs) => {
      console.log(reqs);
      this._pagerService.getTotalNum("requesttot", "pending").subscribe((num) => {

        for (var i = 0; i < reqs.length; i++) {
          if (reqs[i].status === 'active' || reqs[i].status === 'pending') {
            reqs[i].status = "Đang chờ";
          }
        }
        this.activeRequests = reqs;
        this.totalActive = num;
      });
    });
  }

  getDeactiveList(){
    this._pagerService.getAPage("request", this.firstPage2, "deactive").subscribe((reqs) => {
      console.log(reqs);
      this._pagerService.getTotalNum("requesttot", "deactive").subscribe((num) => {
        for (var i = 0; i < reqs.length; i++) {
          if (reqs[i].status === 'deactive') {
            reqs[i].status = "Kết thúc";
          }
        }
        this.deactiveRequests = reqs;
        this.totalDeac = num;
      });
    });
  }

  getAcceptedList(){
    this._pagerService.getAPage("request", this.firstPage3, "accepted").subscribe((reqs) => {
      this._pagerService.getTotalNum("requesttot", "accepted").subscribe((num) => {
        for (var i = 0; i < reqs.length; i++) {
          if (reqs[i].status === 'accepted') {
            reqs[i].status = "Được chấp thuận";
          }
        }
        this.acceptepRequests = reqs;
        this.totalAccepted = num;
      });
    });
  }

  getAllRequest() {
    this.activeRequests = [];
    this.deactiveRequests = [];
    this.acceptepRequests = [];

    this.getAcceptedList();
    this.getActiveList();
    this.getDeactiveList();
  }

  paginate1(event: any) {

    this._pagerService.getAPage("request", event.first, "pending").subscribe((reqs) => {
      for (var i = 0; i < reqs.length; i++) {
        if (reqs[i].status === 'active' || reqs[i].status === 'pending') {
          reqs[i].status = "Đang chờ";
        }
      }
      this.activeRequests = reqs;
      this.firstPage1=event.first;
    });

  }

  paginate2(event: any) {

    this._pagerService.getAPage("request", event.first, "deactive").subscribe((reqs) => {
      for (var i = 0; i < reqs.length; i++) {
        if (reqs[i].status === 'deactive') {
          reqs[i].status = "Kết thúc";
        }
      }
      this.deactiveRequests = reqs;
      this.firstPage2=event.first;
    });

  }
  
  paginate3(event: any) {

    this._pagerService.getAPage("request", event.first, "accepted").subscribe((reqs) => {
      for (var i = 0; i < reqs.length; i++) {
        if (reqs[i].status === 'accepted') {
          reqs[i].status = "Được chấp thuận";
        }
      }
      this.acceptepRequests = reqs;
      this.firstPage3=event.first;
    });

  }

}

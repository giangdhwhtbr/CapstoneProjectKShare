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

  deactivateRequest(id: string) {
    this._requestService
      .changeStatusRequest(id)
      .subscribe((r) => {
        console.log("deactivate sucess");
        this.getAllRequest();
      })
  }

  activateRequest(request: Request) {
    request.status = 'pending';
    this._requestService
      .updateRequest(request, request.tags, [])
      .subscribe((r) => {
        this.getAllRequest();
      })
  }

  getAllRequest() {
    this.activeRequests = [];
    this.deactiveRequests = [];
    this.acceptepRequests = [];

    this._pagerService.getAPage("request", 0, "pending").subscribe((reqs) => {
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
    this._pagerService.getAPage("request", 0, "deactive").subscribe((reqs) => {
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
    this._pagerService.getAPage("request", 0, "accepted").subscribe((reqs) => {
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

  paginate1(event: any) {

    this._pagerService.getAPage("request", event.first, "pending").subscribe((reqs) => {
      for (var i = 0; i < reqs.length; i++) {
        if (reqs[i].status === 'active' || reqs[i].status === 'pending') {
          reqs[i].status = "Đang chờ";
        }
      }
      this.activeRequests = reqs;
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
    });

  }

}

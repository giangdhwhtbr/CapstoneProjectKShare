import {
  Component,
  OnInit,
  Pipe,
  PipeTransform,
  Inject,
    AfterViewChecked
} from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control } from '@angular/common';


import { Request } from '../../../interface/request';
import { KnowledgeService } from '../../../services/knowledge';
import { RequestService} from '../../../services/requests';
import { Knowledge } from '../../../interface/knowledge';
import { AuthService} from '../../../services/auth';

import { OfferService } from '../../../services/request-offer';

import { CreateRequestComponent } from './request-create';
import { CreateOfferComponent  } from '../../front-end/offer/offer-create';
import { UpdateRequestComponent } from './request-update';
import { PaginationControlsCmp, PaginatePipe, PaginationService, IPaginationInstance } from 'ng2-pagination';
import {StringFilterPipe} from '../shared/filter';
@Component({
  selector: 'request-list',
  templateUrl: 'client/dev/app/components/back-end/request/templates/request-list.html',
  directives: [UpdateRequestComponent, ROUTER_DIRECTIVES, PaginationControlsCmp, FORM_DIRECTIVES],
  providers: [RequestService, PaginationService],
  pipes: [PaginatePipe, StringFilterPipe]
})

export class RequestListComponent implements AfterViewChecked{
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

  constructor( @Inject(FormBuilder) fb: FormBuilder, @Inject(RequestService) private _requestService: RequestService, private _knowledgeService: KnowledgeService,
    private _authService: AuthService) {
    this.user = localStorage.getItem('username');
    this.roleToken = localStorage.getItem('userrole');

    this.requestForm = fb.group({
      "knowledgeId": [""],
      "title": [""],
      "description": [""],
      "user": [""]
    });
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
      .updateRequest(request,request.tags, [])
      .subscribe((r) => {
        this.getAllRequest();
      })
  }

  getAllRequest() {
    this.activeRequests = [];
    this.deactiveRequests = [];
    this.acceptepRequests = [];
    this._requestService.getAllRequestAdmin().subscribe((requests) => {
      console.log(requests);
      for (var i = 0; i < requests.length; i++) {
        if(requests[i].status === 'active' || requests[i].status === 'pending'){
          this.activeRequests.push(requests[i]);
          requests[i].status = "Đang chờ";
        } else if (requests[i].status === 'deactive'){
          this.deactiveRequests.push(requests[i]);
          requests[i].status = "Kết thúc";
        } else if (requests[i].status === 'accepted') {
          this.acceptepRequests.push(requests[i]);
          requests[i].status = "Được chấp nhận";
        }
      }
    });
    console.log(this.activeRequests);
  }

}

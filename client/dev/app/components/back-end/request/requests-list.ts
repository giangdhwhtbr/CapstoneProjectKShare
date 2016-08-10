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
  requests: Request[];
  user: string;
  roleToken: string;
  requestForm: ControlGroup;
  public filter: string = '';
  knowledges: Knowledge[];

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

  addRequest(request) {
    this._requestService.addRequest(request).subscribe((request) => {
      this.requests.push(request);
      (<Control>this.requestForm.controls["title"]).updateValue("");
      (<Control>this.requestForm.controls["description"]).updateValue("");
      (<Control>this.requestForm.controls["knowledgeId"]).updateValue("");
    },
      (error) => {
        console.log(error.text());
      }
    );
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
    this._requestService.getAllRequestAdmin().subscribe((requests) => {

      for (var i = 0; i < requests.length; i++) {
        requests[i].createdAt = new Date(requests[i].createdAt);
        requests[i].modifiedDate = new Date(requests[i].modifiedDate);
        if(requests[i].status === 'active' || requests[i].status === 'pending'){
          requests[i].status = "Đang chờ";
        } else if (requests[i].status === 'deactive'){
          requests[i].status = "Kết thúc";
        } else if (requests[i].status === 'accepted') {
          requests[i].status = "Được chấp nhận";
        }
      }
      this.requests = requests;
    });
  }

}

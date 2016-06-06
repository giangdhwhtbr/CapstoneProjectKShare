import { Component, OnInit, Inject } from '@angular/core';
import { Request } from '../../../dashboard/interface/request';
import { Knowledge } from '../../../dashboard/interface/knowledge';

import { RequestService } from '../../../dashboard/services/requests-service';
import { KnowledgeService } from '../../../dashboard/services/knowledge-service';

import { Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes, RouteSegment} from'@angular/router';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl  } from '@angular/common';



@Component({
  selector: 'request-update-cli',
  templateUrl: 'client/dev/dashboard/templates/request/request-update.html',
  styleUrls: [],
  directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class UpdateRequestComponent {
  updateRequestFormCli: ControlGroup;

  knowledges: Knowledge[];

  id: string;

  request: Request;
  _id: string;
  title: string;
  description: string;
  knowledgeId: string;

  ngOnInit(): void {
    //get all knowledge
    this._knowledgeService.getAllKnowledges().subscribe((knowledges) => {
      this.knowledges = this._knowledgeService.getChildFromParent(knowledges);
    });

    this._requestService.getRequestById(this.id).subscribe(
      (request) => {
        this.request = request;
        this.title = request.title;
        this.description = request.description;
        this._id = request._id;
      },
      (error) => {
        console.log(error.text());
      }
    );
  }

  constructor( @Inject(FormBuilder) fb: FormBuilder, @Inject(RequestService) private _requestService: RequestService,
    public router: Router, rParam: RouteSegment,
    @Inject(KnowledgeService) private _knowledgeService: KnowledgeService) {
    this.id = rParam.getParam('id');

    this.updateRequestFormCli = fb.group({
      "_id": [""],
      "title": [""],
      "description": [""],
      "knowledgeId": [""]
    });
  }

  updateRequest(request) {
    console.log(request);
    this._requestService.updateRequest(request).subscribe((request) => {
      console.log('update successed');
    },
      (error) => {
        console.log(error.text());
      }
    );
    window.location.href = 'admin/requests';
  }

}

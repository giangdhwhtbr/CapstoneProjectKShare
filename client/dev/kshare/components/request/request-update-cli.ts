import { Component, OnInit, Inject } from '@angular/core';
import { Request } from '../../../dashboard/interface/request';

import { Knowledge } from '../../../dashboard/interface/knowledge';

import { RequestService } from '../../../dashboard/services/requests-service';
import { KnowledgeService } from '../../../dashboard/services/knowledge-service';

import { HeaderComponent } from '../shared/header';
import { FooterComponent } from '../shared/footer';
import { SideBarComponent } from '../shared/sidebar';
import { FriendListComponent} from '../shared/friend-list';

import { Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes, RouteSegment} from'@angular/router';
import { FORM_DIRECTIVES, FormBuilder, ControlGroup, Control, AbstractControl  } from '@angular/common';

@Component({
  selector: 'request-update-cli',
  templateUrl: 'client/dev/kshare/templates/request-cli/request-update-cli.html',
  styleUrls: [],
  directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, SideBarComponent, FooterComponent, HeaderComponent]
})

export class RequestUpdateClientComponent {
  updateRequestFormCli: ControlGroup;

  id: string;

  request: Request;
  _id: string;
  title: string;
  description: string;
  knowledges: Knowledge[];
  knowledgeId: string;

  ngOnInit():void {
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

  constructor(@Inject(FormBuilder) fb: FormBuilder, @Inject(RequestService) private _requestService: RequestService,
            public router: Router, rParam: RouteSegment,
            @Inject(KnowledgeService) private _knowledgeService: KnowledgeService ) {
    this.id = rParam.getParam('id');

    this.updateRequestFormCli = fb.group({
      "_id": [""],
      "title": [""],
      "description": [""],
       "knowledgeId": [""]
    });
  }

  updateRequest(request) {
    this._requestService.updateRequest(request).subscribe((request)=> {
      console.log('update successed');
    },
    (error) => {
      console.log(error.text());
    }
    );
    //window.location.href = '/kshare/requests/'+this.id;
  }

}

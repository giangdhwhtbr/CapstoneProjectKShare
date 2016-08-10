import {
  Component,
  OnInit,
  Pipe,
  PipeTransform,
  Inject
} from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute} from '@angular/router';
import { Request } from '../../../interface/request';
import { Knowledge } from '../../../interface/knowledge';

import { RequestService } from '../../../services/requests';

@Component({
  selector: 'request-search-cli',
  templateUrl: 'client/dev/app/components/front-end/request/templates/request-search.html',
  styleUrls: ['client/dev/app/components/front-end/request/styles/request.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class RequestCategoryComponent {
  pageTitle: string = 'Welcome to Knowledge Sharing Network';

  identify: string;
  isExistRecord: boolean;
  typee: string;
  constructor(private _requestService: RequestService, public router: Router,
    private route: ActivatedRoute) {
    this.route
      .params
      .subscribe(params => {
        let type = params['type'];
        this.typee = type;
        let id = params['id'];
        this.identify = id;
      });

    //get templates from children category
    if (this.typee === "subcategory") {
      this._requestService.getRequestByKnowledgeId(this.identify).subscribe(
        (requests) => {
          if (requests.length == 0) {
            this.isExistRecord = true;
          }
          else {
            this.isExistRecord = false;
          }
          for (var i = 0; i < requests.length; i++) {
            requests[i].createdAt = new Date(requests[i].createdAt);
            requests[i].modifiedDate = new Date(requests[i].modifiedDate);
          }
          this.requests = requests;
        });
    }

    //get templates from parent category
    if (this.typee === "category") {
      this._requestService.getKnowledgeByParent(this.identify).subscribe(
        (knowledges) => {

          var a = [];
          this.knowledges = knowledges;
          for (var i = 0; i < this.knowledges.length; i++) {
            this._requestService.getRequestByKnowledgeId(this.knowledges[i]._id).subscribe(
              (requests) => {
                //for each child knowledge get requests
                for (var j = 0; j < requests.length; j++) {
                  a.push(requests[j]);
                }

                for (var i = 0; i < a.length; i++) {
                  a[i].createdAt = new Date(requests[i].createdAt);
                  a[i].modifiedDate = new Date(requests[i].modifiedDate);
                  if (requests[i].status === 'pending') {
                    requests[i].status = 'Đang chờ';
                  }
                }
                if (a.length == 0) {
                  this.isExistRecord = true;
                }
                else {
                  this.isExistRecord = false;
                }
                this.requests = a;
              });
          }
        },
        (Error) => {
          console.log(Error);
        });
    }

  }
  requests: Request[];
  knowledges: Knowledge[];
}

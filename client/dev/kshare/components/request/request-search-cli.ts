import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, RouteSegment,Routes } from '@angular/router';
import { Request } from '../../../dashboard/interface/request';
import { Knowledge } from '../../../dashboard/interface/knowledge';

import { RequestService } from '../../../dashboard/services/requests-service';

@Component({
  selector: 'request-search-cli',
  templateUrl: 'client/dev/kshare/templates/request-cli/request-search-cli.html',
  styleUrls: ['client/dev/kshare/styles/request-list-cli.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class RequestSearchClientComponent {
  pageTitle: string = 'Welcome to Knowledge Sharing Network';

  id: string;
  type: string;

  constructor(private _requestService: RequestService, public router: Router, rParam: RouteSegment) {
    this.id = rParam.getParam('id');
    this.type = rParam.getParam('type');
  }
  requests: Request[];
  knowledges: Knowledge[];

  ngOnInit(): void {
    console.log(this.type);
    //get request from children category
    if (this.type === "subcategory") {
      this._requestService.getRequestByKnowledgeId(this.id).subscribe(
        (requests) => {
          //format date
          var formatDate = function (date) {
            if (date) {
              var newDate, day, month, year;
              year = date.substr(0, 4);
              month = date.substr(5, 2);
              day = date.substr(8, 2);
              return newDate = day + '/' + month + '/' + year;
            }
          }
          for (var i = 0; i < requests.length; i++) {
            requests[i].createdAt = formatDate(requests[i].createdAt);
            requests[i].modifiedDate = formatDate(requests[i].modifiedDate);
          }
          this.requests = requests;
        });
    }

    //get request from parent category
    if (this.type === "category") {
      this._requestService.getKnowledgeByParent(this.id).subscribe(
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
                
                this.requests = a;
              });
          }
        },
        (Error) => {
          console.log(Error);
        });
    }

  }
}

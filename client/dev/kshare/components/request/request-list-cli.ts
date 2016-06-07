import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Request } from '../../../dashboard/interface/request';
import { RequestService } from '../../../dashboard/services/requests-service';
import { FriendListComponent} from '../shared/friend-list';
import { CreateRequestComponent } from '../../../dashboard/components/request/request-create';
import { RequestSearchClientComponent} from '../../../kshare/components/request/request-search-cli';
import { AuthService } from '../../../dashboard/services/auth-services';
import { Router } from "@angular/router";
import {PaginationControlsCmp, PaginatePipe, PaginationService,IPaginationInstance} from 'ng2-pagination';


@Component ({
  selector: 'request-list-cli',
  templateUrl:'client/dev/kshare/templates/request-cli/request-list-cli.html',
  styleUrls: ['client/dev/kshare/styles/request-list-cli.css'],
  directives: [
     PaginationControlsCmp,
     ROUTER_DIRECTIVES,
     FriendListComponent,
     CreateRequestComponent,
     RequestSearchClientComponent
  ],
  providers: [PaginationService],
  pipes: [PaginatePipe]
})

export class RequestListClientComponent {
  pageTitle: string = 'Welcome to Knowledge Sharing Network';
  text: string;
  hide: boolean;
  roleToken:string;
  userToken:string;
  public configRq: IPaginationInstance = {
        id: 'rq',
        itemsPerPage: 10,
        currentPage: 1
    };
  public configRs: IPaginationInstance = {
        id: 'rs',
        itemsPerPage: 10,
        currentPage: 1
    };

  constructor(private _requestService: RequestService,  private _auth:AuthService, private router: Router){
    this.roleToken = localStorage.getItem('userrole');
    this.userToken = localStorage.getItem('username');
  }
  requests: Request[];
  searchs: Request[];

  ngOnInit(): void {
    console.log(this.roleToken);
    console.log(this.userToken);
    
    this.hide = false;
    this._requestService.getAllRequests().subscribe((requests) => {
      var formatDate = function (date){
        if(date) {
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
  
  search(search: string) {

    this._requestService.searchRequest(search).subscribe((requests) => {
      this.searchs = requests;
      this.hide = true;
    });
  }

}

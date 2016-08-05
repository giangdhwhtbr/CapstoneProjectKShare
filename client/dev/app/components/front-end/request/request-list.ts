import {
  Component,
  OnInit,
  Pipe,
  PipeTransform,
  Inject
} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Request } from '../../../interface/request';
import { RequestService } from '../../../services/requests';
import { FriendListComponent} from '../shared/friend-list';
import { CreateRequestComponent } from '../../back-end/request/request-create';
import { RequestCategoryComponent} from './request-search';
import { AuthService } from '../../../services/auth';
import { Router } from "@angular/router";
import { PaginationControlsCmp, PaginatePipe, PaginationService, IPaginationInstance } from 'ng2-pagination';


@Component({
  selector: 'request-list-cli',
  templateUrl: 'client/dev/app/components/front-end/request/templates/request-list.html',
  styleUrls: ['client/dev/app/components/front-end/request/styles/request.css'],
  directives: [
    PaginationControlsCmp,
    ROUTER_DIRECTIVES,
    FriendListComponent,
    CreateRequestComponent,
    RequestCategoryComponent
  ],
  providers: [PaginationService],
  pipes: [PaginatePipe]
})

export class RequestListClientComponent {
  pageTitle: string = 'Welcome to Knowledge Sharing Network';
  text: string;
  roleToken: string;
  userToken: string;
  link: string;
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

  constructor(private _requestService: RequestService, private _auth: AuthService, private router: Router) {
    this.roleToken = localStorage.getItem('role');
    this.userToken = localStorage.getItem('username');
  }
  requests: Request[];

  ngOnInit(): void {
    // this.hide = false;
    this.getAllRequests();
  }

  getAllRequests() {
    this._requestService.getAllRequests().subscribe((requests) => {

      for (var i = 0; i < requests.length; i++) {
        requests[i].createdAt = new Date(requests[i].createdAt);
        requests[i].modifiedDate = new Date(requests[i].modifiedDate);
        requests[i].link = requests[i]._id + '/info';
        if (requests[i].status === 'pending') {
          requests[i].status = 'Đang chờ';
        }
      }
      this.requests = requests;
    });
  }

  search(search: string) {
    console.log(search);
    if (search === '') {
      this.getAllRequests();
    } else {
      this._requestService.searchRequest(search).subscribe((requests) => {
        console.log(requests);
        for (var i = 0; i < requests.length; i++) {
          requests[i].createdAt = new Date(requests[i].createdAt);
          if (requests[i].status === 'pending') {
            requests[i].status = 'Đang chờ';
          }
        }
        this.requests = requests;
        console.log(this.requests);
      });
    }
  }

}

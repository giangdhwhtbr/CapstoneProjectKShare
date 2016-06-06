import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Request } from '../../../dashboard/interface/request';
import { RequestService } from '../../../dashboard/services/requests-service';
import { HeaderComponent } from '../shared/header';
import { FooterComponent } from '../shared/footer';
import { SideBarComponent } from '../shared/sidebar';
import { FriendListComponent} from '../shared/friend-list';
import  { CreateRequestComponent } from '../../../dashboard/components/request/request-create';

@Component ({
  selector: 'request-list-cli',
  templateUrl:'client/dev/kshare/templates/request-cli/request-list-cli.html',
  styleUrls: ['client/dev/kshare/styles/request-list-cli.css'],
  directives: [HeaderComponent, 
               FooterComponent,
               SideBarComponent,
               FriendListComponent,
               CreateRequestComponent]
})

export class RequestListClientComponent {
  pageTitle: string = 'Welcome to Knowledge Sharing Network';

  constructor(private _requestService: RequestService){

  }
  requests: Request[];

  ngOnInit(): void {
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

}

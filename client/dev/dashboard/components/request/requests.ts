import { Component,OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import  { NavbarComponent } from '../../components/shared/nav-bar';
import  { SidebarComponent }  from '../../components/shared/sidebar';
import  { RequestListComponent } from '../../components/request/requests-list';
import  { CreateRequestComponent } from '../../components/request/request-create';
import  { UpdateRequestComponent } from '../../components/request/request-update';
import  { Request } from '../../interface/request';
import  { RequestService } from '../../services/requests-service';
import  { OfferService } from '../../services/offers-service';
import  { CreateOfferComponent } from '../../components/offer/offer-create';

@Component({
  selector: 'request-mgn',
  templateUrl: 'client/dev/dashboard/templates/request/request.html',
  directives: [UpdateRequestComponent,
              RequestListComponent,
              CreateRequestComponent,
              NavbarComponent,
              SidebarComponent,
              CreateOfferComponent,
              ROUTER_DIRECTIVES]
})
export class RequestComponent {

}

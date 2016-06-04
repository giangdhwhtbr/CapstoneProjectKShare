import { Component,OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import  { AuthService} from '../../services/auth-services';
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
  styleUrls: [ 'client/dev/dashboard/styles/styles.css'],
  directives: [UpdateRequestComponent,
              RequestListComponent,
              CreateRequestComponent,
              NavbarComponent,
              SidebarComponent,
              CreateOfferComponent,
              ROUTER_DIRECTIVES
              ]
})
export class RequestComponent {

}

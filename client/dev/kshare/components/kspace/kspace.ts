import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Request } from '../../../dashboard/interface/request';
import { RequestService } from '../../../dashboard/services/requests-service';
import { AuthService } from '../../../dashboard/services/auth-services';
import { Router } from "@angular/router";

@Component ({
  selector: 'kspace',
  templateUrl:'client/dev/kshare/templates/kspace/kspace.html',
  styleUrls: ['client/dev/kshare/styles/kspace.css'],
  directives: [
     ROUTER_DIRECTIVES,
  ]
})

export class KSpaceComponent {
  

}

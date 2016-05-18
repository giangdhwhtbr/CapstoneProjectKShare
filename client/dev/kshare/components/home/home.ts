/**
 * Created by GiangDH on 5/18/16.
 */
import { Component,OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { HeaderComponent } from '../shared/header';
import { FooterComponent } from '../shared/footer';
@Component ({
  selector: 'home',
  templateUrl:'client/dev/kshare/templates/home/home.html',
  styleUrls: ['client/dev/kshare/styles/home.css'],
  directives: [
    HeaderComponent,
    FooterComponent,
    ROUTER_DIRECTIVES
  ]
})

export class HomeComponent {
  pageTitle: string = 'Welcome to Knowledge Sharing Network';
}

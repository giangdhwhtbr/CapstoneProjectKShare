/**
 * Created by GiangDH on 5/18/16.
 */
import { Component,OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { SideBarComponent} from '../shared/sidebar'
import { HeaderComponent } from '../shared/header';
import { FooterComponent } from '../shared/footer';
import { LoginComponent } from '../shared/login';
import { RegisterComponent } from '../shared/register';
@Component ({
  selector: 'home',
  templateUrl:'client/dev/kshare/templates/home/home.html',
  styleUrls: ['client/dev/kshare/styles/home.css'],
  directives: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    SideBarComponent,
    ROUTER_DIRECTIVES
  ]
})

export class HomeComponent {
  pageTitle: string = 'Welcome to Knowledge Sharing Network';
  ngOinit(): void{
    console.log("what the fuck");
  }
}

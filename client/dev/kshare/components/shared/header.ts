/**
 * Created by GiangDH on 5/18/16.
 */
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes} from '@angular/router';
import { RouteConfig, RouterLink} from '@angular/router-deprecated';

import { AuthService } from '../../../dashboard/services/auth-services';

@Component({
  selector: 'header',
  templateUrl: 'client/dev/kshare/templates/shared/header.html',
  styleUrls: ['client/dev/kshare/styles/header.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class HeaderComponent {
  loginToken:boolean;
  userToken:string;
  roleToken:string;

  constructor(private _auth: AuthService){
    this.userToken = localStorage.getItem('username');
    this.roleToken = localStorage.getItem('userrole');
  }

  ngOnInit(): void {
    this._auth.isLoggedIn().subscribe((status)=>{
      if(status.login == false){
        this.loginToken = false;
      }else {
        this.loginToken = true;
      }
    });
  }
  logout(): void {
    this._auth.logout().subscribe((status)=>{
      if(status.login == false){
        this._auth.logoutClient()
      }
    });
    window.location.reload();
  }
}

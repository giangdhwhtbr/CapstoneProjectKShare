/**
 * Created by GiangDH on 7/30/16.
 */
import { Component, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot}  from '@angular/router';

import { AuthService } from '../services/auth';
import {stat} from "fs";
import {Location} from '@angular/common';

@Injectable()
export  class AdminAuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(localStorage.getItem('redirectUrl')){
      localStorage.removeItem('redirectUrl');
    }
    if(localStorage.getItem('userrole')){
        if(state.url.includes('admin') && (localStorage.getItem('userrole') === 'admin' || localStorage.getItem('userrole') === 'mod' )){
          return true;
        }else {
          this.router.navigate(['/']);
        }
    } else {
      localStorage.setItem('redirectUrl',state.url);
      this.router.navigate(['/login']);
    }
    return false;
  }
}

@Injectable()
export class isLogin implements  CanActivate {
  constructor(private router: Router, private auth: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(localStorage.getItem('redirectUrl')){
      localStorage.removeItem('redirectUrl');
    }
    if(localStorage.getItem('username')){
      return true;
    }
    localStorage.setItem('redirectUrl',state.url);
    this.router.navigate(['/login']);
    return false;
  }
}

@Injectable()
export class Guest implements  CanActivate {
  constructor(private router: Router, private auth: AuthService, private _location: Location) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(!localStorage.getItem('username')){
      return true;
    }
    this._location.back();
    return false;
  }
}

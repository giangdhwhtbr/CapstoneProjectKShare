/**
 * Created by GiangDH on 7/30/16.
 */
import { Component, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot}  from '@angular/router';

import { AuthService } from '../services/auth';
import {stat} from "fs";

@Injectable()


export  class AdminAuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if(state.url.includes('admin')){
      if(localStorage.getItem('userrole') && localStorage.getItem('userrole') === 'admin'){
          return true;
      }
      // Navigate to the login page
      this.router.navigate(['/login']);
    }

    if(state.url.includes('login') || state.url.includes('reg')){
      if(!localStorage.getItem('username')){
        return true;
      }
      // Navigate to the login page
      this.router.navigate(['/']);
    }

    return false;
  }
}

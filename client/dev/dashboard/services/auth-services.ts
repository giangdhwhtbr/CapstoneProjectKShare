/**
 * Created by GiangDH on 5/19/16.
 */
import { Injectable } from 'angular2/core';
import { User } from '../interface/user';
import { Response, Http, Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { contentHeaders } from '../../app/headers';


@Injectable()
export class AuthService {
  private _loginUrl = '/api/login';
  private _logOutUrl = '/api/logout';
  private _checkLoginUrl = '/api/checkLogin/';
  constructor(private _http: Http) {

  }

  login(user: User):Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    let _user = JSON.stringify({
      username: user.username,
      password: user.password,
      role: 'admin'
    })
    var usertoken = user.username;
    return this._http.post(this._loginUrl,_user,options)
      .map(res => res.json())
      .map((res) => {
        if(res._id){
          localStorage.setItem('username', res.username);
          localStorage.setItem('userrole', res.role);
        }
        return res;
      });
  }
  logout():Observable<string[]> {
    return this._http.get(this._logOutUrl)
      .map((res) => res.json())
      .catch(this.handleError);
  }
  logoutClient() {
    localStorage.removeItem('username');
    localStorage.removeItem('userrole');
  }
  isLoggedIn(): Observable<string[]> {
   return this._http.get(this._checkLoginUrl).map((res)=>res.json()).catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json());
  }
}

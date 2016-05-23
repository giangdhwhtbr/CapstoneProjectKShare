/**
 * Created by GiangDH on 5/8/16.
 */

import { Injectable } from 'angular2/core';
import { User } from '../interface/user';
import { Response, Http, Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { contentHeaders } from '../../app/headers';
@Injectable()
export  class UserService {
  private _usersUrl = '/api/user/:id';

  constructor(private _http: Http) { }

  getAllUsers(): Observable<User[]> {
    return this._http.get(this._usersUrl.replace(':id',''))
      .map((r) => r.json())
      .catch(this.handleError);
  }

  addUser(user: User):Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' ,'Connection': 'keep-alive'});
    let options = new RequestOptions({ headers: headers });
    let _user = JSON.stringify({
      firstName : user.firstName,
      lastName : user.lastName,
      displayName : user.displayName,
      username : user.username,
      password   : user.password,
      email : user.email,
      role  : user.role
    });

    return this._http
              .post(this._usersUrl.replace(':id',''),_user, options)
              .map((r) => r.json());
  }
  private handleError(error: Response) {
    return Observable.throw(error);
  }
}

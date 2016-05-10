/**
 * Created by GiangDH on 5/8/16.
 */
import { Injectable } from 'angular2/core';
import { User } from '../interface/user';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export  class UserService {
  private _usersUrl = '/api/user/:id';
  constructor(private _http: Http) { }

  getAllUsers(): Observable<User[]> {
    return this._http.get(this._usersUrl.replace(':id',''))
      .map((r) => r.json())
      .do(data => console.log("All: " +  JSON.stringify(data)))
      .catch(this.handleError);
  }

  addUser(user: User):Observable<any>{
    let _user = JSON.stringify({
      fName : user.firstName,
      lName : user.lastName,
      dName : user.displayName,
      uName : user.username,
      pwd   : user.password,
      email : user.email,
      role  : user.role
    });

    return this._http
              .post(this._usersUrl.replace(':id',''),_user)
              .map((r) => r.json());
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}

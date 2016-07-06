/**
 * Created by GiangDH on 5/8/16.
 */

import { Injectable} from '@angular/core';
import { User } from '../interface/user';
import { Response, Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export  class UserService {
  private _usersUrl = '/api/user/:id';

  constructor(private _http: Http) { }

  getAllUsers(): Observable<User[]> {
    return this._http.get(this._usersUrl.replace(':id',''))
      .toPromise()
      .then((res) => res.json())
      .catch(this.handleError);
  }

  getUserById(id: string): Observable<User> {
    return this._http.get(this._usersUrl.replace(':id',id))
      .map((r) => r.json())
      .catch(this.handleError);
  }

  addUser(user: User):Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' ,'Connection': 'keep-alive'});
    let options = new RequestOptions({ headers: headers });
    var formatDate = function (date){
      if(date) {
        var newDate, day, month, year;
        year = date.substr(6, 4);
        day = date.substr(3, 2);
        month = date.substr(0, 2);
        return newDate = year + '-' + month + '-' + day;
      }
    }
    let _user = JSON.stringify({
      firstName :             user.firstName,
      lastName :              user.lastName,
      displayName :           user.displayName,
      birthday:               formatDate(user.birthday),
      username :              user.username,
      password   :            user.password,
      email :                 user.email,
      role  :                 user.role,
      ownKnowledgeId:         user.ownKnowledgeId.split(","),
      interestedKnowledgeId:  user.interestedKnowledgeId.split(","),
      onlineTime:             user.onlineTime.split(",")
    });

    return this._http
              .post(this._usersUrl.replace(':id',''),_user, options)
              .map((r) => r.json());
  }


  updateUser (user: User): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' ,'Connection': 'keep-alive'});
    let options = new RequestOptions({ headers: headers });
    console.log(user);
    let _user = JSON.stringify({
      _id :user._id,
      firstName : user.firstName,
      lastName : user.lastName,
      displayName : user.displayName,
      username : user.username,
      password   : user.password,
      email : user.email,
      role  : user.role
    });
    return this._http
      .put(this._usersUrl.replace(':id',user._id),_user, options)
      .map((r) => r.json());
  }

  private handleError(error: Response) {
    return Observable.throw(error);
  }
}

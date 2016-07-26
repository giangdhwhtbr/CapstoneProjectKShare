/**
 * Created by GiangDH on 5/8/16.
 */

import { Injectable} from '@angular/core';

//interface
import { User } from '../interface/user';
import { FriendShip } from '../interface/friendship';

import { Response, Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  private _usersUrl = '/api/user/:id';
  private _friendUrl = '/api/friendship/:id';
  private _getFriendUrl = '/api/getFriendship';
  private _getRequestByUserUrl = '/api/requests-user/:user';

  constructor(private _http: Http) { }

  getAllUsers(): Observable<User[]> {
    return this._http.get(this._usersUrl.replace(':id', ''))
      .toPromise()
      .then((res) => res.json())
      .catch(this.handleError);
  }

  getUserById(id: string): Observable<User> {
    return this._http.get(this._usersUrl.replace(':id', id))
      .map((r) => r.json())
      .catch(this.handleError);
  }

  //get user informations by username
  getUserByUserName(user: string): Observable<User> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let _search = JSON.stringify({
      username: user
    });

    return this._http.put(this._usersUrl.replace(':id', ''), _search, options)
      .map((r) => r.json())
      .catch(this.handleError);
  }

  addUser(user: User): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
    let options = new RequestOptions({ headers: headers });
    var formatDate = function (date) {
      if (date) {
        var newDate, day, month, year;
        year = date.substr(6, 4);
        day = date.substr(3, 2);
        month = date.substr(0, 2);
        return newDate = year + '-' + month + '-' + day;
      }
    }
    let _user = JSON.stringify({
      firstName: user.firstName,
      lastName: user.lastName,
      displayName: user.displayName,
      birthday: formatDate(user.birthday),
      username: user.username,
      password: user.password,
      email: user.email,
      role: user.role,
      ownKnowledgeId: user.ownKnowledgeId.split(","),
      interestedKnowledgeId: user.interestedKnowledgeId.split(","),
      onlineTime: user.onlineTime.split(",")
    });

    return this._http
      .post(this._usersUrl.replace(':id', ''), _user, options)
      .map((r) => r.json());
  }


  updateUser(user: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    var ownk,ink;


    if(user.ownKnowledgeId && user.ownKnowledgeId.length){
      ownk = user.ownKnowledgeId.split(",");
    }
    if(user.interestedKnowledgeId && user.interestedKnowledgeId.length){
      ink = user.ownKnowledgeId.split(",");
    }
    let _user = JSON.stringify({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      displayName: user.displayName,
      birthday: user.birthday,
      phone: user.phone,
      username: user.username,
      password: user.password,
      email: user.email,
      role: user.role,
      ownKnowledgeId: ownk,
      interestedKnowledgeId: ink,
    });
    return this._http
      .put(this._usersUrl.replace(':id', user._id), _user, options)
      .map((r) => r.json());
  }

  //add friend service
  addFriend(requestUser: string, acceptUser: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    let _friendship = JSON.stringify({
      user1: requestUser,
      user2: acceptUser
    });

    return this._http
      .post(this._friendUrl.replace(':id', ''),_friendship,options)
      .map((r) => r.json());
  }

  //select friend of logined user
  getFriendList(currentUser):Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    let _friendship = JSON.stringify({
      user: currentUser
    });

    return this._http
      .post(this._getFriendUrl,_friendship,options)
      .map((r) => r.json());
  }

  //get request of an user
  getRequestByUser(user):Observable<any>{

    return this._http
      .get(this._getRequestByUserUrl.replace(':user',user))
      .map((r) => r.json())
      .catch(this.handleError);
  }

  //delete friend request
  deleteFriendRequest(user1, user2):Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    let _friendship = JSON.stringify({
      requestUser: user1,
      acceptUser:user2
    });

    return this._http
      .put(this._friendUrl.replace(':id',''),_friendship,options)
      .map((r) => r.json());
  }

  private handleError(error: Response) {
    return Observable.throw(error);
  }
}

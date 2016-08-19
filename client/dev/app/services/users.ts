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
    private _profilePictureUrl = '/api/user-picture';
    private _friendUrl = '/api/friendship/:id';
    private _getFriendUrl = '/api/getFriendship';
    private _getRequestByUserUrl = '/api/requests-user/:user/:num';
    private _isUserExistUrl = '/api/is-user-exist/:username';
    private _friendshipStatusUrl = '/api/friendship-status/:user1/:user2';
    private _banUrl = '/api/ban/:id';
    private _emailResetPass = '/api/email-reset-pass/:email';
    private _changePass = '/api/new-pass/:token';
    private _chatRoomUrl = 'api/chat-rooms';

    constructor(private _http:Http) {
    }

    getUserByToken(token: string): Observable <any> {
      return this._http.get(this._changePass.replace(':token',token))
        .map((r) => r.json())
        .catch(this.handleError);
    }
    updateNewPassword(password: string, token: string): Observable <any> {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});

      var data = {
        password: password,
        token: token
      };

      return this._http.put(this._changePass.replace(':token',token),data,options)
        .map((r) => r.json())
        .catch(this.handleError);

    }

    sendEmailResetPassword(email: string): Observable <any> {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      return this._http.get(this._emailResetPass.replace(':email',email),options)
        .map((r) => r.json())
        .catch(this.handleError);
    }

    deactivateChatRoom(user1: string, user2: string): Observable <any> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        let data = JSON.stringify({
            user1: user1,
            user2: user2
        });

        return this._http.put(this._chatRoomUrl,data,options)
              .map((r) => r.json())
              .catch(this.handleError);
    }

    getAllUsers():Observable<User[]> {
        return this._http.get(this._usersUrl.replace(':id', ''))
            .map((res) => res.json())
            .catch(this.handleError);
    }

    getUserById(id:string):Observable<User> {
        return this._http.get(this._usersUrl.replace(':id', id))
            .map((r) => r.json())
            .catch(this.handleError);
    }

    //get user informations by username
    getUserByUserName(user:string):Observable<User> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        let _search = JSON.stringify({
            username: user
        });

        return this._http.put(this._usersUrl.replace(':id', ''), _search, options)
            .map((r) => r.json())
            .catch(this.handleError);
    }

    addUser(user:User):Observable<any> {
        let headers = new Headers({'Content-Type': 'application/json', 'Connection': 'keep-alive'});
        let options = new RequestOptions({headers: headers});
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
            username: user.username,
            password: user.password,
            email: user.email,
            role: user.role
        });

        return this._http
            .post(this._usersUrl.replace(':id', ''), _user, options)
            .map((r) => r.json());
    }


    updateUser(user:any, _newTag:any[]):Observable<any> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        var ownk, ink;


        let _data = JSON.stringify({
            user:{
                _id: user._id,
                fullName: user.fullName,
                displayName: user.displayName,
                birthday: user.birthday,
                phone: user.phone,
                username: user.username,
                password: user.password,
                email: user.email,
                role: user.role,
                linkImg: user.linkImg,
                ownKnowledgeIds: user.ownKnowledgeIds,
            },
            newTag:_newTag
        });

        return this._http
            .put(this._usersUrl.replace(':id', user._id), _data, options)
            .map((r) => r.json());
    }


    banUser(id:string):Observable<any> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        let data = JSON.stringify({
            admin: localStorage.getItem('username')
        });
        return this._http
            .put(this._banUrl.replace(':id', id), data, options);
    }

    //add friend service
    addFriend(requestUser:string, acceptUser:string):Observable<any> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        let _friendship = JSON.stringify({
            user1: requestUser,
            user2: acceptUser
        });

        return this._http
            .post(this._friendUrl.replace(':id', ''), _friendship, options)
            .map((r) => r.json());
    }

    //select friend of logined user
    getFriendList(currentUser:string):Observable<any> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        let _friendship = JSON.stringify({
            user: currentUser
        });

        return this._http
            .post(this._getFriendUrl, _friendship, options)
            .map((r) => r.json());
    }

    //get request of an user
    getRequestByUser(user:string, num:string):Observable<any> {

        return this._http
            .get(this._getRequestByUserUrl.replace(':user', user).replace(':num',num))
            .map((r) => r.json())
            .catch(this.handleError);
    }

    //delete friend request
    deleteFriendRequest(user1:string, user2:string):Observable<any> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        let _friendship = JSON.stringify({
            requestUser: user1,
            acceptUser: user2
        });

        return this._http
            .put(this._friendUrl.replace(':id', ''), _friendship, options);
    }

    //if user is exist, return 1, else return 0
    checkUserExist(username:string):Observable<any> {
        return this._http
            .get(this._isUserExistUrl.replace(':username', username));
    }

    acceptFriendRequest(user1:string, user2:string):Observable<any> {
        return this._http
            .get(this._friendshipStatusUrl.replace(':user1', user1).replace(':user2', user2));
    }

    makeFileRequest(url:string, params:Array<string>, files:Array<File>) {
        return new Promise((resolve, reject) => {
            var formData:any = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    }

    private handleError(error:Response) {
        return Observable.throw(error);
    }
}

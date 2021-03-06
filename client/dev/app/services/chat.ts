import { Injectable } from '@angular/core';
import { ChatRoom } from '../interface/chat-room';
import { Message } from '../interface/message';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChatService {

    constructor(private _http: Http) { }
    private _chatRoomUrl = '/api/chat-rooms/:user';

    getAllChatRoomOfUser(username: string): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http
            .get(this._chatRoomUrl.replace(':user', username), options)
            .map((r) => r.json());
    }

    createChatRoomAdmin(user1: string, user2: string): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let _data = JSON.stringify({
            user1: user1,
            user2: user2
        });

        return this._http
            .post(this._chatRoomUrl.replace(':user', ''),_data , options)
            .map((r) => r.json());
    }


    private handleError(error: Response) {
        return Observable.throw(error.json().error || 'Server error');
    }

}

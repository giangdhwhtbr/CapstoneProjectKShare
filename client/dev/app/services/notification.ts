import { Injectable } from '@angular/core';
import { Request } from '../interface/request';
import { Notification } from '../interface/notification';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
declare var io: any;

@Injectable()
export class NotificationService {
    private _getNotificationUrl = '/api/getNotification/:id';
    private _notificationUrl = '/api/notification';
    private _statusNotificationUrl = '/api/change-status-notification/:user';
    constructor(private _http: Http) { }

    getNotificationByUser(username: string): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let _info = JSON.stringify({
            user: username
        });

        return this._http.post(this._getNotificationUrl.replace(':id', ''), _info, options)
            .map((r) => r.json());
    }

    alertNotification(title: string, user: string, link: string) {
        var socket = io('https://localhost:80');
        socket.emit('send notification', {
            title: title,
            link: link,
            user: user
        });
    }

    createNotification(title: string, user: string, link: string): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let _info = JSON.stringify({
            title: title,
            user: user,
            link: link
        });

        return this._http.post(this._notificationUrl, _info, options)
            .map((r) => r.json());
    }

    changeStatusNotification(user: string): Observable<any> {
        return this._http.get(this._statusNotificationUrl.replace(':user', user))
            .map((r) => r.json());
    }

}

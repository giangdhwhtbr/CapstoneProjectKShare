/**
 * Created by GiangDH on 5/8/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this._usersUrl = '/api/user/:id';
        this._friendUrl = '/api/friendship/:id';
        this._getFriendUrl = '/api/getFriendship';
        this._getRequestByUserUrl = '/api/requests-user/:user';
    }
    UserService.prototype.getAllUsers = function () {
        return this._http.get(this._usersUrl.replace(':id', ''))
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getUserById = function (id) {
        return this._http.get(this._usersUrl.replace(':id', id))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    //get user informations by username
    UserService.prototype.getUserByUserName = function (user) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _search = JSON.stringify({
            username: user
        });
        return this._http.put(this._usersUrl.replace(':id', ''), _search, options)
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.addUser = function (user) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
        var options = new http_1.RequestOptions({ headers: headers });
        var formatDate = function (date) {
            if (date) {
                var newDate, day, month, year;
                year = date.substr(6, 4);
                day = date.substr(3, 2);
                month = date.substr(0, 2);
                return newDate = year + '-' + month + '-' + day;
            }
        };
        var _user = JSON.stringify({
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
            .map(function (r) { return r.json(); });
    };
    UserService.prototype.updateUser = function (user) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _user = JSON.stringify({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            displayName: user.displayName,
            username: user.username,
            password: user.password,
            email: user.email,
            role: user.role
        });
        return this._http
            .put(this._usersUrl.replace(':id', user._id), _user, options)
            .map(function (r) { return r.json(); });
    };
    //add friend service
    UserService.prototype.addFriend = function (requestUser, acceptUser) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _friendship = JSON.stringify({
            user1: requestUser,
            user2: acceptUser
        });
        return this._http
            .post(this._friendUrl.replace(':id', ''), _friendship, options)
            .map(function (r) { return r.json(); });
    };
    //select friend of logined user
    UserService.prototype.getFriendList = function (currentUser) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _friendship = JSON.stringify({
            user: currentUser
        });
        return this._http
            .post(this._getFriendUrl, _friendship, options)
            .map(function (r) { return r.json(); });
    };
    //get request of an user
    UserService.prototype.getRequestByUser = function (user) {
        return this._http
            .get(this._getRequestByUserUrl.replace(':user', user))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    //delete friend request
    UserService.prototype.deleteFriendRequest = function (user1, user2) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _friendship = JSON.stringify({
            requestUser: user1,
            acceptUser: user2
        });
        return this._http
            .put(this._friendUrl.replace(':id', ''), _friendship, options)
            .map(function (r) { return r.json(); });
    };
    UserService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=users.js.map